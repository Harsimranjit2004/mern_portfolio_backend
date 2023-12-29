const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controllers");
router
   .route("/")
   .get(userController.getAllUsers)
   .post(userController.createNewUser)
   .patch(userController.updateUser)
   .delete(userController.deleteUser);

router.route("/password").patch(userController.updatePassword);
module.exports = router;
