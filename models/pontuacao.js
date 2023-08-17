const { DataTypes } = require('sequelize');

const db = require("../db/conn");

const User = require("../models/User");

const Pontuacao = db.define('Pontuacao', {
    Pontuacao: {
        type: DataTypes.INTEGER,
        require: true
    }
});

Pontuacao.belongsTo(User);
User.hasMany(Pontuacao);

module.exports = User;