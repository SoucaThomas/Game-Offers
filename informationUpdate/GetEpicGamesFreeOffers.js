require("dotenv").config();
const axios = require("axios");

const fetchEpicGamesFreeOffers = async () => {
  const options = {
    method: "GET",
    url: process.env.EPIC_GAMES_OFFERS_URL,
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.RAPIDAPI_EPIC_GAMES_API,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);

    const data = response.data.Catalog.searchStore;
  } catch (error) {
    console.error(error);
  }
};

export default fetchEpicGamesFreeOffers;
