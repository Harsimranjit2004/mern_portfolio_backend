const express = require("express");
const router = express.Router();
const validateUserFields = require("../middleware/validateUserFields");
const requiredFields = require("../const/userInfoFields");
const userInfoController = require("../controllers/userInfo.controllers");
const verifyJWT = require("../middleware/verifyJWT");

router
   .route("/")
   .get(userInfoController.getAllInfo)
   .post(validateUserFields(requiredFields), userInfoController.createUserInfo)
   .patch(validateUserFields(requiredFields), userInfoController.updateUserInfo)
   .delete(userInfoController.deleteUserInfo);

module.exports = router;
