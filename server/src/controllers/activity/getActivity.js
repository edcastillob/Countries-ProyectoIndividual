
<<<<<<< HEAD
const { Country, Activity, CountryActivity } = require('../../db');
const { Op } = require("sequelize");
=======
const {  Activity, CountryActivity } = require('../../db');

>>>>>>> ff34d482a7ed0b676587ca19fe44b5904d467dbb

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
              
        let searchActivityCountry = await CountryActivity.findAll({where: {ActivityId:id}}); 
        let activity =  await Activity.findByPk(id);   
        
        
        if(searchActivityCountry.length > 0) return res.status(200).json({searchActivityCountry, activity});      
        return res.status(404).json({message: 'Activity not found'}) 
    } catch (error) {
           return res.status(404).json({message: error})
           
    }

       
 
};

<<<<<<< HEAD


// const getActivityCountryAll = async (req, res) => {
//     try {
//         let allActivities = await Activity.findAll({
//             include: {
//                 model: Country,
//                 through: {
//                     attributes: [] // Excluye los atributos de la tabla intermedia
//                 }
//             },
//             where: {
//                 '$Countries.id$': {
//                     [Op.ne]: null // Filtra las actividades con un país asociado
//                 }
//             }
//         });

//         if (allActivities.length > 0) {
//             return res.status(200).json({ allActivities });
//         }

//         return res.status(404).json({ message: 'Activities with country not found' });

//     } catch (error) {
//         return res.status(404).json({ message: error });
//     }
// };

const getActivityCountryAll = async (req, res) => {
    try {
        let allActivities = await Activity.findAll({include: {model: Country,  attributes:
             ['id', 'name', 'region', 'capital',  'area', 'population']
            }
        });

        return res.status(200).json({ allActivities });

    } catch (error) {
        return res.status(404).json({ message: error });
    }
};

module.exports = {getActivity, getActivityCountry, getActivityCountryAll}
=======
module.exports = {getActivity, getActivityCountry}
>>>>>>> ff34d482a7ed0b676587ca19fe44b5904d467dbb
