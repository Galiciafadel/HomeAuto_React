import * as ActionTypes from './ActionTypes';

export const EquipmentType = (state = { isLoading: true,
    errMess: null,
    equipmentType:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_EQUIPMENTTYPE:
            return {...state, isLoading: false, errMess: null, equipmentType: action.payload};

        case ActionTypes.EQUIPMENTTYPE_LOADING:
            return {...state, isLoading: true, errMess: null, equipmentType: []}

        case ActionTypes.EQUIPMENTTYPE_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};