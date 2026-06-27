const History = require("../models/History");

// Get all history
const getAllHistory = async (req, res) => {

    try {

        const history = await History.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: history.length,
            data: history
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get one history
const getHistoryById = async (req, res) => {

    try {

        const history = await History.findById(req.params.id);

        if (!history) {
            return res.status(404).json({
                success: false,
                message: "History not found"
            });
        }

        res.status(200).json({
            success: true,
            data: history
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete history
const deleteHistory = async (req, res) => {

    try {

        const history = await History.findById(req.params.id);

        if (!history) {
            return res.status(404).json({
                success: false,
                message: "History not found"
            });
        }

        await History.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "History deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    getAllHistory,
    getHistoryById,
    deleteHistory
};