// controle de cadastro, edição e delete de devs

const axios = require("axios");

module.exports = {
  async index(req, res) {
    let appId = 271590;
    let appIdString = appId.toString();
    const game = await axios.get(
      `http://store.steampowered.com/api/appdetails?appids=${appId}`
    );

    return res.json(game.data);
  }
};
