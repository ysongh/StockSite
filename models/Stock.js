const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    symbol: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = Stock = mongoose.model('stock', StockSchema);