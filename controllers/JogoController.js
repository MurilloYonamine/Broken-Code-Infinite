const Pontuacao = require("../models/Pontuacao");

module.exports = class JogoController {
    static acessoJogo(req, res) {
        const userId = req.params.userId;
        res.render(`jogo/index`, {userId});
    }
    static async pontuacaoJogo(req, res) {
        // Acesse o ID do usuário da sessão
        const userId = req.params.userId;
        const score = req.body.score;
        console.lo(userId)
        const user = {
            PoUsCodigo: userId,
            PoPontuacao: score,
        };

        try {
            await Pontuacao.create(user);
            res.redirect("/");

        } catch (err) {
            console.log(err);
        }
    }
};
