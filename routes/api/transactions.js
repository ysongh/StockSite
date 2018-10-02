const express = require('express');
const router = express.Router();
const passport = require('passport');
 
const Transaction = require('../../models/Transaction');

router.get('/all', (req, res) => {
     Transaction.find()
         .populate('user', ['name'])
         .then(transactions => {
             res.json(transactions);
         })
         .catch(err => 
             res.status(404).json({error: err})
        );
});

router.post('/', passport.authenticate('jwt', {session: false}),(req, res) => {
    const transactionFields = {};
    transactionFields.user = req.user.id;
    transactionFields.symbol = req.body.symbol;
    transactionFields.price = req.body.price;
    transactionFields.quantity = req.body.quantity;
    
    new Transaction(transactionFields).save().then(transaction => res.json(transaction));
});

module.exports = router;