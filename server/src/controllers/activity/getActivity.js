
const {  Activity, CountryActivity } = require('../../db');


const getActivity = async(req, res) => { 
    try {   
        let searchActivity = await Activity.findAll();        
        if(searchActivity.length > 0) return res.status(200).json({searchActivity});      
        return res.status(404).json({message: 'Activity not found'}) 
    } catch (error) {
        return res.status(404).json({message: error}) 
    }

};

const getActivityCountry = async(req, res) => {  
   
    try {   
        let { id } = req.params;  
        console.log(req.params)        
        let searchActivityCountry = await CountryActivity.findAll({where: {ActivityId:id}}); 
        let activity =  await Activity.findByPk(id);   
      
        if(searchActivityCountry.length > 0) return res.status(200).json({searchActivityCountry, activity});      
        return res.status(404).json({message: 'Activity not found'}) 
    } catch (error) {
           return res.status(404).json({message: error})
    }

       
 
};

module.exports = {getActivity, getActivityCountry}