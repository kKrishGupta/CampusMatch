import { CollegeController } from '../controllers/college.controller';

export function setupCollegeRoutes() {
  const controller = new CollegeController();
  return {
    getColleges: (req: any, res: any) => controller.getColleges(req, res),
    getCollegeById: (req: any, res: any) => controller.getCollegeById(req, res),
  };
}
