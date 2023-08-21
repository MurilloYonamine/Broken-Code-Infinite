const express = require('express');
const router = express.Router();
const PontController = require('../controllers/PontController');

router.get('/', PontController.mostrarPontuacao);

module.exports = router;