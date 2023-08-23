const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('bdjogoti93', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', 
    timezone: '-03:00'
});

try {
    sequelize.authenticate();
    console.log(`Conectamos com sucesso!`);
} catch (err) {
    console.log(`Não foi possível conectar: ${err}`);
}

module.exports = sequelize;