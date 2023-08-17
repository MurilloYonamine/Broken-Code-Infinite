const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// controller

router.post('/home', AuthController.login);
router.post('/registrar', AuthController.registrar);

module.exports = router;