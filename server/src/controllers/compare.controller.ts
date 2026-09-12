import { Request, Response } from 'express';
import { CompareService } from '../services/compare.service';
import { ResponseUtil } from '../utils/response';

export class CompareController {
  private compareService: CompareService;

  constructor() {
    this.compareService = new CompareService();
  }

  public async compareColleges(req: Request, res: Response) {
    try {
      const comparison = await this.compareService.compareColleges(req.body.collegeIds || []);
      return res.status(200).json(ResponseUtil.success(comparison, 'College comparison generated'));
    } catch (err: any) {
      return res.status(400).json(ResponseUtil.error(err.message || 'Failed to compare colleges'));
    }
  }
}
