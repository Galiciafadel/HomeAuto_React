import axios from 'axios'



const login = (credentials) => {
    axios.post('http://localhost:3000/users/login', credentials)    
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