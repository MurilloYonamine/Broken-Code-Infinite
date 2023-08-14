const Sequelize = require("sequelize");

const connection = new Sequelize('bdjogoti93', 'root', '', { host: 'localhost' });

module.exports = connection;