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
    console.log(admin)
    const AdminInfo=[{
        "name": "admin1",
        "email": "admin1@gmail.com",
        "password": "111111",
        "phonenum": 1111111111,
        
    },{
        "name": "admin2",
        "email": "admin2@gmail.com",
        "password": "222222",
        "phonenum": 2222222222,
        
    }]
    AdminInfo.map(async (elem)=> {
        const salt=await bcrypt.genSalt(10);
        elem.password=await bcrypt.hash(elem.password,salt);
        await new admin(elem).save()

    })
    res.status(200).json("sucess")



})

module.exports=router