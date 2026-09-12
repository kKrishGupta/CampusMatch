import { Router } from 'express';
import { CompareController } from '../controllers/compare.controller';

const router = Router();
const controller = new CompareController();

router.post('/', (req, res) => controller.compareColleges(req, res));

export default router;
