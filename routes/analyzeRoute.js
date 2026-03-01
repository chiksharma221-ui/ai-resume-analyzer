const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse").default || require("pdf-parse");
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

        const aiResponse = await analyzeResume(resumeText);

        fs.unlinkSync(filePath);

        res.json(aiResponse);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }

});

module.exports = router;