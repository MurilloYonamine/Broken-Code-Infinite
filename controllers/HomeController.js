module.exports = class HomeController {
    static async acessoHome(req, res) {
        res.render('home')
    }
};