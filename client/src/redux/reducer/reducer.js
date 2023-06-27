import { SEARCH_COUNTRIES_NAME, SHOW_COUNTRIES, SEARCH_COUNTRIES_ID, POST_ACTIVITY_DATA, ORDER_BY_REGION, ORDER_ASC_DES, ORDER_POPULATION } from "../actions/types";

const initialState = {
    countries: [],
    countryDetail:[],
    countryRegion:[],
    countryOrder:[],
    countryPopulation:[],
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
        const orderRegion = state.countries.filter( (country )=> country.region === (actions.payload));
        
            if (actions.payload !== 'All') {
                return{
                    ...state,
                    countryRegion:orderRegion
                }
            }else{

                return{
                    ...state,
                    countryRegion:state.countries
                }
            }
        
        case ORDER_ASC_DES:    
        const orderASC =  [...state.countries].sort((x, y) => x.name.localeCompare(y.name));
        const orderDES =  [...state.countries].sort((x, y) => y.name.localeCompare(x.name));
        if(actions.payload === 'Asc'){
            
            return{
                ...state,
                countries: orderASC
            }
        }else if(actions.payload === 'Des'){
            
            return{
                ...state,
                countries: orderDES
            }
        }else{
            return{
                ...state,
                countries: state.countries
            }
        }
        
        case ORDER_POPULATION:
        const bigPopulation =[...state.countries].sort((x,y) => y.population - x.population);
        const smallPopulation =[...state.countries].sort((x,y) => x.population - y.population);
        
        if(actions.payload === 'bigPopulation'){
           
            return{
                ...state,
                countryPopulation: bigPopulation
            }
        }else if(actions.payload === 'smallPopulation'){
            
            return{
                ...state,
                countryPopulation: smallPopulation
            }
        }else{
            return{
                ...state,
                countries: state.countries
            }
        }
        default: 
            return { ...state }
    }
}; 

export default reducer;