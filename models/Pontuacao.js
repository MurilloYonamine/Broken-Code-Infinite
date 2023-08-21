const { DataTypes } = require('sequelize');
const db = require("../db/conn");
const User = require("./User");

const Pontuacao = db.define('tb_pontuacao', {
    PoCodigo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    PoUsCodigo: { 
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'UsCodigo'
        }
    },
    PoPontuacao: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'tb_pontuacao',
    createdAt: 'DataCriacao', 
    updatedAt: 'DataAtualizacao',
    indexes: [
        {
            name: 'FK_PoUsCodigo', 
            fields: ['PoUsCodigo']
        }
    ]
});
Pontuacao.belongsTo(User, { foreignKey: 'PoUsCodigo' }); 

module.exports = Pontuacao;
