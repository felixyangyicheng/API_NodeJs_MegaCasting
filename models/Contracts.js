const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Contracts', {
    ContractId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ContractBegins: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    ContractDuration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ContractReference: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    ContractPdfFile: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ContractTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ContractTypes',
        key: 'ContractTypeId'
      }
    }
  }, {
    sequelize,
    tableName: 'Contracts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ContractId" },
        ]
      },
      {
        name: "IX_Contracts_ContractTypeId",
        using: "BTREE",
        fields: [
          { name: "ContractTypeId" },
        ]
      },
    ]
  });
};
