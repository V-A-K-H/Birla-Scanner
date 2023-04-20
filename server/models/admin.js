const mongoose=require('mongoose')

const AdminSchema=new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    phonenum: {
        type: Number,
    },
})
module.exports = admin = mongoose.model('Admin',AdminSchema); 