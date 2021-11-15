var express = require("express");
var mongoose = require("mongoose");

var app = express();
var cors = require("cors");
const cookieParser = require('cookie-parser');
app.use(cookieParser());


var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));



mongoose.connect("mongodb+srv://somsainath123654789:*******@cluster0.rpgz5.mongodb.net/test1",() =>{
    console.log("User Database Connected");
});

var route3 = require('./routes/auth');
app.use('/', route3)

var route4 = require('./routes/staff');
app.use('/', route4)

app.listen(3001,() => {
    console.log('Listening to port for requests');
})
