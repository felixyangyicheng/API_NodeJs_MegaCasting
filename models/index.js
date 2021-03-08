const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const { DB, PORT } = require("../config/db.config.js");
const { RequestTimeout } = require("http-errors");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
    operatorsAliases: false,
  port:PORT,

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

db.artists = require("./Artists.js")(sequelize, Sequelize);
db.offers = require("./Offers.js")(sequelize, Sequelize);
db.contracts = require("./Contracts.js")(sequelize, Sequelize);
db.contracttypes = require("./ContractTypes")(sequelize, Sequelize);
db.professions = require("./Professions.js")(sequelize, Sequelize);
db.professionsectors = require("./ProfessionSectors.js")(sequelize, Sequelize);
db.studios = require("./Studios.js")(sequelize, Sequelize);
db.diffusionpartners = require("./DiffusionPartners.js")(sequelize, Sequelize);
db.aspnetusers = require("./AspNetUsers.js")(sequelize, Sequelize);
db.aspnetroles = require("./AspNetRoles.js")(sequelize, Sequelize);
db.aspnetuserroles = require("./AspNetUserRoles.js")(sequelize, Sequelize);

db.ROLES = ["user", "subcriber"];

module.exports = db;