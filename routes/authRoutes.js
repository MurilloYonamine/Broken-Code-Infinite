const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

router.post('/registrar', AuthController.registrarPost)
router.post('/login', AuthController.loginPost)

module.exports = router;