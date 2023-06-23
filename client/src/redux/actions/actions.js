
import { SHOW_COUNTRIES, SEARCH_COUNTRIES_NAME, SEARCH_COUNTRIES_ID } from "./types";
import { ENDPOINT } from '../../endpoint/ENDPOINT';
import axios from 'axios';



export const showCountries = () => {
    
    try {
        return async (dispatch) => { 
           const { data } = await axios.get(ENDPOINT);
                return dispatch({ type: SHOW_COUNTRIES, payload: data.searchCountry });
         }
    } catch (error) {
        return (error.message)
    }
};

export const searchCountryName = (name) => { 
    try {
        return async(dispatch) => { 
            const { data } = await axios.get(`${ENDPOINT}?name=${name}`);
           
                return dispatch({ type: SEARCH_COUNTRIES_NAME, payload: data.searchCountries })
        };
    } catch (error) {
        return (error.message)
    }
};

export const searchCountryID = (id) => { 
    try {
        return async(dispatch) => { 
            const { data } = await axios.get(`${ENDPOINT}/${id}`);         
                return dispatch({ type: SEARCH_COUNTRIES_ID, payload: data.searchCountry })
        };
    } catch (error) {
        return (error.message)
    }
};