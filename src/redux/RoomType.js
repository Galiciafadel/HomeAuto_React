import * as ActionTypes from './ActionTypes';

export const RoomType = (state = { isLoading: true,
    errMess: null,
    roomType:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ROOMTYPE:
            return {...state, isLoading: false, errMess: null, roomType: action.payload};

        case ActionTypes.ROOMTYPE_LOADING:
            return {...state, isLoading: true, errMess: null, roomType: []}

        case ActionTypes.ROOMTYPE_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};