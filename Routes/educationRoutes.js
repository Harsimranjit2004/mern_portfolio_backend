const express = require("express");
const router = express.Router();
const {
   getAllEducation,
   createEducation,
   updateEducation,
   deleteEducation,
} = require("../controllers/education.controller");

router
   .route("/")
   .get(getAllEducation)
   .post(createEducation)
   .patch(updateEducation)
   .delete(deleteEducation);
module.exports = router;
