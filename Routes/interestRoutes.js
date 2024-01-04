const express = require("express");
const {
   getAllInterest,
   createInterest,
   updateInterest,
   deleteInterest,
} = require("../controllers/interest.controller");
const router = express.Router();

router
   .route("/")
   .get(getAllInterest)
   .post(createInterest)
   .patch(updateInterest)
   .delete(deleteInterest);

module.exports = router;
