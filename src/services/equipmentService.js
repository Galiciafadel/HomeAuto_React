import axios from 'axios'
import { baseUrl } from '../shared/baseUrl';



const updateEquipment = (roomId, equipment) => {
    axios.put(baseUrl + 'rooms/' + roomId, equipment)
    .then(res => console.log(res));
}

export {updateEquipment}