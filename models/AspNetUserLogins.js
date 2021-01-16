const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AspNetUserLogins', {
    LoginProvider: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    ProviderKey: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    ProviderDisplayName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UserId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'AspNetUsers',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'AspNetUserLogins',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LoginProvider" },
          { name: "ProviderKey" },
        ]
      },
      {
        name: "IX_AspNetUserLogins_UserId",
        using: "BTREE",
        fields: [
          { name: "UserId" },
        ]
      },
    ]
  });
};
