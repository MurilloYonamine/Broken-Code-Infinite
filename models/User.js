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
        allowNull: false
    },
    UsNickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    UsSenha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: 'DataCriacao', 
    updatedAt: 'DataAtualizacao'
});

module.exports = User;
