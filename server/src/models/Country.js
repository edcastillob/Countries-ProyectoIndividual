const { DataTypes } = require("sequelize");

const Country = (sequelize) => {
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.STRING(3),
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nameOfficial: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flags: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      region: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      area: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maps: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return Country;
};

module.exports = Country;
