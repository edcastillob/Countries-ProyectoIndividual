require("dotenv").config();
const { Sequelize, json } = require("sequelize");
const CountryModel = require('./models/Country')
const ActivityModel = require('./models/Activity')
const axios = require('axios');


const {  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, 
  {
  logging: false, 
  native: false, 
});




CountryModel(sequelize);
ActivityModel(sequelize);

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, {through: "CountryActivity"});
Activity.belongsToMany(Country, {through: "CountryActivity"});

async function dataB(){
  const apiCountriesResponse = await axios.get('http://localhost:5000/countries');
  let apiCountries = apiCountriesResponse.data.map((e) => {
      return {
        id: e.cca3,
        name: e.name.common,
        flags: e.flags.png,
        region: e.region,
        capital: e.capital ? String(e.capital) : 'Without capital',
        subregion: e.subregion ? e.subregion : 'Without subregion',
        area: e.area,
        population: e.population
        }
      })
        await Country.bulkCreate(apiCountries);
        console.log('bbd creada')
    
}

dataB()

module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};