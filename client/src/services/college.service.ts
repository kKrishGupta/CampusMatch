import { College, CollegeFilterParams, PaginatedResponse } from '@/types/college';
import { MOCK_COLLEGES } from '@/data/colleges';

export class CollegeService {
  public static async getColleges(params: CollegeFilterParams = {}): Promise<PaginatedResponse<College>> {
    let filtered = [...MOCK_COLLEGES];

    // Search query filter (matches name, city, state, courses, description)
    if (params.search && params.search.trim() !== '') {
      const q = params.search.toLowerCase().trim();
      filtered = filtered.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.city.toLowerCase().includes(q) ||
          c.state.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.courses.some((course) => course.name.toLowerCase().includes(q) || course.stream.toLowerCase().includes(q))
      );
    }

    // State filter
    if (params.state && params.state !== 'All') {
      filtered = filtered.filter((c) => c.state.toLowerCase() === params.state!.toLowerCase());
    }

    // City filter
    if (params.city && params.city !== 'All') {
      filtered = filtered.filter((c) => c.city.toLowerCase() === params.city!.toLowerCase());
    }

    // Fees filter
    if (params.minFees !== undefined) {
      filtered = filtered.filter((c) => c.feesAnnual >= params.minFees!);
    }
    if (params.maxFees !== undefined) {
      filtered = filtered.filter((c) => c.feesAnnual <= params.maxFees!);
    }

    // Rating filter
    if (params.minRating !== undefined && params.minRating > 0) {
      filtered = filtered.filter((c) => c.rating >= params.minRating!);
    }

    // Course Stream filter
    if (params.courseStream && params.courseStream !== 'All') {
      const streamQuery = params.courseStream.toLowerCase();
      filtered = filtered.filter((c) =>
        c.courses.some(
          (course) =>
            course.stream.toLowerCase().includes(streamQuery) ||
            course.name.toLowerCase().includes(streamQuery)
        )
      );
    }

    // College Type filter
    if (params.collegeType && params.collegeType !== 'All') {
      filtered = filtered.filter((c) => c.type.toLowerCase() === params.collegeType!.toLowerCase());
    }

    // Sorting
    const sort = params.sort || 'rating_desc';
    filtered.sort((a, b) => {
      switch (sort) {
        case 'rating_desc':
          return b.rating - a.rating;
        case 'rating_asc':
          return a.rating - b.rating;
        case 'fees_asc':
          return a.feesAnnual - b.feesAnnual;
        case 'fees_desc':
          return b.feesAnnual - a.feesAnnual;
        case 'placement_desc':
          return b.averagePlacementLpa - a.averagePlacementLpa;
        case 'name_asc':
          return a.name.localeCompare(b.name);
        case 'name_desc':
          return b.name.localeCompare(a.name);
        default:
          return b.rating - a.rating;
      }
    });

    // Pagination
    const page = params.page || 1;
    const limit = params.limit || 12;
    const total = filtered.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const paginatedData = filtered.slice(startIndex, startIndex + limit);

    return {
      data: paginatedData,
      total,
      page,
      limit,
      totalPages: totalPages || 1,
    };
  }

  public static async getCollegeById(id: string): Promise<College | null> {
    const college = MOCK_COLLEGES.find((c) => c.id === id || c.slug === id);
    return college || null;
  }

  public static async getCollegeBySlug(slug: string): Promise<College | null> {
    return this.getCollegeById(slug);
  }

  public static async getPopularColleges(limit = 6): Promise<College[]> {
    return MOCK_COLLEGES.filter((c) => c.featured || c.rating >= 4.6).slice(0, limit);
  }

  public static async getCollegesByIds(ids: string[]): Promise<College[]> {
    return MOCK_COLLEGES.filter((c) => ids.includes(c.id));
  }
}
