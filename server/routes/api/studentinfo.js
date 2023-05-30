const express = require('express');
const authenticate = require('../../middleware/authenticate');
const router = express.Router();
const student = require('../../models/student');
const config=require('config')
const CryptoJS=require('crypto-js')
router.get('/columns/:columnid', authenticate, async (req, res) => {
    console.log(req.params)
    const studentProfile = await student.find({ _id: req.user.id }).select(req.params.columnid)
    // find returns an array of documents matching the query even if it is only one document, whereas findone return the plan document
    console.log(studentProfile)
    res.send(studentProfile)
})
router.put('/', authenticate, async (req, res) => {
    const FullstudentProfile = await student.findOne({ _id: req.user.id })
    const {purpose,time,deviceId}=req.body
    const bytes = CryptoJS.AES.decrypt(deviceId, config.get('SecretPass'));
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    if (data!=FullstudentProfile.devices) {console.log("Non-encry",data); return res.status(500).send("Device Not recognized, Qr Invalid")}
    // find returns an array of documents matching the query even if it is only one document, whereas findone return the plan document
    try {
        if (FullstudentProfile.access) {
            const outinginfoLength=Object.values(FullstudentProfile.outinginfo).length
            FullstudentProfile.outinginfo[outinginfoLength-1].entry=new Date(time) ;
            FullstudentProfile.access = false;
            await new student(FullstudentProfile).save();
            res.status(200)
            // new student saves the data helps to save in a new format


        }
        else {
            console.log("access is false")
            FullstudentProfile.outinginfo.push({ date: new Date(time), entry: "", exit:new Date(time), purpose: purpose })
            FullstudentProfile.access=true
            console.log(FullstudentProfile)
            await new student(FullstudentProfile).save();
            res.status(200)
        }
    }
    catch (err) {
        console.log(err)
        res.status(500)
    }
})
module.exports = router
