const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

router.get('/registrar', AuthController.registrar)
router.get('/login', AuthController.login)

router.post('/registrar', AuthController.registrarPost)
router.post('/login', AuthController.loginPost)

module.exports = router;