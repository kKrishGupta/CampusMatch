export interface PaginationQuery {
  page?: number;
  limit?: number;
}

export function calculatePagination(query: PaginationQuery) {
  const page = Math.max(1, Number(query.page) || 1);
  const limit = Math.max(1, Math.min(100, Number(query.limit) || 12));
  const offset = (page - 1) * limit;

  return { page, limit, offset };
}
