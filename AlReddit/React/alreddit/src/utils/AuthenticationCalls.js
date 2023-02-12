import axios from 'axios';

const createLink = async () => {
    const call = await axios.get(`http://127.0.0.1:8000/api/initial-request/`);
    return call.data
}

const postCredentials = async (data) => {
    let response
    const post =
    await axios.post("http://127.0.0.1:8000/api/receive-credentials/", data)    
                .then(res => {response = res})
                .catch(err => {response = err})

    if (response !== undefined) {
        console.log(response)
        return response
    }
    else {return "Error"}
}

export { createLink, postCredentials }