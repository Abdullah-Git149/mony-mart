const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const registerValidator = [
  body("user_fullname")
    .not()
    .isEmpty()
    .withMessage("User full name is required"),
  //   body("user_country").not().isEmpty().withMessage("Country is required"),
  //   body("user_currency").not().isEmpty().withMessage("Currency is required"),
  body("user_email").not().isEmpty().withMessage("Email is required"),
  body("user_contact").not().isEmpty().withMessage("Contact is required"),
  body("user_email").not().isEmpty().withMessage("Email is required"),
  body("user_type").not().isEmpty().withMessage("User type is required"),
  body("username").not().isEmpty().withMessage("User name is required"),
  body("user_password")
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage("Password must be 6 charcters long"),
];

// USER SIGN UP API
const signUp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  try {
    const check = await User.findOne({
      username: req.body.username,
      email: req.body.email,
    });
    if (check) {
      return res
        .status(400)
        .send({ status: 0, message: "Use another username or email" });
    } else {
      const user = await User.create(req.body);
      const token = await user.genarateAuthToken();
      const newUser = await user.save();
      if (newUser) {
        return res.status(201).send({
          status: 1,
          message: "account has be created",
          data: newUser,
          token,
        });
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

const loginValidator = [
  body("username").not().isEmpty().withMessage("User name is required"),
  body("user_password").not().isEmpty().withMessage("Password is required"),
];

// USER SIGN IN API
const signIn = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send({ status: 0, message: "User not found" });
    } else {
      const isMatch = await bcrypt.compare(
        req.body.user_password,
        user.user_password
      );
      if (!isMatch) {
        return res
          .status(400)
          .send({ status: 0, message: "Password in Incorrect" });
      } else {
        await user.genarateAuthToken();
        return res
          .status(200)
          .send({
            status: 1,
            message: `${user.user_fullname} is logged in !`,
            data: user,
          });
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { signUp, registerValidator, signIn, loginValidator };
