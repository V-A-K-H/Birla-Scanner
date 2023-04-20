const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
// const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
// const config = require('config');
const { check, validationResult } = require('express-validator');
const admin = require('../../models/admin');

// const User = require('../../models/User');

router.post('/', async (req, res) => {
    const AdminInfo=[{
        "name": "admin1",
        "email": "admin1@gmail.com",
        "passowrd": "111111",
        "number": 1111111111,
        
    },{
        "name": "admin2",
        "email": "admin2@gmail.com",
        "passowrd": "222222",
        "number": 2222222222,
        
    }]
    AdminInfo.map(async (elem)=> {
        const salt=await bcrypt.genSalt(10);
        elem.passowrd=await bcrypt.hash(elem.passowrd,salt);
        console.log(elem)
        await new admin(elem).save()
        res.status(200).send("sucess")
    })




})

module.exports=router