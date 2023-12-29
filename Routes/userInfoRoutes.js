const express = require("express");
const router = express.Router();
const validateUserFields = require("../middleware/validateUserFields");
const requiredFields = require("../const/userInfoFields");
const userInfoController = require("../controllers/userInfo.controllers");
router
   .route("/")
   .get(userInfoController.getAllInfo)
   .post(validateUserFields(requiredFields), userInfoController.createUserInfo)
   .patch(validateUserFields(requiredFields), userInfoController.updateUserInfo)
   .delete(userInfoController.deleteUserInfo);

module.exports = router;
// {

//    "name":"Harsimarnjit singh",
//    "email":"hsdosanjh1234@gmail.com",
//    "phone":"123345234",
//    "place":"ontarion, cnada",
//    "instagram":"lakjsdflajdf",
//    "github":"alskdfj",
//    "linkedin":"lkajsdf",
//    "age":"alkdsjf",
//    "freelance":"a;lsdkjf",
//    "projects":"alksdjflj",
//    "experience":"alkdjfkla",
//    "awards":"lkajfd",
//    "roles":["Admin"]
// }
