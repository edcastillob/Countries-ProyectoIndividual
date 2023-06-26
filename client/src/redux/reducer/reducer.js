import { SEARCH_COUNTRIES_NAME, SHOW_COUNTRIES, SEARCH_COUNTRIES_ID, POST_ACTIVITY_DATA, ORDER_BY_REGION } from "../actions/types";

const initialState = {
    countries: [],
    countryDetail:[],
    countryRegion:[],
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
        case ORDER_BY_REGION:
            if (actions.payload === 'All') {
                return{
                    ...state,
                    countries:state.countries
                }
            }
        
            console.log('aqui llegue: ', actions.payload)
            const orderRegion = state.countries.filter( country => country.region.includes(actions.payload));
            console.log(orderRegion)
            return{
                ...state,
                countryRegion: state.orderRegion
            }
        default: 
            return { ...state }
    }
}; 

export default reducer;