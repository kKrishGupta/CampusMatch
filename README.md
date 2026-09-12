# 🎓 CampusMatch — Modern Higher Education Discovery Platform

> **CampusMatch** is a premium EdTech SaaS application designed for students and parents across India to explore, filter, compare, and bookmark top higher education institutes. Features a rich dataset of **100+ top engineering & management colleges**, 5-year JEE cutoff rank trends, connectivity details (airports, railway stations), placement statistics, and real user reviews.

---

## 🚀 Key Features

### 🏛️ Comprehensive 100+ College Database
- **Full Institute Coverage**: 100+ premier institutes including all 23 IITs, 31 NITs, IIITs, BITS Pilani, DTU, NSUT, and top private universities.
- **Connectivity & Proximity Hub**: Exact distance to the nearest **Airport**, **Railway Station**, and **Metro/Public Transit Point**.
- **JEE Rank Criteria & 5-Year Cutoff Trends**: Detailed opening and closing rank data spanning **2020 through 2024** for General, OBC, SC, and ST categories across B.Tech branches.
- **Placement & ROI Stats**: Highest CTC, Average Package, Placement Rate (%), and Top Recruiters list.
- **Tuition & Facilities**: Detailed annual fee breakdowns, NAAC accreditations, NIRF rankings, and available campus amenities.

### ⚖️ Multi-College Comparison Engine
- Compare up to **4 colleges side-by-side**.
- Comprehensive metric breakdown: Fees, CTC, NIRF Ranks, Cutoffs, Transit Distances, and Student Ratings.
- Dynamic comparison bar with one-click clear and quick navigation.

### 👤 Personalized User Profiles
- Custom user avatar upload or selection from built-in preset avatars.
- Saved target colleges shortlist.
- Profile info management and review activity tracking.

### 🏥 Backend Health & Diagnostics
- Dedicated **`/health`** and **`/api/v1/health`** endpoints monitoring server uptime, database connectivity state, environment settings, and service status.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend** | Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Lucide React Icons |
| **Backend** | Node.js, Express.js, TypeScript, Mongoose ODM |
| **Database** | MongoDB Atlas / Local MongoDB instance |
| **Styling & Theme** | Modern Glassmorphism & Custom Brand Identity (Deep Royal Blue `#0B192C` → Electric Purple `#7E60BF`) |

---

## 📁 Repository Structure

```
CampusMatch/
├── client/                     # Next.js 15 Frontend Workspace
│   ├── public/                 # Favicon, Brand Logo, & Static Assets
│   ├── src/
│   │   ├── app/                # Next.js App Router (Pages & Layouts)
│   │   ├── components/         # Reusable UI & Feature Components
│   │   │   ├── auth/           # Login, Register, Auth Layout
│   │   │   ├── college/        # Header, Filters, Cutoff Trends, Connectivity Hub
│   │   │   ├── compare/        # Comparison Bar, Spec Tables
│   │   │   ├── profile/        # Edit Profile Modal, Avatar Selector
│   │   │   └── ui/             # Buttons, Inputs, Modals, Badges
│   │   ├── data/               # 110+ Colleges Dataset (`colleges.ts`)
│   │   ├── hooks/              # Custom React Hooks (`useAuth`, `useColleges`)
│   │   ├── services/           # Frontend API Clients
│   │   └── types/              # TypeScript Interfaces (`college.ts`, `user.ts`)
│   └── package.json
│
├── server/                     # Node.js + Express + Mongoose Backend Workspace
│   ├── src/
│   │   ├── config/             # Database & Env Configuration (`database.ts`, `env.ts`)
│   │   ├── controllers/        # Auth, College, Compare & Review Controllers
│   │   ├── models/             # Mongoose Schemas (`college.model.ts`, `user.model.ts`)
│   │   ├── repositories/       # Data Access Layer
│   │   ├── routes/             # API Routes
│   │   └── app.ts              # Express Server Setup & Health Endpoints
│   └── package.json
│
├── docs/                       # Architecture & API Documentation
├── package.json                # Monorepo Workspace Config
└── README.md                   # Project Documentation
```

---

## ⚙️ Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **MongoDB**: Local instance or MongoDB Atlas cluster connection string

### 2. Environment Setup

Create a `.env` file inside `server/` with the following variables:

```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
JWT_SECRET=your_jwt_secret_key
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/campusmatch_db
```

Create a `.env.local` file inside `client/` (optional):

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
```

### 3. Installation

Install all monorepo dependencies from the root directory:

```bash
npm install
```

### 4. Running Development Servers

Start both frontend and backend concurrently:

```bash
# Run client (Next.js dev server on http://localhost:3000)
npm run dev --workspace=client

# Run server (Express dev server on http://localhost:5000)
npm run dev --workspace=server
```

---

## 🏥 Backend Health Check API

To verify that the backend and database connection are working properly:

### Endpoint: `GET /health` or `GET /api/v1/health`

**Example Response**:
```json
{
  "status": "OK",
  "message": "CampusMatch API backend operational",
  "timestamp": "2026-09-12T18:11:00.000Z",
  "uptimeSeconds": 142,
  "environment": "development",
  "database": {
    "provider": "MongoDB Atlas",
    "connectionState": "connected",
    "isConnected": true
  },
  "services": {
    "auth": "active",
    "collegeData": "active (110+ institutes dataset loaded)",
    "compareEngine": "active",
    "reviewEngine": "active"
  },
  "version": "1.0.0"
}
```

---

## 📦 Building for Production

To create production builds for both client and server:

```bash
# Build Client (Next.js static site generation & SSR optimization)
npm run build:client

# Build Server (TypeScript compilation to JS in dist/)
npm run build:server
```

---

## 📤 Pushing to GitHub

To push this repository to GitHub:

```bash
# Add origin remote
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPOSITORY>.git

# Rename branch to main
git branch -M main

# Push code to remote
git push -u origin main
```

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
