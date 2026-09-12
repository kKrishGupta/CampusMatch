import { CompareController } from '../controllers/compare.controller';

export function setupCompareRoutes() {
  const controller = new CompareController();
  return {
    compareColleges: (req: any, res: any) => controller.compareColleges(req, res),
  };
}
