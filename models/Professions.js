const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Professions', {
    ProfessionId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProfessionName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ProfessionSectorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ProfessionSectors',
        key: 'ProfessionSectorId'
      }
    }
  }, {
    sequelize,
    tableName: 'Professions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProfessionId" },
        ]
      },
      {
        name: "IX_Professions_ProfessionSectorId",
        using: "BTREE",
        fields: [
          { name: "ProfessionSectorId" },
        ]
      },
    ]
  });
};
