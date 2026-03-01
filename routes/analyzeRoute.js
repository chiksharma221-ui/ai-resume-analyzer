const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const fs = require("fs");
const analyzeResume = require("../services/openaiService");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/analyze", upload.single("resume"), async function (req, res) {

    try {

        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const filePath = req.file.path;

        const dataBuffer = fs.readFileSync(filePath);

        const pdfData = await pdfParse(dataBuffer);

        const resumeText = pdfData.text;

        if (!resumeText || resumeText.length < 50) {
            fs.unlinkSync(filePath);
            return res.status(400).json({ error: "Invalid resume content" });
        }

        const aiResponse = await analyzeResume(resumeText);

        fs.unlinkSync(filePath);

        res.json(aiResponse);

    } catch (error) {

        console.error("Analyze error:", error);

        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        res.status(500).json({ error: "Internal server error" });
    }

});

module.exports = router;