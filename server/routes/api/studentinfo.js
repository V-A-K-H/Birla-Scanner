const express = require('express');
const authenticate = require('../../middleware/authenticate');
const router = express.Router();
const student = require('../../models/student');
const config = require('config')
const CryptoJS = require('crypto-js')

router.get('/columns/:columnid', authenticate, async (req, res) => {
        try {
        const studentProfile = await student.find({ _id: req.user.id }).select(req.params.columnid)
        // find returns an array of documents matching the query even if it is only one document, whereas findone return the plan document
        return res.status(200).send(studentProfile[0])
    }
    catch (err) {
        res.status(500).json("Some error encountered")
    }

})
router.put('/', authenticate, async (req, res) => {
    const FullstudentProfile = await student.findOne({ _id: req.user.id })
    const { purpose, time, deviceId } = req.body
    const bytes = CryptoJS.AES.decrypt(deviceId, config.get('SecretPass'));
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    if (data != FullstudentProfile.devices) {
        return res.status(500).send("Device Not recognized, Qr Invalid")
    }
    // find returns an array of documents matching the query even if it is only one document, whereas findone return the plan docum ent
    try {
        if (FullstudentProfile.access) {
            const outinginfoLength = Object.values(FullstudentProfile.outinginfo).length
            FullstudentProfile.outinginfo[outinginfoLength - 1].entry = time;
            FullstudentProfile.access = false;
            await new student(FullstudentProfile).save();
            return res.status(200).json(false)
            // new student saves the data helps to save in a new format


        }
        else {
            if (purpose) {
                FullstudentProfile.outinginfo.push({ date: time, entry: "", exit: time, purpose: purpose })
                FullstudentProfile.access = true
                await new student(FullstudentProfile).save();
                return res.status(200).json(true)
            }
        }
    }
    catch (err) {
        return res.status(500)
    }
})
module.exports = router
