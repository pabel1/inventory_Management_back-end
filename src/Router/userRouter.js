const express = require("express");
const router = express.Router();
const {
  regiController, loginController,loggedUserController,updateProfileController
//   loginController,
//   updateProfile,
} = require("../Controller/userController/userController");
const authVerification = require("../Middleware/authVerification");

router.post("/signup", regiController);

// login router
router.post("/login",loginController);

// logged user details
router.get("/loggeduser",authVerification,loggedUserController)

// profile update
router.put("/updateprofile",authVerification,updateProfileController)

// router.post("/profileupdate", authVerification, updateProfile);

module.exports = router;