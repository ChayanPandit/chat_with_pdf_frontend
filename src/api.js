import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://localhost:8000',
    baseURL: 'https://chat-with-pdf-backend-yzcq.onrender.com/'
})

export default api;
