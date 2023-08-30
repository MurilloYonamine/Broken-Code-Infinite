const Pontuacao = require("../models/Pontuacao");
const User = require("../models/User");

module.exports = class PontController {
    static async mostrarPontuacao(req, res) {
        try {
            const pontuacoesData = await Pontuacao.findAll({ include: User, order: [['PoPontuacao', 'DESC']] });

            let pontuacoes = pontuacoesData.map((result, index) => {
                const pontuacaoPlain = result.get({ plain: true });
                pontuacaoPlain.posicao = `${index + 1}`; 
                return pontuacaoPlain;
            });

            res.render('home', { pontuacoes });
        } catch (error) {
            console.error(error);
            res.status(500).send("Erro ao recuperar pontuações");
        }
    }
};