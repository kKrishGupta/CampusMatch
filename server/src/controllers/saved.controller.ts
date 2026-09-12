import { SavedService } from '../services/saved.service';
import { ResponseUtil } from '../utils/response';

export class SavedController {
  private savedService: SavedService;

  constructor() {
    this.savedService = new SavedService();
  }

  public async getSavedColleges(req: any, res: any) {
    const list = await this.savedService.getSavedColleges(req.user?.id || 'usr-1');
    return ResponseUtil.success(list, 'Saved colleges retrieved');
  }

  public async toggleSave(req: any, res: any) {
    const list = await this.savedService.toggleSavedCollege(req.user?.id || 'usr-1', req.body.collegeId);
    return ResponseUtil.success(list, 'Saved status updated');
  }
}
