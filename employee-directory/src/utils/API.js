import axios from "axios";

const BASEURL = "https://randomuser.me/api/?seed=yolo&results=25&nat=us";


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function() {
    return axios.get(BASEURL);
  }
};