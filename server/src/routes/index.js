const { Router } = require("express");
const { getCountries, getCountriesById } = require('../controllers/country/getCountries');
const { getActivity, getActivityCountry } = require('../controllers/activity/getActivity');
const { postActivity } = require('../controllers/activity/postActivity');
const { deleteActivity }  = require('../controllers/activity/deleteActivity');



const router = Router();

router.get('/countries', getCountries);
router.get('/countries/:id', getCountriesById);
router.get('/activities', getActivity);
router.get('/activitiescountry/:id', getActivityCountry);
router.post('/activities', postActivity);
router.delete('/activities/:id', deleteActivity);




module.exports = router;
