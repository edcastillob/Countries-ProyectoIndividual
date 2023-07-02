<<<<<<< HEAD
/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
import { SHOW_COUNTRIES, SEARCH_COUNTRIES_NAME, SEARCH_COUNTRIES_ID, POST_ACTIVITY_DATA, ORDER_BY_REGION, ORDER_ASC_DES,ORDER_ASC_DES_REGION, ORDER_POPULATION, ORDER_REGION, SHOW_ACTIVITIES, GET_ACTIVITIES_COUNTRY, PAGINATION, ORDER_ASC_DES_COUNTRIES_NAME, GET_ACTIVITIES_COUNTRY_ALL } from "./types";
=======

import { SHOW_COUNTRIES, SEARCH_COUNTRIES_NAME, SEARCH_COUNTRIES_ID, POST_ACTIVITY_DATA, ORDER_BY_REGION, ORDER_ASC_DES,ORDER_ASC_DES_REGION, ORDER_POPULATION, ORDER_REGION, SHOW_ACTIVITIES, GET_ACTIVITIES_COUNTRY, PAGINATION, ORDER_ASC_DES_COUNTRIES_NAME } from "./types";
>>>>>>> ff34d482a7ed0b676587ca19fe44b5904d467dbb
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
<<<<<<< HEAD
                
            if(data.searchCountries) return dispatch({ type: SEARCH_COUNTRIES_NAME, payload: data.searchCountries }) 
            if(data.searchCountry)return dispatch({ type: SEARCH_COUNTRIES_NAME, payload: data.searchCountry })    
            // dispatch({ type: ERRORS, payload: 'No existe el pais'})
        };
        
    } catch (error) {
        alert(error.response.data)// return (error.message)
=======
           
                return dispatch({ type: SEARCH_COUNTRIES_NAME, payload: data.searchCountries })
        };
    } catch (error) {
        return (error.message)
>>>>>>> ff34d482a7ed0b676587ca19fe44b5904d467dbb
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
export const getActivitiesCountry = (id) => { 
    try {
        return async(dispatch) => { 
            const { data } = await axios.get(`${ENDPOINT2}country/${id}`); 
                  
                return dispatch({ type: GET_ACTIVITIES_COUNTRY, payload: [data]})
        };
    } catch (error) {
        return (error.message)
    }
};
<<<<<<< HEAD
export const getActivitiesCountryAll = () => { 
    try {
        return async(dispatch) => { 
            const { data } = await axios.get(`${ENDPOINT2}country`); 
                
                return dispatch({ type: GET_ACTIVITIES_COUNTRY_ALL, payload: data})
        };
    } catch (error) {
        return (error.message)
    }
};

=======
>>>>>>> ff34d482a7ed0b676587ca19fe44b5904d467dbb


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
      console.log(order)
    return {  type: ORDER_ASC_DES, payload: order }
}
export const orderAscDesRegion = (orderRegion) => {   
      
    return {  type: ORDER_ASC_DES_REGION, payload: orderRegion }
}
export const orderAscDesCountriesName = (orderRegion) => {   
      
    return {  type: ORDER_ASC_DES_COUNTRIES_NAME, payload: orderRegion }
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

export const pagination = (pagination) => {   
   
    return {  type: PAGINATION, payload: pagination }
}
