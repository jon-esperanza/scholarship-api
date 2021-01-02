import express from 'express';

import {getIndex, getAll, scrapeData, getItem, clear} from '../controllers/scholarships.js';

const router = express.Router();

// http://localhost:5000/scholarships
router.get('/', getIndex);

// http://localhost:5000/scholarships/all
router.get('/all', getAll);

// http://localhost:5000/scholarships/scrape
router.post('/scrape', scrapeData);

// http://localhost:5000/scholarships/search/[searchTerm]
router.get('/search/:searchTerm', getItem);

// http://localhost:5000/scholarships/clear
router.get('/clear', clear);


export default router;