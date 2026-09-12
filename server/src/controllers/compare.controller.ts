import { CompareService } from '../services/compare.service';
import { ResponseUtil } from '../utils/response';

export class CompareController {
  private compareService: CompareService;

  constructor() {
    this.compareService = new CompareService();
  }

  public async compareColleges(req: any, res: any) {
    const result = await this.compareService.compareColleges(req.body.collegeIds || []);
    return ResponseUtil.success(result, 'Comparison generated');
  }
}
