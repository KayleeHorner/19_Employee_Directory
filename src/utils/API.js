import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100&format=json&nat=us";


export default {
  loadEmployees: function() {
    return axios.get(BASEURL);
  }
};


        