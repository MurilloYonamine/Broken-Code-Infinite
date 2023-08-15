const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.engine('handlebars', exphbs.engine());

app.set('view engine', "handlebars");

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/cadastro/usuarios', (req, res) => {
    const nome = req.body.nome;
    const senha = req.body.senha;

    const sql = `INSERT INTO tb_usuarios (Nome, Senha) VALUES('${nome}', '${senha}')`;

    conn.query(sql, (err) => {
        if (err) {
            console.log(err);
        }

        res.redirect('/');
    });
});

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdjogoti93'
});

conn.connect((err) => {
    if (err) {
        console.log(err);
    }

    console.log('Conectou ao MySQL!');

    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000.');
    });

});