
import { SHOW_COUNTRIES, SEARCH_COUNTRIES_NAME } from "./types";
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
                return dispatch({ type: SEARCH_COUNTRIES_NAME, payload: data.searchCountry })
        };
    } catch (error) {
        return (error.message)
    }
};
