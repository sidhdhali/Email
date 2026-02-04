const Message = require("../models/message.model");


// GET ALL MESSAGES
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ date: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// GET SINGLE MESSAGE
exports.getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message)
      return res.status(404).json({ message: "Message not found" });

    res.json(message);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// CREATE MESSAGE
exports.createMessage = async (req, res) => {
  try {
    const { subject, text } = req.body;

    if (!subject || !text)
      return res.status(400).json({ message: "Subject and text are required" });

    if (subject.length > 40)
      return res.status(400).json({ message: "Subject max length is 40 characters" });

    const newMessage = await Message.create({ subject, text });

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// DELETE MESSAGE
exports.deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);

    if (!message)
      return res.status(404).json({ message: "Message not found" });

    res.json({ message: "Message deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
