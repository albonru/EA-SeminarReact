import axios from 'axios'
import {User} from '../model/User'

const API = 'http://localhost:5432/api'

export const createUser = async (user:User) => {
    return await axios.post(`${API}/users/register`,user)
}
export {}
