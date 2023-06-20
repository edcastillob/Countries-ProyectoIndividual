const { Country } = require('../db');


const getCountries = async(req, res) => { 
    
    const { name } = req.query;
    
    try {
        if (name){
            let searchCountry = await Country.findAll({where: {name: 'Colombia'}});
             if (searchCountry.length) return res.status(200).send(searchCountry);
         return res.status(400).send({message: ` Not exist countries ${name}`})
        }else{
         return res.status(200).send(DB)
        }
        
    } catch (error) {
        res.status(400).json({ err: error.message })
    }

};



module.exports = getCountries;