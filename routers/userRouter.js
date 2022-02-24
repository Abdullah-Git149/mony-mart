const express = require("express")
const router  = express.Router()
const {upload} = require("../config/utils")
const {
  signUp,
  registerValidator,
  signIn,
  loginValidator,
} = require("../controller/userController");

router.post("/signUp", upload.single("user_image"),registerValidator, signUp);
router.post("/signIn", loginValidator, signIn);


module.exports = router