const mongoose = require("mongoose");

const interestSchema = new mongoose.Schema({
   icon: {
      type: String,
   },
   title: {
      type: String,
   },
   description: {
      type: String,
   },
});

module.exports = mongoose.model("Interest", interestSchema);
