import axios from 'axios';

export default axios.create({
    baseURL: `https://devszczepaniak.pl/wp-json/wp/v2/`
});