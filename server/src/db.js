require("dotenv").config();
const { Sequelize } = require("sequelize");
const CountryModel = require("./models/Country");
const ActivityModel = require("./models/Activity");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DEPLOY } = process.env;
// const sequelize = new Sequelize( DB_DEPLOY,

//   {
//   logging: false,
//   native: false,
// });
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

CountryModel(sequelize);
ActivityModel(sequelize);

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, { through: "CountryActivity" });
Activity.belongsToMany(Country, { through: "CountryActivity" });

module.exports = { ...sequelize.models, conn: sequelize };
