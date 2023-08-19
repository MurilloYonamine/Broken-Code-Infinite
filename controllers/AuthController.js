const { create } = require("express-handlebars");
const User = require("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class AuthController {
    static async loginPost(req, res) {
        const { nick, senha } = req.body;

        // encontrar o usuário
        const user = await User.findOne({ where: { UsNickname: nick } });

        if (!user) {
            req.flash("erroLogin", "Nick não encontrado!");
            res.redirect('/');
            return;
        }

        // checar se a senha bate
        const passwordMatch = bcrypt.compareSync(senha, user.UsSenha);

        if (!passwordMatch) {
            req.flash("erroLogin", "Senha incorreta!");
            res.redirect('/');
            return;
        }

        //Inicialização sessão
        req.session.userid = user.id;

        req.flash('login', 'Login realizado com sucesso!');

        req.session.save(() => {
            res.redirect('/');
        });

    }

    static async registrarPost(req, res) {
        const { cnome, cnick, csenha } = req.body;
        const ChecarSeNickExistir = await User.findOne({ where: { UsNickname: cnick } });

        if (ChecarSeNickExistir) {
            req.flash("erroRegistrar", "Esse nick já existe!");
            res.redirect('/');
            return;
        }

        const salt = bcrypt.genSaltSync(2);
        const senhaCriptograda = bcrypt.hashSync(csenha, salt);

        const user = {
            UsNome: cnome,
            UsNickname: cnick,
            UsSenha: senhaCriptograda
        };
        try {
            await User.create(user);
            req.flash("cadastro", "cadastro realizado com sucesso!");
            res.redirect('/');

        } catch (err) {
            console.log(err);
        }
    }

};