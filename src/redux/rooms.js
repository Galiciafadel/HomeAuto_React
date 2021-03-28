import * as ActionTypes from './ActionTypes';

export const Rooms = (state = { errMess: null, rooms:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ROOMS:
      return {...state, errMess: null, rooms: action.payload};

    case ActionTypes.ROOMS_FAILED:
      return {...state, errMess: action.payload};

    case ActionTypes.ADD_ROOMS:
        var room = action.payload;
        return { ...state, rooms: state.rooms.concat(room)};

    default:
      return state;
  }
};