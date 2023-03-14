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
    const { name,email, password, phonenum, rollnum, year, branch, fathername, fatherphonenum, photolink, date } = req.body;
    const salt = await bcrypt.genSalt(10);
    const Student = new student({
        name, email, password, phonenum, rollnum, year, branch, fathername, fatherphonenum, photolink, date
    })
    const response= await Student.save()
    console.log(response)
    Encyppassword = await bcrypt.hash(password, salt);
    console.log(name, email, Encyppassword, phonenum, rollnum, year, branch, fathername, fatherphonenum, photolink, date)

})

module.exports = router;
