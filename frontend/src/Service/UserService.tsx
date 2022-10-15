import axios from 'axios'

export const getUsers = async ()=> {
    return await axios.get('http://localhost:5432/api/users')
    
}
export {}