import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://stocksite-ysongh.c9users.io:8081' 
});

export default instance;