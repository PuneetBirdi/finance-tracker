const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Transaction = require('../models/Transaction');
const auth = require('../middleware/auth');
const Account = require('../models/Account');

//@route    POST api/account/transaction
//@desc     Add new transaction
//@access   Private
router.post(
  '/',
  [
    auth,
    [
      check('description', 'Description is required').not().isEmail(),
      check('amount', 'Amount is required').not().isEmpty(),
      check('type', 'Define transaction type.').not().isEmpty(),
      check('account', 'Transaction account must be defined.').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ Errors: errors.array() });
    }

    const { account, amount, description, type } = req.body;

    //build and save new transaction
    try {
      const newTransaction = new Transaction({
        account,
        amount,
        description,
        type,
        user: req.user.id,
      });

      const transaction = await newTransaction.save();
      //update account balance and write a snapshot
      const currentAccount = await Account.findByIdAndUpdate(
        { _id: account },
        {
          $inc: { balance: transaction.amount },
          $push: {
            snapshots: {
              balance: this.balance,
              date: Date.now(),
            },
          },
        },
        { new: true }
      );

      console.log(currentAccount);
      res.json(transaction);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
module.exports = router;
