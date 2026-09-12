import { CollegeService } from '../services/college.service';
import { ResponseUtil } from '../utils/response';

export class CollegeController {
  private collegeService: CollegeService;

  constructor() {
    this.collegeService = new CollegeService();
  }

  public async getColleges(req: any, res: any) {
    const colleges = await this.collegeService.getColleges(req.query);
    return ResponseUtil.success(colleges, 'Colleges retrieved successfully');
  }

  public async getCollegeById(req: any, res: any) {
    const college = await this.collegeService.getCollegeById(req.params.id);
    return ResponseUtil.success(college, 'College details retrieved');
  }
}
