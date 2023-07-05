require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const epicGamesOffersRouter = require("./routes/epicGamesOffersRouter");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/epicGamesOffers", epicGamesOffersRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running  http://localhost:${PORT}/`);
    });
  })
  .catch((error) => console.error(error));
