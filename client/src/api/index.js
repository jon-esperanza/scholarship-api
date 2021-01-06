import axios from 'axios';


// REST api url : backend must be running 
const url = 'https://scholarship-api.herokuapp.com/scholarships/';


// functions to make api calls
const fetchScholarships = () => axios.get(url);
const fetchSearchResult = (searchTerm) => axios.get(url + searchTerm);


export {fetchSearchResult, fetchScholarships};