const asyncHandler = require("express-async-handler");
const UserInfo = require("../models/UserInfo");
const User = require("../models/user");

const getAllInfo = asyncHandler(async (req, res) => {
   const info = await UserInfo.find().lean();
   if (!info?.length) {
      return res.status(400).json({ message: "No Information  found" });
   }
   //    const infoWithUser = await Promise.all(
   //       info.map(async (item) => {
   //          const user = await User.findById(info.user).lean().exec();
   //          return { ...info, username: user.username };
   //       })
   //    );
   res.status(200).json(info);
});
const createUserInfo = asyncHandler(async (req, res) => {
   const userInfo = await UserInfo.create({
      ...req.body,
   });
   if (userInfo) {
      res.status(201).json({ message: "user info update" });
   } else {
      res.status(400).json({ message: "invalid note data recieved" });
   }
});

const updateUserInfo = asyncHandler(async (req, res) => {
   const {
      id,
      user,
      name,
      email,
      phone,
      place,
      instagram,
      github,
      linkedin,
      age,
      freelance,
      projects,
      experience,
      awards,
      roles,
      aboutheading,
      homeabout,
      about,
   } = req.body;
   // confirm user exist
   const userInfo = await UserInfo.findById(id);
   if (!userInfo) {
      res.status(400).json({ message: "user not exist" });
   }
   userInfo.name = name;
   userInfo.email = email;
   userInfo.phone = phone;
   userInfo.place = place;
   userInfo.instagram = instagram;
   userInfo.github = github;
   userInfo.linkedin = linkedin;
   userInfo.age = age;
   userInfo.freelance = freelance;
   userInfo.projects = projects;
   userInfo.experience = experience;
   userInfo.awards = awards;
   userInfo.roles = roles;
   userInfo.aboutheading = aboutheading;
   userInfo.homeabout = homeabout;
   userInfo.about = about;
   const updatedInfo = await userInfo.save();

   res.json(`${updatedInfo.name} updated`);
});

const deleteUserInfo = asyncHandler(async (req, res) => {
   const { id } = req.body;
   if (!id) {
      return res.status(400).json({ message: "id is missing" });
   }
   const userInfo = await UserInfo.findById(id).exec();
   if (!userInfo) {
      res.status(400).json({ message: "id not found" });
   }
   const result = await userInfo.deleteOne();
   res.json({ message: "userInfo deleted" });
});
module.exports = { getAllInfo, createUserInfo, updateUserInfo, deleteUserInfo };
