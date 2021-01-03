import axios from 'axios';

const url = 'http://localhost:5000/scholarships/';

const fetchScholarships = () => axios.get(url);
const fetchSearchResult = (searchTerm) => axios.get(url + searchTerm);

export {fetchSearchResult, fetchScholarships};