import axios from 'axios'
import { baseUrl } from '../shared/baseUrl';

const deleteApartment = (apartmentId) => {
    axios.delete(baseUrl + 'apartments/' + apartmentId)
    .then(res => console.log(res));
}

const updateApartment = (apartmentId, user) => {
    axios.put(baseUrl + 'apartments/' + apartmentId, user)
    .then(res => console.log(res));
}

export {deleteApartment, updateApartment}