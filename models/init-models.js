var DataTypes = require("sequelize").DataTypes;
var _Artists = require("./Artists");
var _AspNetRoleClaims = require("./AspNetRoleClaims");
var _AspNetRoles = require("./AspNetRoles");
var _AspNetUserClaims = require("./AspNetUserClaims");
var _AspNetUserLogins = require("./AspNetUserLogins");
var _AspNetUserRoles = require("./AspNetUserRoles");
var _AspNetUserTokens = require("./AspNetUserTokens");
var _AspNetUsers = require("./AspNetUsers");
var _ContractTypes = require("./ContractTypes");
var _Contracts = require("./Contracts");
var _DiffusionPartners = require("./DiffusionPartners");
var _Offers = require("./Offers");
var _ProfessionSectors = require("./ProfessionSectors");
var _Professions = require("./Professions");
var _Studios = require("./Studios");
var ___EFMigrationsHistory = require("./__EFMigrationsHistory");

function initModels(sequelize) {
  var Artists = _Artists(sequelize, DataTypes);
  var AspNetRoleClaims = _AspNetRoleClaims(sequelize, DataTypes);
  var AspNetRoles = _AspNetRoles(sequelize, DataTypes);
  var AspNetUserClaims = _AspNetUserClaims(sequelize, DataTypes);
  var AspNetUserLogins = _AspNetUserLogins(sequelize, DataTypes);
  var AspNetUserRoles = _AspNetUserRoles(sequelize, DataTypes);
  var AspNetUserTokens = _AspNetUserTokens(sequelize, DataTypes);
  var AspNetUsers = _AspNetUsers(sequelize, DataTypes);
  var ContractTypes = _ContractTypes(sequelize, DataTypes);
  var Contracts = _Contracts(sequelize, DataTypes);
  var DiffusionPartners = _DiffusionPartners(sequelize, DataTypes);
  var Offers = _Offers(sequelize, DataTypes);
  var ProfessionSectors = _ProfessionSectors(sequelize, DataTypes);
  var Professions = _Professions(sequelize, DataTypes);
  var Studios = _Studios(sequelize, DataTypes);
  var __EFMigrationsHistory = ___EFMigrationsHistory(sequelize, DataTypes);

  AspNetRoles.belongsToMany(AspNetUsers, { through: AspNetUserRoles, foreignKey: "RoleId", otherKey: "UserId" });
  AspNetUsers.belongsToMany(AspNetRoles, { through: AspNetUserRoles, foreignKey: "UserId", otherKey: "RoleId" });
  AspNetRoleClaims.belongsTo(AspNetRoles, { foreignKey: "RoleId"});
  AspNetRoles.hasMany(AspNetRoleClaims, { foreignKey: "RoleId"});
  AspNetUserClaims.belongsTo(AspNetUsers, { foreignKey: "UserId"});
  AspNetUsers.hasMany(AspNetUserClaims, { foreignKey: "UserId"});
  AspNetUserLogins.belongsTo(AspNetUsers, { foreignKey: "UserId"});
  AspNetUsers.hasMany(AspNetUserLogins, { foreignKey: "UserId"});
  AspNetUserRoles.belongsTo(AspNetUsers, { foreignKey: "UserId"});
  AspNetUsers.hasMany(AspNetUserRoles, { foreignKey: "UserId"});
  AspNetUserRoles.belongsTo(AspNetRoles, { foreignKey: "RoleId"});
  AspNetRoles.hasMany(AspNetUserRoles, { foreignKey: "RoleId"});
  AspNetUserTokens.belongsTo(AspNetUsers, { foreignKey: "UserId"});
  AspNetUsers.hasMany(AspNetUserTokens, { foreignKey: "UserId"});
  Contracts.belongsTo(ContractTypes, { foreignKey: "ContractTypeId"});
  ContractTypes.hasMany(Contracts, { foreignKey: "ContractTypeId"});
  Offers.belongsTo(Professions, { foreignKey: "ProfessionId"});
  Professions.hasMany(Offers, { foreignKey: "ProfessionId"});
  Offers.belongsTo(Studios, { foreignKey: "StudioId"});
  Studios.hasMany(Offers, { foreignKey: "StudioId"});
  Professions.belongsTo(ProfessionSectors, { foreignKey: "ProfessionSectorId"});
  ProfessionSectors.hasMany(Professions, { foreignKey: "ProfessionSectorId"});

  return {
    Artists,
    AspNetRoleClaims,
    AspNetRoles,
    AspNetUserClaims,
    AspNetUserLogins,
    AspNetUserRoles,
    AspNetUserTokens,
    AspNetUsers,
    ContractTypes,
    Contracts,
    DiffusionPartners,
    Offers,
    ProfessionSectors,
    Professions,
    Studios,
    __EFMigrationsHistory,
  };
}


module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
