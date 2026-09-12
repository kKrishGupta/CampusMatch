import { Request, Response } from 'express';
import { SavedService } from '../services/saved.service';
import { ResponseUtil } from '../utils/response';

export class SavedController {
  private savedService: SavedService;

  constructor() {
    this.savedService = new SavedService();
  }

  public async getSavedColleges(req: Request, res: Response) {
    try {
      const userId = (req.query.userId as string) || 'usr-101';
      const saved = await this.savedService.getSavedColleges(userId);
      return res.status(200).json(ResponseUtil.success(saved, 'Saved colleges retrieved'));
    } catch (err: any) {
      return res.status(500).json(ResponseUtil.error(err.message || 'Failed to fetch saved colleges'));
    }
  }

  public async toggleSaveCollege(req: Request, res: Response) {
    try {
      const result = await this.savedService.toggleSavedCollege(req.body.userId, req.body.collegeId);
      return res.status(200).json(ResponseUtil.success(result, 'Saved state updated'));
    } catch (err: any) {
      return res.status(400).json(ResponseUtil.error(err.message || 'Failed to update saved state'));
    }
  }
}
