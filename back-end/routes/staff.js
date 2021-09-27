var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();
var Staff = require('../models/Staff');
var Manager = require('../models/Manager')
var Owner = require('../models/Owner')

var app = express();
const jwt = require('jsonwebtoken');

//get staff details
router.get('/staff',verifyToken,function(req,res){
    Staff.find().then((staff) => {
        res.status(200).json(staff)
    }).catch(err =>{
        if(err){
            res.status(404).send('verification Failed')
        }
    })
})
//get staff details by id 
router.get('/staff/:id',verifyToken,function(req,res){
    Staff.findById(req.params.id).then((staff) => {
        if(staff){
        res.end(200).json(staff)
  
        }else{
            res.sendStatus(404);
        }
    }).catch(err =>{
        if(err){
            res.status(404).send(err);
            throw err;
        }
    })
})

//post staff details
router.post('/staff',verifyToken,function(req,res){
    var newRec = {
        empName:  req.body.empName,
        empAddress: req.body.empAddress,
        nic: req.body.nic,
        salary: req.body.salary,
        age: req.body.age,
        occupation: req.body.occupation,
        email:req.body.email
    }
    var staff = new Staff(newRec)
    console.log(staff);
        staff.save().then(() => {
        console.log("New Record added in Staff");
        res.send("Success");
    }).catch((err) => {
        if(err){
            res.status(404).send(err);
            throw err;
            
        }
    })
    res.send('success');
})
//delete staff details
router.delete('/staff/:id',verifyToken,function(req,res){
    Staff.findByIdAndRemove(req.params.id).then(() =>{
        res.status(200).send("Deleted")
    }).catch(err =>{
        if(err){
            res.status(400).send('not deleted')
            throw err;
            
        }
    })
})
//edit staff details
router.put('/staff/:id',verifyToken,function(req,res){
    var newRec = {
        empName:  req.body.empName,
        empAddress: req.body.empAddress,
        nic: req.body.nic,
        salary: req.body.salary,
        age: req.body.age,
        occupation: req.body.occupation,
        email:req.body.email
    }
    Staff.findByIdAndUpdate(req.params.id,{$set:newRec}).then(()=>{
        res.status(200).send('Updated')
    }).catch(err =>{
        if(err){
            res.status(400).send('not deleted')
            throw err;
            
        }
    })
})

//verifying Json web token
function verifyToken(req,res,next){
    if(!req.headers.authorization){
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token==='null'){
      return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'Manager' || 'Owner')
    if(!payload){
      return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
  }
  
  // create json web token
  const maxAge = 3 * 24 * 60 * 60;
  const createToken = (id) => {
    return jwt.sign({ id }, 'Manager', {
      expiresIn: maxAge
    });
  };
  
  
  //manager signup
  router.post('/msignup',async function(req,res){
    const { username, password } = req.body;

  try {
    const manager = await Manager.create({ username, password });
    const token = createToken(manager._id);
    res.send({token});
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
 
})
  
//manager login
  
  router.post('/mlogin', async function(req,res){
    const { username, password } = req.body;
  
    try {
      const manager = await Manager.login(username, password);
      const token = createToken(manager._id);
      res.send({token});
  
    } catch (err) {
      if(err){
      console.log(err)
      res.status(400).json({});
      }
    }
  })

  //owner login

  router.post('/ologin', async function(req,res){
    const { username, password } = req.body;
  
    try {
      const manager = await Owner.login(username, password);
      const token = createToken(manager._id);
      res.send({token});
  
    } catch (err) {
      if(err){
      console.log(err)
      res.status(400).json({});
      }
    }
  })

  //owner signup

  router.post('/osignup',async function(req,res){
    const { username, password } = req.body;

  try {
    const manager = await Owner.create({ username, password });
    const token = createToken(manager._id);
    res.send({token});
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
 
})
  
module.exports = router;