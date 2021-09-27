var mongoose = require("mongoose");

var StaffSchema = mongoose.Schema({
   
    empName:{
        type: String,
        require: true
    },
    empAddress:{
        type: String,
        require: true
    },
    nic:{
        type: String,
        require: true
    },
    salary:{
        type: Number,
        require: true
    },
    age:{
        type: Number,
        require: true
    },
    occupation:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique:true,
        unique: true
    },
});

var Staff = module.exports = mongoose.model('Staff',StaffSchema)