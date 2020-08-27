const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');
const auth = require('../middleware/auth');
const Account = require('../models/Account');
const Profile = require('../models/Profile');

//@route    GET api/auth
//@desc     Get logged in user
//@access   Private
router.get('/', auth, async (req, res) => {
  //The 'auth' in above refers to the middleware in a another, it functions the same way the "check" methods below function, as a second argument to the router.
  try {
    //Find by ID is just querying, based on the ID that was returned from the decoded JWT from te middleware.
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

//@route    GET api/auth
//@desc     Get logged in user
//@access   Private
router.get('/portfolio', auth, async (req, res) => {
  //The 'auth' in above refers to the middleware in a another, it functions the same way the "check" methods below function, as a second argument to the router.
  try {
    //Find by ID is just querying, based on the ID that was returned from the decoded JWT from te middleware.
    const user = await User.findById(req.user.id).select('-password');
    const accounts = await Account.find({ user: req.user.id }).select([
      '-created',
      '-__v',
      '-transactions',
      '-user',
    ]);
    const profile = await Profile.find({ user: req.user.id });
    const result = {
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      totalValue: accounts.reduce((prev, curr) => {
        return prev + curr.balance;
      }, 0),
      history: user.snapshots,
      created: user.created,
      accounts: accounts,
      profile: profile,
    };
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

//@route    POST api/auth
//@desc     Auth user & get token
//@access   Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email.').isEmail(),
    check('password', 'Password is required.').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ Errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      //----------If user does not exist in database return 400 error
      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      //----------If hashed password does not exist in database return 400 error
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      //----------If the user exists and password matches, send payload which includes JWT token.
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 36000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
