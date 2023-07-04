const { Country } = require('../db');
const axios = require('axios');


async function fCargarDB(){


  const conexApi = await axios.get('http://localhost:5000/countries');
  let countries = conexApi.data.map((e) => {
      return {
        id: e.cca3,
        name: e.name.common,
        nameOfficial: e.name.official,
        flags: e.flags.png,
        region: e.region,
        capital: e.capital ? String(e.capital) : 'does not register capital',
        subregion: e.subregion ? e.subregion : 'does not register subregion',
        area: e.area,
        population: e.population,
        maps: e.maps.googleMaps
        }
      })
        await Country.bulkCreate(countries);
        console.log('DataBase Created...')

      
  }

  module.exports = fCargarDB;