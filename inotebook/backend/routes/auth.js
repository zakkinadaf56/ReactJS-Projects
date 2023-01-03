const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET="ZakkiNadafBro"

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
    //If there are errors then return bad request and the error
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
      const salt=await bcrypt.genSalt(10);
      const secPass=await bcrypt.hash(req.body.password,salt) 
      //Create a User
      user = await User.create({
        name: req.body.name,
        password:secPass ,
        email: req.body.email,
      });
     const data={
      user:{
        id:user.id
      }
     }
     const authToken= jwt.sign(data,JWT_SECRET);
      // res.json(user);
      res.json({authToken})

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

//Authenticate a User using:POST '/api/auth/login
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password canno be blank").exists(),
  ],
  async (req, res) => {
    //If there are errors then return bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email,password}=req.body;
    try {
      let user=await User.findOne({email});
      if(!user){
        return res.status(400).json({error:"Please try to login with corrwect credentials"})
      }
      const passwordCompare=await bcrypt.compare(password,user.password);
      if(!passwordCompare){
        return res.status(400).json({error:"Please try to login with corrwect credentials"})  
      }

      const data={
        user:{
          id:user.id
        }
       }
       const authToken= jwt.sign(data,JWT_SECRET);
       res.json({authToken})

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  
  })


module.exports = router;
