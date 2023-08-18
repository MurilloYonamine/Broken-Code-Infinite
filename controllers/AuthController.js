const User = require("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class AuthController {
    static login(req, res) {
        res.render('folders/login');
    }

    static registrar(req, res) {
        res.render('folders/registrar');
    }
    static async loginPost(req, res) {
        const { nickname, senha } = req.body;
        const confirmarSenha = '123';
    
        if (senha !== confirmarSenha) {
            req.flash('message', true);
            res.redirect('/home');
        } else {
            req.flash('message', false);
            res.redirect('/home');
        }
    }
    
    static async registrarPost(req, res) {
        const checkIfUserExists = await User.findOne({where: {UsNickname: nickname}})

        if(checkIfUserExists) {
            req.flash('message', 'O nick já está em uso!');
            res.redirect('/home');
        }
    }

};