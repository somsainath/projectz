var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();
var axios = require("axios");
var Room = require('../models/Room')
var Booking = require('../models/Booking');
const { response } = require("express");
const { findOne, findOneAndUpdate } = require("../models/Booking");
//get booking details
router.get('/booking',function(req,res){
    Booking.find().then((bookings) => {
        res.json(bookings)
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})
//get booking by id
router.get('/booking/:id',function(req,res){
    Booking.findById(req.params.id).then((bookings) => {
        if(bookings){
        res.json(bookings)
 
        }else{
            res.sendStatus(404);
        }
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})
//add booking
router.post('/booking',function(req,res){
    var newBooking = {
        roomNo:  req.body.roomNo,
        name: req.body.name,
        children: req.body.children,
        adult: req.body.adult,
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        days:req.body.days
    }
    var booking = new Booking(newBooking)
    console.log(booking);
        booking.save().then(() => {
        console.log("New Booking Created");
        Room.findOneAndUpdate({roomNo:req.body.roomNo},{status:"unAvailable"}).then((err)=>{
            if(err)
            {
                console.log(err);
            }

        })
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
    res.send("Success")
})

//delete booking 
router.delete('/booking/:id',function(req,res){
    Booking.findByIdAndRemove(req.params.id).then(() =>{
        res.send("Deleted")
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

router.delete('/booking',function(req,res){
    Booking.deleteMany({__v:0}).then(() =>{
        res.send("Deleted")
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

module.exports = router;