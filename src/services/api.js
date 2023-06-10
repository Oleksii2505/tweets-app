import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://6468ee7703bb12ac20823844.mockapi.io";

const api = {
    fetchTweets,
    fetchAllUsers,
};

async function fetchTweets(page = 1) {
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

async function fetchAllUsers() {
    try {
      const res = await axios.get('/users');
      return res.data;
    } catch (error) {
      console.error(error);
    }
}

export default api;
  