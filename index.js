const express = require('express');
const exphbs = require("express-handlebars");
const sessions = require("express-session");
const FileStore = require("session-file-store")(sessions);
const flash = require("express-flash");
const path = require('path');

const app = express();

const conn = require("./db/conn");

// Models
const user = require('./models/User');
const pontuacao = require('./models/Pontuacao');

// Import Routes
const homeRoutes = require("./routes/homeRoutes");
const authRoutes = require("./routes/authRoutes");

// Import Controller
const HomeController = require('./controllers/HomeControler');

// Template engine
app.engine('handlebars', exphbs.engine({
    extname: 'handlebars',
    defaultLayout: 'layouts/main',
    layoutsDir: path.join(__dirname, 'views/'),
    partialsDir: [
        path.join(__dirname, 'views/'),
    ]
}));

app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'views'));

// receber resposta do body
app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

// session middleware
app.use(
    sessions({
        name: "session",
        secret: "nosso_secret",
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function () { },
            path: require("path").join(require('os').tmpdir(), 'sessions'),
        }),
        cookie: {
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now() + 360000),
            httpOnly: true
        }
    })
);

// flash messages
app.use(flash());

//public path
app.use(express.static('public'));

// set session to res
app.use((req, res, next) => {
    if (req.session.useid) {
        res.locals.session = req.session;
    }

    next();
});

//Routes
app.use('/home', homeRoutes);
app.use('/', authRoutes);
app.get('/', HomeController.acessoHome);


conn.sync().then(() => {
    app.listen(3000);
}).catch((err) => console.log(err));