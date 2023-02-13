import axios from 'axios';

//Selector refers to either hot, top, new, controversial and etc
 const getFrontPage = async (token, selector="hot") => {
    let response
    const post =
    await axios.post("http://127.0.0.1:8000/api/get-front-page/", {"token":token, "selector":selector})    
                .then(res => {response = res})
                .catch(err => {response = err})

    if (response !== undefined) {
        console.log(response)
        return response
    }
    else {return "Error"}
}

export default getFrontPage