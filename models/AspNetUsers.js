const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AspNetUsers', {
    Id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    UserName: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    NormalizedUserName: {
      type: DataTypes.STRING(256),
      allowNull: true,
      unique: "UserNameIndex"
    },
    Email: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    NormalizedEmail: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    EmailConfirmed: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PasswordHash: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SecurityStamp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ConcurrencyStamp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PhoneNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PhoneNumberConfirmed: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TwoFactorEnabled: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    LockoutEnd: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    LockoutEnabled: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    AccessFailedCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'AspNetUsers',
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
        name: "UserNameIndex",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NormalizedUserName" },
        ]
      },
      {
        name: "EmailIndex",
        using: "BTREE",
        fields: [
          { name: "NormalizedEmail" },
        ]
      },
    ]
  });
};
