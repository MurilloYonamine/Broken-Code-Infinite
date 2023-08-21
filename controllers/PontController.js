const Pontuacao = require("../models/Pontuacao");
const User = require("../models/User");

module.exports = class PontController {
    static async mostrarPontuacao(req, res) {
        try {
            const pontuacoesData = await Pontuacao.findAll({ include: User });

            let pontuacoes = pontuacoesData.map((result) => result.get({ plain: true }));

            console.log(pontuacoes);

            res.render('home', { pontuacoes });
        } catch (error) {
            console.error(error);
            res.status(500).send("Erro ao recuperar pontuações");
        }
    }
};