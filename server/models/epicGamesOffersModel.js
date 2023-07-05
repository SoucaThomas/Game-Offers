const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const epicGamesOffersSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EpicGamesOffers", epicGamesOffersSchema);
