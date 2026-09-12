import { Router } from 'express';
import { SavedController } from '../controllers/saved.controller';

const router = Router();
const controller = new SavedController();

router.get('/', (req, res) => controller.getSavedColleges(req, res));
router.post('/', (req, res) => controller.toggleSaveCollege(req, res));

export default router;
