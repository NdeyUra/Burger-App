import axios from 'axios';

const instance=axios.create({
    baseURL:'https://burger-67136-default-rtdb.firebaseio.com/'
});

export default instance;