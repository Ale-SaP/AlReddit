import axios from 'axios';

const createLink = async () => {
    const call = await axios.get(`http://127.0.0.1:8000/api/initial-request/`);
    return call.data
}

export { createLink }