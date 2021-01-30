import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100&format=json&inc=name,email,phone,picture,id&nat=us&callback=randomuserdata";


export default {
  loadEmployees: function() {
    return axios.get(BASEURL);
  }
};


        