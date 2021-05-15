import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100";

//This function returns the Axios get-request
function search() {
    return axios.get(BASEURL);
}

export default search;