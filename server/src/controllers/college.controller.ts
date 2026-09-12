import { Request, Response } from 'express';
import { CollegeService } from '../services/college.service';
import { ResponseUtil } from '../utils/response';

export class CollegeController {
  private collegeService: CollegeService;

  constructor() {
    this.collegeService = new CollegeService();
  }

  public async getColleges(req: Request, res: Response) {
    try {
      const colleges = await this.collegeService.getColleges(req.query);
      return res.status(200).json(ResponseUtil.success(colleges, 'Colleges retrieved successfully'));
    } catch (err: any) {
      return res.status(500).json(ResponseUtil.error(err.message || 'Failed to fetch colleges'));
    }
  }

  public async getCollegeById(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      const college = await this.collegeService.getCollegeById(id);
      if (!college) {
        return res.status(404).json(ResponseUtil.error('College not found'));
      }
      return res.status(200).json(ResponseUtil.success(college, 'College details retrieved'));
    } catch (err: any) {
      return res.status(500).json(ResponseUtil.error(err.message || 'Failed to fetch college details'));
    }
  }
}
