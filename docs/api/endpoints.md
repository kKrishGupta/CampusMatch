# API Endpoints Specification

## Colleges
- `GET /api/colleges`: List colleges with filtering, search, sorting & pagination
- `GET /api/colleges/:id`: Get detailed college overview, courses, and placement stats

## Comparison
- `POST /api/compare`: Generate side-by-side comparison for 2-3 colleges

## Reviews
- `GET /api/colleges/:id/reviews`: Get college reviews & rating breakdown
- `POST /api/reviews`: Submit a new student review

## Saved Wishlist
- `GET /api/saved`: Get user's saved colleges
- `POST /api/saved/toggle`: Add or remove college from saved wishlist
