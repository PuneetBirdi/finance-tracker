const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Transaction = require('../models/Transaction');
const auth = require('../middleware/auth');
const Account = require('../models/Account');
const User = require('../models/User');

const roundNumber = (number) => {
  return Math.ceil(number * 100) / 100;
};

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

    let { account, amount, description, type } = req.body;

    description = description.toUpperCase();

    //build and save new transaction
    try {
      //get account information
      let currentAccount = await Account.findById({ _id: account });

      //if it's a savings account and the transaction is greater than the balance, return a warning, otherwise write the transaction
      if (currentAccount.balance + amount < 0.0) {
        return res.status(400).json({
          msg: 'Insufficient funds.',
        });
      } else {
        const newTransaction = new Transaction({
          account,
          amount,
          description,
          type,
          user: req.user.id,
        });

        const transaction = await newTransaction.save();
        //update account balance and write a snapshot
        currentAccount = await Account.findByIdAndUpdate(
          { _id: account },
          {
            $inc: { balance: roundNumber(transaction.amount) },
          },
          { new: true }
        );

        currentAccount = await Account.findByIdAndUpdate(
          { _id: account },
          {
            $push: {
              snapshots: {
                balance: currentAccount.balance,
                date: Date.now(),
              },
            },
          },
          { new: true }
        );
        //update user portfolio balance and write snapshot
        const balances = await Account.find({ user: req.user.id });
        const portfolioSnapshot = balances.reduce((prev, curr) => {
          return prev + curr.balance;
        }, 0);

        const updatedUser = await User.findByIdAndUpdate(
          { _id: req.user.id },
          {
            $push: {
              snapshots: {
                balance: roundNumber(portfolioSnapshot),
                date: Date.now(),
              },
            },
          },
          { new: true }
        );

        res.json(transaction);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route    GET api/transactions
//@desc     Get all transactions from an account
//@access   Private
router.get('/:id', auth, async (req, res) => {
  try {
    const transactions = await Transaction.find({ account: req.params.id }).sort({time: -1}).limit(20);
    res.json(transactions);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});
module.exports = router;
