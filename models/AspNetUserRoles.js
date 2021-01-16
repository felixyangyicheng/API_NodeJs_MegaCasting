const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AspNetUserRoles', {
    UserId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'AspNetUsers',
        key: 'Id'
      }
    },
    RoleId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'AspNetRoles',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'AspNetUserRoles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UserId" },
          { name: "RoleId" },
        ]
      },
      {
        name: "IX_AspNetUserRoles_RoleId",
        using: "BTREE",
        fields: [
          { name: "RoleId" },
        ]
      },
    ]
  });
};
