import { ADD_COUNT , SUB_COUNT } from '../constants';

export const Count = (state = 0 , action) => {
    switch (action.type){
        case ADD_COUNT:
            return action.count;
        default:
            return state;
    }
};