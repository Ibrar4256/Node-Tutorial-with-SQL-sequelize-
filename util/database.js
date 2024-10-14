const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-guide', 'root', 'Ibrartechverx23#', {
  dialect: 'mysql',
  host: 'localhost',
  dialectModule: require('mysql2'),
});

module.exports = sequelize;
