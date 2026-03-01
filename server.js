const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const analyzeRoute = require("./routes/analyzeRoute");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api", analyzeRoute);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log("Server running on port " + PORT);
});