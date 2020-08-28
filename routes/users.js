const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');
const Profile = require('../models/Profile');

//@router      POST api/users
//@desc        Create new user
//@access      Public
router.post(
  '/',
  [
    check('firstName', 'First name is required.').not().isEmpty(),
    check('lastName', 'Last name is required.').not().isEmpty(),
    check('phone', 'Phone is required.').not().isEmpty(),
    check('dob', 'Date of birth is required.').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters.'
    ).isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    // if there's an errors return from validation, return 400 code and the errors array
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }

    //destructure the body of the request
    const {
      email,
      password,
      firstName,
      lastName,
      phone,
      dob,
      address,
    } = req.body;

    try {
      //see if the user already exists
      let user = await User.findOne({ email: email });
      if (user) {
        return res
          .status(400)
          .json({ msg: 'This email has already been used.' });
      }

      //create a new instance of user
      user = new User({
        // name,
        email,
        password,
      });

      //hashing the password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      //create a profile object
      let profile = new Profile({
        user: user._id,
        firstName,
        lastName,
        phone,
        dob,
        address,
      });

      await profile.save();

      //Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      //Catch a potential error and return 500 status
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
