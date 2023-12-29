const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      unique: true,
      index: true, // searchable
   },
   password: {
      type: String,
      required: true,
   },
   roles: [
      {
         type: String,
         default: "Admin",
      },
   ],
});
module.exports = mongoose.model("User", userSchema);
