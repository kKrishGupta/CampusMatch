import { SavedController } from '../controllers/saved.controller';

export function setupSavedRoutes() {
  const controller = new SavedController();
  return {
    getSaved: (req: any, res: any) => controller.getSavedColleges(req, res),
    toggleSave: (req: any, res: any) => controller.toggleSave(req, res),
  };
}
