const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const verificarToken = require('../services/authServices');


router.post('/registar', authController.registrarUsuario);
router.post('/login', authController.loginUsuario);
router.post('/logout', authController.logout);  


module.exports = router;
