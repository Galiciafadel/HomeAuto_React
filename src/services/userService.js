import axios from 'axios'
import { baseUrl } from '../shared/baseUrl';

const postUser = (user) => {
    return axios.post(baseUrl + 'users', user)    
    .then(res => { return res });
}

const deleteUser = (userId) => {
    axios.delete(baseUrl + 'users/' + userId)
    .then(res => console.log(res));
}


export {deleteUser, postUser}