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

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdjogoti93'
});

// CADASTRO DOS USUARIOS
app.post('/cadastro/usuarios', (req, res) => {
    const nome = req.body.cnome;
    const nick = req.body.cnick;
    const senha = req.body.csenha;

    const sql = `INSERT INTO tb_usuarios (Nome, Nickname, Senha) VALUES('${nome}', '${nick}', '${senha}')`;

    conn.query(sql, (err) => {
        if (err) {
            console.log(err);
        }

        res.redirect('/');
    });
});

// LOGIN DO USUARIO
app.post('/login/', (req, res) => {
    const nick = req.body.nick;
    const senha = req.body.senha;

    const sql = `SELECT * FROM tb_usuarios WHERE Nickname = '${nick}' and Senha = '${senha}'`;
    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err);
        }

        if (data.length > 0) {
            console.log('Deu certo!');
            res.render('login', { data });
            console.log(data);
            return;
        } else {
            alert("Não deu certo!");
            return;
        }
    });
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