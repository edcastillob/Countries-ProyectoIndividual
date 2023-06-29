import { SEARCH_COUNTRIES_NAME, SHOW_COUNTRIES, SEARCH_COUNTRIES_ID, POST_ACTIVITY_DATA, ORDER_BY_REGION, ORDER_ASC_DES,ORDER_ASC_DES_REGION, ORDER_POPULATION, ORDER_REGION, SHOW_ACTIVITIES, GET_ACTIVITIES_COUNTRY } from "../actions/types";

const initialState = {
    activities:[],
    countries: [],
    // currentPage:0,
    countryOrder:[],
    countryRegion:[],
    countriesName:[],
    countryDetail:[],
    activitiesCountry:[],
    countryPopulation:[],
    // countriesPagination:[],
    showActivitiesCountry: false,

}

const reducer = ( state = initialState, actions ) => {
    // const ITEMS_FOR_PAGE = 2;
    switch (actions.type){
        case SHOW_COUNTRIES:
            return{
                ...state,
                countries: actions.payload,
                activitiesCountry:[],
                
            }
        case SEARCH_COUNTRIES_NAME:
            return{
                ...state,
                countriesName: actions.payload,
                activitiesCountry:[],
                countryPopulation:[],
                countryRegion:[],
                activitiesCountry:[],
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
        const orderRegion = [...state.countries].filter( (country )=> country.region === (actions.payload));
        
            if (actions.payload === 'All') {
                return{
                    ...state,
                    countryRegion: [...state.countries],
                    activitiesCountry:[],
                }
            }else{

                return{
                    ...state,
                    // countryRegion: orderRegion
                    countryRegion: orderRegion, 
                    activitiesCountry:[],
                }
            }
            
            case ORDER_ASC_DES:    
            const orderASC =  [...state.countries].sort((x, y) => x.name.localeCompare(y.name));
            const orderDES =  [...state.countries].sort((x, y) => y.name.localeCompare(x.name));
            if(actions.payload === 'Asc'){
                
                    return{
                ...state,
                countryPopulation:[],
                countries: orderASC,
                activitiesCountry:[],
            }
        }else if(actions.payload === 'Des'){
            
                return{
                        ...state,
                countryPopulation:[],
                countries: orderDES,
                activitiesCountry:[],
            }
        }else{
                return{
                        ...state,
                        countries: state.countries,
                        activitiesCountry:[],
                    }
                }
                
                case ORDER_ASC_DES_REGION: 
                 
                
                const orderAscR =  [...state.countryRegion].sort((x, y) => x.name.localeCompare(y.name));
                const orderDesR =  [...state.countryRegion].sort((x, y) => y.name.localeCompare(x.name));
                if(actions.payload === 'Asc'){
                    
                    return{
                        ...state,
                        countryRegion: orderAscR,
                        activitiesCountry:[],
                    }
                }else if(actions.payload === 'Des'){
                    
                    return{
                        ...state,
                        countryRegion: orderDesR,
                        activitiesCountry:[],
                    }
                }else{
                    return{
                        ...state,
                        countryRegion: state.countryRegion,
                        activitiesCountry:[],
                    }
                }

                case ORDER_POPULATION:
        const bigPopulation =[...state.countries].sort((x,y) => y.population - x.population);
        const smallPopulation =[...state.countries].sort((x,y) => x.population - y.population);
        
        if(actions.payload === 'bigPopulation'){
           
            return{
                ...state,
                countryRegion: [],
                countryPopulation: bigPopulation,
                activitiesCountry:[],
                
            }
        }else if(actions.payload === 'smallPopulation'){
            
            return{
                ...state,
                countryPopulation: smallPopulation,
                countryRegion: [],
                activitiesCountry:[],
            }
        }else{
            return{
                ...state,
                countryPopulation: state.countries,
                activitiesCountry:[],
            }
        }

        case ORDER_REGION:
            const orderRAsc =  [...state.countryRegion].sort((x, y) => x.name.localeCompare(y.name));
            const orderRDes =  [...state.countryRegion].sort((x, y) => y.name.localeCompare(x.name));
            if(actions.payload === 'Asc'){
                
                return{
                    ...state,
                    countries: orderRAsc,
                    
                    
                }
            }else if(actions.payload === 'Des'){
                
                return{
                    ...state,
                    countries: orderRDes,
                    
                }
            }else{
                return{
                    ...state,
                    countryRegion: state.countryRegion,
                    
                }
            }
            
            case SHOW_ACTIVITIES:
            return{
                ...state,
                activities: actions.payload,
            }

            case GET_ACTIVITIES_COUNTRY:
            return{
                ...state,
                activitiesCountry:actions.payload,
                showActivitiesCountry: true,
                countryPopulation:[],
                countryRegion:[],
                countriesName:[],
                
            }

            // case PAGINATION:
            
            // const nextPage = state.currentPage + 1; 
            // const prevPage = state.currentPage - 1;  
            // const index = actions.payload === 'index' ? (nextPage * ITEMS_FOR_PAGE) : (prevPage * ITEMS_FOR_PAGE);

            // if(state.countryPopulation){
            //     if(index >= state.countryPopulation.length) {return{...state}}
            //     console.log( [...state.countryPopulation].splice(index, ITEMS_FOR_PAGE))
            //     return{
            //         ...state,
            //     countryPopulation: [...state.countryPopulation].splice(index, ITEMS_FOR_PAGE),
            //     currentPage: actions.payload === 'next' ? nextPage : prevPage
            // }
            // }
            
            // if(actions.payload === 'next' && index >= state.countries.length) {return {...state}
            // }else if(actions.payload === 'prev' && prevPage < 0){return{...state}}            
            // return{
            //     ...state,
            //     countriesPagination: [...state.countries].splice(index, ITEMS_FOR_PAGE),
            //     currentPage: actions.payload === 'next' ? nextPage : prevPage
            // }
      
        default: 
            return { ...state }
    }
}; 

export default reducer;