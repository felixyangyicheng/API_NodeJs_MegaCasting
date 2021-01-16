const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('__EFMigrationsHistory', {
    MigrationId: {
      type: DataTypes.STRING(95),
      allowNull: false,
      primaryKey: true
    },
    ProductVersion: {
      type: DataTypes.STRING(32),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: '__EFMigrationsHistory',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MigrationId" },
        ]
      },
    ]
  });
};
