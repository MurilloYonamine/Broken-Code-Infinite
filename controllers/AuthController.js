const { create } = require("express-handlebars");
const User = require("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class AuthController {
    static async loginPost(req, res) {
        const { nick, senha } = req.body;

        // encontrar o usuário
        const user = await User.findOne({ where: { UsNickname: nick } });

        if (!user) {
            res.render('home', { erroLogin: "Nick não encontrado!" });
            return;
        }

        // checar se a senha bate
        const passwordMatch = bcrypt.compareSync(senha, user.UsSenha);

        if (!passwordMatch) {
            res.render('home', { erroLogin: "Senha incorreta!" });
            return;
        }

        //Inicialização sessão

        res.render('home', { loginMensagem: 'Login realizado com sucesso!' });
    }

    static async registrarPost(req, res) {
        const { cnome, cnick, csenha } = req.body;

        const salt = bcrypt.genSaltSync(2);
        const senhaCriptograda = bcrypt.hashSync(csenha, salt);

        const user = {
            UsNome: cnome,
            UsNickname: cnick,
            UsSenha: senhaCriptograda
        };
        try {
            await User.create(user);
            res.render('home', { registrarMensagem: 'Usuário criado com sucesso!' });
        } catch (err) {
            const ChecarSeNickExistir = await User.findOne({ where: { UsNickname: cnick } });
            if (ChecarSeNickExistir) {
                res.render('home', { erroCadastro: 'Nickname já existe!' });
            }
        }
    }
};