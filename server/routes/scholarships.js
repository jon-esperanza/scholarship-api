import express from 'express';

import {getIndex, getAll, scrapeData, getItem, clear} from '../controllers/scholarships.js';

const router = express.Router();

router.get('/', getIndex);

router.get('/all', getAll);

router.post('/scrape', scrapeData);

router.get('/search/:searchTerm', getItem);

router.get('/clear', clear);


export default router;