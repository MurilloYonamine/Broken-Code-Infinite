const User = require("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class AuthController {
    static login(req, res) {
        res.render('folders/login');
    }

    static registrar(req, res) {
        res.render('home');
    }
    static async loginPost(req, res) {
        const { nickname, senha } = req.body;
        const confirmarSenha = '123';

        if (senha !== confirmarSenha) {
            req.flash('message', 'As senhas não conferem, tente novamente!');
            res.redirect('home');
            return
        } else {
            return res.redirect('home');
        }
    }
    static async registrarPost(req, res) {
        const { nome, nickname, senha } = req.body;
        const confirmarSenha = '123';

        if (senha !== confirmarSenha) {
            req.flash('message', 'As senhas não conferem, tente novamente!');
            return res.redirect('home');
        }
    }

};