const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const stockSchema = new Schema({
  user: { type : Schema.Types.ObjectId, ref: 'User' },
  tradeType: String,
  ticker: String,
  price: Number,
  shares: Number
} 
  // {
  //   timestamps: true
  // }
);

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;