import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://6468ee7703bb12ac20823844.mockapi.io";

export async function getUsers(page) {
    try {
      const res = await axios.get(`/users?page=${page}&limit=3`);
      if (!res) {
        Notiflix.Notify.failure('Please, try again');
      }
      return res.data;
    } catch (error) {
      console.error(error);
    }
}

export async function updateUsers(id, followers) {
    try {
      const res = await axios.put(`/users/${id}`, followers);
      return res.data;
    } catch (error){
      console.error(error);
    }
} 

  