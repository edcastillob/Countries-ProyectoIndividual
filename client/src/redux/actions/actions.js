import {
  GET_ACTIVITIES_COUNTRY,
  GET_ACTIVITIES_COUNTRY_ALL,
  ORDER_ASC_DES,
  ORDER_ASC_DES_COUNTRIES_NAME,
  ORDER_ASC_DES_REGION,
  ORDER_BY_REGION,
  ORDER_POPULATION,
  ORDER_REGION,
  PAGINATION,
  POST_ACTIVITY_DATA,
  SEARCH_COUNTRIES_ID,
  SEARCH_COUNTRIES_NAME,
  SHOW_ACTIVITIES,
  SHOW_COUNTRIES,
} from "./types";

import { ENDPOINT, ENDPOINT2 } from "../../endpoint/ENDPOINT";
import axios from "axios";


export const showCountries = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(ENDPOINT);
      return dispatch({ type: SHOW_COUNTRIES, payload: data.searchCountry });
    };
  } catch (error) {
    return error.message;
  }
};

export const searchCountryName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${ENDPOINT}?name=${name}`);

      if (response.data.searchCountries) {
        dispatch({
          type: SEARCH_COUNTRIES_NAME,
          payload: response.data.searchCountries,
        });
      } else if (response.data.searchCountry) {
        dispatch({
          type: SEARCH_COUNTRIES_NAME,
          payload: response.data.searchCountry,
        });
      } else {
        alert("No se encontraron resultados");
      }
    } catch (error) {
      alert("No se encontraron resultados");
    }
  };
};

export const searchCountryID = (id) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${ENDPOINT}/${id}`);
      return dispatch({
        type: SEARCH_COUNTRIES_ID,
        payload: data.searchCountry,
      });
    };
  } catch (error) {
    return error.message;
  }
};
export const getActivitiesCountry = (id) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${ENDPOINT2}country/${id}`);

      return dispatch({ type: GET_ACTIVITIES_COUNTRY, payload: [data] });
    };
  } catch (error) {
    return error.message;
  }
};
export const getActivitiesCountryAll = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${ENDPOINT2}country`);

      return dispatch({ type: GET_ACTIVITIES_COUNTRY_ALL, payload: data });
    };
  } catch (error) {
    return error.message;
  }
};

export const deleteActivity = (id) => {
  try {
    return async () => {
      await axios.delete(`${ENDPOINT2}/${id}`);
    };
  } catch (error) {
    return error.message;
  }
};

export const postActivityData = (payload) => {
  return async (dispatch) => {
    try {
      await axios.post(`${ENDPOINT2}/`, payload);
      return dispatch({ type: POST_ACTIVITY_DATA, payload: payload });
    } catch (error) {
      return error.message;
    }
  };
};

export const orderByRegion = (region) => {
  return { type: ORDER_BY_REGION, payload: region };
};

export const orderAscDes = (order) => { 
  return { type: ORDER_ASC_DES, payload: order };
};
export const orderAscDesRegion = (orderRegion) => {
  return { type: ORDER_ASC_DES_REGION, payload: orderRegion };
};
export const orderAscDesCountriesName = (orderRegion) => {
  return { type: ORDER_ASC_DES_COUNTRIES_NAME, payload: orderRegion };
};
export const orderPopulation = (population) => {
  return { type: ORDER_POPULATION, payload: population };
};

export const orderRegion = (orderRegion) => {
  return { type: ORDER_REGION, payload: orderRegion };
};

export const showActivities = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(ENDPOINT2);
      return dispatch({ type: SHOW_ACTIVITIES, payload: data.searchActivity });
    };
  } catch (error) {
    return error.message;
  }
};

export const pagination = (pagination) => {
  return { type: PAGINATION, payload: pagination };
};
