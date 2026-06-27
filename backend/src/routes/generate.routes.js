const express = require("express");

const router = express.Router();

const validateYoutube = require("../middleware/validateYoutubeUrl");

const {
    generateContent
} = require("../controllers/generate.controller");

router.post("/", validateYoutube, generateContent);

module.exports = router;