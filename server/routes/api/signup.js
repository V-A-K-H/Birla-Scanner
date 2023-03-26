const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
// const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
// const config = require('config');
const { check, validationResult } = require('express-validator');
const student = require('../../models/student');

// const User = require('../../models/User');

router.post('/', async (req, res) => {
    console.log(req.body['outinginfo'])
    let { name,email, password, phonenum, rollnum, year, branch, fathername, fatherphonenum, photolink, outinginfo,access } = req.body;
    console.log(outinginfo,name)
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    const Student = new student({
        name, email, password, phonenum, rollnum, year, branch, fathername, fatherphonenum, photolink, outinginfo,access
    })
    const response= await  Student.save()





})

module.exports = router;
    