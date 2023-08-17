const express = require('express');
const router = express.Router();

const HomeControler = require('../controllers/HomeControler')

// controller

router.get('/', HomeControler.acessoHome);

module.exports = router;