const { Country, Activity } = require("../../db");
const { Op } = require("sequelize");

const getCountries = async (req, res) => {
  try {
    let { name } = req.query;

    if (!name || name === undefined) {
      let searchCountry = await Country.findAll({
        include: { model: Activity },
      });
      return res.status(200).json({ searchCountry });
    }

    name = name.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    let searchCountry = await Country.findAll({
      where: { name: { [Op.eq]: name } },
      include: { model: Activity },
    });
    if (searchCountry.length > 0)
      return res.status(200).json({ searchCountry });

    let searchCountries = await Country.findAll({
      where: { name: { [Op.iLike]: `%${req.query.name}%` } },
      include: { model: Activity },
    });
    if (searchCountries.length > 0)
      return res.status(200).json({ searchCountries });
    return res.status(404).json({ error: "Country not found" });
  } catch (error) {
    return res.status(400).json({ message: "Country not found Verify Conex" });
  }
};

const getCountriesById = async (req, res) => {
  try {
    const { id } = req.params;
    let searchCountry = await Country.findByPk(id.toUpperCase(), {
      include: { model: Activity },
    });
    res.status(200).json({ searchCountry });
  } catch (error) {
    return res.status(404).json({ message: "Country not found" });
  }
};

module.exports = { getCountries, getCountriesById };
