import axios from 'axios'
import { baseUrl } from '../shared/baseUrl';



const login = (credentials) => {
    axios.post(baseUrl+'/users/login', credentials)    
    .then(res => {
        const data = res.data;
        if(!data.success){
            alert("Error");
        }
        else{
                //store isAdmin, id, 'username' in localStorage
            let isAdmin = data.user.isAdmin ? 'true' : 'false'

            localStorage.setItem('isAdmin', isAdmin);
            localStorage.setItem('userId', data.user._id);
            localStorage.setItem('username', data.user.username);
        }
    });
}

export default login;