const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AspNetRoleClaims', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RoleId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'AspNetRoles',
        key: 'Id'
      }
    },
    ClaimType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ClaimValue: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AspNetRoleClaims',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
        ]
      },
      {
        name: "IX_AspNetRoleClaims_RoleId",
        using: "BTREE",
        fields: [
          { name: "RoleId" },
        ]
      },
    ]
  });
};
