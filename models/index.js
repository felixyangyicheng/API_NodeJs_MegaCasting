const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const { DB } = require("../config/db.config.js");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.artists = require("./artists.js")(sequelize, Sequelize);
db.offers = require("./Offers.js")(sequelize, Sequelize);

module.exports = db;