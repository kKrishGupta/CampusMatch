import { CollegeRepository } from '../repositories/college.repository';

export class CompareService {
  private collegeRepository: CollegeRepository;

  constructor() {
    this.collegeRepository = new CollegeRepository();
  }

  public async compareColleges(collegeIds: string[]) {
    return Promise.all(collegeIds.map((id) => this.collegeRepository.findById(id)));
  }
}
