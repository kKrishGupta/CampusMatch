# CampusMatch Backend Server

The standalone backend server architecture for CampusMatch.

## Architecture

```text
HTTP Request → Route → Controller → Validator → Service → Repository → Database
```

## Structure

- `src/config/`: App and Database configuration
- `src/controllers/`: Route handlers
- `src/services/`: Core business logic
- `src/repositories/`: Data access abstraction
- `src/models/`: Mongoose ODM Schemas & Models
- `src/routes/`: API endpoint definitions
- `src/middleware/`: Auth, validation, error handlers
- `src/validators/`: Request validation schemas
- `src/utils/`: Standardized responses and error classes
- `database/`: MongoDB document schemas, seeds, and migrations

