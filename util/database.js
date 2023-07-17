const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodeComplete', 'root', 'Urbaniak123', {dialect: 'mysql', host: 'localhost'})

module.exports = sequelize