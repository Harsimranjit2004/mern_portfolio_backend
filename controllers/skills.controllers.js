const Skills = require("../models/Skills");
const asyncHandler = require("express-async-handler");

const getAllSkills = asyncHandler(async (req, res) => {
   const skills = await Skills.find().lean();

   if (!skills.length) {
      return res.status(400).json({ message: "no interest found" });
   }
   res.json(skills);
});
const createSkill = asyncHandler(async (req, res) => {
   const { text, value } = req.body;
   const skill = await Skills.create({ text, value });
   if (skill) {
      res.status(201).json({ message: "new skill added" });
   } else {
      res.status(400).json({ message: "invalid fields " });
   }
});
const updateSkill = asyncHandler(async (req, res) => {
   const { id, text, value } = req.body;
   const skill = await Skills.findById(id);
   if (!skill) {
      return res.status(400).json({ message: "skill not exist" });
   }
   skill.text = text;
   skill.value = value;
   const updatedInfo = await skill.save();
   res.json("updated");
});
const deleteSkill = asyncHandler(async (req, res) => {
   const { id } = req.body;
   if (!id) {
      return res.status(400).json({ message: "id not found" });
   }
   const skill = await Skills.findById(id).exec();
   if (!skill) {
      res.status(400).json({ message: "skill not found" });
   }
   const result = await skill.deleteOne();
   res.json({ message: "skill deleted" });
});

module.exports = { getAllSkills, createSkill, updateSkill, deleteSkill };
