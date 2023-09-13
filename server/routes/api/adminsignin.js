const jwt=require('jsonwebtoken')
const adminauthenticate = require('../../middleware/adminauthenticate');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const http=require('http')
const socket=require('socket.io')
const server=http.createServer(express());
const io=socket(server)
// const auth = require('../../middleware/auth');
/* global localStorage, */
const config = require('config');
io.on('connection', (socket) => {
  console.log('Client connected');
  

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
const { check, validationResult } = require('express-validator');
const Admin = require('../../models/admin');
const student = require('../../models/student');
router.get(
  '/auth/:auth',adminauthenticate,async (req,res)=> {
    const adminProfile = await student.find()
    res.status(200).json(adminProfile)
  }
)
router.post(
    '/',
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
    async (req, res) => {
      // const errors = validationResult(req);
      // if (!errors.isEmpty()) {
      //   return res.status(400).json({ errors: errors.array() });
      // }
  
  
      const { email, password } = req.body;
      console.log(email,password)
      try {
        let admin = await Admin.findOne({ email });
        console.log(admin)
        if (!admin) {
          console.log(admin)
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
        // checks if the user exsists or not
          const isMatch = await bcrypt.compare(password, admin.password);
  
          if (!isMatch) {
            console.log("in is match")
            return res
              .status(400)
              .json({ errors: [{ msg: 'Invalid Credentials' }] });
          }
        const payload = {
          user: {
            id: admin.id
          } 
        };

        jwt.sign(
          payload,
          config.get('jwtSecret'),
          (err, token) => {
            if (err) throw err;
            res.json({ jwtToken:token });
            console.log(token)
            // try{localStorage.setItem("sessionUser",token);}
            // catch( error) {console.log(error)}
  
          }
        );
      } catch (err) {
        console.error(err.message);
  
        res.status(500).send('Server error');
      }
    }
  );

  module.exports = router;