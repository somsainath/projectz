var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');

var Room = require('../models/Room')




//verifying Json web token
function verifyToken(req,res,next){
    if(!req.headers.authorization){
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token==='null'){
      return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'Manager')
    if(!payload){
      return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
  }
  



//get  rooms
router.get('/room', function(req,res){
    Room.find().then((rooms) => {
        res.status(200);
        res.send(rooms);
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})
//get room with available status
router.get('/room/:roomType/:status',function(req,res){
    Room.find({roomType:req.params.roomType,status:req.params.status}).then((rooms) => {
        if(rooms){
        res.json(rooms)
        }else{
            res.sendStatus(404);
        }
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})
//get room with room type
router.get('/room/:roomType',function(req,res){
    Room.find({roomType:req.params.roomType}).then((rooms) => {
        if(rooms){
        res.json(rooms)
        }else{
            res.status(404),send("error");
        }
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})
//post room
router.post('/room',verifyToken,function(req,res){
    var newRoom = {
        roomNo: req.body.roomNo,
        roomType: req.body.roomType,
        occupancy: req.body.occupancy,
        price: req.body.price,
        description: req.body.description,
        status: req.body.status
    }
    var room = new Room(newRoom)

    room.save().then(() => {
        console.log(room)
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
    res.send("Success")
})
//delete a room
router.delete('/room/:id',verifyToken,function(req,res){
    Room.findByIdAndRemove(req.params.id).then(() =>{
        res.send("Deleted")
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

//uppddate a room
router.put('/room/:id',verifyToken,function(req,res){
    var newRoom = {
        roomNo: req.body.roomNo,
        roomType: req.body.roomType,
        occupancy: req.body.occupancy,
        price: req.body.price,
        description: req.body.description,
        status: req.body.status
    }
    console.log(req.params.id);
    Room.findByIdAndUpdate(req.params.id,{$set:newRoom}).then(()=>{
        res.status(200).send('Updated')
    }).catch(err =>{
        if(err){
            res.status(400).send('not updated')
            throw err;
            
        }
    })
})


module.exports = router;