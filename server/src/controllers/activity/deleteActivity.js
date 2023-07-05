const { Activity } = require("../../db");

const deleteActivity = async (req, res) => {
  try {
    const { id } = req.params;

    await Activity.destroy({ where: { id } });

    return res.status(200).json({ message: "Activity deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { deleteActivity };
