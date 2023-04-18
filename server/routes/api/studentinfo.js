const express = require('express');
const authenticate = require('../../middleware/authenticate');
const router = express.Router();
const student = require('../../models/student');
router.get('/columns/:columnid', authenticate, async (req, res) => {
    console.log(req.params)
    const studentProfile = await student.find({ _id: req.user.id }).select(req.params.columnid)
    // find returns an array of documents matching the query even if it is only one document, whereas findone return the plan document
    console.log(studentProfile)
    res.send(studentProfile)
})
router.put('/', authenticate, async (req, res) => {
    console.log(req.user.id)
    const FullstudentProfile = await student.findOne({ _id: req.user.id })

    // find returns an array of documents matching the query even if it is only one document, whereas findone return the plan document
    try {
        if (FullstudentProfile.access) {
            FullstudentProfile.outinginfo[0].exit = new Date("2023-04-16T11:50:50");
            FullstudentProfile.access = false;
            console.log(FullstudentProfile);
            await new student(FullstudentProfile).save();
            // new student saves the data helps to save in a new format


        }
        else if (FullstudentProfile.access==false) {
            console.log("access is false")
            FullstudentProfile.outinginfo.push({ date: new Date("2023-04-16"), entry: new Date("2023-04-16 15:10:20"), exit: new Date("2023,04,16,17:35:25"), purpose: "home" })
            FullstudentProfile.access=true
            console.log(FullstudentProfile)
            await new student(FullstudentProfile).save();
        }
    }
    catch (err) {
        console.log(err)
    }
})
module.exports = router