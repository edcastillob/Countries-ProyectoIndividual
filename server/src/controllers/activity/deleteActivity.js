const { Activity } = require('../../db');



const deleteActivity = async (req, res) => {
    try {
        const { id } = req.params;
    //    console.log(id)
        await Activity.destroy({ where: { id } });
        
        return res.status(200).json({ message: 'Activity deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { deleteActivity };
// const deleteActivity = async(req, res) => { 
      
//     try {
//         const { id } = req.params;
//         console.log(id)
//         const activity = await Activity.findByPk(id);
//         activity.destroy();
//         res.json(activity);        
//     } catch (error) {
//         res.status(400).send(error.message);
//     }

// };