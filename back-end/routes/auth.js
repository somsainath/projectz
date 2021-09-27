var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();
var axios = require("axios");
var User = require('../models/User');
const { response } = require("express");

var app = express();
const jwt = require('jsonwebtoken');

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}



//verifying Json web token
function verifyToken(req,res,next){
  if(!req.headers.authorization){
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token==='null'){
    return res.status(401).send('Unauthorized request')
  }
  let payload = jwt.verify(token, 'hotel')
  if(!payload){
    return res.status(401).send('Unauthorized request')
  }
  req.userId = payload.subject
  next()
}

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'hotel', {
    expiresIn: maxAge
  });
};

router.get('/signup',function(req,res){
    
})
//add login details
router.post('/signup',async function(req,res){
    const { username, password } = req.body;

  try {
    const user = await User.create({ username, password });
    const token = createToken(user._id);
  
    res.send({token});

  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }

})

//verify login details

router.post('/login', async function(req,res){
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);
    const token = createToken(user._id);
  
    res.send({token});

  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({});
  }
})

module.exports = router;