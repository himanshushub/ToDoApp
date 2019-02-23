import {FETCH_USER, ADDTODOTYPE, DELETETODOTYPE} from '../actions/types';

export default function(state = null, action){
    // console.log(action);
    switch(action.type){
        case FETCH_USER: return action.payload || false;

        case ADDTODOTYPE: return action.payload;

        case DELETETODOTYPE: return action.payload;
        default: return state;
    }
}