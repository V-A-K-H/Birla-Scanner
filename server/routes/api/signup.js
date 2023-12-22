const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
// const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
// const config = require('config');
const { check, validationResult } = require('express-validator');
const admin = require('../../models/admin');
const student = require('../../models/student');

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
    const StudentInfo = [
        {
            "name": "Harshit Roy",
            "email": "harshitroy.hr@gmail.com",
            "password": "123456",
            "phonenum": 6396731738,
            "rollnum": 12,
            "year": 3,
            "branch": "cse",
            "fathername": "father1",
            "fatherphonenum": 2222222222,
            "photolink": "https://01.jpeg",
            "outinginfo": { date: new Date("2023-03-26"), entry: "", exit: new Date("2023-03-26 15:10:20"), purpose: "market" },
            "access": true,
            "devices": "D01"
        },
        {
            "name": "Aryan Raj",
            "email": "aryanraj@gmail.com",
            "password": "123456",
            "phonenum": 7091706516,
            "rollnum": 4,
            "year": 3,
            "branch": "cse",
            "fathername": "father2",
            "fatherphonenum": 2222222222,
            "photolink": "https://01.jpeg",
            "outinginfo": { date: new Date("2023-03-26"), entry: "", exit: new Date("2023-03-26 15:10:20"), purpose: "market" },
            "access": true,
            "devices": "D01"
        },
        {
            "name": "Kritik Srivastava",
            "email": "kritiksrivastava@gmail.com",
            "password": "123456",
            "phonenum": 8591130374,
            "rollnum": 23,
            "year": 3,
            "branch": "cse",
            "fathername": "father3",
            "fatherphonenum": 2222222222,
            "photolink": "https://01.jpeg",
            "outinginfo": { date: new Date("2023-03-26"), entry: "", exit: new Date("2023-03-26 15:10:20"), purpose: "market" },
            "access": true,
            "devices": "D01"
        },
        {
            "name": "Vivek Bhatt",
            "email": "vivekbhatt3011@gmail.com",
            "password": "123456",
            "phonenum": 8218854905,
            "rollnum": 62,
            "year": 3,
            "branch": "cse",
            "fathername": "father4",
            "fatherphonenum": 2222222222,
            "photolink": "https://01.jpeg",
            "outinginfo": { date: new Date("2023-03-26"), entry: "", exit: new Date("2023-03-26 15:10:20"), purpose: "market" },
            "access": true,
            "devices": "D01"
        }        
    ]
    const prasooninfo = [
        {
            "name": "Prasoon Lohani",
            "email": "prasoonlohani.me@gmail.com",
            "password": "prasoon()",
            "phonenum": 7906998093,
            "rollnum": 200050101041,
            "year": 3,
            "branch": "CSE",
            "fathername": "K C Lohani",
            "fatherphonenum": 9690272252,
            "photolink": "https://drive.google.com/uc?id=19XAmWutXQUfuXiBBgSrYZbt8L6eNVH2e",
            "outinginfo": { date: new Date("2023-03-26"), entry: "", exit: new Date("2023-03-26 15:10:20"), purpose: "market" },
            "access": true,
            "devices": "D01"
        } ]
        try {
            await StudentInfo.map(async (elem) => {
              const salt = await bcrypt.genSalt(10);
              elem.password = await bcrypt.hash(elem.password, salt);
              await new student(elem).save();
              console.log("Successfully posted");
            });
          
            res.status(200).json("Success");
          } catch (error) {
            console.error("Error saving data:", error);
            res.status(500).json({ error: "Internal Server Error" });
          }



})

module.exports=router
