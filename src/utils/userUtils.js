import axios from 'axios';
const url="http://localhost:8000/api/users/"


const getUsers = async ()=>
{
    return await  axios.get(url);
    
    
}

const getUserById = async (id)=>{
    
 return await( await axios.get(url+id))
}

export default {getUsers,getUserById}
