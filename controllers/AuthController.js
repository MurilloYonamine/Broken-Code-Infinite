const User = require("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class AuthController {
    static login(req, res) {
        res.render('home');
    }

    static registrar(req, res) {
        res.render('auth/registrar');
    }

    static async loginPost(req, res) {
        const { nick, senha } = req.body;

        if (senha != "") {
            req.flash('message', 'Usuário ou Senha não encontrados!');
            return;
        }
    }
    static async registrarPost(req, res) {
        const { cnome, cnick, csenha } = req.body;

        if (csenha != "") {
            req.flash('message', 'Usuário ou Senha não encontrados!');
            return;
        }
    }
};