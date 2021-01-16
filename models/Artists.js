const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Artists', {
    ArtistId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ProfilePhoto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Phone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    BirthDate: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    ArtistName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Gender: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CV: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Artists',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ArtistId" },
        ]
      },
    ]
  });
};
