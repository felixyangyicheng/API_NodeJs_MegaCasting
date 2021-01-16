const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Studios', {
    StudioId: {
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
    StudioName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    PostCode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    City: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Studios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "StudioId" },
        ]
      },
    ]
  });
};
