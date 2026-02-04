const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    maxlength: 40
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Message", messageSchema);
