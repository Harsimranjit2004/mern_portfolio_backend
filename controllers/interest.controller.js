const asyncHandler = require("express-async-handler");
const Interest = require("../models/Interest");
const Projects = require("../models/Projects");

const getAllInterest = asyncHandler(async (req, res) => {
   const interest = await Interest.find().lean();

   if (!interest?.length) {
      return res.status(400).json({ message: "No interest found" });
   }
   res.json(interest);
});
const createInterest = asyncHandler(async (req, res) => {
   const { icon, title, description } = req.body;
   const interest = await Interest.create({
      icon,
      title,
      description,
   });
   if (interest) {
      res.status(201).json({ message: `new interest added` });
   } else res.status(400).json({ message: "invalid fields" });
});
const updateInterest = asyncHandler(async (req, res) => {
   const { id, icon, title, description } = req.body;
   const interest = await Interest.findById(id);
   if (!interest) {
      return res.status(400).json({ message: "project not exist" });
   }
   interest.icon = icon;
   interest.title = title;
   interest.description = description;
   const updatedInfo = await interest.save();
   res.json("updated");
});
const deleteInterest = asyncHandler(async (req, res) => {
   const { id } = req.body;
   if (!id) {
      return res.status(400).json({ message: "id not found" });
   }
   const interest = await Interest.findById(id).exec();
   if (!interest) {
      res.status(400).json({ message: "interest not foudn" });
   }
   const result = await interest.deleteOne();
   res.json({ message: "project deleted" });
});

module.exports = {
   createInterest,
   updateInterest,
   getAllInterest,
   deleteInterest,
};
