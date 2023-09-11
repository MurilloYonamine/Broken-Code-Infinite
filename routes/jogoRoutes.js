const express = require('express');
const router = express.Router();
const JogoController = require('../controllers/JogoController');

router.post('/pontuacao', JogoController.pontuacaoJogo);
router.get('/jogo/index/:userId', JogoController.acessoJogo);

module.exports = router;