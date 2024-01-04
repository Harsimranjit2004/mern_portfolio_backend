const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema({
   value: {
      type: String,
   },
   text: {
      type: String,
   },
});
module.exports = mongoose.model("Skills", skillsSchema);
