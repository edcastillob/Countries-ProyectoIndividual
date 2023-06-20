const { Router } = require("express");
const { Country, Activity } = require('../db');
const { Op } = require("sequelize");



const router = Router();

router.get('/countries', async(req, res) => {  
    let { name } = req.query;
    try {
        if(!name){
            let searchCountry = await Country.findAll({include: { model: Activity }});
            return res.status(200).json({searchCountry})
        }

        name = name.toLowerCase();
        name= name.charAt(0).toUpperCase() + name.slice(1);  
        let searchCountry = await Country.findAll({where: {name: name}, include: { model: Activity }});
    
        // if(searchCountry.length === 0) return res.status(404).json({message: 'Country not found'}) 
        if(searchCountry.length > 0) return res.status(200).json({searchCountry});
        
        let searchCountries = await Country.findAll({where: { name:{ [Op.iLike]: `%${req.query.name}%` }}, include: { model: Activity }});
        if(searchCountries.length !== 0) return res.status(200).json({searchCountries});
        return res.status(404).json({message: 'Country not found'})    
        
    } catch (error) {
        return res.status(404).json({message: 'Country not found'}) 
    }
})

router.get('/countries/:id', async(req, res) => { 
    
    try {
        const { id } = req.params;        
        let searchCountry = await Country.findByPk(id.toUpperCase(), {include: { model: Activity }});
        res.status(200).json({searchCountry})
        
    } catch (error) {
        return res.status(404).json({message: 'Country not found'}) 
    }

})

router.post('/activities', async(req, res) => { 
    
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
})

router.get('/activities', async(req, res) => {  
    
    try {   
        let searchActivity = await Activity.findAll();        
        if(searchActivity.length > 0) return res.status(200).json({searchActivity});      
        return res.status(404).json({message: 'Activity not found'}) 
    } catch (error) {
        return res.status(404).json({message: error}) 
    }
})

module.exports = router;
