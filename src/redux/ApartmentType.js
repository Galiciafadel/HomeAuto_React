import * as ActionTypes from './ActionTypes';

export const ApartmentType = (state = { isLoading: true,
    errMess: null,
    apartmentType:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_APARTMENTTYPE:
            return {...state, isLoading: false, errMess: null, apartmentType: action.payload};

        case ActionTypes.APARTMENTTYPE_LOADING:
            return {...state, isLoading: true, errMess: null, apartmentType: []}

        case ActionTypes.APARTMENTTYPE_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};