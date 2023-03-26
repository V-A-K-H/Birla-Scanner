const mongoose = require('mongoose');


const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        required:true,
        // unique:true
    },
    password:{
        type:String,
        required:true
    },
    phonenum: {
        type: Number,
        // required: true,
    },
    rollnum: {
        type: Number,
        // unique: true,
        },
    year: {
        type: Number,
        // required: true,
    },
    branch: {
        type: String,
        // required: true,
    },
    fathername: {
        type: String,
        // required: true,
    },
    fatherphonenum: {        
        type: Number,
        // required: true,
    },
    photolink: {
        type: String, 
        // required: true,
    },
    outinginfo: {
        type: Array,
        
    },

    // date:{
    //     type:Date,
    //     default:Date.now
    // },
    // purpose:{
    //     type:String,
    // },
    // in: {
    //     type: Date,
    // },
    // out: {
    //     type: Date,
    // },
    access: {
        type: Boolean,
    }

})
module.exports = student = mongoose.model('Student',StudentSchema); 