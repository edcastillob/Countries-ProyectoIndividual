<<<<<<< HEAD
import { SEARCH_COUNTRIES_NAME, SHOW_COUNTRIES, SEARCH_COUNTRIES_ID, POST_ACTIVITY_DATA, ORDER_BY_REGION, ORDER_ASC_DES,ORDER_ASC_DES_REGION, ORDER_POPULATION, ORDER_REGION, SHOW_ACTIVITIES, GET_ACTIVITIES_COUNTRY, PAGINATION, ORDER_ASC_DES_COUNTRIES_NAME, ERRORS, GET_ACTIVITIES_COUNTRY_ALL } from "../actions/types";

const initialState = {
    errors:[],
=======
import { SEARCH_COUNTRIES_NAME, SHOW_COUNTRIES, SEARCH_COUNTRIES_ID, POST_ACTIVITY_DATA, ORDER_BY_REGION, ORDER_ASC_DES,ORDER_ASC_DES_REGION, ORDER_POPULATION, ORDER_REGION, SHOW_ACTIVITIES, GET_ACTIVITIES_COUNTRY, PAGINATION, ORDER_ASC_DES_COUNTRIES_NAME } from "../actions/types";

const initialState = {
>>>>>>> ff34d482a7ed0b676587ca19fe44b5904d467dbb
    activities:[],
    countries: [],
    currentPage:0,
    countryOrder:[],
    countryRegion:[],
    countriesName:[],
    countryDetail:[],
<<<<<<< HEAD
    countryActivity:[],
=======
>>>>>>> ff34d482a7ed0b676587ca19fe44b5904d467dbb
    activitiesForm:[],
    activitiesCountry:[],
    countryPopulation:[],
    countriesPopulation:[],
    countriesPagination:[],
    showActivitiesCountry: false,
   

}

const reducer = ( state = initialState, actions ) => {
    const ITEMS_FOR_PAGE = 10;
    switch (actions.type){
        case SHOW_COUNTRIES:
            return{
                ...state,
                countries: actions.payload,
                activitiesCountry:[],
                countriesPagination:[...actions.payload].splice(0, ITEMS_FOR_PAGE),
                countriesPopulation:[...actions.payload],
                
            }
        case SEARCH_COUNTRIES_NAME:
            return{
                ...state,
                activitiesCountry:[],
                countryPopulation:[],
                countriesPagination:[],
                countryRegion:[],
                activitiesCountry:[],
                countries:[],
                countriesName: actions.payload,
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
        const orderRegion = [...state.countriesPopulation].filter( (country )=> country.region === (actions.payload));
        
            if (actions.payload === 'All') {
                return{
                    ...state,
                    activitiesCountry:[],
                    countryPopulation:[],
                    countriesPagination:[],
                   
                    countryRegion: [...state.countries],
                }
            }else{

                return{
                    ...state,
                    // countryRegion: orderRegion
                   

                    activitiesCountry:[],
                    countryPopulation:[],
                    countriesPagination:[],
                    countryRegion: orderRegion, 
                }
            }
            
            case ORDER_ASC_DES:    
            console.log(actions.payload)
            console.log([...state.countries].length)
            const orderASC =  [...state.countries].sort((x, y) => x.name.localeCompare(y.name));
            const orderDES =  [...state.countries].sort((x, y) => y.name.localeCompare(x.name));
            if(actions.payload === 'Asc'){
                
                return{
                ...state,
                // countryPopulation:[],
                // activitiesCountry:[],
                countriesPagination:[],
                countries: orderASC,
            }
            }else if(actions.payload === 'Des'){
            
                return{
                        ...state,
                // countryPopulation:[],
                // activitiesCountry:[],
                countriesPagination:[],

                countries: orderDES,
            }
            }else{
                return{
                        ...state,
                countriesPagination:[],

                        countries: state.countries,
                        // activitiesCountry:[],
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
                        countryPopulation:[],
                    }
                }else if(actions.payload === 'Des'){
                    
                    return{
                        ...state,
                        countryRegion: orderDesR,
                        activitiesCountry:[],
                        countryPopulation:[],

                    }
                }else{
                    return{
                        ...state,
                        countryRegion: state.countryRegion,
                        activitiesCountry:[],
                        countryPopulation:[],

                    }
                }
                case ORDER_ASC_DES_COUNTRIES_NAME: 
                 
                
                const orderAscCountriesName =  [...state.countriesName].sort((x, y) => x.name.localeCompare(y.name));
                const orderDesCountriesName =  [...state.countriesName].sort((x, y) => y.name.localeCompare(x.name));
                console.log(orderAscCountriesName)
                if(actions.payload === 'Asc'){
                    
                    return{
                        ...state,
                        countriesName: orderAscCountriesName,
                        activitiesCountry:[],
                        countryPopulation:[],
                    }
                }
                    
                    return{
                        ...state,
                        countriesName: orderDesCountriesName,
                        activitiesCountry:[],
                        countryPopulation:[],

                    }
                

                case ORDER_POPULATION:
                    console.log(actions.payload)
                    console.log([...state.countries].length)
                    
        const bigPopulation =[...state.countriesPopulation].sort((x,y) => y.population - x.population);
        const smallPopulation =[...state.countriesPopulation].sort((x,y) => x.population - y.population);
        
        if(actions.payload === 'bigPopulation'){
           
            return{
                ...state,
                countries: [],
                countryRegion: [],
                activitiesCountry:[],
                countriesPagination:[],
                countryPopulation: bigPopulation,
                
            }
        }else if(actions.payload === 'smallPopulation'){
            
            return{
                ...state,
                countries: [],
                countryRegion: [],
                activitiesCountry:[],
                countriesPagination:[],
                countryPopulation: smallPopulation,
            }
        }else{
            return{
                ...state,
                countries: [],
                activitiesCountry:[],
                countryPopulation: state.countries,
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
                countries:[],
                // countriesPopulation:[],
                
            }
<<<<<<< HEAD
            case GET_ACTIVITIES_COUNTRY_ALL:
                    
            return{
                ...state,
                countryActivity:actions.payload,
                showActivitiesCountry: true,
                countryPopulation:[],
                countryRegion:[],
                countriesName:[],
                // countries:[],
                // countriesPopulation:[],
                
            }
=======
>>>>>>> ff34d482a7ed0b676587ca19fe44b5904d467dbb

            case PAGINATION:
            
            const nextPage = state.currentPage + 1;           
            const prevPage = state.currentPage - 1;    
            const index = actions.payload === 'next' ? (nextPage * ITEMS_FOR_PAGE) : (prevPage * ITEMS_FOR_PAGE);
          
            
            if(actions.payload === 'next' && index >= state.countries.length) {return {...state}
            }else if(actions.payload === 'prev' && prevPage < 0){return{...state}}   
            // console.log([...state.countries].splice(index, ITEMS_FOR_PAGE))
            // console.log(actions.payload === 'next' ? nextPage : prevPage)

            return{
                ...state,
                countriesPagination: [...state.countries].splice(index, ITEMS_FOR_PAGE),
                currentPage: actions.payload === 'next' ? nextPage : prevPage
            }
<<<<<<< HEAD

            case ERRORS:
                console.log("error :", actions.payload)
            return{...state, errors:actions.payload}
=======
>>>>>>> ff34d482a7ed0b676587ca19fe44b5904d467dbb
      
        default: 
            return { ...state }
    }
}; 

export default reducer;