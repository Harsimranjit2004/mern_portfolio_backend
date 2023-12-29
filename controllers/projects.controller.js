const Projects = require("../models/Projects");
const asyncHandler = require("express-async-handler");

const getAllProjects = asyncHandler(async (req, res) => {
   const projects = await Projects.find().lean();
   if (!projects?.length) {
      return res.status(400).json({ message: "No projects found" });
   }
   res.json({ projects });
});

const createProject = asyncHandler(async (req, res) => {
   // const {title,description,imageUrl,tags,codeLink,projectLink} = req.body
   const project = await Projects.create({ ...req.body });
   if (project) {
      res.status(201).json({ message: `new project added` });
   } else [res.status(400).json({ message: "invalid data" })];
});
const updateProject = asyncHandler(async (req, res) => {});
const deleteProject = asyncHandler(async (req, res) => {});
module.exports = {
   getAllProjects,
   createProject,
   updateProject,
   deleteProject,
};
