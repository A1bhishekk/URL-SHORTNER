import express from 'express';
import { generateNewShortID, getAnalytics, redirectURL } from '../controllers/urlController.js';

const router = express.Router();


router.post('/',generateNewShortID)
router.get('/:shortID',redirectURL)
router.get('/analytics/:shortID',getAnalytics)



export default router;