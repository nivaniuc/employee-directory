import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100";

function search() {
    return axios.get(BASEURL);
}

export default search;