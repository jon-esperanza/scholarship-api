import axios from 'axios';


// REST api url : backend must be running 
const url = 'http://localhost:5000/scholarships/';


// functions to make api calls
const fetchScholarships = () => axios.get(url);
const fetchSearchResult = (searchTerm) => axios.get(url + searchTerm);


export {fetchSearchResult, fetchScholarships};