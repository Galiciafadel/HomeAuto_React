import * as ActionTypes from './ActionTypes';
import { baseUrl} from '../shared/baseUrl';



export const postroom = (RoomTypeId, name, equipement) => (dispatch) => {

    const newRoom = {
        RoomTypeId: RoomTypeId,
        name: name,
        equipment: equipement
    };
    
    return fetch(baseUrl + 'rooms', {
        method: "POST",
        body: JSON.stringify(newRoom),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addrooms(response)))
    .catch(error =>  { console.log('post Rooms', error.message); alert('Your room could not be posted\nError: '+error.message); });
};


export const fetchApartments = () => (dispatch) => {

    dispatch(apartmentsLoading());

    return fetch(baseUrl + 'apartments')
    .then(response => {
        if (response.ok) {
          console.log(response);
          return response;
          
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(apartments => dispatch(addApartments(apartments)))
    .catch(error => dispatch(ApartmentsFailed(error.message)));
}

export const deleteApartment = (apartmentId) => (dispatch) => {
  dispatch(removeApartment(apartmentId));

}

export const apartmentsLoading = () => ({
    type: ActionTypes.APARTMENTS_LOADING
});

export const ApartmentsFailed = (errmess) => ({
    type: ActionTypes.APARTMENTS_FAILED,
    payload: errmess
});

export const addApartments = (apartments) => ({
    type: ActionTypes.ADD_APARTMENTS,
    payload: apartments
});

// delete apartment
export const removeApartment = (apartmentId) => ({
  type: ActionTypes.DELETE_APARTMENT,
  payload: apartmentId
});

export const fetchRooms = () => (dispatch) => { 
  dispatch(roomsLoading());   
    return fetch(baseUrl + `rooms`)
    
    .then(response => {
        if (response.ok) {
          return response;
        } 
        else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(rooms => dispatch(addrooms(rooms)))
    .catch(error => dispatch(roomsFailed(error.message)));
}

export const addrooms = (rooms) => ({
  type: ActionTypes.ADD_ROOMS,
  payload: rooms
});


export const roomsFailed = (errmess) => ({
    type: ActionTypes.ROOMS_FAILED,
    payload: errmess
});

export const roomsLoading = () => ({
  type: ActionTypes.ROOMS_LOADING
});



export const fetchUsers = () => (dispatch) => {
    
    dispatch(usersLoading());

    return fetch(baseUrl + 'users')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(users => dispatch(addUsers(users)))
    .catch(error => dispatch(usersFailed(error.message)));
}


export const usersLoading = () => ({
    type: ActionTypes.USERS_LOADING
});

export const usersFailed = (errmess) => ({
    type: ActionTypes.USERS_FAILED,
    payload: errmess
});

export const addUsers = (users) => ({
    type: ActionTypes.ADD_USERS,
    payload: users
});



export const fetchEquipment = () => (dispatch) => {
    
  dispatch(equipmentLoading());

  return fetch(baseUrl + 'equipment')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          console.log(errmess);
          throw errmess;
    })
  .then(response => response.json())
  .then(equipment => dispatch(addEquipment(equipment)))
  .catch(error => dispatch(EquipmentFailed(error.message)));
}


export const equipmentLoading = () => ({
  type: ActionTypes.EQUIPMENT_LOADING
});

export const EquipmentFailed = (errmess) => ({
  type: ActionTypes.EQUIPMENT_FAILED,
  payload: errmess
});

export const addEquipment = (equipment) => ({
  type: ActionTypes.ADD_EQUIPMENT,
  payload: equipment
});



export const fetchEquipmentType = () => (dispatch) => {
    
  dispatch(EquipmentTypeLoading());

  return fetch(baseUrl + 'EquipmentType')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(equipmentType => dispatch(addEquipmentType(equipmentType)))
  .catch(error => dispatch(EquipmentTypeFailed(error.message)));
}


export const EquipmentTypeLoading = () => ({
  type: ActionTypes.EQUIPMENTTYPE_LOADING
});

export const EquipmentTypeFailed = (errmess) => ({
  type: ActionTypes.EQUIPMENTTYPE_FAILED,
  payload: errmess
});

export const addEquipmentType = (equipmentType) => ({
  type: ActionTypes.ADD_EQUIPMENTTYPE,
  payload: equipmentType
});


export const fetchApartmentType = () => (dispatch) => {
    
  dispatch(ApartmentTypeLoading());

  return fetch(baseUrl + 'apartmentType')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(apartmentType => dispatch(addApartmentType(apartmentType)))
  .catch(error => dispatch(ApartmentTypeFailed(error.message)));
}


export const ApartmentTypeLoading = () => ({
  type: ActionTypes.APARTMENTTYPE_LOADING
});

export const ApartmentTypeFailed = (errmess) => ({
  type: ActionTypes.APARTMENTTYPE_FAILED,
  payload: errmess
});

export const addApartmentType = (apartmentType) => ({
  type: ActionTypes.ADD_APARTMENTTYPE,
  payload: apartmentType
});


export const fetchRoomType = () => (dispatch) => {
    
  dispatch(roomTypeLoading());

  return fetch(baseUrl + 'RoomType')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(roomType => dispatch(addroomType(roomType)))
  .catch(error => dispatch(roomTypeFailed(error.message)));
}


export const roomTypeLoading = () => ({
  type: ActionTypes.ROOMTYPE_LOADING
});

export const roomTypeFailed = (errmess) => ({
  type: ActionTypes.ROOMTYPE_FAILED,
  payload: errmess
});

export const addroomType = (roomType) => ({
  type: ActionTypes.ADD_ROOMTYPE,
  payload: roomType
});

export const updateEquipment = (equipment) => ({
  type: ActionTypes.UPDATE_EQUIPMENT,
  payload: equipment
});

export const putEquipment = (equipmentId, turnedOn,goal) => (dispatch) => {

  const updatedEquipment = {
      equipement: equipmentId,
      turnedOn: turnedOn,
      goal:goal
  }
  console.log('Equipment ', updatedEquipment);

  return fetch(baseUrl + 'equipment/' + equipmentId, {
      method: 'PUT',
      body: JSON.stringify(updatedEquipment),
      headers: {
          'Content-Type': 'application/json'
      },
      credentials: 'same-origin'

  })
  .then(response => {
      if (response.ok) {
          return response;
      }
      else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
      }
  },
  error => {
      var errmess = new Error(error.message);
      throw errmess;
  })
  .then(response => response.json())
  .then(response => dispatch(updateEquipment(response)))

  .catch(error => { console.log('Put equipment ', error.message);
      alert('Your equipment could not be updated\nError: '+ error.message); })
}