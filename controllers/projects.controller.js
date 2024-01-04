const Projects = require("../models/Projects");
const asyncHandler = require("express-async-handler");

const getAllProjects = asyncHandler(async (req, res) => {
   const projects = await Projects.find().lean();
   if (!projects?.length) {
      return res.status(400).json({ message: "No projects found" });
   }
   res.json(projects);
});

const createProject = asyncHandler(async (req, res) => {
   const { title, description, imageUrl, tags, codeLink, projectLink } =
      req.body;
   console.log(req.body);
   const project = await Projects.create({
      title,
      description,
      imageUrl,
      tags,
      codeLink,
      projectLink,
   });
   if (project) {
      res.status(201).json({ message: `new project added` });
   } else [res.status(400).json({ message: "invalid data" })];
});
const updateProject = asyncHandler(async (req, res) => {
   const { id, title, description, projectLink, codeLink, imageUrl, tags } =
      req.body;
   const project = await Projects.findById(id);
   if (!project) {
      return res.status(400).json({ message: "project not exist" });
   }

   project.title = title;
   project.description = description;
   project.projectLink = projectLink;
   project.codeLink = codeLink;
   project.imageUrl = imageUrl;
   project.tags = tags;
   const updatedInfo = await project.save();
   res.json(`${updatedInfo.title} updated`);
});
const deleteProject = asyncHandler(async (req, res) => {
   const { id } = req.body;
   if (!id) {
      return res.status(400).json({ message: "id is missing" });
   }
   const project = await Projects.findById(id).exec();
   if (!project) {
      res.status(400).json({ message: "project not found" });
   }
   const result = await project.deleteOne();
   res.json({ message: "project deleted" });
});
module.exports = {
   getAllProjects,
   createProject,
   updateProject,
   deleteProject,
};
