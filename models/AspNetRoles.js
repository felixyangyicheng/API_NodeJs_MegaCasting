const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AspNetRoles', {
    Id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    NormalizedName: {
      type: DataTypes.STRING(256),
      allowNull: true,
      unique: "RoleNameIndex"
    },
    ConcurrencyStamp: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AspNetRoles',
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
        name: "RoleNameIndex",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NormalizedName" },
        ]
      },
    ]
  });
};
