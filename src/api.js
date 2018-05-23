import axios from 'axios';

export default axios.create({
    baseURL: `http://localhost/VueWP/wp-json/wp/v2/`
});