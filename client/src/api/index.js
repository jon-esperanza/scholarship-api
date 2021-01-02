import axios from 'axios';

const url = 'http://localhost:5000/scholarships/all';

export const fetchScholarships = () => axios.get(url);