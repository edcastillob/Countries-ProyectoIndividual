const { Activity } = require('../../db');

const postActivity = async(req, res) => { 
    const { name, difficulty, duration, season, countries } = req.body;

	try {
      
		const searchActivity = await Activity.findOne({where: { name: name }});      
      
        
        if(!searchActivity ){
            const newActivity = await Activity.create({ name, difficulty, duration, season });
            await newActivity.addCountry(countries);		
            return res.status(200).send(`activity ${name} has been created`);
        }
        return res.status(200).json({ msg: `the activity ${name} already exists` });
	} catch (error) {
		return res.status(400).json({ error: "the data is wrong" });
	}

};

module.exports = {postActivity}