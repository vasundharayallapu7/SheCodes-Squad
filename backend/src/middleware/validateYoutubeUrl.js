module.exports = (req, res, next) => {

    const { youtubeUrl } = req.body;

    if (!youtubeUrl) {
        return res.status(400).json({
            success: false,
            message: "YouTube URL is required."
        });
    }

    if (
        !youtubeUrl.includes("youtube.com") &&
        !youtubeUrl.includes("youtu.be")
    ) {
        return res.status(400).json({
            success: false,
            message: "Please enter a valid YouTube URL."
        });
    }

    next();
};