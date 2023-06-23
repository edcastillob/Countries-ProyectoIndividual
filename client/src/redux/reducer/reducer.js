import { SEARCH_COUNTRIES_NAME, SHOW_COUNTRIES } from "../actions/types";

const initialState = {
    countries: [],

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
        default: 
            return { ...state }
    }
}; 

export default reducer;