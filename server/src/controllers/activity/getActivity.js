const { Activity } = require('../../db');


const getActivity = async(req, res) => { 
    try {   
        let searchActivity = await Activity.findAll();        
        if(searchActivity.length > 0) return res.status(200).json({searchActivity});      
        return res.status(404).json({message: 'Activity not found'}) 
    } catch (error) {
        return res.status(404).json({message: error}) 
    }

};

module.exports = {getActivity}