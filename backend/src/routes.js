// arquivo de rotas... Chama o express e os controllers

const { Router } = require("express");
const GameController = require("./controllers/GameController");

const routes = Router();

// cria a rota dev e a search com suas funções
routes.post("/games", GameController.index); // visualizar

module.exports = routes;
