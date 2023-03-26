const express = require('express');
const authenticate = require('../../middleware/authenticate');
const router = express.Router();
const student = require('../../models/student');
router.get('/columns/:columns',authenticate,async(req,res)=> {
    const {columns}=req.params
    const studentProfile= await student.find({_id: req.user.id}).select(columns)
    console.log(studentProfile)
    res.json(studentProfile)
})

module.exports=router