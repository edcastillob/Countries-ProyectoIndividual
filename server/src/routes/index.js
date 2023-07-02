const { Router } = require("express");
const { getCountries, getCountriesById } = require('../controllers/country/getCountries');
<<<<<<< HEAD
const { getActivity, getActivityCountry, getActivityCountryAll} = require('../controllers/activity/getActivity');
=======
const { getActivity, getActivityCountry } = require('../controllers/activity/getActivity');
>>>>>>> ff34d482a7ed0b676587ca19fe44b5904d467dbb
const { postActivity } = require('../controllers/activity/postActivity');
const { deleteActivity }  = require('../controllers/activity/deleteActivity');



const router = Router();

router.get('/countries', getCountries);
router.get('/countries/:id', getCountriesById);
router.get('/activities', getActivity);
router.get('/activitiescountry/:id', getActivityCountry);
<<<<<<< HEAD
router.get('/activitiescountry', getActivityCountryAll);
=======
>>>>>>> ff34d482a7ed0b676587ca19fe44b5904d467dbb
router.post('/activities', postActivity);
router.delete('/activities/:id', deleteActivity);




module.exports = router;
