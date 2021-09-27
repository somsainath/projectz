var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var ManagerSchema = mongoose.Schema({
    username:{
        type:String,
        required: [true,'Please enter username'],
        unique: true,
        lowercase: true
    },
    password:{
        type:String,
        required:[true,'Please enter Password'],
        minLength:[6,'Minimum password length is 6 characters']
    },
});

ManagerSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
});

ManagerSchema.statics.login = async function(username, password) {
    const user = await this.findOne({ username });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error('incorrect password');
    }
    throw Error('incorrect email');
  };

var Manager = module.exports = mongoose.model('Manager',ManagerSchema)