const { DataTypes, DATEONLY } = require('sequelize');

// module.exports = (sequelize) => {
const Country = (sequelize) => {

  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING(3),
      allowNull: false,      
      primaryKey: true,  
      
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    region:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    subregion:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    area:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
     timestamps: false
  });
};

module.exports = Country;