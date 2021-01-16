const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Offers', {
    OfferId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    PublishDate: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    OfferDuration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AvailablePlace: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OfferDescription: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ProfilDescription: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Location: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    OfferReference: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    StudioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Studios',
        key: 'StudioId'
      }
    },
    ProfessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Professions',
        key: 'ProfessionId'
      }
    }
  }, {
    sequelize,
    tableName: 'Offers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "OfferId" },
        ]
      },
      {
        name: "IX_Offers_ProfessionId",
        using: "BTREE",
        fields: [
          { name: "ProfessionId" },
        ]
      },
      {
        name: "IX_Offers_StudioId",
        using: "BTREE",
        fields: [
          { name: "StudioId" },
        ]
      },
    ]
  });
};
