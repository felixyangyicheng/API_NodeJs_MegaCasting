const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DiffusionPartners', {
    DiffusionPartnerId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Siret: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    Address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AddressNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Phone: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    DiffusionPartnerName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    PostCode: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    City: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'DiffusionPartners',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DiffusionPartnerId" },
        ]
      },
    ]
  });
};
