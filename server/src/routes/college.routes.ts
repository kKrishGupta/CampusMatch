import { Router } from 'express';
import { CollegeController } from '../controllers/college.controller';

const router = Router();
const controller = new CollegeController();

router.get('/', (req, res) => controller.getColleges(req, res));
router.get('/:id', (req, res) => controller.getCollegeById(req, res));

export default router;
