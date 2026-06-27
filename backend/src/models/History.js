const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
    question: String,
    options: [String],
    answer: String
});

const FlashcardSchema = new mongoose.Schema({
    front: String,
    back: String
});

const HistorySchema = new mongoose.Schema({

    youtubeUrl: {
        type: String,
        required: true
    },

    videoId: {
        type: String,
        required: true
    },

    title: String,

    transcript: String,

    summary: String,

    notes: [String],

    quiz: [QuizSchema],

    flashcards: [FlashcardSchema]

}, {
    timestamps: true
});

module.exports = mongoose.model("History", HistorySchema);