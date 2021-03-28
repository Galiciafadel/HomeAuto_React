import * as ActionTypes from './ActionTypes';

export const Apartments = (state = { isLoading: true,
    errMess: null,
    apartments:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_APARTMENTS:
            return {...state, isLoading: false, errMess: null, apartments: action.payload};

        case ActionTypes.APARTMENTS_LOADING:
            return {...state, isLoading: true, errMess: null, apartments: []}

        case ActionTypes.APARTMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};