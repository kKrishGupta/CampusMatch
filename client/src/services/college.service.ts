import { College, CollegeFilterParams, PaginatedResponse } from '@/types/college';
import { MOCK_COLLEGES } from '@/data/colleges';

export function matchCollegeSearch(college: College, searchInput?: string): boolean {
  if (!searchInput || !searchInput.trim()) return true;
  const rawQ = searchInput.toLowerCase().trim();

  const searchableText = [
    college.name,
    college.id,
    college.slug,
    college.city,
    college.state,
    college.location,
    college.type,
    college.affiliation,
    college.accreditation,
    college.description,
    college.aboutText,
    ...college.courses.map((c) => `${c.name} ${c.stream} ${c.code}`),
  ]
    .join(' ')
    .toLowerCase();

  // Direct exact/substring match
  if (searchableText.includes(rawQ)) {
    return true;
  }

  // Tokenize search query by whitespace / punctuation
  const tokens = rawQ.split(/[\s,.\-\/]+/).filter((t) => t.length > 0);
  if (tokens.length === 0) return true;

  // Verify that every search word/token matches somewhere in the searchable text or acronyms
  return tokens.every((token) => {
    if (searchableText.includes(token)) return true;

    // Common acronym expansions
    if (token === 'iit' && (searchableText.includes('indian institute of technology') || searchableText.includes('iit'))) return true;
    if (token === 'nit' && (searchableText.includes('national institute of technology') || searchableText.includes('nit'))) return true;
    if (token === 'iiit' && (searchableText.includes('information technology') || searchableText.includes('iiit'))) return true;
    if (token === 'bits' && (searchableText.includes('birla institute') || searchableText.includes('bits'))) return true;
    if (token === 'dtu' && (searchableText.includes('delhi technological university') || searchableText.includes('dtu'))) return true;
    if (token === 'nsut' && (searchableText.includes('netaji subhas') || searchableText.includes('nsut'))) return true;

    return false;
  });
}

export class CollegeService {
  public static async getColleges(params: CollegeFilterParams = {}): Promise<PaginatedResponse<College>> {
    let filtered = [...MOCK_COLLEGES];

    // Smart tokenized search query filter (matches name, city, state, courses, description, acronyms)
    if (params.search && params.search.trim() !== '') {
      filtered = filtered.filter((c) => matchCollegeSearch(c, params.search));
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
    return MOCK_COLLEGES.filter((c) =>
      ids.some((id) => c.id === id || c.slug === id || c.id.includes(id) || id.includes(c.id))
    );
  }
}
