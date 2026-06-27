const { extractVideoId } = require("../utils/helpers");
const {
    getTranscript,
    getVideoTitle
} = require("../services/youtube.service");
const { generateAIContent } = require("../services/ai.service");
const History = require("../models/History");

const generateContent = async (req, res) => {
    try {

        const { youtubeUrl } = req.body;

        if (!youtubeUrl) {
            return res.status(400).json({
                success: false,
                message: "YouTube URL is required"
            });
        }

        const videoId = extractVideoId(youtubeUrl);

        if (!videoId) {
            return res.status(400).json({
                success: false,
                message: "Invalid YouTube URL"
            });
        }

        // Fetch transcript
        const transcript = await getTranscript(videoId);

        // Fetch video title
        const title = await getVideoTitle(videoId);

        // Fallback title
        const finalTitle =
            title === "Unknown Title"
                ? "YouTube Lecture"
                : title;

        // Generate AI content
        const aiResult = await generateAIContent(transcript);

        // Save to MongoDB
        const history = await History.create({
            youtubeUrl,
            videoId,
            title: finalTitle,
            transcript,
            summary: aiResult.summary,
            notes: aiResult.notes,
            quiz: aiResult.quiz,
            flashcards: aiResult.flashcards
        });

        return res.status(200).json({
            success: true,
            message: "Content generated successfully",
            data: {
                id: history._id,
                youtubeUrl,
                videoId,
                title: finalTitle,
                transcript,
                summary: aiResult.summary,
                notes: aiResult.notes,
                quiz: aiResult.quiz,
                flashcards: aiResult.flashcards,
                createdAt: history.createdAt
            }
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error"
        });

    }
};

module.exports = {
    generateContent
};