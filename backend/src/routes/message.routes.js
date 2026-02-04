const express = require("express");
const router = express.Router();
const messageController = require("../controllers/message.controller");

router.get("/", messageController.getAllMessages);
router.get("/:id", messageController.getMessageById);
router.post("/", messageController.createMessage);
router.delete("/:id", messageController.deleteMessage);

module.exports = router;
