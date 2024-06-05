<<<<<<< HEAD
const jwt = require('jsonwebtoken')
=======
const jwt = require('jsonwebtoken');
>>>>>>> 6c9537e75daca6b7f8fe195ea677bd85d915ff75
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
// const auth = require('../../middleware/auth');
/* global localStorage, */
const config = require('config');
const {check, validationResult} = require('express-validator');

const User = require('../../models/student');

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/', async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
<<<<<<< HEAD
    if (!user) { return res.status(500).send("invalid credential") }
    return res.json(user);

=======
    res.json(user);
    if (!user) {
      res.status(500).send('invalid credential');
    }
>>>>>>> 6c9537e75daca6b7f8fe195ea677bd85d915ff75
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error') 
  }
});

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  '/',
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),
  async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

<<<<<<< HEAD

    const { email, password } = req.body;
    console.log(email, password)
=======
    const {email, password} = req.body;
>>>>>>> 6c9537e75daca6b7f8fe195ea677bd85d915ff75
    try {
      let user = await User.findOne({email});

      if (!user) {
<<<<<<< HEAD
        console.log("invalid user", user)
        return res
          .status(500)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
=======
        return res.status(500).json({errors: [{msg: 'Invalid Credentials'}]});
>>>>>>> 6c9537e75daca6b7f8fe195ea677bd85d915ff75
      }
      // checks if the user exsists or not
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
<<<<<<< HEAD
        console.log("in is match")
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
=======
        return res.status(400).json({errors: [{msg: 'Invalid Credentials'}]});
>>>>>>> 6c9537e75daca6b7f8fe195ea677bd85d915ff75
      }

      const payload = {
        user: {
<<<<<<< HEAD
          id: user.id
        }
      };
      console.log(user.id)
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        (err, token) => {
          if (err) throw err;
          res.json({ jwtToken: token });
          console.log(token)
          // try{localStorage.setItem("sessionUser",token);}
          // catch( error) {console.log(error)}

        }
      );
=======
          id: user.id,
        },
      };
      jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
        if (err) throw err;
        res.json({jwtToken: token});
        // try{localStorage.setItem("sessionUser",token);}
      });
>>>>>>> 6c9537e75daca6b7f8fe195ea677bd85d915ff75
    } catch (err) {
      console.error(err.message);

      res.status(500).send('Server error');
    }
  },
);

module.exports = router;
