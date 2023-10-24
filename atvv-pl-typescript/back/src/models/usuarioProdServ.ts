import {  } from 'mysql2';

const Sequelize = require('sequelize');
const database = require('./connect')

 
const usuarioProdServ = database.define('usuarioProdServ', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_cliente: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome_sp: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantidade : {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    racapet : {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipopet : {
        type: Sequelize.STRING,
        allowNull: false
    }
})

usuarioProdServ.sync({ alter: true });

module.exports = usuarioProdServ;