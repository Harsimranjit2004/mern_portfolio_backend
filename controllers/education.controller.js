const Education = require("../models/Education");
const asyncHandler = require("express-async-handler");

const getAllEducation = asyncHandler(async (req, res) => {
   const education = await Education.find().lean();

   if (!education?.length) {
      return res.status(400).json({ message: "no education found" });
   }
   res.json(education);
});
const createEducation = asyncHandler(async (req, res) => {
   const education = await Education.create({ ...req.body });
   if (education) {
      res.status(201).json({ message: "new interest added" });
   } else {
      res.status(400).json({ message: "invalid fields" });
   }
});
const updateEducation = asyncHandler(async (req, res) => {
   const { id, date, title, subtitle, description, heading, paragraph } =
      req.body;
   const education = await Education.findById(id);
   if (!education) {
      return res.status(400).json({ message: "project not exits" });
   }
   education.date = date;
   education.title = title;
   education.subtitle = subtitle;
   education.description = description;
   education.heading = heading;
   education.paragraph = paragraph;
   const updateInfo = await education.save();
   res.json("updated");
});
const deleteEducation = asyncHandler(async (req, res) => {
   const { id } = req.body;
   if (!id) {
      return res.status(400).json({ message: "id not found" });
   }
   const education = await Education.findById(id).exec();
   if (!education) {
      res.status(400).json({ message: "id not found" });
   }
   const result = await education.deleteOne();
   res.json({ message: "education deleted" });
});

module.exports = {
   getAllEducation,
   createEducation,
   updateEducation,
   deleteEducation,
};
