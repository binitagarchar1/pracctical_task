import express from 'express';
import applicationController from '../controllers/applicationController';

const router = express.Router();

router.post('/', applicationController.createApplication);
router.patch('/:id', applicationController.updateApplication);

export default router;
