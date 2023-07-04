const { Activity } = require('../../db');

const postActivity = async(req, res) => { 
    
    const { name, difficulty, duration, season, countries } = req.body;
	try {
            const newActivity = await Activity.create({ name, difficulty, duration, season });

             await countries?.map( element =>  newActivity.addCountry(element))          
            
                                               
            
            return res.status(200).send(`activity ${name} has been created`);
       
	} catch (error)  {

		return res.status(400).json({ error: error.message });
	}

};

module.exports = {postActivity}