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

    let { name, type, balance } = req.body;

    try {
      const existingAccounts = await Account.find({ user: req.user.id });
      if (existingAccounts.length >= 4) {
        return res.status(400).json({
          msg: 'You are currently limited to a maximum of 4 accounts.',
        });
      } else {
        const newAccount = new Account({
          balance,
          name,
          type,
          user: req.user.id,
        });

        const account = await newAccount.save();
        res.json(account);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@router      GET api/accounts
//@desc        Get all accounts
//@access      Private
router.get('/', auth, async (req, res) => {
  try {
    const accounts = await Account.find().sort({ date: -1 });
    res.json(accounts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@router      GET api/accounts/:id
//@desc        Get account by id
//@access      Private
router.get('/:id', auth, async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);

    if (!account) {
      return res.status(404).json({ msg: 'Account not found.' });
    }
    res.json(account);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Account not found.' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
