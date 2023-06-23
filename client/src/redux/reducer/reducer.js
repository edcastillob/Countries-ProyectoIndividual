import { SEARCH_COUNTRIES_NAME, SHOW_COUNTRIES, SEARCH_COUNTRIES_ID } from "../actions/types";

const initialState = {
    countries: [],
    countryDetail:[],

}

const reducer = ( state = initialState, actions ) => {
    switch (actions.type){
        case SHOW_COUNTRIES:
            return{
                ...state,
                countries: actions.payload,
            }
        case SEARCH_COUNTRIES_NAME:
            return{
                ...state,
                countries: actions.payload,
            }
        case SEARCH_COUNTRIES_ID:
            return{
                ...state,
                countryDetail:[ actions.payload],
            }
        default: 
            return { ...state }
    }
}; 

export default reducer;