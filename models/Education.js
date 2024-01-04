const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
   date: {
      type: String,
   },
   title: {
      type: String,
   },
   subtitle: {
      type: String,
   },
   description: {
      type: String,
   },
   heading: {
      type: String,
   },
   paragraph: {
      type: String,
   },
});

module.exports = mongoose.model("Education", educationSchema);
