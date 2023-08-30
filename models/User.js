const { DataTypes } = require('sequelize');
const db = require("../db/conn");

const User = db.define('tb_usuarios', {
    UsCodigo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    UsNome: {
        type: DataTypes.STRING(50),
        require: true,
    },
    UsNickname: {
        type: DataTypes.STRING(3),
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
