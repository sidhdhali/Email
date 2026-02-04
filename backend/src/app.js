const express = require("express");
const cors = require("cors");
require("dotenv").config();

const messageRoutes = require("./routes/message.routes");

const app = express();

app.use(cors({
  origin: "http://localhost:3000", // React app
}));
app.use(express.json());

app.use("/api/messages", messageRoutes);

module.exports = app;
