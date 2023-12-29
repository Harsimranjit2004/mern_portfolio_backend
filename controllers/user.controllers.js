const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const getAllUsers = asyncHandler(async (req, res) => {
   const users = await User.find().select("-password").lean();
   if (!users?.length) {
      return res.status(400).json({ message: "No User found" });
   }
   res.json(users);
});

const createNewUser = asyncHandler(async (req, res) => {
   const { username, password, roles } = req.body;
   // confirming data
   if (!username || !password || !Array.isArray(roles) || !roles.length) {
      return res.status(400).json({ message: "All fields are requierd" });
   }
   // check duplicates
   const duplicate = await User.findOne({ username }).lean().exec();
   if (duplicate) {
      return res.status(400).json({ message: "duplicate username" });
   }
   // hash passwordd

   const hashpwd = await bcrypt.hash(password, 10);

   const userObject = { username, password: hashpwd, roles };

   const user = await User.create(userObject);
   if (user) {
      res.status(201).json({ message: `new user created ${username}` });
   } else {
      res.status(400).json({ message: "Invalid user data recieved" });
   }
});

const updateUser = asyncHandler(async (req, res) => {
   const { id, username, password, roles } = req.body;

   if (!id || !username || !Array.isArray(roles) || !roles?.length) {
      res.status(400).json({ message: "All fields are required" });
   }
   const user = await User.findById(id).exec();
   if (!user) {
      return res.status(400).json({ message: "user not found" });
   }
   // check duplicates
   const duplicate = await User.findOne({ username }).lean().exec();

   if (duplicate && duplicate?._id.toString() != id) {
      return res.status(400).json({ message: "Duplicate username" });
   }
   user.username = username;
   user.roles = roles;
   const updatedUser = await user.save();
   res.json({ message: `updated ${updatedUser.username}` });
});

const deleteUser = asyncHandler(async (req, res) => {
   const { id } = req.body;
   if (!id) {
      res.status(400).json({ message: "userId required" });
   }
   const user = await User.findById(id).exec();
   if (!user) {
      res.status(400).json({ message: "user not found" });
   }
   const result = await user.deleteOne();
   const reply = `user name ${result.username} with id ${result._id} deleted`;
   res.json(reply);
});
const updatePassword = asyncHandler(async (req, res) => {
   const { id, username, password } = req.body;
   if (!id || !password) {
      res.status(400).json({ message: "All field are required" });
   }
   const user = await User.findById(id).exec();
   if (!user) {
      res.status(400).json({ message: "user not found" });
   }
   user.password = await bcrypt.hash(password, 10);
   const updatedUser = await user.save();
   res.json({ message: `update password of ${updatedUser.username}` });
});
module.exports = {
   getAllUsers,
   createNewUser,
   updateUser,
   deleteUser,
   updatePassword,
};
