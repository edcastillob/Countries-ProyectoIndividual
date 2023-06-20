const { Activity } = require('../../db');


const deleteActivity = async(req, res) => { 
      
    try {
        const { id } = req.params;
        console.log(id)
        const activity = await Activity.findByPk(id);
        activity.destroy();
        res.json(activity);        
    } catch (error) {
        res.status(400).send(error.message);
    }

};

module.exports = { deleteActivity };