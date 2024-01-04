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
   aboutheading: {
      type: String,
   },
   homeabout: {
      type: String,
   },
   about: {
      type: String,
   },
   image1: {
      type: String,
   },
   image2: {
      type: String,
   },
   image3: {
      type: String,
   },
});

module.exports = mongoose.model("UserInfo", userInfoSchema);
