const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
   },
   name: {
      type: String,
   },
   email: {
      type: String,
      required: true,
   },
   phone: {
      type: String,
      required: true,
   },
   place: {
      type: String,
      required: true,
   },
   instagram: {
      type: String,
   },
   github: {
      type: String,
   },
   linkedin: {
      type: String,
   },
   age: {
      type: String,
   },
   freelance: {
      type: String,
   },
   projects: {
      type: String,
   },
   experience: {
      type: String,
   },
   awards: {
      type: String,
   },
   roles: [
      {
         type: String,
         default: "Web Development",
      },
   ],
});

module.exports = mongoose.model("UserInfo", userInfoSchema);
