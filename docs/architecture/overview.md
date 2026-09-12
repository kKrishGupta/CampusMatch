# CampusMatch Monorepo Architecture

## Client / Server Separation

- **Client (`/client`)**: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4.
- **Server (`/server`)**: Standalone Express/TypeScript backend prepared for PostgreSQL.

## Data Flow

```text
User UI (Client Components)
   ↓
Hooks & Context State
   ↓
Client Services (Isolated API Client)
   ↓ [HTTP REST]
Server Controllers & Validators
   ↓
Server Business Services
   ↓
Server Repositories
   ↓
PostgreSQL Database
```
