const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//Create a user using:POST "/api/auth/createuser"

router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 4 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check wether the email exist
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sry user with this email already exist" });
      }
      user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);
module.exports = router;
