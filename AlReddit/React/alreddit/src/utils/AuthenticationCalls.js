import axios from 'axios';

const createLink = async () => {
    const instance = axios.create({
    });
    const call = await instance.get(`http://127.0.0.1:8000/api/initial-request/`);
    return call.data
}


const postCredentials = async (data) => {
    const instance = axios.create({
        withCredentials: true,
        crossorigin: true
    });    
    let response
    const post = await instance.post("http://127.0.0.1:8000/api/receive-credentials/", data)    
                .then(res => {response = res})
                .catch(err => {response = err})

    if (response !== undefined) {
        return (response.status)
    }
    else {return "Error"}
}

/*
const postCredentials = async (data) => { 
    fetch('http://127.0.0.1:8000/api/receive-credentials/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    },
    credentials: "same-origin",
  } )
    .then(response => response.json())
    .then(response => {
        return response
    })
    .catch(error => {
        return 404
    } )
}*/

/*
async function postCredentials(userData) {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/receive-credentials/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'True  '
        },
        body: JSON.stringify(userData)
      });
  
      const status = response.status;
  
      return status;
  
    } catch (error) {
      console.error('Error:', error);
    }
  }
*/


const checkIfLoggedIn = async () => {
    const instance = axios.create({
    });    
    const call = await instance.get(`http://127.0.0.1:8000/api/check-if-logged-in/`);
    console.log(call)
    return call.data
}

export { createLink, postCredentials, checkIfLoggedIn }