const express = require('express');
const router = express.Router();
const JogoController = require('../controllers/JogoController');

router.get('/index', JogoController.acessoJogo);

module.exports = router;