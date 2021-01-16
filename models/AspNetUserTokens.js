const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AspNetUserTokens', {
    UserId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'AspNetUsers',
        key: 'Id'
      }
    },
    LoginProvider: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    Value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AspNetUserTokens',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UserId" },
          { name: "LoginProvider" },
          { name: "Name" },
        ]
      },
    ]
  });
};
