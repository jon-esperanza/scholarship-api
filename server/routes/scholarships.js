import express from 'express';

import {getAll, scrapeData, getItem, clear} from '../controllers/scholarships.js';

const router = express.Router();


// http://localhost:5000/scholarships/
router.get('/', getAll);

// http://localhost:5000/scholarships/scrape
router.post('/scrape', scrapeData);

// http://localhost:5000/scholarships/[searchTerm]
router.get('/:searchTerm', getItem);

// http://localhost:5000/scholarships/clear
router.get('/clear', clear);


export default router;