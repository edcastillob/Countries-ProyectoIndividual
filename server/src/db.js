require("dotenv").config();
const { Sequelize } = require("sequelize");
const CountryModel = require('./models/Country')
const ActivityModel = require('./models/Activity')
const axios = require('axios');

const fs = require('fs');
const path = require('path');
const {  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, 

  {
  logging: false, 
  native: false, 
});

// const basename = path.basename(__filename);

// const modelDefiners = [];

// fs.readdirSync(path.join(__dirname, '/models'))
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     modelDefiners.push(require(path.join(__dirname, '/models', file)));
//   });


// modelDefiners.forEach(model => model(sequelize));

// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// sequelize.models = Object.fromEntries(capsEntries);

const getCountries = async(req, res) => { 

try {
  const allCountries = await axios.get('http://localhost:5000/countries');
  console.log(allCountries)
  const data = allCountries.data;
  const countries = data.map((date) => { 
  const { cca3, name, flags, region, capital, subregion, area, population } = date
    return {
      id: cca3,
      name, 
      flags: flags != null ? flags[0] : flags == 'No data',
      region,
      capital: capital != null ? capital[0] : capital == 'No data',
      subregion,
      area,
      population
    }
   })

   
} catch (error) {
  
}
}

getCountries();

CountryModel(sequelize);
ActivityModel(sequelize);

const { Country, Activity } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Country.belongsToMany(Activity, {through: "CountryActivity"});
Activity.belongsToMany(Country, {through: "CountryActivity"});

module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};