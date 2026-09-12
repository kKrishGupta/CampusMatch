import { Router } from 'express';
import { ReviewController } from '../controllers/review.controller';

const router = Router();
const controller = new ReviewController();

router.get('/:collegeId', (req, res) => controller.getCollegeReviews(req, res));
router.post('/', (req, res) => controller.createReview(req, res));

export default router;
