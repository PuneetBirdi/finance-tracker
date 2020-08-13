const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Transaction = require('../models/Transaction');
const auth = require('../middleware/auth');

//@route    POST api/contacts
//@desc     Add new contact
//@access   Private
router.post(
  '/',
  [auth, [check('name', 'Name is required').not().isEmail()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ Errors: errors.array() });
    }

    const { account, amount, description, type } = req.body;

    try {
      const newTransaction = new Transaction({
        account,
        amount,
        description,
        type,
        user: req.user.id,
      });

      const transaction = await newTransaction.save();

      res.json(transaction);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
module.exports = router;
