require("dotenv").config();
const { Sequelize } = require("sequelize");
const CountryModel = require('./models/Country')
const ActivityModel = require('./models/Activity')
const axios = require('axios');

// const fs = require('fs');
// const path = require('path');
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



CountryModel(sequelize);
ActivityModel(sequelize);

const { Country, Activity } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Country.belongsToMany(Activity, {through: "CountryActivity"});
Activity.belongsToMany(Country, {through: "CountryActivity"});



const getCountries = async(req, res) => { 
  const countries = [];
  try {
    const allCountries = await axios.get('http://localhost:5000/countries');  
    const data = allCountries.data;
    data.map((date) => { 
    const { fifa, name, flags, region, capital, subregion, area, population } = date
      const newCountry ={
        id: fifa,
        name: name.common,
        flags: flags.png,
        region,
        capital: capital[0],
        subregion,
        area,
        population
      }
    countries.push(newCountry)
    
    Country.bulkCreate(countries)
    .then (() => { console.log('La DB fue Cargada Exitosamente') })
    .catch ((error) => { console.log(error.message,' ubication see') })
    });

    
    // const dataB = await Country.findOrCreate({where : {  cca3, name, flags, region, capital, subregion, area, population }});
    //  res.json(dataB);  
     
  } catch (error) {
    (error.message)
  }
  }
  
  getCountries();


module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};