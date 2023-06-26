import express from 'express';
import jobController from '../controllers/jobController';

const router = express.Router();

router.get('/', jobController.searchJobs);
router.post('/', jobController.createJob);

export default router;
