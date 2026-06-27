const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/health.routes");
const generateRoutes = require("./routes/generate.routes");
const historyRoutes = require("./routes/history.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/generate", generateRoutes);
app.use("/api/history", historyRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "AI Learning Platform Backend Running 🚀"
    });
});

module.exports = app;