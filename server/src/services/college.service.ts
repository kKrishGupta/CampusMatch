import { CollegeRepository } from '../repositories/college.repository';

export class CollegeService {
  private collegeRepository: CollegeRepository;

  constructor() {
    this.collegeRepository = new CollegeRepository();
  }

  public async getColleges(query: any) {
    return this.collegeRepository.findMany();
  }

  public async getCollegeById(id: string) {
    return this.collegeRepository.findById(id);
  }
}
