import { ADD_COUNT } from '../constants';

export const addCount = (count) => {

    return {
        type:ADD_COUNT,
        count
    }
};