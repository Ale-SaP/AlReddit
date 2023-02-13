import axios from 'axios';

//Selector refers to either hot, top, new, controversial and etc
 const getFrontPage = async (token, selector="hot", time_chosen="week") => {
    let response
    const post =
    await axios.post("http://127.0.0.1:8000/api/get-front-page/", {"token":token, "selector":selector, "time":time_chosen})    
                .then(res => {response = res})
                .catch(err => {response = err})

    if (response !== undefined) {
        console.log(response)
        return response
    }
    else {return "Error"}
}

export default getFrontPage