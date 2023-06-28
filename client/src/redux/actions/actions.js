
import { SHOW_COUNTRIES, SEARCH_COUNTRIES_NAME, SEARCH_COUNTRIES_ID, POST_ACTIVITY_DATA, ORDER_BY_REGION, ORDER_ASC_DES,ORDER_ASC_DES_REGION, ORDER_POPULATION, ORDER_REGION, SHOW_ACTIVITIES } from "./types";
import { ENDPOINT, ENDPOINT2 } from '../../endpoint/ENDPOINT';

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


export const postActivityData = (payload) => {    
    return async(dispatch) => { 
    try { await axios.post(`${ENDPOINT2}/`, payload);         
                return  dispatch({ type: POST_ACTIVITY_DATA, payload: payload})
        }
     catch (error) {
        return (error.message)
    }
 }

}

export const orderByRegion = (region) => {   
      
    return {  type: ORDER_BY_REGION, payload: region }
}

export const orderAscDes = (order) => {   
      
    return {  type: ORDER_ASC_DES, payload: order }
}
export const orderAscDesRegion = (orderRegion) => {   
      
    return {  type: ORDER_ASC_DES_REGION, payload: orderRegion }
}

export const orderPopulation = (population) => {   
      
    return {  type: ORDER_POPULATION, payload: population }
}

export const orderRegion = (orderRegion) => {   
      
    return {  type: ORDER_REGION, payload: orderRegion }
}

export const showActivities = () => {   
      
    try {
        return async (dispatch) => { 
           const { data } = await axios.get(ENDPOINT2);
                return dispatch({ type: SHOW_ACTIVITIES, payload: data.searchActivity });
         }
    } catch (error) {
        return (error.message)
    }
}

