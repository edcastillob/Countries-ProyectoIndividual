import { SEARCH_COUNTRIES_NAME, SHOW_COUNTRIES, SEARCH_COUNTRIES_ID, POST_ACTIVITY_DATA } from "../actions/types";

const initialState = {
    countries: [],
    countryDetail:[],
    activities:[],

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
        case POST_ACTIVITY_DATA:
            return{
                ...state,
                activities:[...state.activities, payload]
            }
        default: 
            return { ...state }
    }
}; 

export default reducer;