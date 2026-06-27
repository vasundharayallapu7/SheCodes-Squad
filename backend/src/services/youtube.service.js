const { YoutubeTranscript } = require("youtube-transcript");
const ytdl = require("ytdl-core");

const getTranscript = async (videoId) => {
    try {
        const transcript = await YoutubeTranscript.fetchTranscript(videoId);

        return transcript
            .map(item => item.text)
            .join(" ")
            .replace(/\[.*?\]/g, "")
            .replace(/♪/g, "")
            .replace(/\s+/g, " ")
            .trim();

    } catch (error) {
        throw new Error("Transcript not available.");
    }
};

const getVideoTitle = async (videoId) => {
    try {
        const info = await ytdl.getInfo(`https://www.youtube.com/watch?v=${videoId}`);
        return info.videoDetails.title;
    } catch (error) {
        return "Unknown Title";
    }
};

module.exports = {
    getTranscript,
    getVideoTitle
};