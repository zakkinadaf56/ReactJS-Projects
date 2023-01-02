const express=require('express');
const User = require('../models/User');
const router=express.Router();
const { body, validationResult } = require('express-validator');

//Create a user using:POST "/api/auth/"

router.post('/',[
    body('name','Enter a valid name').isLength({ min: 4 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 5 character').isLength({ min: 5 }),
],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Checkweher the email exist
    let user= await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      })
      
    //   .then(user => res.json(user)).catch(err=>{console.log(err)
    //     res.json({error:'Please enter a unique value for email',message:err.message})})

})
module.exports=router