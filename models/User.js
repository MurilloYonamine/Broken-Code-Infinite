const { DataTypes } = require('sequelize');
const db = require("../db/conn");

const User = db.define('tb_usuarios', {
    UsCodigo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    UsNome: {
        type: DataTypes.STRING,
        require: true,
    },
    UsNickname: {
        type: DataTypes.STRING,
        unique: true,
        require: true,
    },
    UsSenha: {
        type: DataTypes.STRING,
        require: true,
    }
}, {
    createdAt: 'DataCriacao',
    updatedAt: 'DataAtualizacao'
});


module.exports = User;
