const express = require("express");
const {
   getAllSkills,
   createSkill,
   updateSkill,
   deleteSkill,
} = require("../controllers/skills.controllers");
const router = express.Router();

router
   .route("/")
   .get(getAllSkills)
   .post(createSkill)
   .patch(updateSkill)
   .delete(deleteSkill);

module.exports = router;
