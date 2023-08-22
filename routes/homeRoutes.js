const express = require('express');
const router = express.Router();

const HomeControler = require('../controllers/HomeController')

// controller

router.get('/', HomeControler.acessoHome);

module.exports = router;