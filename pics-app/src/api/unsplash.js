import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1nV4j8KzH9mvwkhYTGGZ8nb61es4OEescWzava-z_rw',
    }
});
