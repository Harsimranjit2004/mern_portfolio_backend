const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
   title: {
      type: String,
      // required: true,
   },
   description: {
      type: String,
   },
   projectLink: {
      type: String,
   },
   codeLink: {
      type: String,
   },
   imageUrl: {
      type: String,
   },
   tags: [
      {
         type: String,
         default: "All",
      },
   ],
});
module.exports = mongoose.model("Projects", projectsSchema);
