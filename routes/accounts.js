const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');
const Account = require('../models/Account');
const auth = require('../middleware/auth');

//@route    POST api/account
//@desc     Add new Account
//@access   Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('balance', 'Balance is required.').not().isEmpty(),
      check('type', 'Account type must be selected.').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ Errors: errors.array() });
    }

    const { name, type, balance } = req.body;

    try {
      const newAccount = new Account({
        balance,
        name,
        type,
        user: req.user.id,
      });

      const account = await newAccount.save();

      res.json(account);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
