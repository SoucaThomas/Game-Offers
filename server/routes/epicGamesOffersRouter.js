const express = require("express");
const EpicGamesOffers = require("../models/epicGamesOffersModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const epicGamesOffers = await EpicGamesOffers.find();
    res.send(epicGamesOffers);
  } catch (err) {
    res.send(500).json(err);
    console.log(
      "🚀 ~ file: epicGamesOffersRouter.js:9 ~ router.get ~ err:",
      err
    );
  }
});

router.post("/post", async (req, res) => {
  const { title, description, imgUrl } = req.body;

  try {
    const newOffer = await EpicGamesOffers.create({
      title: title,
      description: description,
      imgUrl: imgUrl,
    });

    res.status(201).json(newOffer);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
