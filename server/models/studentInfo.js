const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phonenum: {
        type: Number,
        required: true,
    },
    rollnum: {
        type: Number,
        unique: true,
    },
    year: {
        type: Number,
        required: true,
    },
    branch: {
        type: Number,
        required: true,
    },
    fathername: {
        type: Number,
        required: true,
    },
    fatherphonenum: {        
        type: Number,
        required: true,
    },
    photolink: {
        type: String, 
        required: true,
    }
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports = User = mongoose.model('user',UserSchema);