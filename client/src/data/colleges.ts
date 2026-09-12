import { College } from '@/types/college';
import { MASTER_COURSES } from './courses';

export const MOCK_COLLEGES: College[] = [
  {
    "id": "indian-institute-of-technology-madras-iitm",
    "name": "Indian Institute of Technology Madras (IITM)",
    "slug": "indian-institute-of-technology-madras-iitm",
    "location": "Chennai, Tamil Nadu",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "description": "Premier public engineering institution in Chennai, Tamil Nadu renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Indian Institute of Technology Madras (IITM) was established in 1959. Located in Chennai, Tamil Nadu, the institute spans 630 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #1.",
    "logoUrl": "https://images.unsplash.com/photo-1562774053?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907198?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://indian-institute-of-technology-madras-iitm.ac.in",
    "feesAnnual": 245000,
    "rating": 4.9,
    "reviewsCount": 210,
    "averagePlacementLpa": 21,
    "highestPlacementLpa": 64,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1959,
    "campusSizeAcres": 630,
    "studentCount": 3000,
    "accreditation": "NAAC A++ | NIRF #1",
    "nirfRank": 1,
    "featured": true,
    "courses": [
      {
        "id": "c1-0",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 245000,
        "stream": "Engineering"
      },
      {
        "id": "c2-0",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 232750,
        "stream": "Engineering"
      },
      {
        "id": "c3-0",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220500,
        "stream": "Engineering"
      },
      {
        "id": "c4-0",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 208250,
        "stream": "Engineering"
      },
      {
        "id": "c5-0",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 245000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 21,
      "highestLpa": 64,
      "medianLpa": 18.5,
      "placementPercentage": 85,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 21,
          "highestPackageLpa": 64,
          "medianPackageLpa": 18.5,
          "placementPercentage": 85,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 19.3,
          "highestPackageLpa": 57.6,
          "medianPackageLpa": 17.2,
          "placementPercentage": 83,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 17.8,
          "highestPackageLpa": 54.4,
          "medianPackageLpa": 16.4,
          "placementPercentage": 80,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Chennai International Airport",
        "distanceKm": 12
      },
      "nearestRailwayStation": {
        "name": "Chennai Central",
        "distanceKm": 14
      },
      "nearestMetroPoint": {
        "name": "IIT Madras Metro",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Chennai, Indian Institute of Technology Madras (IITM) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Chennai Central and Chennai International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Indian Institute of Technology Madras (IITM) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 96,
          "closingRank": 144
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 90,
          "closingRank": 138
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 102,
          "closingRank": 150
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 108,
          "closingRank": 156
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 114,
          "closingRank": 162
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 180,
          "closingRank": 264
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 168,
          "closingRank": 252
        }
      ]
    }
  },
  {
    "id": "indian-institute-of-technology-delhi-iitd",
    "name": "Indian Institute of Technology Delhi (IITD)",
    "slug": "indian-institute-of-technology-delhi-iitd",
    "location": "New Delhi, Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "description": "Premier public engineering institution in New Delhi, Delhi renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Indian Institute of Technology Delhi (IITD) was established in 1961. Located in New Delhi, Delhi, the institute spans 320 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #2.",
    "logoUrl": "https://images.unsplash.com/photo-1562774054?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907199?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://indian-institute-of-technology-delhi-iitd.ac.in",
    "feesAnnual": 250000,
    "rating": 4.8,
    "reviewsCount": 142,
    "averagePlacementLpa": 19.8,
    "highestPlacementLpa": 60,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1961,
    "campusSizeAcres": 320,
    "studentCount": 3250,
    "accreditation": "NAAC A++ | NIRF #2",
    "nirfRank": 2,
    "featured": true,
    "courses": [
      {
        "id": "c1-1",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 250000,
        "stream": "Engineering"
      },
      {
        "id": "c2-1",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 237500,
        "stream": "Engineering"
      },
      {
        "id": "c3-1",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 225000,
        "stream": "Engineering"
      },
      {
        "id": "c4-1",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 212500,
        "stream": "Engineering"
      },
      {
        "id": "c5-1",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 250000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 19.8,
      "highestLpa": 60,
      "medianLpa": 17.4,
      "placementPercentage": 86,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 19.8,
          "highestPackageLpa": 60,
          "medianPackageLpa": 17.4,
          "placementPercentage": 86,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 18.2,
          "highestPackageLpa": 54,
          "medianPackageLpa": 16.2,
          "placementPercentage": 84,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 16.8,
          "highestPackageLpa": 51,
          "medianPackageLpa": 15.4,
          "placementPercentage": 81,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Indira Gandhi International Airport",
        "distanceKm": 10
      },
      "nearestRailwayStation": {
        "name": "New Delhi Railway Station",
        "distanceKm": 16
      },
      "nearestMetroPoint": {
        "name": "IIT Delhi Metro Station",
        "distanceKm": 1
      },
      "connectivityDetails": "Located in New Delhi, Indian Institute of Technology Delhi (IITD) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to New Delhi Railway Station and Indira Gandhi International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Indian Institute of Technology Delhi (IITD) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 192,
          "closingRank": 288
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 180,
          "closingRank": 276
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 204,
          "closingRank": 300
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 216,
          "closingRank": 312
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 228,
          "closingRank": 324
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 360,
          "closingRank": 528
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 336,
          "closingRank": 504
        }
      ]
    }
  },
  {
    "id": "indian-institute-of-technology-bombay-iitb",
    "name": "Indian Institute of Technology Bombay (IITB)",
    "slug": "indian-institute-of-technology-bombay-iitb",
    "location": "Mumbai, Maharashtra",
    "city": "Mumbai",
    "state": "Maharashtra",
    "description": "Premier public engineering institution in Mumbai, Maharashtra renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Indian Institute of Technology Bombay (IITB) was established in 1958. Located in Mumbai, Maharashtra, the institute spans 550 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #3.",
    "logoUrl": "https://images.unsplash.com/photo-1562774055?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907200?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://indian-institute-of-technology-bombay-iitb.ac.in",
    "feesAnnual": 240000,
    "rating": 4.9,
    "reviewsCount": 188,
    "averagePlacementLpa": 21.5,
    "highestPlacementLpa": 65,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1958,
    "campusSizeAcres": 550,
    "studentCount": 3500,
    "accreditation": "NAAC A++ | NIRF #3",
    "nirfRank": 3,
    "featured": true,
    "courses": [
      {
        "id": "c1-2",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 240000,
        "stream": "Engineering"
      },
      {
        "id": "c2-2",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 228000,
        "stream": "Engineering"
      },
      {
        "id": "c3-2",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 216000,
        "stream": "Engineering"
      },
      {
        "id": "c4-2",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 204000,
        "stream": "Engineering"
      },
      {
        "id": "c5-2",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 240000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 21.5,
      "highestLpa": 65,
      "medianLpa": 18.9,
      "placementPercentage": 87,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 21.5,
          "highestPackageLpa": 65,
          "medianPackageLpa": 18.9,
          "placementPercentage": 87,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 19.8,
          "highestPackageLpa": 58.5,
          "medianPackageLpa": 17.6,
          "placementPercentage": 85,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 18.3,
          "highestPackageLpa": 55.3,
          "medianPackageLpa": 16.8,
          "placementPercentage": 82,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Chhatrapati Shivaji Maharaj Airport",
        "distanceKm": 9
      },
      "nearestRailwayStation": {
        "name": "Kanjurmarg / CST Station",
        "distanceKm": 8
      },
      "nearestMetroPoint": {
        "name": "IIT Powai Metro",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Mumbai, Indian Institute of Technology Bombay (IITB) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Kanjurmarg / CST Station and Chhatrapati Shivaji Maharaj Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Indian Institute of Technology Bombay (IITB) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 288,
          "closingRank": 432
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 270,
          "closingRank": 414
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 306,
          "closingRank": 450
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 324,
          "closingRank": 468
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 342,
          "closingRank": 486
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 540,
          "closingRank": 792
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 504,
          "closingRank": 756
        }
      ]
    }
  },
  {
    "id": "indian-institute-of-technology-kanpur-iitk",
    "name": "Indian Institute of Technology Kanpur (IITK)",
    "slug": "indian-institute-of-technology-kanpur-iitk",
    "location": "Kanpur, Uttar Pradesh",
    "city": "Kanpur",
    "state": "Uttar Pradesh",
    "description": "Premier public engineering institution in Kanpur, Uttar Pradesh renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Indian Institute of Technology Kanpur (IITK) was established in 1959. Located in Kanpur, Uttar Pradesh, the institute spans 1050 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #4.",
    "logoUrl": "https://images.unsplash.com/photo-1562774056?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907201?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://indian-institute-of-technology-kanpur-iitk.ac.in",
    "feesAnnual": 230000,
    "rating": 4.8,
    "reviewsCount": 150,
    "averagePlacementLpa": 19,
    "highestPlacementLpa": 56,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1959,
    "campusSizeAcres": 1050,
    "studentCount": 3750,
    "accreditation": "NAAC A++ | NIRF #4",
    "nirfRank": 4,
    "featured": true,
    "courses": [
      {
        "id": "c1-3",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 230000,
        "stream": "Engineering"
      },
      {
        "id": "c2-3",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 218500,
        "stream": "Engineering"
      },
      {
        "id": "c3-3",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 207000,
        "stream": "Engineering"
      },
      {
        "id": "c4-3",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 195500,
        "stream": "Engineering"
      },
      {
        "id": "c5-3",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 230000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 19,
      "highestLpa": 56,
      "medianLpa": 16.7,
      "placementPercentage": 88,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 19,
          "highestPackageLpa": 56,
          "medianPackageLpa": 16.7,
          "placementPercentage": 88,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 17.5,
          "highestPackageLpa": 50.4,
          "medianPackageLpa": 15.6,
          "placementPercentage": 86,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 16.1,
          "highestPackageLpa": 47.6,
          "medianPackageLpa": 14.8,
          "placementPercentage": 83,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Kanpur Airport (KNU)",
        "distanceKm": 25
      },
      "nearestRailwayStation": {
        "name": "Kanpur Central Railway Station",
        "distanceKm": 15
      },
      "nearestMetroPoint": {
        "name": "IIT Kanpur Metro Station",
        "distanceKm": 1
      },
      "connectivityDetails": "Located in Kanpur, Indian Institute of Technology Kanpur (IITK) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Kanpur Central Railway Station and Kanpur Airport (KNU)."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Indian Institute of Technology Kanpur (IITK) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 384,
          "closingRank": 576
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 360,
          "closingRank": 552
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 408,
          "closingRank": 600
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 432,
          "closingRank": 624
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 456,
          "closingRank": 648
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 720,
          "closingRank": 1056
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 672,
          "closingRank": 1008
        }
      ]
    }
  },
  {
    "id": "indian-institute-of-technology-kharagpur-iitkgp",
    "name": "Indian Institute of Technology Kharagpur (IITKGP)",
    "slug": "indian-institute-of-technology-kharagpur-iitkgp",
    "location": "Kharagpur, West Bengal",
    "city": "Kharagpur",
    "state": "West Bengal",
    "description": "Premier public engineering institution in Kharagpur, West Bengal renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Indian Institute of Technology Kharagpur (IITKGP) was established in 1951. Located in Kharagpur, West Bengal, the institute spans 2100 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #5.",
    "logoUrl": "https://images.unsplash.com/photo-1562774057?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907202?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://indian-institute-of-technology-kharagpur-iitkgp.ac.in",
    "feesAnnual": 235000,
    "rating": 4.8,
    "reviewsCount": 168,
    "averagePlacementLpa": 19.2,
    "highestPlacementLpa": 58,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1951,
    "campusSizeAcres": 2100,
    "studentCount": 4000,
    "accreditation": "NAAC A++ | NIRF #5",
    "nirfRank": 5,
    "featured": true,
    "courses": [
      {
        "id": "c1-4",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 235000,
        "stream": "Engineering"
      },
      {
        "id": "c2-4",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 223250,
        "stream": "Engineering"
      },
      {
        "id": "c3-4",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 211500,
        "stream": "Engineering"
      },
      {
        "id": "c4-4",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 199750,
        "stream": "Engineering"
      },
      {
        "id": "c5-4",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 235000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 19.2,
      "highestLpa": 58,
      "medianLpa": 16.9,
      "placementPercentage": 89,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 19.2,
          "highestPackageLpa": 58,
          "medianPackageLpa": 16.9,
          "placementPercentage": 89,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 17.7,
          "highestPackageLpa": 52.2,
          "medianPackageLpa": 15.7,
          "placementPercentage": 87,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 16.3,
          "highestPackageLpa": 49.3,
          "medianPackageLpa": 15,
          "placementPercentage": 84,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Netaji Subhash Chandra Bose Airport",
        "distanceKm": 130
      },
      "nearestRailwayStation": {
        "name": "Kharagpur Junction",
        "distanceKm": 4
      },
      "nearestMetroPoint": {
        "name": "Kharagpur Local Station",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Kharagpur, Indian Institute of Technology Kharagpur (IITKGP) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Kharagpur Junction and Netaji Subhash Chandra Bose Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Indian Institute of Technology Kharagpur (IITKGP) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 480,
          "closingRank": 720
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 450,
          "closingRank": 690
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 510,
          "closingRank": 750
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 540,
          "closingRank": 780
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 570,
          "closingRank": 810
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 900,
          "closingRank": 1320
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 840,
          "closingRank": 1260
        }
      ]
    }
  },
  {
    "id": "indian-institute-of-technology-roorkee-iitr",
    "name": "Indian Institute of Technology Roorkee (IITR)",
    "slug": "indian-institute-of-technology-roorkee-iitr",
    "location": "Roorkee, Uttarakhand",
    "city": "Roorkee",
    "state": "Uttarakhand",
    "description": "Premier public engineering institution in Roorkee, Uttarakhand renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Indian Institute of Technology Roorkee (IITR) was established in 1847. Located in Roorkee, Uttarakhand, the institute spans 365 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #6.",
    "logoUrl": "https://images.unsplash.com/photo-1562774058?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907203?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://indian-institute-of-technology-roorkee-iitr.ac.in",
    "feesAnnual": 225000,
    "rating": 4.7,
    "reviewsCount": 130,
    "averagePlacementLpa": 18.5,
    "highestPlacementLpa": 54,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1847,
    "campusSizeAcres": 365,
    "studentCount": 4250,
    "accreditation": "NAAC A++ | NIRF #6",
    "nirfRank": 6,
    "featured": true,
    "courses": [
      {
        "id": "c1-5",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 225000,
        "stream": "Engineering"
      },
      {
        "id": "c2-5",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 213750,
        "stream": "Engineering"
      },
      {
        "id": "c3-5",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 202500,
        "stream": "Engineering"
      },
      {
        "id": "c4-5",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 191250,
        "stream": "Engineering"
      },
      {
        "id": "c5-5",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 225000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 18.5,
      "highestLpa": 54,
      "medianLpa": 16.3,
      "placementPercentage": 90,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 18.5,
          "highestPackageLpa": 54,
          "medianPackageLpa": 16.3,
          "placementPercentage": 90,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 17,
          "highestPackageLpa": 48.6,
          "medianPackageLpa": 15.2,
          "placementPercentage": 88,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 15.7,
          "highestPackageLpa": 45.9,
          "medianPackageLpa": 14.4,
          "placementPercentage": 85,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Dehradun Jolly Grant Airport",
        "distanceKm": 65
      },
      "nearestRailwayStation": {
        "name": "Roorkee Railway Station",
        "distanceKm": 3
      },
      "nearestMetroPoint": {
        "name": "Roorkee Transit Hub",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Roorkee, Indian Institute of Technology Roorkee (IITR) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Roorkee Railway Station and Dehradun Jolly Grant Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Indian Institute of Technology Roorkee (IITR) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 576,
          "closingRank": 864
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 540,
          "closingRank": 828
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 612,
          "closingRank": 900
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 648,
          "closingRank": 936
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 684,
          "closingRank": 972
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 1080,
          "closingRank": 1584
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 1008,
          "closingRank": 1512
        }
      ]
    }
  },
  {
    "id": "indian-institute-of-technology-guwahati-iitg",
    "name": "Indian Institute of Technology Guwahati (IITG)",
    "slug": "indian-institute-of-technology-guwahati-iitg",
    "location": "Guwahati, Assam",
    "city": "Guwahati",
    "state": "Assam",
    "description": "Premier public engineering institution in Guwahati, Assam renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Indian Institute of Technology Guwahati (IITG) was established in 1994. Located in Guwahati, Assam, the institute spans 700 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #7.",
    "logoUrl": "https://images.unsplash.com/photo-1562774059?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907204?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://indian-institute-of-technology-guwahati-iitg.ac.in",
    "feesAnnual": 220000,
    "rating": 4.7,
    "reviewsCount": 125,
    "averagePlacementLpa": 17.8,
    "highestPlacementLpa": 50,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1994,
    "campusSizeAcres": 700,
    "studentCount": 4500,
    "accreditation": "NAAC A++ | NIRF #7",
    "nirfRank": 7,
    "featured": true,
    "courses": [
      {
        "id": "c1-6",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      },
      {
        "id": "c2-6",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 209000,
        "stream": "Engineering"
      },
      {
        "id": "c3-6",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 198000,
        "stream": "Engineering"
      },
      {
        "id": "c4-6",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 187000,
        "stream": "Engineering"
      },
      {
        "id": "c5-6",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 17.8,
      "highestLpa": 50,
      "medianLpa": 15.7,
      "placementPercentage": 91,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 17.8,
          "highestPackageLpa": 50,
          "medianPackageLpa": 15.7,
          "placementPercentage": 91,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 16.4,
          "highestPackageLpa": 45,
          "medianPackageLpa": 14.6,
          "placementPercentage": 89,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 15.1,
          "highestPackageLpa": 42.5,
          "medianPackageLpa": 13.9,
          "placementPercentage": 86,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Lokpriya Gopinath Bordoloi Airport",
        "distanceKm": 22
      },
      "nearestRailwayStation": {
        "name": "Guwahati Railway Station",
        "distanceKm": 18
      },
      "nearestMetroPoint": {
        "name": "North Guwahati Terminal",
        "distanceKm": 5
      },
      "connectivityDetails": "Located in Guwahati, Indian Institute of Technology Guwahati (IITG) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Guwahati Railway Station and Lokpriya Gopinath Bordoloi Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Indian Institute of Technology Guwahati (IITG) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 672,
          "closingRank": 1008
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 630,
          "closingRank": 966
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 714,
          "closingRank": 1050
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 756,
          "closingRank": 1092
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 798,
          "closingRank": 1134
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 1260,
          "closingRank": 1848
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 1176,
          "closingRank": 1764
        }
      ]
    }
  },
  {
    "id": "indian-institute-of-technology-hyderabad-iith",
    "name": "Indian Institute of Technology Hyderabad (IITH)",
    "slug": "indian-institute-of-technology-hyderabad-iith",
    "location": "Hyderabad, Telangana",
    "city": "Hyderabad",
    "state": "Telangana",
    "description": "Premier public engineering institution in Hyderabad, Telangana renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Indian Institute of Technology Hyderabad (IITH) was established in 2008. Located in Hyderabad, Telangana, the institute spans 576 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #8.",
    "logoUrl": "https://images.unsplash.com/photo-1562774060?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907205?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://indian-institute-of-technology-hyderabad-iith.ac.in",
    "feesAnnual": 240000,
    "rating": 4.8,
    "reviewsCount": 115,
    "averagePlacementLpa": 20.2,
    "highestPlacementLpa": 63,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 2008,
    "campusSizeAcres": 576,
    "studentCount": 4750,
    "accreditation": "NAAC A++ | NIRF #8",
    "nirfRank": 8,
    "featured": true,
    "courses": [
      {
        "id": "c1-7",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 240000,
        "stream": "Engineering"
      },
      {
        "id": "c2-7",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 228000,
        "stream": "Engineering"
      },
      {
        "id": "c3-7",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 216000,
        "stream": "Engineering"
      },
      {
        "id": "c4-7",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 204000,
        "stream": "Engineering"
      },
      {
        "id": "c5-7",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 240000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 20.2,
      "highestLpa": 63,
      "medianLpa": 17.8,
      "placementPercentage": 92,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 20.2,
          "highestPackageLpa": 63,
          "medianPackageLpa": 17.8,
          "placementPercentage": 92,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 18.6,
          "highestPackageLpa": 56.7,
          "medianPackageLpa": 16.6,
          "placementPercentage": 90,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 17.2,
          "highestPackageLpa": 53.5,
          "medianPackageLpa": 15.8,
          "placementPercentage": 87,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Rajiv Gandhi International Airport",
        "distanceKm": 55
      },
      "nearestRailwayStation": {
        "name": "Secunderabad / Lingampally Station",
        "distanceKm": 25
      },
      "nearestMetroPoint": {
        "name": "Miyapur Metro Station",
        "distanceKm": 20
      },
      "connectivityDetails": "Located in Hyderabad, Indian Institute of Technology Hyderabad (IITH) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Secunderabad / Lingampally Station and Rajiv Gandhi International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Indian Institute of Technology Hyderabad (IITH) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 768,
          "closingRank": 1152
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 720,
          "closingRank": 1104
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 816,
          "closingRank": 1200
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 864,
          "closingRank": 1248
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 912,
          "closingRank": 1296
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 1440,
          "closingRank": 2112
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 1344,
          "closingRank": 2016
        }
      ]
    }
  },
  {
    "id": "national-institute-of-technology-tiruchirappalli-nit-trichy",
    "name": "National Institute of Technology Tiruchirappalli (NIT Trichy)",
    "slug": "national-institute-of-technology-tiruchirappalli-nit-trichy",
    "location": "Tiruchirappalli, Tamil Nadu",
    "city": "Tiruchirappalli",
    "state": "Tamil Nadu",
    "description": "Premier public engineering institution in Tiruchirappalli, Tamil Nadu renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "National Institute of Technology Tiruchirappalli (NIT Trichy) was established in 1964. Located in Tiruchirappalli, Tamil Nadu, the institute spans 800 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #9.",
    "logoUrl": "https://images.unsplash.com/photo-1562774061?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907206?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://national-institute-of-technology-tiruchirappalli-nit-trichy.ac.in",
    "feesAnnual": 145000,
    "rating": 4.7,
    "reviewsCount": 135,
    "averagePlacementLpa": 16.8,
    "highestPlacementLpa": 52,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1964,
    "campusSizeAcres": 800,
    "studentCount": 5000,
    "accreditation": "NAAC A++ | NIRF #9",
    "nirfRank": 9,
    "featured": true,
    "courses": [
      {
        "id": "c1-8",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 145000,
        "stream": "Engineering"
      },
      {
        "id": "c2-8",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 137750,
        "stream": "Engineering"
      },
      {
        "id": "c3-8",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 130500,
        "stream": "Engineering"
      },
      {
        "id": "c4-8",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 123250,
        "stream": "Engineering"
      },
      {
        "id": "c5-8",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 145000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 16.8,
      "highestLpa": 52,
      "medianLpa": 14.8,
      "placementPercentage": 93,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 16.8,
          "highestPackageLpa": 52,
          "medianPackageLpa": 14.8,
          "placementPercentage": 93,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 15.5,
          "highestPackageLpa": 46.8,
          "medianPackageLpa": 13.8,
          "placementPercentage": 91,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 14.3,
          "highestPackageLpa": 44.2,
          "medianPackageLpa": 13.1,
          "placementPercentage": 88,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Tiruchirappalli International Airport",
        "distanceKm": 22
      },
      "nearestRailwayStation": {
        "name": "Tiruchirappalli Junction",
        "distanceKm": 20
      },
      "nearestMetroPoint": {
        "name": "Thuvakudi Bus Terminal",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Tiruchirappalli, National Institute of Technology Tiruchirappalli (NIT Trichy) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Tiruchirappalli Junction and Tiruchirappalli International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to National Institute of Technology Tiruchirappalli (NIT Trichy) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 3600,
          "closingRank": 5400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 3375,
          "closingRank": 5175
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 3825,
          "closingRank": 5625
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 4050,
          "closingRank": 5850
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 4275,
          "closingRank": 6075
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 6750,
          "closingRank": 9900
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 6300,
          "closingRank": 9450
        }
      ]
    }
  },
  {
    "id": "indian-institute-of-technology-bhu-varanasi-iit-bhu",
    "name": "Indian Institute of Technology BHU Varanasi (IIT BHU)",
    "slug": "indian-institute-of-technology-bhu-varanasi-iit-bhu",
    "location": "Varanasi, Uttar Pradesh",
    "city": "Varanasi",
    "state": "Uttar Pradesh",
    "description": "Premier public engineering institution in Varanasi, Uttar Pradesh renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Indian Institute of Technology BHU Varanasi (IIT BHU) was established in 1919. Located in Varanasi, Uttar Pradesh, the institute spans 1300 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #10.",
    "logoUrl": "https://images.unsplash.com/photo-1562774062?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907207?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://indian-institute-of-technology-bhu-varanasi-iit-bhu.ac.in",
    "feesAnnual": 230000,
    "rating": 4.7,
    "reviewsCount": 140,
    "averagePlacementLpa": 18,
    "highestPlacementLpa": 52,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1919,
    "campusSizeAcres": 1300,
    "studentCount": 5250,
    "accreditation": "NAAC A++ | NIRF #10",
    "nirfRank": 10,
    "featured": true,
    "courses": [
      {
        "id": "c1-9",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 230000,
        "stream": "Engineering"
      },
      {
        "id": "c2-9",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 218500,
        "stream": "Engineering"
      },
      {
        "id": "c3-9",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 207000,
        "stream": "Engineering"
      },
      {
        "id": "c4-9",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 195500,
        "stream": "Engineering"
      },
      {
        "id": "c5-9",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 230000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 18,
      "highestLpa": 52,
      "medianLpa": 15.8,
      "placementPercentage": 94,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 18,
          "highestPackageLpa": 52,
          "medianPackageLpa": 15.8,
          "placementPercentage": 94,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 16.6,
          "highestPackageLpa": 46.8,
          "medianPackageLpa": 14.8,
          "placementPercentage": 92,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 15.3,
          "highestPackageLpa": 44.2,
          "medianPackageLpa": 14,
          "placementPercentage": 89,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Lal Bahadur Shastri Airport",
        "distanceKm": 30
      },
      "nearestRailwayStation": {
        "name": "Varanasi Junction (Cantt)",
        "distanceKm": 8
      },
      "nearestMetroPoint": {
        "name": "Lanka Bus Station",
        "distanceKm": 1
      },
      "connectivityDetails": "Located in Varanasi, Indian Institute of Technology BHU Varanasi (IIT BHU) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Varanasi Junction (Cantt) and Lal Bahadur Shastri Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Indian Institute of Technology BHU Varanasi (IIT BHU) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 960,
          "closingRank": 1440
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 900,
          "closingRank": 1380
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 1020,
          "closingRank": 1500
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 1080,
          "closingRank": 1560
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 1140,
          "closingRank": 1620
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 1800,
          "closingRank": 2640
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 1680,
          "closingRank": 2520
        }
      ]
    }
  },
  {
    "id": "bits-pilani-birla-institute-of-technology-and-science",
    "name": "BITS Pilani (Birla Institute of Technology and Science)",
    "slug": "bits-pilani-birla-institute-of-technology-and-science",
    "location": "Pilani, Rajasthan",
    "city": "Pilani",
    "state": "Rajasthan",
    "description": "Premier deemed engineering institution in Pilani, Rajasthan renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "BITS Pilani (Birla Institute of Technology and Science) was established in 1964. Located in Pilani, Rajasthan, the institute spans 328 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #11.",
    "logoUrl": "https://images.unsplash.com/photo-1562774053?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907198?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://bits-pilani-birla-institute-of-technology-and-science.ac.in",
    "feesAnnual": 480000,
    "rating": 4.7,
    "reviewsCount": 156,
    "averagePlacementLpa": 18.2,
    "highestPlacementLpa": 60,
    "type": "Deemed",
    "affiliation": "Rajasthan Technological University",
    "establishedYear": 1964,
    "campusSizeAcres": 328,
    "studentCount": 5500,
    "accreditation": "NAAC A++ | NIRF #11",
    "nirfRank": 11,
    "featured": true,
    "courses": [
      {
        "id": "c1-10",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 480000,
        "stream": "Engineering"
      },
      {
        "id": "c2-10",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 456000,
        "stream": "Engineering"
      },
      {
        "id": "c3-10",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 432000,
        "stream": "Engineering"
      },
      {
        "id": "c4-10",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 408000,
        "stream": "Engineering"
      },
      {
        "id": "c5-10",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 480000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 18.2,
      "highestLpa": 60,
      "medianLpa": 16,
      "placementPercentage": 95,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 18.2,
          "highestPackageLpa": 60,
          "medianPackageLpa": 16,
          "placementPercentage": 95,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 16.7,
          "highestPackageLpa": 54,
          "medianPackageLpa": 14.9,
          "placementPercentage": 93,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 15.5,
          "highestPackageLpa": 51,
          "medianPackageLpa": 14.2,
          "placementPercentage": 90,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Indira Gandhi International Airport",
        "distanceKm": 180
      },
      "nearestRailwayStation": {
        "name": "Loharu Railway Station",
        "distanceKm": 24
      },
      "nearestMetroPoint": {
        "name": "Pilani Bus Stand",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Pilani, BITS Pilani (Birla Institute of Technology and Science) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Loharu Railway Station and Indira Gandhi International Airport."
    },
    "jeeCriteria": {
      "examName": "BITSAT",
      "eligibilityText": "Admissions to BITS Pilani (Birla Institute of Technology and Science) are granted via BITSAT merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 4400,
          "closingRank": 6600
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 4125,
          "closingRank": 6325
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 4675,
          "closingRank": 6875
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 4950,
          "closingRank": 7150
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 5225,
          "closingRank": 7425
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 8250,
          "closingRank": 12100
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 7700,
          "closingRank": 11550
        }
      ]
    }
  },
  {
    "id": "national-institute-of-technology-karnataka-nit-surathkal",
    "name": "National Institute of Technology Karnataka (NIT Surathkal)",
    "slug": "national-institute-of-technology-karnataka-nit-surathkal",
    "location": "Mangaluru, Karnataka",
    "city": "Mangaluru",
    "state": "Karnataka",
    "description": "Premier public engineering institution in Mangaluru, Karnataka renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "National Institute of Technology Karnataka (NIT Surathkal) was established in 1960. Located in Mangaluru, Karnataka, the institute spans 295 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #12.",
    "logoUrl": "https://images.unsplash.com/photo-1562774054?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907199?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://national-institute-of-technology-karnataka-nit-surathkal.ac.in",
    "feesAnnual": 150000,
    "rating": 4.7,
    "reviewsCount": 140,
    "averagePlacementLpa": 16.5,
    "highestPlacementLpa": 54,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1960,
    "campusSizeAcres": 295,
    "studentCount": 5750,
    "accreditation": "NAAC A++ | NIRF #12",
    "nirfRank": 12,
    "featured": true,
    "courses": [
      {
        "id": "c1-11",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 150000,
        "stream": "Engineering"
      },
      {
        "id": "c2-11",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 142500,
        "stream": "Engineering"
      },
      {
        "id": "c3-11",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      },
      {
        "id": "c4-11",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 127500,
        "stream": "Engineering"
      },
      {
        "id": "c5-11",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 150000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 16.5,
      "highestLpa": 54,
      "medianLpa": 14.5,
      "placementPercentage": 96,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 16.5,
          "highestPackageLpa": 54,
          "medianPackageLpa": 14.5,
          "placementPercentage": 96,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 15.2,
          "highestPackageLpa": 48.6,
          "medianPackageLpa": 13.5,
          "placementPercentage": 94,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 14,
          "highestPackageLpa": 45.9,
          "medianPackageLpa": 12.9,
          "placementPercentage": 91,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Mangaluru International Airport",
        "distanceKm": 16
      },
      "nearestRailwayStation": {
        "name": "Surathkal Railway Station",
        "distanceKm": 3
      },
      "nearestMetroPoint": {
        "name": "Surathkal Bus Terminal",
        "distanceKm": 1
      },
      "connectivityDetails": "Located in Mangaluru, National Institute of Technology Karnataka (NIT Surathkal) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Surathkal Railway Station and Mangaluru International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to National Institute of Technology Karnataka (NIT Surathkal) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 4800,
          "closingRank": 7200
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 4500,
          "closingRank": 6900
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 5100,
          "closingRank": 7500
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 5400,
          "closingRank": 7800
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 5700,
          "closingRank": 8100
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 9000,
          "closingRank": 13200
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 8400,
          "closingRank": 12600
        }
      ]
    }
  },
  {
    "id": "indian-institute-of-technology-indore-iiti",
    "name": "Indian Institute of Technology Indore (IITI)",
    "slug": "indian-institute-of-technology-indore-iiti",
    "location": "Indore, Madhya Pradesh",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "description": "Premier public engineering institution in Indore, Madhya Pradesh renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Indian Institute of Technology Indore (IITI) was established in 2009. Located in Indore, Madhya Pradesh, the institute spans 500 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #13.",
    "logoUrl": "https://images.unsplash.com/photo-1562774055?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907200?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://indian-institute-of-technology-indore-iiti.ac.in",
    "feesAnnual": 235000,
    "rating": 4.6,
    "reviewsCount": 98,
    "averagePlacementLpa": 17.5,
    "highestPlacementLpa": 48,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 2009,
    "campusSizeAcres": 500,
    "studentCount": 6000,
    "accreditation": "NAAC A++ | NIRF #13",
    "nirfRank": 13,
    "featured": false,
    "courses": [
      {
        "id": "c1-12",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 235000,
        "stream": "Engineering"
      },
      {
        "id": "c2-12",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 223250,
        "stream": "Engineering"
      },
      {
        "id": "c3-12",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 211500,
        "stream": "Engineering"
      },
      {
        "id": "c4-12",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 199750,
        "stream": "Engineering"
      },
      {
        "id": "c5-12",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 235000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 17.5,
      "highestLpa": 48,
      "medianLpa": 15.4,
      "placementPercentage": 97,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 17.5,
          "highestPackageLpa": 48,
          "medianPackageLpa": 15.4,
          "placementPercentage": 97,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 16.1,
          "highestPackageLpa": 43.2,
          "medianPackageLpa": 14.3,
          "placementPercentage": 95,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 14.9,
          "highestPackageLpa": 40.8,
          "medianPackageLpa": 13.7,
          "placementPercentage": 92,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Devi Ahilya Bai Holkar Airport",
        "distanceKm": 30
      },
      "nearestRailwayStation": {
        "name": "Indore Junction",
        "distanceKm": 24
      },
      "nearestMetroPoint": {
        "name": "Simrol Metro Stop",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Indore, Indian Institute of Technology Indore (IITI) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Indore Junction and Devi Ahilya Bai Holkar Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Indian Institute of Technology Indore (IITI) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 1248,
          "closingRank": 1872
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 1170,
          "closingRank": 1794
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 1326,
          "closingRank": 1950
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 1404,
          "closingRank": 2028
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 1482,
          "closingRank": 2106
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 2340,
          "closingRank": 3432
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 2184,
          "closingRank": 3276
        }
      ]
    }
  },
  {
    "id": "national-institute-of-technology-warangal-nitw",
    "name": "National Institute of Technology Warangal (NITW)",
    "slug": "national-institute-of-technology-warangal-nitw",
    "location": "Warangal, Telangana",
    "city": "Warangal",
    "state": "Telangana",
    "description": "Premier public engineering institution in Warangal, Telangana renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "National Institute of Technology Warangal (NITW) was established in 1959. Located in Warangal, Telangana, the institute spans 256 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #14.",
    "logoUrl": "https://images.unsplash.com/photo-1562774056?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907201?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://national-institute-of-technology-warangal-nitw.ac.in",
    "feesAnnual": 148000,
    "rating": 4.7,
    "reviewsCount": 132,
    "averagePlacementLpa": 16.2,
    "highestPlacementLpa": 50,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1959,
    "campusSizeAcres": 256,
    "studentCount": 6250,
    "accreditation": "NAAC A++ | NIRF #14",
    "nirfRank": 14,
    "featured": false,
    "courses": [
      {
        "id": "c1-13",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 148000,
        "stream": "Engineering"
      },
      {
        "id": "c2-13",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 140600,
        "stream": "Engineering"
      },
      {
        "id": "c3-13",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 133200,
        "stream": "Engineering"
      },
      {
        "id": "c4-13",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 125800,
        "stream": "Engineering"
      },
      {
        "id": "c5-13",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 148000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 16.2,
      "highestLpa": 50,
      "medianLpa": 14.3,
      "placementPercentage": 98,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 16.2,
          "highestPackageLpa": 50,
          "medianPackageLpa": 14.3,
          "placementPercentage": 98,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 14.9,
          "highestPackageLpa": 45,
          "medianPackageLpa": 13.3,
          "placementPercentage": 96,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 13.8,
          "highestPackageLpa": 42.5,
          "medianPackageLpa": 12.6,
          "placementPercentage": 93,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Rajiv Gandhi International Airport",
        "distanceKm": 160
      },
      "nearestRailwayStation": {
        "name": "Kazipet / Warangal Junction",
        "distanceKm": 12
      },
      "nearestMetroPoint": {
        "name": "Kazipet Station",
        "distanceKm": 6
      },
      "connectivityDetails": "Located in Warangal, National Institute of Technology Warangal (NITW) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Kazipet / Warangal Junction and Rajiv Gandhi International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to National Institute of Technology Warangal (NITW) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 5600,
          "closingRank": 8400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 5250,
          "closingRank": 8050
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 5950,
          "closingRank": 8750
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 6300,
          "closingRank": 9100
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 6650,
          "closingRank": 9450
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 10500,
          "closingRank": 15400
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 9800,
          "closingRank": 14700
        }
      ]
    }
  },
  {
    "id": "indian-institute-of-technology-bhu-dhanbad-iit-ism-dhanbad",
    "name": "Indian Institute of Technology BHU Dhanbad (IIT ISM Dhanbad)",
    "slug": "indian-institute-of-technology-bhu-dhanbad-iit-ism-dhanbad",
    "location": "Dhanbad, Jharkhand",
    "city": "Dhanbad",
    "state": "Jharkhand",
    "description": "Premier public engineering institution in Dhanbad, Jharkhand renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Indian Institute of Technology BHU Dhanbad (IIT ISM Dhanbad) was established in 1926. Located in Dhanbad, Jharkhand, the institute spans 393 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #15.",
    "logoUrl": "https://images.unsplash.com/photo-1562774057?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907202?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://indian-institute-of-technology-bhu-dhanbad-iit-ism-dhanbad.ac.in",
    "feesAnnual": 220000,
    "rating": 4.6,
    "reviewsCount": 110,
    "averagePlacementLpa": 16.8,
    "highestPlacementLpa": 50,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1926,
    "campusSizeAcres": 393,
    "studentCount": 6500,
    "accreditation": "NAAC A++ | NIRF #15",
    "nirfRank": 15,
    "featured": false,
    "courses": [
      {
        "id": "c1-14",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      },
      {
        "id": "c2-14",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 209000,
        "stream": "Engineering"
      },
      {
        "id": "c3-14",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 198000,
        "stream": "Engineering"
      },
      {
        "id": "c4-14",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 187000,
        "stream": "Engineering"
      },
      {
        "id": "c5-14",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 16.8,
      "highestLpa": 50,
      "medianLpa": 14.8,
      "placementPercentage": 85,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 16.8,
          "highestPackageLpa": 50,
          "medianPackageLpa": 14.8,
          "placementPercentage": 85,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 15.5,
          "highestPackageLpa": 45,
          "medianPackageLpa": 13.8,
          "placementPercentage": 83,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 14.3,
          "highestPackageLpa": 42.5,
          "medianPackageLpa": 13.1,
          "placementPercentage": 80,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Kazi Nazrul Islam Airport Durgapur",
        "distanceKm": 90
      },
      "nearestRailwayStation": {
        "name": "Dhanbad Junction",
        "distanceKm": 3
      },
      "nearestMetroPoint": {
        "name": "Dhanbad City Center",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Dhanbad, Indian Institute of Technology BHU Dhanbad (IIT ISM Dhanbad) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Dhanbad Junction and Kazi Nazrul Islam Airport Durgapur."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Indian Institute of Technology BHU Dhanbad (IIT ISM Dhanbad) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 1440,
          "closingRank": 2160
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 1350,
          "closingRank": 2070
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 1530,
          "closingRank": 2250
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 1620,
          "closingRank": 2340
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 1710,
          "closingRank": 2430
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 2700,
          "closingRank": 3960
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 2520,
          "closingRank": 3780
        }
      ]
    }
  },
  {
    "id": "national-institute-of-technology-rourkela-nit-rourkela",
    "name": "National Institute of Technology Rourkela (NIT Rourkela)",
    "slug": "national-institute-of-technology-rourkela-nit-rourkela",
    "location": "Rourkela, Odisha",
    "city": "Rourkela",
    "state": "Odisha",
    "description": "Premier public engineering institution in Rourkela, Odisha renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "National Institute of Technology Rourkela (NIT Rourkela) was established in 1961. Located in Rourkela, Odisha, the institute spans 647 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #16.",
    "logoUrl": "https://images.unsplash.com/photo-1562774058?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907203?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://national-institute-of-technology-rourkela-nit-rourkela.ac.in",
    "feesAnnual": 142000,
    "rating": 4.6,
    "reviewsCount": 120,
    "averagePlacementLpa": 15.8,
    "highestPlacementLpa": 48,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1961,
    "campusSizeAcres": 647,
    "studentCount": 6750,
    "accreditation": "NAAC A++ | NIRF #16",
    "nirfRank": 16,
    "featured": false,
    "courses": [
      {
        "id": "c1-15",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 142000,
        "stream": "Engineering"
      },
      {
        "id": "c2-15",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 134900,
        "stream": "Engineering"
      },
      {
        "id": "c3-15",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 127800,
        "stream": "Engineering"
      },
      {
        "id": "c4-15",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 120700,
        "stream": "Engineering"
      },
      {
        "id": "c5-15",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 142000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 15.8,
      "highestLpa": 48,
      "medianLpa": 13.9,
      "placementPercentage": 86,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 15.8,
          "highestPackageLpa": 48,
          "medianPackageLpa": 13.9,
          "placementPercentage": 86,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 14.5,
          "highestPackageLpa": 43.2,
          "medianPackageLpa": 13,
          "placementPercentage": 84,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 13.4,
          "highestPackageLpa": 40.8,
          "medianPackageLpa": 12.3,
          "placementPercentage": 81,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Jharsuguda Veer Surendra Sai Airport",
        "distanceKm": 125
      },
      "nearestRailwayStation": {
        "name": "Rourkela Junction",
        "distanceKm": 7
      },
      "nearestMetroPoint": {
        "name": "Sector 1 Bus Stand",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Rourkela, National Institute of Technology Rourkela (NIT Rourkela) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Rourkela Junction and Jharsuguda Veer Surendra Sai Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to National Institute of Technology Rourkela (NIT Rourkela) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 6400,
          "closingRank": 9600
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 6000,
          "closingRank": 9200
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 6800,
          "closingRank": 10000
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 7200,
          "closingRank": 10400
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 7600,
          "closingRank": 10800
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 12000,
          "closingRank": 17600
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 11200,
          "closingRank": 16800
        }
      ]
    }
  },
  {
    "id": "indian-institute-of-technology-gandhinagar-iitgn",
    "name": "Indian Institute of Technology Gandhinagar (IITGN)",
    "slug": "indian-institute-of-technology-gandhinagar-iitgn",
    "location": "Gandhinagar, Gujarat",
    "city": "Gandhinagar",
    "state": "Gujarat",
    "description": "Premier public engineering institution in Gandhinagar, Gujarat renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Indian Institute of Technology Gandhinagar (IITGN) was established in 2008. Located in Gandhinagar, Gujarat, the institute spans 400 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #18.",
    "logoUrl": "https://images.unsplash.com/photo-1562774059?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907204?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://indian-institute-of-technology-gandhinagar-iitgn.ac.in",
    "feesAnnual": 230000,
    "rating": 4.6,
    "reviewsCount": 88,
    "averagePlacementLpa": 16.5,
    "highestPlacementLpa": 46,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 2008,
    "campusSizeAcres": 400,
    "studentCount": 7000,
    "accreditation": "NAAC A++ | NIRF #18",
    "nirfRank": 18,
    "featured": false,
    "courses": [
      {
        "id": "c1-16",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 230000,
        "stream": "Engineering"
      },
      {
        "id": "c2-16",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 218500,
        "stream": "Engineering"
      },
      {
        "id": "c3-16",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 207000,
        "stream": "Engineering"
      },
      {
        "id": "c4-16",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 195500,
        "stream": "Engineering"
      },
      {
        "id": "c5-16",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 230000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 16.5,
      "highestLpa": 46,
      "medianLpa": 14.5,
      "placementPercentage": 87,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 16.5,
          "highestPackageLpa": 46,
          "medianPackageLpa": 14.5,
          "placementPercentage": 87,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 15.2,
          "highestPackageLpa": 41.4,
          "medianPackageLpa": 13.5,
          "placementPercentage": 85,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 14,
          "highestPackageLpa": 39.1,
          "medianPackageLpa": 12.9,
          "placementPercentage": 82,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Sardar Vallabhbhai Patel Airport",
        "distanceKm": 18
      },
      "nearestRailwayStation": {
        "name": "Ahmedabad Junction",
        "distanceKm": 25
      },
      "nearestMetroPoint": {
        "name": "Gandhinagar Metro",
        "distanceKm": 6
      },
      "connectivityDetails": "Located in Gandhinagar, Indian Institute of Technology Gandhinagar (IITGN) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Ahmedabad Junction and Sardar Vallabhbhai Patel Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Indian Institute of Technology Gandhinagar (IITGN) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 1728,
          "closingRank": 2592
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 1620,
          "closingRank": 2484
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 1836,
          "closingRank": 2700
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 1944,
          "closingRank": 2808
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 2052,
          "closingRank": 2916
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 3240,
          "closingRank": 4752
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 3024,
          "closingRank": 4536
        }
      ]
    }
  },
  {
    "id": "indian-institute-of-technology-ropar-iit-ropar",
    "name": "Indian Institute of Technology Ropar (IIT Ropar)",
    "slug": "indian-institute-of-technology-ropar-iit-ropar",
    "location": "Rupnagar, Punjab",
    "city": "Rupnagar",
    "state": "Punjab",
    "description": "Premier public engineering institution in Rupnagar, Punjab renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Indian Institute of Technology Ropar (IIT Ropar) was established in 2008. Located in Rupnagar, Punjab, the institute spans 500 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #22.",
    "logoUrl": "https://images.unsplash.com/photo-1562774060?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907205?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://indian-institute-of-technology-ropar-iit-ropar.ac.in",
    "feesAnnual": 225000,
    "rating": 4.5,
    "reviewsCount": 82,
    "averagePlacementLpa": 16,
    "highestPlacementLpa": 45,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 2008,
    "campusSizeAcres": 500,
    "studentCount": 7250,
    "accreditation": "NAAC A++ | NIRF #22",
    "nirfRank": 22,
    "featured": false,
    "courses": [
      {
        "id": "c1-17",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 225000,
        "stream": "Engineering"
      },
      {
        "id": "c2-17",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 213750,
        "stream": "Engineering"
      },
      {
        "id": "c3-17",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 202500,
        "stream": "Engineering"
      },
      {
        "id": "c4-17",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 191250,
        "stream": "Engineering"
      },
      {
        "id": "c5-17",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 225000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 16,
      "highestLpa": 45,
      "medianLpa": 14.1,
      "placementPercentage": 88,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 16,
          "highestPackageLpa": 45,
          "medianPackageLpa": 14.1,
          "placementPercentage": 88,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 14.7,
          "highestPackageLpa": 40.5,
          "medianPackageLpa": 13.1,
          "placementPercentage": 86,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 13.6,
          "highestPackageLpa": 38.3,
          "medianPackageLpa": 12.5,
          "placementPercentage": 83,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Chandigarh International Airport",
        "distanceKm": 55
      },
      "nearestRailwayStation": {
        "name": "Rupnagar Railway Station",
        "distanceKm": 6
      },
      "nearestMetroPoint": {
        "name": "Ropar Bus Terminal",
        "distanceKm": 4
      },
      "connectivityDetails": "Located in Rupnagar, Indian Institute of Technology Ropar (IIT Ropar) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Rupnagar Railway Station and Chandigarh International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Indian Institute of Technology Ropar (IIT Ropar) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 2112,
          "closingRank": 3168
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 1980,
          "closingRank": 3036
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 2244,
          "closingRank": 3300
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 2376,
          "closingRank": 3432
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 2508,
          "closingRank": 3564
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 3960,
          "closingRank": 5808
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 3696,
          "closingRank": 5544
        }
      ]
    }
  },
  {
    "id": "national-institute-of-technology-calicut-nitc",
    "name": "National Institute of Technology Calicut (NITC)",
    "slug": "national-institute-of-technology-calicut-nitc",
    "location": "Kozhikode, Kerala",
    "city": "Kozhikode",
    "state": "Kerala",
    "description": "Premier public engineering institution in Kozhikode, Kerala renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "National Institute of Technology Calicut (NITC) was established in 1961. Located in Kozhikode, Kerala, the institute spans 290 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #23.",
    "logoUrl": "https://images.unsplash.com/photo-1562774061?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907206?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://national-institute-of-technology-calicut-nitc.ac.in",
    "feesAnnual": 140000,
    "rating": 4.6,
    "reviewsCount": 115,
    "averagePlacementLpa": 15,
    "highestPlacementLpa": 46,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1961,
    "campusSizeAcres": 290,
    "studentCount": 7500,
    "accreditation": "NAAC A++ | NIRF #23",
    "nirfRank": 23,
    "featured": false,
    "courses": [
      {
        "id": "c1-18",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 140000,
        "stream": "Engineering"
      },
      {
        "id": "c2-18",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 133000,
        "stream": "Engineering"
      },
      {
        "id": "c3-18",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 126000,
        "stream": "Engineering"
      },
      {
        "id": "c4-18",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 119000,
        "stream": "Engineering"
      },
      {
        "id": "c5-18",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 140000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 15,
      "highestLpa": 46,
      "medianLpa": 13.2,
      "placementPercentage": 89,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 15,
          "highestPackageLpa": 46,
          "medianPackageLpa": 13.2,
          "placementPercentage": 89,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 13.8,
          "highestPackageLpa": 41.4,
          "medianPackageLpa": 12.3,
          "placementPercentage": 87,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 12.8,
          "highestPackageLpa": 39.1,
          "medianPackageLpa": 11.7,
          "placementPercentage": 84,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Calicut International Airport",
        "distanceKm": 32
      },
      "nearestRailwayStation": {
        "name": "Kozhikode Railway Station",
        "distanceKm": 22
      },
      "nearestMetroPoint": {
        "name": "Chathamangalam Stop",
        "distanceKm": 1
      },
      "connectivityDetails": "Located in Kozhikode, National Institute of Technology Calicut (NITC) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Kozhikode Railway Station and Calicut International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to National Institute of Technology Calicut (NITC) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 9200,
          "closingRank": 13800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 8625,
          "closingRank": 13225
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 9775,
          "closingRank": 14375
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 10350,
          "closingRank": 14950
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 10925,
          "closingRank": 15525
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 17250,
          "closingRank": 25300
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 16100,
          "closingRank": 24150
        }
      ]
    }
  },
  {
    "id": "indian-institute-of-technology-patna-iitp",
    "name": "Indian Institute of Technology Patna (IITP)",
    "slug": "indian-institute-of-technology-patna-iitp",
    "location": "Patna, Bihar",
    "city": "Patna",
    "state": "Bihar",
    "description": "Premier public engineering institution in Patna, Bihar renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Indian Institute of Technology Patna (IITP) was established in 2008. Located in Patna, Bihar, the institute spans 501 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #27.",
    "logoUrl": "https://images.unsplash.com/photo-1562774062?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907207?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://indian-institute-of-technology-patna-iitp.ac.in",
    "feesAnnual": 220000,
    "rating": 4.5,
    "reviewsCount": 90,
    "averagePlacementLpa": 16.2,
    "highestPlacementLpa": 46,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 2008,
    "campusSizeAcres": 501,
    "studentCount": 7750,
    "accreditation": "NAAC A++ | NIRF #27",
    "nirfRank": 27,
    "featured": false,
    "courses": [
      {
        "id": "c1-19",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      },
      {
        "id": "c2-19",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 209000,
        "stream": "Engineering"
      },
      {
        "id": "c3-19",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 198000,
        "stream": "Engineering"
      },
      {
        "id": "c4-19",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 187000,
        "stream": "Engineering"
      },
      {
        "id": "c5-19",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 16.2,
      "highestLpa": 46,
      "medianLpa": 14.3,
      "placementPercentage": 90,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 16.2,
          "highestPackageLpa": 46,
          "medianPackageLpa": 14.3,
          "placementPercentage": 90,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 14.9,
          "highestPackageLpa": 41.4,
          "medianPackageLpa": 13.3,
          "placementPercentage": 88,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 13.8,
          "highestPackageLpa": 39.1,
          "medianPackageLpa": 12.6,
          "placementPercentage": 85,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Jay Prakash Narayan Airport",
        "distanceKm": 30
      },
      "nearestRailwayStation": {
        "name": "Bihta / Patna Junction",
        "distanceKm": 5
      },
      "nearestMetroPoint": {
        "name": "Bihta Station",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Patna, Indian Institute of Technology Patna (IITP) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Bihta / Patna Junction and Jay Prakash Narayan Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Indian Institute of Technology Patna (IITP) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 2592,
          "closingRank": 3888
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 2430,
          "closingRank": 3726
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 2754,
          "closingRank": 4050
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 2916,
          "closingRank": 4212
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 3078,
          "closingRank": 4374
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 4860,
          "closingRank": 7128
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 4536,
          "closingRank": 6804
        }
      ]
    }
  },
  {
    "id": "srm-institute-of-science-and-technology-srm-ktr",
    "name": "SRM Institute of Science and Technology (SRM KTR)",
    "slug": "srm-institute-of-science-and-technology-srm-ktr",
    "location": "Chennai, Tamil Nadu",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "description": "Premier private engineering institution in Chennai, Tamil Nadu renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "SRM Institute of Science and Technology (SRM KTR) was established in 1985. Located in Chennai, Tamil Nadu, the institute spans 250 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #28.",
    "logoUrl": "https://images.unsplash.com/photo-1562774053?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907198?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://srm-institute-of-science-and-technology-srm-ktr.ac.in",
    "feesAnnual": 275000,
    "rating": 4.2,
    "reviewsCount": 280,
    "averagePlacementLpa": 7.8,
    "highestPlacementLpa": 42,
    "type": "Private",
    "affiliation": "Tamil Nadu Technological University",
    "establishedYear": 1985,
    "campusSizeAcres": 250,
    "studentCount": 8000,
    "accreditation": "NAAC A++ | NIRF #28",
    "nirfRank": 28,
    "featured": false,
    "courses": [
      {
        "id": "c1-20",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 275000,
        "stream": "Engineering"
      },
      {
        "id": "c2-20",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 261250,
        "stream": "Engineering"
      },
      {
        "id": "c3-20",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 247500,
        "stream": "Engineering"
      },
      {
        "id": "c4-20",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 233750,
        "stream": "Engineering"
      },
      {
        "id": "c5-20",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 275000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 7.8,
      "highestLpa": 42,
      "medianLpa": 6.9,
      "placementPercentage": 91,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 7.8,
          "highestPackageLpa": 42,
          "medianPackageLpa": 6.9,
          "placementPercentage": 91,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 7.2,
          "highestPackageLpa": 37.8,
          "medianPackageLpa": 6.4,
          "placementPercentage": 89,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 6.6,
          "highestPackageLpa": 35.7,
          "medianPackageLpa": 6.1,
          "placementPercentage": 86,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Chennai International Airport",
        "distanceKm": 25
      },
      "nearestRailwayStation": {
        "name": "Kattankulathur Railway Station",
        "distanceKm": 1
      },
      "nearestMetroPoint": {
        "name": "Potheri Suburban Station",
        "distanceKm": 1
      },
      "connectivityDetails": "Located in Chennai, SRM Institute of Science and Technology (SRM KTR) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Kattankulathur Railway Station and Chennai International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to SRM Institute of Science and Technology (SRM KTR) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 11200,
          "closingRank": 16800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 10500,
          "closingRank": 16100
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 11900,
          "closingRank": 17500
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 12600,
          "closingRank": 18200
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 13300,
          "closingRank": 18900
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 21000,
          "closingRank": 30800
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 19600,
          "closingRank": 29400
        }
      ]
    }
  },
  {
    "id": "delhi-technological-university-dtu",
    "name": "Delhi Technological University (DTU)",
    "slug": "delhi-technological-university-dtu",
    "location": "New Delhi, Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "description": "Premier public engineering institution in New Delhi, Delhi renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Delhi Technological University (DTU) was established in 1941. Located in New Delhi, Delhi, the institute spans 164 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #29.",
    "logoUrl": "https://images.unsplash.com/photo-1562774054?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907199?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://delhi-technological-university-dtu.ac.in",
    "feesAnnual": 220000,
    "rating": 4.6,
    "reviewsCount": 195,
    "averagePlacementLpa": 15.4,
    "highestPlacementLpa": 48,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1941,
    "campusSizeAcres": 164,
    "studentCount": 8250,
    "accreditation": "NAAC A++ | NIRF #29",
    "nirfRank": 29,
    "featured": false,
    "courses": [
      {
        "id": "c1-21",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      },
      {
        "id": "c2-21",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 209000,
        "stream": "Engineering"
      },
      {
        "id": "c3-21",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 198000,
        "stream": "Engineering"
      },
      {
        "id": "c4-21",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 187000,
        "stream": "Engineering"
      },
      {
        "id": "c5-21",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 15.4,
      "highestLpa": 48,
      "medianLpa": 13.6,
      "placementPercentage": 92,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 15.4,
          "highestPackageLpa": 48,
          "medianPackageLpa": 13.6,
          "placementPercentage": 92,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 14.2,
          "highestPackageLpa": 43.2,
          "medianPackageLpa": 12.6,
          "placementPercentage": 90,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 13.1,
          "highestPackageLpa": 40.8,
          "medianPackageLpa": 12,
          "placementPercentage": 87,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Indira Gandhi International Airport",
        "distanceKm": 28
      },
      "nearestRailwayStation": {
        "name": "Badli / New Delhi Station",
        "distanceKm": 3
      },
      "nearestMetroPoint": {
        "name": "Samaypur Badli Metro",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in New Delhi, Delhi Technological University (DTU) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Badli / New Delhi Station and Indira Gandhi International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Delhi Technological University (DTU) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 11600,
          "closingRank": 17400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 10875,
          "closingRank": 16675
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 12325,
          "closingRank": 18125
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 13050,
          "closingRank": 18850
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 13775,
          "closingRank": 19575
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 21750,
          "closingRank": 31900
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 20300,
          "closingRank": 30450
        }
      ]
    }
  },
  {
    "id": "indian-institute-of-technology-mandi-iit-mandi",
    "name": "Indian Institute of Technology Mandi (IIT Mandi)",
    "slug": "indian-institute-of-technology-mandi-iit-mandi",
    "location": "Mandi, Himachal Pradesh",
    "city": "Mandi",
    "state": "Himachal Pradesh",
    "description": "Premier public engineering institution in Mandi, Himachal Pradesh renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Indian Institute of Technology Mandi (IIT Mandi) was established in 2009. Located in Mandi, Himachal Pradesh, the institute spans 538 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #33.",
    "logoUrl": "https://images.unsplash.com/photo-1562774055?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907200?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://indian-institute-of-technology-mandi-iit-mandi.ac.in",
    "feesAnnual": 215000,
    "rating": 4.5,
    "reviewsCount": 78,
    "averagePlacementLpa": 15.5,
    "highestPlacementLpa": 44,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 2009,
    "campusSizeAcres": 538,
    "studentCount": 8500,
    "accreditation": "NAAC A++ | NIRF #33",
    "nirfRank": 33,
    "featured": false,
    "courses": [
      {
        "id": "c1-22",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 215000,
        "stream": "Engineering"
      },
      {
        "id": "c2-22",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 204250,
        "stream": "Engineering"
      },
      {
        "id": "c3-22",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 193500,
        "stream": "Engineering"
      },
      {
        "id": "c4-22",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 182750,
        "stream": "Engineering"
      },
      {
        "id": "c5-22",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 215000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 15.5,
      "highestLpa": 44,
      "medianLpa": 13.6,
      "placementPercentage": 93,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 15.5,
          "highestPackageLpa": 44,
          "medianPackageLpa": 13.6,
          "placementPercentage": 93,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 14.3,
          "highestPackageLpa": 39.6,
          "medianPackageLpa": 12.7,
          "placementPercentage": 91,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 13.2,
          "highestPackageLpa": 37.4,
          "medianPackageLpa": 12.1,
          "placementPercentage": 88,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Kullu Manali Airport (Bhuntar)",
        "distanceKm": 45
      },
      "nearestRailwayStation": {
        "name": "Kiratpur Sahib Station",
        "distanceKm": 110
      },
      "nearestMetroPoint": {
        "name": "Kamand Bus Terminal",
        "distanceKm": 1
      },
      "connectivityDetails": "Located in Mandi, Indian Institute of Technology Mandi (IIT Mandi) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Kiratpur Sahib Station and Kullu Manali Airport (Bhuntar)."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Indian Institute of Technology Mandi (IIT Mandi) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 3168,
          "closingRank": 4752
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 2970,
          "closingRank": 4554
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 3366,
          "closingRank": 4950
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 3564,
          "closingRank": 5148
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 3762,
          "closingRank": 5346
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 5940,
          "closingRank": 8712
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 5544,
          "closingRank": 8316
        }
      ]
    }
  },
  {
    "id": "indian-institute-of-technology-jodhpur-iitj",
    "name": "Indian Institute of Technology Jodhpur (IITJ)",
    "slug": "indian-institute-of-technology-jodhpur-iitj",
    "location": "Jodhpur, Rajasthan",
    "city": "Jodhpur",
    "state": "Rajasthan",
    "description": "Premier public engineering institution in Jodhpur, Rajasthan renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Indian Institute of Technology Jodhpur (IITJ) was established in 2008. Located in Jodhpur, Rajasthan, the institute spans 852 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #30.",
    "logoUrl": "https://images.unsplash.com/photo-1562774056?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907201?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://indian-institute-of-technology-jodhpur-iitj.ac.in",
    "feesAnnual": 225000,
    "rating": 4.5,
    "reviewsCount": 85,
    "averagePlacementLpa": 15.8,
    "highestPlacementLpa": 45,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 2008,
    "campusSizeAcres": 852,
    "studentCount": 8750,
    "accreditation": "NAAC A++ | NIRF #30",
    "nirfRank": 30,
    "featured": false,
    "courses": [
      {
        "id": "c1-23",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 225000,
        "stream": "Engineering"
      },
      {
        "id": "c2-23",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 213750,
        "stream": "Engineering"
      },
      {
        "id": "c3-23",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 202500,
        "stream": "Engineering"
      },
      {
        "id": "c4-23",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 191250,
        "stream": "Engineering"
      },
      {
        "id": "c5-23",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 225000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 15.8,
      "highestLpa": 45,
      "medianLpa": 13.9,
      "placementPercentage": 94,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 15.8,
          "highestPackageLpa": 45,
          "medianPackageLpa": 13.9,
          "placementPercentage": 94,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 14.5,
          "highestPackageLpa": 40.5,
          "medianPackageLpa": 13,
          "placementPercentage": 92,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 13.4,
          "highestPackageLpa": 38.3,
          "medianPackageLpa": 12.3,
          "placementPercentage": 89,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Jodhpur Airport",
        "distanceKm": 26
      },
      "nearestRailwayStation": {
        "name": "Jodhpur Junction",
        "distanceKm": 24
      },
      "nearestMetroPoint": {
        "name": "NH 65 Stop",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Jodhpur, Indian Institute of Technology Jodhpur (IITJ) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Jodhpur Junction and Jodhpur Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Indian Institute of Technology Jodhpur (IITJ) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 2880,
          "closingRank": 4320
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 2700,
          "closingRank": 4140
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 3060,
          "closingRank": 4500
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 3240,
          "closingRank": 4680
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 3420,
          "closingRank": 4860
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 5400,
          "closingRank": 7920
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 5040,
          "closingRank": 7560
        }
      ]
    }
  },
  {
    "id": "amrita-vishwa-vidyapeetham-amrita-coimbatore",
    "name": "Amrita Vishwa Vidyapeetham (Amrita Coimbatore)",
    "slug": "amrita-vishwa-vidyapeetham-amrita-coimbatore",
    "location": "Coimbatore, Tamil Nadu",
    "city": "Coimbatore",
    "state": "Tamil Nadu",
    "description": "Premier private engineering institution in Coimbatore, Tamil Nadu renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Amrita Vishwa Vidyapeetham (Amrita Coimbatore) was established in 1994. Located in Coimbatore, Tamil Nadu, the institute spans 400 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #31.",
    "logoUrl": "https://images.unsplash.com/photo-1562774057?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907202?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://amrita-vishwa-vidyapeetham-amrita-coimbatore.ac.in",
    "feesAnnual": 260000,
    "rating": 4.4,
    "reviewsCount": 165,
    "averagePlacementLpa": 9.5,
    "highestPlacementLpa": 40,
    "type": "Private",
    "affiliation": "Tamil Nadu Technological University",
    "establishedYear": 1994,
    "campusSizeAcres": 400,
    "studentCount": 9000,
    "accreditation": "NAAC A++ | NIRF #31",
    "nirfRank": 31,
    "featured": false,
    "courses": [
      {
        "id": "c1-24",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 260000,
        "stream": "Engineering"
      },
      {
        "id": "c2-24",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 247000,
        "stream": "Engineering"
      },
      {
        "id": "c3-24",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 234000,
        "stream": "Engineering"
      },
      {
        "id": "c4-24",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 221000,
        "stream": "Engineering"
      },
      {
        "id": "c5-24",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 260000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 9.5,
      "highestLpa": 40,
      "medianLpa": 8.4,
      "placementPercentage": 95,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 9.5,
          "highestPackageLpa": 40,
          "medianPackageLpa": 8.4,
          "placementPercentage": 95,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 8.7,
          "highestPackageLpa": 36,
          "medianPackageLpa": 7.8,
          "placementPercentage": 93,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 8.1,
          "highestPackageLpa": 34,
          "medianPackageLpa": 7.4,
          "placementPercentage": 90,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Coimbatore International Airport",
        "distanceKm": 30
      },
      "nearestRailwayStation": {
        "name": "Ettimadai Station",
        "distanceKm": 2
      },
      "nearestMetroPoint": {
        "name": "Ettimadai Stop",
        "distanceKm": 1
      },
      "connectivityDetails": "Located in Coimbatore, Amrita Vishwa Vidyapeetham (Amrita Coimbatore) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Ettimadai Station and Coimbatore International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Amrita Vishwa Vidyapeetham (Amrita Coimbatore) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 12400,
          "closingRank": 18600
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 11625,
          "closingRank": 17825
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 13175,
          "closingRank": 19375
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 13950,
          "closingRank": 20150
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 14725,
          "closingRank": 20925
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 23250,
          "closingRank": 34100
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 21700,
          "closingRank": 32550
        }
      ]
    }
  },
  {
    "id": "netaji-subhas-university-of-technology-nsut",
    "name": "Netaji Subhas University of Technology (NSUT)",
    "slug": "netaji-subhas-university-of-technology-nsut",
    "location": "New Delhi, Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "description": "Premier public engineering institution in New Delhi, Delhi renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Netaji Subhas University of Technology (NSUT) was established in 1983. Located in New Delhi, Delhi, the institute spans 145 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #60.",
    "logoUrl": "https://images.unsplash.com/photo-1562774058?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907203?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://netaji-subhas-university-of-technology-nsut.ac.in",
    "feesAnnual": 220000,
    "rating": 4.6,
    "reviewsCount": 160,
    "averagePlacementLpa": 16.2,
    "highestPlacementLpa": 50,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1983,
    "campusSizeAcres": 145,
    "studentCount": 9250,
    "accreditation": "NAAC A++ | NIRF #60",
    "nirfRank": 60,
    "featured": false,
    "courses": [
      {
        "id": "c1-25",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      },
      {
        "id": "c2-25",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 209000,
        "stream": "Engineering"
      },
      {
        "id": "c3-25",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 198000,
        "stream": "Engineering"
      },
      {
        "id": "c4-25",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 187000,
        "stream": "Engineering"
      },
      {
        "id": "c5-25",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 16.2,
      "highestLpa": 50,
      "medianLpa": 14.3,
      "placementPercentage": 96,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 16.2,
          "highestPackageLpa": 50,
          "medianPackageLpa": 14.3,
          "placementPercentage": 96,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 14.9,
          "highestPackageLpa": 45,
          "medianPackageLpa": 13.3,
          "placementPercentage": 94,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 13.8,
          "highestPackageLpa": 42.5,
          "medianPackageLpa": 12.6,
          "placementPercentage": 91,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Indira Gandhi International Airport",
        "distanceKm": 12
      },
      "nearestRailwayStation": {
        "name": "Dwarka Sector 14 Station",
        "distanceKm": 2
      },
      "nearestMetroPoint": {
        "name": "Dwarka Mor Metro",
        "distanceKm": 1
      },
      "connectivityDetails": "Located in New Delhi, Netaji Subhas University of Technology (NSUT) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Dwarka Sector 14 Station and Indira Gandhi International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Netaji Subhas University of Technology (NSUT) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 24000,
          "closingRank": 36000
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 22500,
          "closingRank": 34500
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 25500,
          "closingRank": 37500
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 27000,
          "closingRank": 39000
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 28500,
          "closingRank": 40500
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 45000,
          "closingRank": 66000
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 42000,
          "closingRank": 63000
        }
      ]
    }
  },
  {
    "id": "manipal-institute-of-technology-mit-manipal",
    "name": "Manipal Institute of Technology (MIT Manipal)",
    "slug": "manipal-institute-of-technology-mit-manipal",
    "location": "Manipal, Karnataka",
    "city": "Manipal",
    "state": "Karnataka",
    "description": "Premier private engineering institution in Manipal, Karnataka renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Manipal Institute of Technology (MIT Manipal) was established in 1957. Located in Manipal, Karnataka, the institute spans 313 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #61.",
    "logoUrl": "https://images.unsplash.com/photo-1562774059?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907204?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://manipal-institute-of-technology-mit-manipal.ac.in",
    "feesAnnual": 380000,
    "rating": 4.4,
    "reviewsCount": 178,
    "averagePlacementLpa": 11.5,
    "highestPlacementLpa": 44,
    "type": "Private",
    "affiliation": "Karnataka Technological University",
    "establishedYear": 1957,
    "campusSizeAcres": 313,
    "studentCount": 9500,
    "accreditation": "NAAC A++ | NIRF #61",
    "nirfRank": 61,
    "featured": false,
    "courses": [
      {
        "id": "c1-26",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 380000,
        "stream": "Engineering"
      },
      {
        "id": "c2-26",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 361000,
        "stream": "Engineering"
      },
      {
        "id": "c3-26",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 342000,
        "stream": "Engineering"
      },
      {
        "id": "c4-26",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 323000,
        "stream": "Engineering"
      },
      {
        "id": "c5-26",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 380000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 11.5,
      "highestLpa": 44,
      "medianLpa": 10.1,
      "placementPercentage": 97,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 11.5,
          "highestPackageLpa": 44,
          "medianPackageLpa": 10.1,
          "placementPercentage": 97,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 10.6,
          "highestPackageLpa": 39.6,
          "medianPackageLpa": 9.4,
          "placementPercentage": 95,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 9.8,
          "highestPackageLpa": 37.4,
          "medianPackageLpa": 9,
          "placementPercentage": 92,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Mangaluru International Airport",
        "distanceKm": 60
      },
      "nearestRailwayStation": {
        "name": "Udupi Railway Station",
        "distanceKm": 4
      },
      "nearestMetroPoint": {
        "name": "Manipal Bus Stand",
        "distanceKm": 1
      },
      "connectivityDetails": "Located in Manipal, Manipal Institute of Technology (MIT Manipal) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Udupi Railway Station and Mangaluru International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Manipal Institute of Technology (MIT Manipal) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 24400,
          "closingRank": 36600
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 22875,
          "closingRank": 35075
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 25925,
          "closingRank": 38125
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 27450,
          "closingRank": 39650
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 28975,
          "closingRank": 41175
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 45750,
          "closingRank": 67100
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 42700,
          "closingRank": 64050
        }
      ]
    }
  },
  {
    "id": "international-institute-of-information-technology-hyderabad-iiith",
    "name": "International Institute of Information Technology Hyderabad (IIITH)",
    "slug": "international-institute-of-information-technology-hyderabad-iiith",
    "location": "Hyderabad, Telangana",
    "city": "Hyderabad",
    "state": "Telangana",
    "description": "Premier autonomous engineering institution in Hyderabad, Telangana renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "International Institute of Information Technology Hyderabad (IIITH) was established in 1998. Located in Hyderabad, Telangana, the institute spans 66 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #55.",
    "logoUrl": "https://images.unsplash.com/photo-1562774060?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907205?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://international-institute-of-information-technology-hyderabad-iiith.ac.in",
    "feesAnnual": 360000,
    "rating": 4.8,
    "reviewsCount": 110,
    "averagePlacementLpa": 24.5,
    "highestPlacementLpa": 65,
    "type": "Autonomous",
    "affiliation": "Telangana Technological University",
    "establishedYear": 1998,
    "campusSizeAcres": 66,
    "studentCount": 9750,
    "accreditation": "NAAC A++ | NIRF #55",
    "nirfRank": 55,
    "featured": false,
    "courses": [
      {
        "id": "c1-27",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 360000,
        "stream": "Engineering"
      },
      {
        "id": "c2-27",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 342000,
        "stream": "Engineering"
      },
      {
        "id": "c3-27",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 324000,
        "stream": "Engineering"
      },
      {
        "id": "c4-27",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 306000,
        "stream": "Engineering"
      },
      {
        "id": "c5-27",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 360000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 24.5,
      "highestLpa": 65,
      "medianLpa": 21.6,
      "placementPercentage": 98,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 24.5,
          "highestPackageLpa": 65,
          "medianPackageLpa": 21.6,
          "placementPercentage": 98,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 22.5,
          "highestPackageLpa": 58.5,
          "medianPackageLpa": 20.1,
          "placementPercentage": 96,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 20.8,
          "highestPackageLpa": 55.3,
          "medianPackageLpa": 19.1,
          "placementPercentage": 93,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Rajiv Gandhi International Airport",
        "distanceKm": 32
      },
      "nearestRailwayStation": {
        "name": "Lingampally Railway Station",
        "distanceKm": 6
      },
      "nearestMetroPoint": {
        "name": "Raidurg Metro Station",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Hyderabad, International Institute of Information Technology Hyderabad (IIITH) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Lingampally Railway Station and Rajiv Gandhi International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to International Institute of Information Technology Hyderabad (IIITH) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 5280,
          "closingRank": 7920
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 4950,
          "closingRank": 7590
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 5610,
          "closingRank": 8250
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 5940,
          "closingRank": 8580
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 6270,
          "closingRank": 8910
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 9900,
          "closingRank": 14520
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 9240,
          "closingRank": 13860
        }
      ]
    }
  },
  {
    "id": "international-institute-of-information-technology-bangalore-iiitb",
    "name": "International Institute of Information Technology Bangalore (IIITB)",
    "slug": "international-institute-of-information-technology-bangalore-iiitb",
    "location": "Bengaluru, Karnataka",
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Premier autonomous engineering institution in Bengaluru, Karnataka renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "International Institute of Information Technology Bangalore (IIITB) was established in 1999. Located in Bengaluru, Karnataka, the institute spans 15 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #74.",
    "logoUrl": "https://images.unsplash.com/photo-1562774061?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907206?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://international-institute-of-information-technology-bangalore-iiitb.ac.in",
    "feesAnnual": 380000,
    "rating": 4.8,
    "reviewsCount": 92,
    "averagePlacementLpa": 22,
    "highestPlacementLpa": 58,
    "type": "Autonomous",
    "affiliation": "Karnataka Technological University",
    "establishedYear": 1999,
    "campusSizeAcres": 15,
    "studentCount": 10000,
    "accreditation": "NAAC A++ | NIRF #74",
    "nirfRank": 74,
    "featured": false,
    "courses": [
      {
        "id": "c1-28",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 380000,
        "stream": "Engineering"
      },
      {
        "id": "c2-28",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 361000,
        "stream": "Engineering"
      },
      {
        "id": "c3-28",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 342000,
        "stream": "Engineering"
      },
      {
        "id": "c4-28",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 323000,
        "stream": "Engineering"
      },
      {
        "id": "c5-28",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 380000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 22,
      "highestLpa": 58,
      "medianLpa": 19.4,
      "placementPercentage": 85,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 22,
          "highestPackageLpa": 58,
          "medianPackageLpa": 19.4,
          "placementPercentage": 85,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 20.2,
          "highestPackageLpa": 52.2,
          "medianPackageLpa": 18,
          "placementPercentage": 83,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 18.7,
          "highestPackageLpa": 49.3,
          "medianPackageLpa": 17.2,
          "placementPercentage": 80,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Kempegowda International Airport",
        "distanceKm": 50
      },
      "nearestRailwayStation": {
        "name": "Majestic / Electronic City",
        "distanceKm": 18
      },
      "nearestMetroPoint": {
        "name": "Electronic City Metro",
        "distanceKm": 1
      },
      "connectivityDetails": "Located in Bengaluru, International Institute of Information Technology Bangalore (IIITB) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Majestic / Electronic City and Kempegowda International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to International Institute of Information Technology Bangalore (IIITB) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 7104,
          "closingRank": 10656
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 6660,
          "closingRank": 10212
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 7548,
          "closingRank": 11100
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 7992,
          "closingRank": 11544
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 8436,
          "closingRank": 11988
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 13320,
          "closingRank": 19536
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 12432,
          "closingRank": 18648
        }
      ]
    }
  },
  {
    "id": "rv-college-of-engineering-rvce",
    "name": "RV College of Engineering (RVCE)",
    "slug": "rv-college-of-engineering-rvce",
    "location": "Bengaluru, Karnataka",
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Premier autonomous engineering institution in Bengaluru, Karnataka renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "RV College of Engineering (RVCE) was established in 1963. Located in Bengaluru, Karnataka, the institute spans 52 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #89.",
    "logoUrl": "https://images.unsplash.com/photo-1562774062?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907207?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://rv-college-of-engineering-rvce.ac.in",
    "feesAnnual": 260000,
    "rating": 4.5,
    "reviewsCount": 164,
    "averagePlacementLpa": 14.2,
    "highestPlacementLpa": 45,
    "type": "Autonomous",
    "affiliation": "Karnataka Technological University",
    "establishedYear": 1963,
    "campusSizeAcres": 52,
    "studentCount": 10250,
    "accreditation": "NAAC A++ | NIRF #89",
    "nirfRank": 89,
    "featured": false,
    "courses": [
      {
        "id": "c1-29",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 260000,
        "stream": "Engineering"
      },
      {
        "id": "c2-29",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 247000,
        "stream": "Engineering"
      },
      {
        "id": "c3-29",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 234000,
        "stream": "Engineering"
      },
      {
        "id": "c4-29",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 221000,
        "stream": "Engineering"
      },
      {
        "id": "c5-29",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 260000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 14.2,
      "highestLpa": 45,
      "medianLpa": 12.5,
      "placementPercentage": 86,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 14.2,
          "highestPackageLpa": 45,
          "medianPackageLpa": 12.5,
          "placementPercentage": 86,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 13.1,
          "highestPackageLpa": 40.5,
          "medianPackageLpa": 11.6,
          "placementPercentage": 84,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 12.1,
          "highestPackageLpa": 38.3,
          "medianPackageLpa": 11.1,
          "placementPercentage": 81,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Kempegowda International Airport",
        "distanceKm": 45
      },
      "nearestRailwayStation": {
        "name": "Kengeri Railway Station",
        "distanceKm": 3
      },
      "nearestMetroPoint": {
        "name": "RVCE Mysore Road Metro",
        "distanceKm": 1
      },
      "connectivityDetails": "Located in Bengaluru, RV College of Engineering (RVCE) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Kengeri Railway Station and Kempegowda International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to RV College of Engineering (RVCE) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 35600,
          "closingRank": 53400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 33375,
          "closingRank": 51175
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 37825,
          "closingRank": 55625
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 40050,
          "closingRank": 57850
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 42275,
          "closingRank": 60075
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 66750,
          "closingRank": 97900
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 62300,
          "closingRank": 93450
        }
      ]
    }
  },
  {
    "id": "coep-technological-university-coep-pune",
    "name": "COEP Technological University (COEP Pune)",
    "slug": "coep-technological-university-coep-pune",
    "location": "Pune, Maharashtra",
    "city": "Pune",
    "state": "Maharashtra",
    "description": "Premier public engineering institution in Pune, Maharashtra renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "COEP Technological University (COEP Pune) was established in 1854. Located in Pune, Maharashtra, the institute spans 36 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #73.",
    "logoUrl": "https://images.unsplash.com/photo-1562774053?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907198?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://coep-technological-university-coep-pune.ac.in",
    "feesAnnual": 115000,
    "rating": 4.6,
    "reviewsCount": 145,
    "averagePlacementLpa": 12.8,
    "highestPlacementLpa": 40,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1854,
    "campusSizeAcres": 36,
    "studentCount": 10500,
    "accreditation": "NAAC A++ | NIRF #73",
    "nirfRank": 73,
    "featured": false,
    "courses": [
      {
        "id": "c1-30",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 115000,
        "stream": "Engineering"
      },
      {
        "id": "c2-30",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 109250,
        "stream": "Engineering"
      },
      {
        "id": "c3-30",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 103500,
        "stream": "Engineering"
      },
      {
        "id": "c4-30",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 97750,
        "stream": "Engineering"
      },
      {
        "id": "c5-30",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 115000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 12.8,
      "highestLpa": 40,
      "medianLpa": 11.3,
      "placementPercentage": 87,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 12.8,
          "highestPackageLpa": 40,
          "medianPackageLpa": 11.3,
          "placementPercentage": 87,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 11.8,
          "highestPackageLpa": 36,
          "medianPackageLpa": 10.5,
          "placementPercentage": 85,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 10.9,
          "highestPackageLpa": 34,
          "medianPackageLpa": 10,
          "placementPercentage": 82,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Pune International Airport",
        "distanceKm": 10
      },
      "nearestRailwayStation": {
        "name": "Shivajinagar Railway Station",
        "distanceKm": 1
      },
      "nearestMetroPoint": {
        "name": "Shivajinagar Metro Station",
        "distanceKm": 0.5
      },
      "connectivityDetails": "Located in Pune, COEP Technological University (COEP Pune) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Shivajinagar Railway Station and Pune International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to COEP Technological University (COEP Pune) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 29200,
          "closingRank": 43800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 27375,
          "closingRank": 41975
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 31025,
          "closingRank": 45625
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 32850,
          "closingRank": 47450
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 34675,
          "closingRank": 49275
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 54750,
          "closingRank": 80300
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 51100,
          "closingRank": 76650
        }
      ]
    }
  },
  {
    "id": "bms-college-of-engineering-bmsce",
    "name": "BMS College of Engineering (BMSCE)",
    "slug": "bms-college-of-engineering-bmsce",
    "location": "Bengaluru, Karnataka",
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Premier autonomous engineering institution in Bengaluru, Karnataka renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "BMS College of Engineering (BMSCE) was established in 1946. Located in Bengaluru, Karnataka, the institute spans 15 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #83.",
    "logoUrl": "https://images.unsplash.com/photo-1562774054?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907199?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://bms-college-of-engineering-bmsce.ac.in",
    "feesAnnual": 240000,
    "rating": 4.4,
    "reviewsCount": 140,
    "averagePlacementLpa": 11.2,
    "highestPlacementLpa": 40,
    "type": "Autonomous",
    "affiliation": "Karnataka Technological University",
    "establishedYear": 1946,
    "campusSizeAcres": 15,
    "studentCount": 10750,
    "accreditation": "NAAC A++ | NIRF #83",
    "nirfRank": 83,
    "featured": false,
    "courses": [
      {
        "id": "c1-31",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 240000,
        "stream": "Engineering"
      },
      {
        "id": "c2-31",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 228000,
        "stream": "Engineering"
      },
      {
        "id": "c3-31",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 216000,
        "stream": "Engineering"
      },
      {
        "id": "c4-31",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 204000,
        "stream": "Engineering"
      },
      {
        "id": "c5-31",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 240000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 11.2,
      "highestLpa": 40,
      "medianLpa": 9.9,
      "placementPercentage": 88,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 11.2,
          "highestPackageLpa": 40,
          "medianPackageLpa": 9.9,
          "placementPercentage": 88,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 10.3,
          "highestPackageLpa": 36,
          "medianPackageLpa": 9.2,
          "placementPercentage": 86,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 9.5,
          "highestPackageLpa": 34,
          "medianPackageLpa": 8.7,
          "placementPercentage": 83,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Kempegowda International Airport",
        "distanceKm": 38
      },
      "nearestRailwayStation": {
        "name": "Bengaluru City Station",
        "distanceKm": 5
      },
      "nearestMetroPoint": {
        "name": "National College Metro",
        "distanceKm": 1.5
      },
      "connectivityDetails": "Located in Bengaluru, BMS College of Engineering (BMSCE) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Bengaluru City Station and Kempegowda International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to BMS College of Engineering (BMSCE) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 33200,
          "closingRank": 49800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 31125,
          "closingRank": 47725
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 35275,
          "closingRank": 51875
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 37350,
          "closingRank": 53950
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 39425,
          "closingRank": 56025
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 62250,
          "closingRank": 91300
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 58100,
          "closingRank": 87150
        }
      ]
    }
  },
  {
    "id": "veermata-jijabai-technological-institute-vjti-mumbai",
    "name": "Veermata Jijabai Technological Institute (VJTI Mumbai)",
    "slug": "veermata-jijabai-technological-institute-vjti-mumbai",
    "location": "Mumbai, Maharashtra",
    "city": "Mumbai",
    "state": "Maharashtra",
    "description": "Premier public engineering institution in Mumbai, Maharashtra renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Veermata Jijabai Technological Institute (VJTI Mumbai) was established in 1887. Located in Mumbai, Maharashtra, the institute spans 16 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #84.",
    "logoUrl": "https://images.unsplash.com/photo-1562774055?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907200?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://veermata-jijabai-technological-institute-vjti-mumbai.ac.in",
    "feesAnnual": 95000,
    "rating": 4.6,
    "reviewsCount": 130,
    "averagePlacementLpa": 13.5,
    "highestPlacementLpa": 44,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1887,
    "campusSizeAcres": 16,
    "studentCount": 11000,
    "accreditation": "NAAC A++ | NIRF #84",
    "nirfRank": 84,
    "featured": false,
    "courses": [
      {
        "id": "c1-32",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 95000,
        "stream": "Engineering"
      },
      {
        "id": "c2-32",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 90250,
        "stream": "Engineering"
      },
      {
        "id": "c3-32",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 85500,
        "stream": "Engineering"
      },
      {
        "id": "c4-32",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 80750,
        "stream": "Engineering"
      },
      {
        "id": "c5-32",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 95000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 13.5,
      "highestLpa": 44,
      "medianLpa": 11.9,
      "placementPercentage": 89,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 13.5,
          "highestPackageLpa": 44,
          "medianPackageLpa": 11.9,
          "placementPercentage": 89,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 12.4,
          "highestPackageLpa": 39.6,
          "medianPackageLpa": 11.1,
          "placementPercentage": 87,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 11.5,
          "highestPackageLpa": 37.4,
          "medianPackageLpa": 10.5,
          "placementPercentage": 84,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Chhatrapati Shivaji Maharaj Airport",
        "distanceKm": 12
      },
      "nearestRailwayStation": {
        "name": "Matunga / Dadar Station",
        "distanceKm": 1
      },
      "nearestMetroPoint": {
        "name": "Wadala Monorail Station",
        "distanceKm": 1
      },
      "connectivityDetails": "Located in Mumbai, Veermata Jijabai Technological Institute (VJTI Mumbai) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Matunga / Dadar Station and Chhatrapati Shivaji Maharaj Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Veermata Jijabai Technological Institute (VJTI Mumbai) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 33600,
          "closingRank": 50400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 31500,
          "closingRank": 48300
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 35700,
          "closingRank": 52500
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 37800,
          "closingRank": 54600
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 39900,
          "closingRank": 56700
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 63000,
          "closingRank": 92400
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 58800,
          "closingRank": 88200
        }
      ]
    }
  },
  {
    "id": "thapar-institute-of-engineering-technology-tiet-patiala",
    "name": "Thapar Institute of Engineering & Technology (TIET Patiala)",
    "slug": "thapar-institute-of-engineering-technology-tiet-patiala",
    "location": "Patiala, Punjab",
    "city": "Patiala",
    "state": "Punjab",
    "description": "Premier deemed engineering institution in Patiala, Punjab renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Thapar Institute of Engineering & Technology (TIET Patiala) was established in 1956. Located in Patiala, Punjab, the institute spans 250 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #22.",
    "logoUrl": "https://images.unsplash.com/photo-1562774056?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907201?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://thapar-institute-of-engineering-technology-tiet-patiala.ac.in",
    "feesAnnual": 390000,
    "rating": 4.4,
    "reviewsCount": 152,
    "averagePlacementLpa": 11.8,
    "highestPlacementLpa": 40,
    "type": "Deemed",
    "affiliation": "Punjab Technological University",
    "establishedYear": 1956,
    "campusSizeAcres": 250,
    "studentCount": 11250,
    "accreditation": "NAAC A++ | NIRF #22",
    "nirfRank": 22,
    "featured": false,
    "courses": [
      {
        "id": "c1-33",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 390000,
        "stream": "Engineering"
      },
      {
        "id": "c2-33",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 370500,
        "stream": "Engineering"
      },
      {
        "id": "c3-33",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 351000,
        "stream": "Engineering"
      },
      {
        "id": "c4-33",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 331500,
        "stream": "Engineering"
      },
      {
        "id": "c5-33",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 390000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 11.8,
      "highestLpa": 40,
      "medianLpa": 10.4,
      "placementPercentage": 90,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 11.8,
          "highestPackageLpa": 40,
          "medianPackageLpa": 10.4,
          "placementPercentage": 90,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 10.9,
          "highestPackageLpa": 36,
          "medianPackageLpa": 9.7,
          "placementPercentage": 88,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 10,
          "highestPackageLpa": 34,
          "medianPackageLpa": 9.2,
          "placementPercentage": 85,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Chandigarh International Airport",
        "distanceKm": 60
      },
      "nearestRailwayStation": {
        "name": "Patiala Railway Station",
        "distanceKm": 5
      },
      "nearestMetroPoint": {
        "name": "Patiala Bus Stand",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Patiala, Thapar Institute of Engineering & Technology (TIET Patiala) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Patiala Railway Station and Chandigarh International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Thapar Institute of Engineering & Technology (TIET Patiala) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 8800,
          "closingRank": 13200
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 8250,
          "closingRank": 12650
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 9350,
          "closingRank": 13750
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 9900,
          "closingRank": 14300
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 10450,
          "closingRank": 14850
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 16500,
          "closingRank": 24200
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 15400,
          "closingRank": 23100
        }
      ]
    }
  },
  {
    "id": "jadavpur-university-ju-kolkata",
    "name": "Jadavpur University (JU Kolkata)",
    "slug": "jadavpur-university-ju-kolkata",
    "location": "Kolkata, West Bengal",
    "city": "Kolkata",
    "state": "West Bengal",
    "description": "Premier public engineering institution in Kolkata, West Bengal renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Jadavpur University (JU Kolkata) was established in 1955. Located in Kolkata, West Bengal, the institute spans 58 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #10.",
    "logoUrl": "https://images.unsplash.com/photo-1562774057?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907202?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://jadavpur-university-ju-kolkata.ac.in",
    "feesAnnual": 12000,
    "rating": 4.7,
    "reviewsCount": 205,
    "averagePlacementLpa": 14.8,
    "highestPlacementLpa": 50,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1955,
    "campusSizeAcres": 58,
    "studentCount": 11500,
    "accreditation": "NAAC A++ | NIRF #10",
    "nirfRank": 10,
    "featured": false,
    "courses": [
      {
        "id": "c1-34",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 12000,
        "stream": "Engineering"
      },
      {
        "id": "c2-34",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 11400,
        "stream": "Engineering"
      },
      {
        "id": "c3-34",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 10800,
        "stream": "Engineering"
      },
      {
        "id": "c4-34",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 10200,
        "stream": "Engineering"
      },
      {
        "id": "c5-34",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 12000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 14.8,
      "highestLpa": 50,
      "medianLpa": 13,
      "placementPercentage": 91,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 14.8,
          "highestPackageLpa": 50,
          "medianPackageLpa": 13,
          "placementPercentage": 91,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 13.6,
          "highestPackageLpa": 45,
          "medianPackageLpa": 12.1,
          "placementPercentage": 89,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 12.6,
          "highestPackageLpa": 42.5,
          "medianPackageLpa": 11.5,
          "placementPercentage": 86,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Netaji Subhash Chandra Bose Airport",
        "distanceKm": 20
      },
      "nearestRailwayStation": {
        "name": "Jadavpur Railway Station",
        "distanceKm": 0.5
      },
      "nearestMetroPoint": {
        "name": "Kavi Subhash Metro",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Kolkata, Jadavpur University (JU Kolkata) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Jadavpur Railway Station and Netaji Subhash Chandra Bose Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Jadavpur University (JU Kolkata) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 4000,
          "closingRank": 6000
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 3750,
          "closingRank": 5750
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 4250,
          "closingRank": 6250
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 4500,
          "closingRank": 6500
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 4750,
          "closingRank": 6750
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 7500,
          "closingRank": 11000
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 7000,
          "closingRank": 10500
        }
      ]
    }
  },
  {
    "id": "national-institute-of-technology-kurukshetra-nitkkr",
    "name": "National Institute of Technology Kurukshetra (NITKKR)",
    "slug": "national-institute-of-technology-kurukshetra-nitkkr",
    "location": "Kurukshetra, Haryana",
    "city": "Kurukshetra",
    "state": "Haryana",
    "description": "Premier public engineering institution in Kurukshetra, Haryana renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "National Institute of Technology Kurukshetra (NITKKR) was established in 1963. Located in Kurukshetra, Haryana, the institute spans 300 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #58.",
    "logoUrl": "https://images.unsplash.com/photo-1562774058?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907203?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://national-institute-of-technology-kurukshetra-nitkkr.ac.in",
    "feesAnnual": 145000,
    "rating": 4.5,
    "reviewsCount": 110,
    "averagePlacementLpa": 13.8,
    "highestPlacementLpa": 44,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1963,
    "campusSizeAcres": 300,
    "studentCount": 11750,
    "accreditation": "NAAC A++ | NIRF #58",
    "nirfRank": 58,
    "featured": false,
    "courses": [
      {
        "id": "c1-35",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 145000,
        "stream": "Engineering"
      },
      {
        "id": "c2-35",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 137750,
        "stream": "Engineering"
      },
      {
        "id": "c3-35",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 130500,
        "stream": "Engineering"
      },
      {
        "id": "c4-35",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 123250,
        "stream": "Engineering"
      },
      {
        "id": "c5-35",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 145000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 13.8,
      "highestLpa": 44,
      "medianLpa": 12.1,
      "placementPercentage": 92,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 13.8,
          "highestPackageLpa": 44,
          "medianPackageLpa": 12.1,
          "placementPercentage": 92,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 12.7,
          "highestPackageLpa": 39.6,
          "medianPackageLpa": 11.3,
          "placementPercentage": 90,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 11.7,
          "highestPackageLpa": 37.4,
          "medianPackageLpa": 10.8,
          "placementPercentage": 87,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Chandigarh International Airport",
        "distanceKm": 90
      },
      "nearestRailwayStation": {
        "name": "Kurukshetra Junction",
        "distanceKm": 5
      },
      "nearestMetroPoint": {
        "name": "Kurukshetra Bus Stop",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Kurukshetra, National Institute of Technology Kurukshetra (NITKKR) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Kurukshetra Junction and Chandigarh International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to National Institute of Technology Kurukshetra (NITKKR) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 23200,
          "closingRank": 34800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 21750,
          "closingRank": 33350
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 24650,
          "closingRank": 36250
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 26100,
          "closingRank": 37700
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 27550,
          "closingRank": 39150
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 43500,
          "closingRank": 63800
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 40600,
          "closingRank": 60900
        }
      ]
    }
  },
  {
    "id": "national-institute-of-technology-durgapur-nit-durgapur",
    "name": "National Institute of Technology Durgapur (NIT Durgapur)",
    "slug": "national-institute-of-technology-durgapur-nit-durgapur",
    "location": "Durgapur, West Bengal",
    "city": "Durgapur",
    "state": "West Bengal",
    "description": "Premier public engineering institution in Durgapur, West Bengal renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "National Institute of Technology Durgapur (NIT Durgapur) was established in 1960. Located in Durgapur, West Bengal, the institute spans 187 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #43.",
    "logoUrl": "https://images.unsplash.com/photo-1562774059?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907204?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://national-institute-of-technology-durgapur-nit-durgapur.ac.in",
    "feesAnnual": 140000,
    "rating": 4.5,
    "reviewsCount": 105,
    "averagePlacementLpa": 13.2,
    "highestPlacementLpa": 45,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1960,
    "campusSizeAcres": 187,
    "studentCount": 12000,
    "accreditation": "NAAC A++ | NIRF #43",
    "nirfRank": 43,
    "featured": false,
    "courses": [
      {
        "id": "c1-36",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 140000,
        "stream": "Engineering"
      },
      {
        "id": "c2-36",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 133000,
        "stream": "Engineering"
      },
      {
        "id": "c3-36",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 126000,
        "stream": "Engineering"
      },
      {
        "id": "c4-36",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 119000,
        "stream": "Engineering"
      },
      {
        "id": "c5-36",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 140000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 13.2,
      "highestLpa": 45,
      "medianLpa": 11.6,
      "placementPercentage": 93,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 13.2,
          "highestPackageLpa": 45,
          "medianPackageLpa": 11.6,
          "placementPercentage": 93,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 12.1,
          "highestPackageLpa": 40.5,
          "medianPackageLpa": 10.8,
          "placementPercentage": 91,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 11.2,
          "highestPackageLpa": 38.3,
          "medianPackageLpa": 10.3,
          "placementPercentage": 88,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Kazi Nazrul Islam Airport Durgapur",
        "distanceKm": 15
      },
      "nearestRailwayStation": {
        "name": "Durgapur Railway Station",
        "distanceKm": 8
      },
      "nearestMetroPoint": {
        "name": "City Centre Durgapur",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Durgapur, National Institute of Technology Durgapur (NIT Durgapur) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Durgapur Railway Station and Kazi Nazrul Islam Airport Durgapur."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to National Institute of Technology Durgapur (NIT Durgapur) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 17200,
          "closingRank": 25800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 16125,
          "closingRank": 24725
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 18275,
          "closingRank": 26875
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 19350,
          "closingRank": 27950
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 20425,
          "closingRank": 29025
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 32250,
          "closingRank": 47300
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 30100,
          "closingRank": 45150
        }
      ]
    }
  },
  {
    "id": "motilal-nehru-national-institute-of-technology-allahabad-mnnit",
    "name": "Motilal Nehru National Institute of Technology Allahabad (MNNIT)",
    "slug": "motilal-nehru-national-institute-of-technology-allahabad-mnnit",
    "location": "Prayagraj, Uttar Pradesh",
    "city": "Prayagraj",
    "state": "Uttar Pradesh",
    "description": "Premier public engineering institution in Prayagraj, Uttar Pradesh renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Motilal Nehru National Institute of Technology Allahabad (MNNIT) was established in 1961. Located in Prayagraj, Uttar Pradesh, the institute spans 222 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #49.",
    "logoUrl": "https://images.unsplash.com/photo-1562774060?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907205?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://motilal-nehru-national-institute-of-technology-allahabad-mnnit.ac.in",
    "feesAnnual": 146000,
    "rating": 4.6,
    "reviewsCount": 125,
    "averagePlacementLpa": 15.6,
    "highestPlacementLpa": 48,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1961,
    "campusSizeAcres": 222,
    "studentCount": 12250,
    "accreditation": "NAAC A++ | NIRF #49",
    "nirfRank": 49,
    "featured": false,
    "courses": [
      {
        "id": "c1-37",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 146000,
        "stream": "Engineering"
      },
      {
        "id": "c2-37",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 138700,
        "stream": "Engineering"
      },
      {
        "id": "c3-37",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 131400,
        "stream": "Engineering"
      },
      {
        "id": "c4-37",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 124100,
        "stream": "Engineering"
      },
      {
        "id": "c5-37",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 146000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 15.6,
      "highestLpa": 48,
      "medianLpa": 13.7,
      "placementPercentage": 94,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 15.6,
          "highestPackageLpa": 48,
          "medianPackageLpa": 13.7,
          "placementPercentage": 94,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 14.4,
          "highestPackageLpa": 43.2,
          "medianPackageLpa": 12.8,
          "placementPercentage": 92,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 13.3,
          "highestPackageLpa": 40.8,
          "medianPackageLpa": 12.2,
          "placementPercentage": 89,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Prayagraj Airport (IXD)",
        "distanceKm": 18
      },
      "nearestRailwayStation": {
        "name": "Prayagraj Junction",
        "distanceKm": 6
      },
      "nearestMetroPoint": {
        "name": "Teliarganj Station",
        "distanceKm": 1
      },
      "connectivityDetails": "Located in Prayagraj, Motilal Nehru National Institute of Technology Allahabad (MNNIT) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Prayagraj Junction and Prayagraj Airport (IXD)."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Motilal Nehru National Institute of Technology Allahabad (MNNIT) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 19600,
          "closingRank": 29400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 18375,
          "closingRank": 28175
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 20825,
          "closingRank": 30625
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 22050,
          "closingRank": 31850
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 23275,
          "closingRank": 33075
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 36750,
          "closingRank": 53900
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 34300,
          "closingRank": 51450
        }
      ]
    }
  },
  {
    "id": "malaviya-national-institute-of-technology-jaipur-mnit-jaipur",
    "name": "Malaviya National Institute of Technology Jaipur (MNIT Jaipur)",
    "slug": "malaviya-national-institute-of-technology-jaipur-mnit-jaipur",
    "location": "Jaipur, Rajasthan",
    "city": "Jaipur",
    "state": "Rajasthan",
    "description": "Premier public engineering institution in Jaipur, Rajasthan renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Malaviya National Institute of Technology Jaipur (MNIT Jaipur) was established in 1963. Located in Jaipur, Rajasthan, the institute spans 312 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #37.",
    "logoUrl": "https://images.unsplash.com/photo-1562774061?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907206?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://malaviya-national-institute-of-technology-jaipur-mnit-jaipur.ac.in",
    "feesAnnual": 148000,
    "rating": 4.6,
    "reviewsCount": 130,
    "averagePlacementLpa": 14.5,
    "highestPlacementLpa": 46,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1963,
    "campusSizeAcres": 312,
    "studentCount": 12500,
    "accreditation": "NAAC A++ | NIRF #37",
    "nirfRank": 37,
    "featured": false,
    "courses": [
      {
        "id": "c1-38",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 148000,
        "stream": "Engineering"
      },
      {
        "id": "c2-38",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 140600,
        "stream": "Engineering"
      },
      {
        "id": "c3-38",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 133200,
        "stream": "Engineering"
      },
      {
        "id": "c4-38",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 125800,
        "stream": "Engineering"
      },
      {
        "id": "c5-38",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 148000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 14.5,
      "highestLpa": 46,
      "medianLpa": 12.8,
      "placementPercentage": 95,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 14.5,
          "highestPackageLpa": 46,
          "medianPackageLpa": 12.8,
          "placementPercentage": 95,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 13.3,
          "highestPackageLpa": 41.4,
          "medianPackageLpa": 11.9,
          "placementPercentage": 93,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 12.3,
          "highestPackageLpa": 39.1,
          "medianPackageLpa": 11.3,
          "placementPercentage": 90,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Jaipur International Airport",
        "distanceKm": 6
      },
      "nearestRailwayStation": {
        "name": "Jaipur Junction",
        "distanceKm": 8
      },
      "nearestMetroPoint": {
        "name": "Malviya Nagar Stop",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Jaipur, Malaviya National Institute of Technology Jaipur (MNIT Jaipur) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Jaipur Junction and Jaipur International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Malaviya National Institute of Technology Jaipur (MNIT Jaipur) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 14800,
          "closingRank": 22200
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 13875,
          "closingRank": 21275
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 15725,
          "closingRank": 23125
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 16650,
          "closingRank": 24050
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 17575,
          "closingRank": 24975
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 27750,
          "closingRank": 40700
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 25900,
          "closingRank": 38850
        }
      ]
    }
  },
  {
    "id": "visvesvaraya-national-institute-of-technology-nagpur-vnit",
    "name": "Visvesvaraya National Institute of Technology Nagpur (VNIT)",
    "slug": "visvesvaraya-national-institute-of-technology-nagpur-vnit",
    "location": "Nagpur, Maharashtra",
    "city": "Nagpur",
    "state": "Maharashtra",
    "description": "Premier public engineering institution in Nagpur, Maharashtra renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Visvesvaraya National Institute of Technology Nagpur (VNIT) was established in 1960. Located in Nagpur, Maharashtra, the institute spans 225 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #41.",
    "logoUrl": "https://images.unsplash.com/photo-1562774062?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907207?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://visvesvaraya-national-institute-of-technology-nagpur-vnit.ac.in",
    "feesAnnual": 145000,
    "rating": 4.6,
    "reviewsCount": 118,
    "averagePlacementLpa": 14,
    "highestPlacementLpa": 45,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1960,
    "campusSizeAcres": 225,
    "studentCount": 12750,
    "accreditation": "NAAC A++ | NIRF #41",
    "nirfRank": 41,
    "featured": false,
    "courses": [
      {
        "id": "c1-39",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 145000,
        "stream": "Engineering"
      },
      {
        "id": "c2-39",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 137750,
        "stream": "Engineering"
      },
      {
        "id": "c3-39",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 130500,
        "stream": "Engineering"
      },
      {
        "id": "c4-39",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 123250,
        "stream": "Engineering"
      },
      {
        "id": "c5-39",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 145000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 14,
      "highestLpa": 45,
      "medianLpa": 12.3,
      "placementPercentage": 96,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 14,
          "highestPackageLpa": 45,
          "medianPackageLpa": 12.3,
          "placementPercentage": 96,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 12.9,
          "highestPackageLpa": 40.5,
          "medianPackageLpa": 11.5,
          "placementPercentage": 94,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 11.9,
          "highestPackageLpa": 38.3,
          "medianPackageLpa": 10.9,
          "placementPercentage": 91,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Dr. Babasaheb Ambedkar Airport",
        "distanceKm": 6
      },
      "nearestRailwayStation": {
        "name": "Nagpur Junction",
        "distanceKm": 7
      },
      "nearestMetroPoint": {
        "name": "Subhash Nagar Metro",
        "distanceKm": 1
      },
      "connectivityDetails": "Located in Nagpur, Visvesvaraya National Institute of Technology Nagpur (VNIT) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Nagpur Junction and Dr. Babasaheb Ambedkar Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Visvesvaraya National Institute of Technology Nagpur (VNIT) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 16400,
          "closingRank": 24600
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 15375,
          "closingRank": 23575
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 17425,
          "closingRank": 25625
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 18450,
          "closingRank": 26650
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 19475,
          "closingRank": 27675
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 30750,
          "closingRank": 45100
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 28700,
          "closingRank": 43050
        }
      ]
    }
  },
  {
    "id": "indraprastha-institute-of-information-technology-delhi-iiitd",
    "name": "Indraprastha Institute of Information Technology Delhi (IIITD)",
    "slug": "indraprastha-institute-of-information-technology-delhi-iiitd",
    "location": "New Delhi, Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "description": "Premier public engineering institution in New Delhi, Delhi renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Indraprastha Institute of Information Technology Delhi (IIITD) was established in 2008. Located in New Delhi, Delhi, the institute spans 25 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #75.",
    "logoUrl": "https://images.unsplash.com/photo-1562774053?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907198?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://indraprastha-institute-of-information-technology-delhi-iiitd.ac.in",
    "feesAnnual": 420000,
    "rating": 4.6,
    "reviewsCount": 94,
    "averagePlacementLpa": 19.5,
    "highestPlacementLpa": 51,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 2008,
    "campusSizeAcres": 25,
    "studentCount": 13000,
    "accreditation": "NAAC A++ | NIRF #75",
    "nirfRank": 75,
    "featured": false,
    "courses": [
      {
        "id": "c1-40",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 420000,
        "stream": "Engineering"
      },
      {
        "id": "c2-40",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 399000,
        "stream": "Engineering"
      },
      {
        "id": "c3-40",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 378000,
        "stream": "Engineering"
      },
      {
        "id": "c4-40",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 357000,
        "stream": "Engineering"
      },
      {
        "id": "c5-40",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 420000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 19.5,
      "highestLpa": 51,
      "medianLpa": 17.2,
      "placementPercentage": 97,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 19.5,
          "highestPackageLpa": 51,
          "medianPackageLpa": 17.2,
          "placementPercentage": 97,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 17.9,
          "highestPackageLpa": 45.9,
          "medianPackageLpa": 16,
          "placementPercentage": 95,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 16.6,
          "highestPackageLpa": 43.4,
          "medianPackageLpa": 15.2,
          "placementPercentage": 92,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Indira Gandhi International Airport",
        "distanceKm": 20
      },
      "nearestRailwayStation": {
        "name": "Okhla Railway Station",
        "distanceKm": 2
      },
      "nearestMetroPoint": {
        "name": "Govindpuri Metro Station",
        "distanceKm": 1
      },
      "connectivityDetails": "Located in New Delhi, Indraprastha Institute of Information Technology Delhi (IIITD) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Okhla Railway Station and Indira Gandhi International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Indraprastha Institute of Information Technology Delhi (IIITD) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 7200,
          "closingRank": 10800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 6750,
          "closingRank": 10350
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 7650,
          "closingRank": 11250
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 8100,
          "closingRank": 11700
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 8550,
          "closingRank": 12150
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 13500,
          "closingRank": 19800
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 12600,
          "closingRank": 18900
        }
      ]
    }
  },
  {
    "id": "sardar-vallabhbhai-national-institute-of-technology-surat-svnit",
    "name": "Sardar Vallabhbhai National Institute of Technology Surat (SVNIT)",
    "slug": "sardar-vallabhbhai-national-institute-of-technology-surat-svnit",
    "location": "Surat, Gujarat",
    "city": "Surat",
    "state": "Gujarat",
    "description": "Premier public engineering institution in Surat, Gujarat renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Sardar Vallabhbhai National Institute of Technology Surat (SVNIT) was established in 1961. Located in Surat, Gujarat, the institute spans 250 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #65.",
    "logoUrl": "https://images.unsplash.com/photo-1562774054?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907199?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://sardar-vallabhbhai-national-institute-of-technology-surat-svnit.ac.in",
    "feesAnnual": 142000,
    "rating": 4.5,
    "reviewsCount": 112,
    "averagePlacementLpa": 13.5,
    "highestPlacementLpa": 44,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1961,
    "campusSizeAcres": 250,
    "studentCount": 13250,
    "accreditation": "NAAC A++ | NIRF #65",
    "nirfRank": 65,
    "featured": false,
    "courses": [
      {
        "id": "c1-41",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 142000,
        "stream": "Engineering"
      },
      {
        "id": "c2-41",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 134900,
        "stream": "Engineering"
      },
      {
        "id": "c3-41",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 127800,
        "stream": "Engineering"
      },
      {
        "id": "c4-41",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 120700,
        "stream": "Engineering"
      },
      {
        "id": "c5-41",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 142000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 13.5,
      "highestLpa": 44,
      "medianLpa": 11.9,
      "placementPercentage": 98,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 13.5,
          "highestPackageLpa": 44,
          "medianPackageLpa": 11.9,
          "placementPercentage": 98,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 12.4,
          "highestPackageLpa": 39.6,
          "medianPackageLpa": 11.1,
          "placementPercentage": 96,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 11.5,
          "highestPackageLpa": 37.4,
          "medianPackageLpa": 10.5,
          "placementPercentage": 93,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Surat Airport (STV)",
        "distanceKm": 10
      },
      "nearestRailwayStation": {
        "name": "Surat Railway Station",
        "distanceKm": 10
      },
      "nearestMetroPoint": {
        "name": "Ichchanath BRTS",
        "distanceKm": 1
      },
      "connectivityDetails": "Located in Surat, Sardar Vallabhbhai National Institute of Technology Surat (SVNIT) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Surat Railway Station and Surat Airport (STV)."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Sardar Vallabhbhai National Institute of Technology Surat (SVNIT) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 26000,
          "closingRank": 39000
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 24375,
          "closingRank": 37375
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 27625,
          "closingRank": 40625
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 29250,
          "closingRank": 42250
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 30875,
          "closingRank": 43875
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 48750,
          "closingRank": 71500
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 45500,
          "closingRank": 68250
        }
      ]
    }
  },
  {
    "id": "national-institute-of-technology-silchar-nit-silchar",
    "name": "National Institute of Technology Silchar (NIT Silchar)",
    "slug": "national-institute-of-technology-silchar-nit-silchar",
    "location": "Silchar, Assam",
    "city": "Silchar",
    "state": "Assam",
    "description": "Premier public engineering institution in Silchar, Assam renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "National Institute of Technology Silchar (NIT Silchar) was established in 1967. Located in Silchar, Assam, the institute spans 625 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #40.",
    "logoUrl": "https://images.unsplash.com/photo-1562774055?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907200?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://national-institute-of-technology-silchar-nit-silchar.ac.in",
    "feesAnnual": 138000,
    "rating": 4.5,
    "reviewsCount": 96,
    "averagePlacementLpa": 13.8,
    "highestPlacementLpa": 44,
    "type": "Public",
    "affiliation": "Institute of National Importance",
    "establishedYear": 1967,
    "campusSizeAcres": 625,
    "studentCount": 13500,
    "accreditation": "NAAC A++ | NIRF #40",
    "nirfRank": 40,
    "featured": false,
    "courses": [
      {
        "id": "c1-42",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 138000,
        "stream": "Engineering"
      },
      {
        "id": "c2-42",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 131100,
        "stream": "Engineering"
      },
      {
        "id": "c3-42",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 124200,
        "stream": "Engineering"
      },
      {
        "id": "c4-42",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 117300,
        "stream": "Engineering"
      },
      {
        "id": "c5-42",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 138000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 13.8,
      "highestLpa": 44,
      "medianLpa": 12.1,
      "placementPercentage": 85,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 13.8,
          "highestPackageLpa": 44,
          "medianPackageLpa": 12.1,
          "placementPercentage": 85,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 12.7,
          "highestPackageLpa": 39.6,
          "medianPackageLpa": 11.3,
          "placementPercentage": 83,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 11.7,
          "highestPackageLpa": 37.4,
          "medianPackageLpa": 10.8,
          "placementPercentage": 80,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Silchar Kumbhirgram Airport",
        "distanceKm": 35
      },
      "nearestRailwayStation": {
        "name": "Silchar Railway Station",
        "distanceKm": 9
      },
      "nearestMetroPoint": {
        "name": "Silchar Town Center",
        "distanceKm": 8
      },
      "connectivityDetails": "Located in Silchar, National Institute of Technology Silchar (NIT Silchar) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Silchar Railway Station and Silchar Kumbhirgram Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to National Institute of Technology Silchar (NIT Silchar) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 16000,
          "closingRank": 24000
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 15000,
          "closingRank": 23000
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 17000,
          "closingRank": 25000
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 18000,
          "closingRank": 26000
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 19000,
          "closingRank": 27000
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 30000,
          "closingRank": 44000
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 28000,
          "closingRank": 42000
        }
      ]
    }
  },
  {
    "id": "kalinga-institute-of-industrial-technology-kiit",
    "name": "Kalinga Institute of Industrial Technology (KIIT)",
    "slug": "kalinga-institute-of-industrial-technology-kiit",
    "location": "Bengaluru, Karnataka",
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Premier private engineering institution in Bengaluru, Karnataka renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Kalinga Institute of Industrial Technology (KIIT) was established in 1970. Located in Bengaluru, Karnataka, the institute spans 40 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #65.",
    "logoUrl": "https://images.unsplash.com/photo-1562774056?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907201?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://kalinga-institute-of-industrial-technology-kiit.ac.in",
    "feesAnnual": 180000,
    "rating": 4.1,
    "reviewsCount": 60,
    "averagePlacementLpa": 7.5,
    "highestPlacementLpa": 32,
    "type": "Private",
    "affiliation": "Karnataka Technological University",
    "establishedYear": 1970,
    "campusSizeAcres": 40,
    "studentCount": 13750,
    "accreditation": "NAAC A++ | NIRF #65",
    "nirfRank": 65,
    "featured": false,
    "courses": [
      {
        "id": "c1-43",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      },
      {
        "id": "c2-43",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 171000,
        "stream": "Engineering"
      },
      {
        "id": "c3-43",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 162000,
        "stream": "Engineering"
      },
      {
        "id": "c4-43",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 153000,
        "stream": "Engineering"
      },
      {
        "id": "c5-43",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 7.5,
      "highestLpa": 32,
      "medianLpa": 6.6,
      "placementPercentage": 86,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 7.5,
          "highestPackageLpa": 32,
          "medianPackageLpa": 6.6,
          "placementPercentage": 86,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 6.9,
          "highestPackageLpa": 28.8,
          "medianPackageLpa": 6.1,
          "placementPercentage": 84,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 6.4,
          "highestPackageLpa": 27.2,
          "medianPackageLpa": 5.9,
          "placementPercentage": 81,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Bengaluru International Airport",
        "distanceKm": 10
      },
      "nearestRailwayStation": {
        "name": "Bengaluru Central Junction",
        "distanceKm": 4
      },
      "nearestMetroPoint": {
        "name": "Bengaluru Metro Station",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Bengaluru, Kalinga Institute of Industrial Technology (KIIT) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Bengaluru Central Junction and Bengaluru International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Kalinga Institute of Industrial Technology (KIIT) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 6240,
          "closingRank": 9360
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 5850,
          "closingRank": 8970
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 6630,
          "closingRank": 9750
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 7020,
          "closingRank": 10140
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 7410,
          "closingRank": 10530
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 11700,
          "closingRank": 17160
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 10920,
          "closingRank": 16380
        }
      ]
    }
  },
  {
    "id": "lovely-professional-university-lpu",
    "name": "Lovely Professional University (LPU)",
    "slug": "lovely-professional-university-lpu",
    "location": "Hyderabad, Telangana",
    "city": "Hyderabad",
    "state": "Telangana",
    "description": "Premier deemed engineering institution in Hyderabad, Telangana renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Lovely Professional University (LPU) was established in 1971. Located in Hyderabad, Telangana, the institute spans 41 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #68.",
    "logoUrl": "https://images.unsplash.com/photo-1562774057?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907202?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://lovely-professional-university-lpu.ac.in",
    "feesAnnual": 135000,
    "rating": 4.2,
    "reviewsCount": 64,
    "averagePlacementLpa": 8.3,
    "highestPlacementLpa": 33.5,
    "type": "Deemed",
    "affiliation": "Telangana Technological University",
    "establishedYear": 1971,
    "campusSizeAcres": 41,
    "studentCount": 14000,
    "accreditation": "NAAC A++ | NIRF #68",
    "nirfRank": 68,
    "featured": false,
    "courses": [
      {
        "id": "c1-44",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      },
      {
        "id": "c2-44",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 128250,
        "stream": "Engineering"
      },
      {
        "id": "c3-44",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 121500,
        "stream": "Engineering"
      },
      {
        "id": "c4-44",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 114750,
        "stream": "Engineering"
      },
      {
        "id": "c5-44",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 8.3,
      "highestLpa": 33.5,
      "medianLpa": 7.3,
      "placementPercentage": 87,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 8.3,
          "highestPackageLpa": 33.5,
          "medianPackageLpa": 7.3,
          "placementPercentage": 87,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 7.6,
          "highestPackageLpa": 30.2,
          "medianPackageLpa": 6.8,
          "placementPercentage": 85,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 7.1,
          "highestPackageLpa": 28.5,
          "medianPackageLpa": 6.5,
          "placementPercentage": 82,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Hyderabad International Airport",
        "distanceKm": 11
      },
      "nearestRailwayStation": {
        "name": "Hyderabad Central Junction",
        "distanceKm": 5
      },
      "nearestMetroPoint": {
        "name": "Hyderabad Metro Station",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Hyderabad, Lovely Professional University (LPU) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Hyderabad Central Junction and Hyderabad International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Lovely Professional University (LPU) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 27200,
          "closingRank": 40800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 25500,
          "closingRank": 39100
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 28900,
          "closingRank": 42500
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 30600,
          "closingRank": 44200
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 32300,
          "closingRank": 45900
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 51000,
          "closingRank": 74800
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 47600,
          "closingRank": 71400
        }
      ]
    }
  },
  {
    "id": "chandigarh-university-cu",
    "name": "Chandigarh University (CU)",
    "slug": "chandigarh-university-cu",
    "location": "Chennai, Tamil Nadu",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "description": "Premier private engineering institution in Chennai, Tamil Nadu renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Chandigarh University (CU) was established in 1972. Located in Chennai, Tamil Nadu, the institute spans 42 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #71.",
    "logoUrl": "https://images.unsplash.com/photo-1562774058?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907203?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://chandigarh-university-cu.ac.in",
    "feesAnnual": 220000,
    "rating": 4.3,
    "reviewsCount": 68,
    "averagePlacementLpa": 9.1,
    "highestPlacementLpa": 35,
    "type": "Private",
    "affiliation": "Tamil Nadu Technological University",
    "establishedYear": 1972,
    "campusSizeAcres": 42,
    "studentCount": 14250,
    "accreditation": "NAAC A++ | NIRF #71",
    "nirfRank": 71,
    "featured": false,
    "courses": [
      {
        "id": "c1-45",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      },
      {
        "id": "c2-45",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 209000,
        "stream": "Engineering"
      },
      {
        "id": "c3-45",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 198000,
        "stream": "Engineering"
      },
      {
        "id": "c4-45",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 187000,
        "stream": "Engineering"
      },
      {
        "id": "c5-45",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 9.1,
      "highestLpa": 35,
      "medianLpa": 8,
      "placementPercentage": 88,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 35,
          "medianPackageLpa": 8,
          "placementPercentage": 88,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 8.4,
          "highestPackageLpa": 31.5,
          "medianPackageLpa": 7.5,
          "placementPercentage": 86,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 7.7,
          "highestPackageLpa": 29.8,
          "medianPackageLpa": 7.1,
          "placementPercentage": 83,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Chennai International Airport",
        "distanceKm": 12
      },
      "nearestRailwayStation": {
        "name": "Chennai Central Junction",
        "distanceKm": 6
      },
      "nearestMetroPoint": {
        "name": "Chennai Metro Station",
        "distanceKm": 4
      },
      "connectivityDetails": "Located in Chennai, Chandigarh University (CU) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Chennai Central Junction and Chennai International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Chandigarh University (CU) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 28400,
          "closingRank": 42600
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 26625,
          "closingRank": 40825
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 30175,
          "closingRank": 44375
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 31950,
          "closingRank": 46150
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 33725,
          "closingRank": 47925
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 53250,
          "closingRank": 78100
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 49700,
          "closingRank": 74550
        }
      ]
    }
  },
  {
    "id": "pec-university-of-technology-chandigarh",
    "name": "PEC University of Technology Chandigarh",
    "slug": "pec-university-of-technology-chandigarh",
    "location": "Pune, Maharashtra",
    "city": "Pune",
    "state": "Maharashtra",
    "description": "Premier autonomous engineering institution in Pune, Maharashtra renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "PEC University of Technology Chandigarh was established in 1973. Located in Pune, Maharashtra, the institute spans 43 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #74.",
    "logoUrl": "https://images.unsplash.com/photo-1562774059?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907204?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://pec-university-of-technology-chandigarh.ac.in",
    "feesAnnual": 165000,
    "rating": 4.4,
    "reviewsCount": 72,
    "averagePlacementLpa": 9.9,
    "highestPlacementLpa": 36.5,
    "type": "Autonomous",
    "affiliation": "Maharashtra Technological University",
    "establishedYear": 1973,
    "campusSizeAcres": 43,
    "studentCount": 14500,
    "accreditation": "NAAC A++ | NIRF #74",
    "nirfRank": 74,
    "featured": false,
    "courses": [
      {
        "id": "c1-46",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 165000,
        "stream": "Engineering"
      },
      {
        "id": "c2-46",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 156750,
        "stream": "Engineering"
      },
      {
        "id": "c3-46",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 148500,
        "stream": "Engineering"
      },
      {
        "id": "c4-46",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 140250,
        "stream": "Engineering"
      },
      {
        "id": "c5-46",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 165000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 9.9,
      "highestLpa": 36.5,
      "medianLpa": 8.7,
      "placementPercentage": 89,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 9.9,
          "highestPackageLpa": 36.5,
          "medianPackageLpa": 8.7,
          "placementPercentage": 89,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 32.9,
          "medianPackageLpa": 8.1,
          "placementPercentage": 87,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 8.4,
          "highestPackageLpa": 31,
          "medianPackageLpa": 7.7,
          "placementPercentage": 84,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Pune International Airport",
        "distanceKm": 13
      },
      "nearestRailwayStation": {
        "name": "Pune Central Junction",
        "distanceKm": 7
      },
      "nearestMetroPoint": {
        "name": "Pune Metro Station",
        "distanceKm": 5
      },
      "connectivityDetails": "Located in Pune, PEC University of Technology Chandigarh is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Pune Central Junction and Pune International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to PEC University of Technology Chandigarh are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 29600,
          "closingRank": 44400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 27750,
          "closingRank": 42550
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 31450,
          "closingRank": 46250
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 33300,
          "closingRank": 48100
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 35150,
          "closingRank": 49950
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 55500,
          "closingRank": 81400
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 51800,
          "closingRank": 77700
        }
      ]
    }
  },
  {
    "id": "m-s-ramaiah-institute-of-technology-msrit",
    "name": "M.S. Ramaiah Institute of Technology (MSRIT)",
    "slug": "m-s-ramaiah-institute-of-technology-msrit",
    "location": "Noida, Uttar Pradesh",
    "city": "Noida",
    "state": "Uttar Pradesh",
    "description": "Premier private engineering institution in Noida, Uttar Pradesh renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "M.S. Ramaiah Institute of Technology (MSRIT) was established in 1974. Located in Noida, Uttar Pradesh, the institute spans 44 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #77.",
    "logoUrl": "https://images.unsplash.com/photo-1562774060?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907205?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://m-s-ramaiah-institute-of-technology-msrit.ac.in",
    "feesAnnual": 260000,
    "rating": 4.5,
    "reviewsCount": 76,
    "averagePlacementLpa": 10.7,
    "highestPlacementLpa": 38,
    "type": "Private",
    "affiliation": "Uttar Pradesh Technological University",
    "establishedYear": 1974,
    "campusSizeAcres": 44,
    "studentCount": 14750,
    "accreditation": "NAAC A++ | NIRF #77",
    "nirfRank": 77,
    "featured": false,
    "courses": [
      {
        "id": "c1-47",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 260000,
        "stream": "Engineering"
      },
      {
        "id": "c2-47",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 247000,
        "stream": "Engineering"
      },
      {
        "id": "c3-47",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 234000,
        "stream": "Engineering"
      },
      {
        "id": "c4-47",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 221000,
        "stream": "Engineering"
      },
      {
        "id": "c5-47",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 260000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 10.7,
      "highestLpa": 38,
      "medianLpa": 9.4,
      "placementPercentage": 90,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 10.7,
          "highestPackageLpa": 38,
          "medianPackageLpa": 9.4,
          "placementPercentage": 90,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 9.8,
          "highestPackageLpa": 34.2,
          "medianPackageLpa": 8.8,
          "placementPercentage": 88,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 32.3,
          "medianPackageLpa": 8.3,
          "placementPercentage": 85,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Noida International Airport",
        "distanceKm": 14
      },
      "nearestRailwayStation": {
        "name": "Noida Central Junction",
        "distanceKm": 8
      },
      "nearestMetroPoint": {
        "name": "Noida Metro Station",
        "distanceKm": 6
      },
      "connectivityDetails": "Located in Noida, M.S. Ramaiah Institute of Technology (MSRIT) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Noida Central Junction and Noida International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to M.S. Ramaiah Institute of Technology (MSRIT) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 30800,
          "closingRank": 46200
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 28875,
          "closingRank": 44275
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 32725,
          "closingRank": 48125
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 34650,
          "closingRank": 50050
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 36575,
          "closingRank": 51975
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 57750,
          "closingRank": 84700
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 53900,
          "closingRank": 80850
        }
      ]
    }
  },
  {
    "id": "dayananda-sagar-college-of-engineering-dsce",
    "name": "Dayananda Sagar College of Engineering (DSCE)",
    "slug": "dayananda-sagar-college-of-engineering-dsce",
    "location": "Gurugram, Haryana",
    "city": "Gurugram",
    "state": "Haryana",
    "description": "Premier deemed engineering institution in Gurugram, Haryana renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Dayananda Sagar College of Engineering (DSCE) was established in 1975. Located in Gurugram, Haryana, the institute spans 45 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #80.",
    "logoUrl": "https://images.unsplash.com/photo-1562774061?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907206?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://dayananda-sagar-college-of-engineering-dsce.ac.in",
    "feesAnnual": 120000,
    "rating": 4.6,
    "reviewsCount": 80,
    "averagePlacementLpa": 11.5,
    "highestPlacementLpa": 39.5,
    "type": "Deemed",
    "affiliation": "Haryana Technological University",
    "establishedYear": 1975,
    "campusSizeAcres": 45,
    "studentCount": 15000,
    "accreditation": "NAAC A++ | NIRF #80",
    "nirfRank": 80,
    "featured": false,
    "courses": [
      {
        "id": "c1-48",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 120000,
        "stream": "Engineering"
      },
      {
        "id": "c2-48",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 114000,
        "stream": "Engineering"
      },
      {
        "id": "c3-48",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 108000,
        "stream": "Engineering"
      },
      {
        "id": "c4-48",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 102000,
        "stream": "Engineering"
      },
      {
        "id": "c5-48",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 120000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 11.5,
      "highestLpa": 39.5,
      "medianLpa": 10.1,
      "placementPercentage": 91,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 11.5,
          "highestPackageLpa": 39.5,
          "medianPackageLpa": 10.1,
          "placementPercentage": 91,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 10.6,
          "highestPackageLpa": 35.6,
          "medianPackageLpa": 9.4,
          "placementPercentage": 89,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 9.8,
          "highestPackageLpa": 33.6,
          "medianPackageLpa": 9,
          "placementPercentage": 86,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Gurugram International Airport",
        "distanceKm": 15
      },
      "nearestRailwayStation": {
        "name": "Gurugram Central Junction",
        "distanceKm": 9
      },
      "nearestMetroPoint": {
        "name": "Gurugram Metro Station",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Gurugram, Dayananda Sagar College of Engineering (DSCE) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Gurugram Central Junction and Gurugram International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Dayananda Sagar College of Engineering (DSCE) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 32000,
          "closingRank": 48000
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 30000,
          "closingRank": 46000
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 34000,
          "closingRank": 50000
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 36000,
          "closingRank": 52000
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 38000,
          "closingRank": 54000
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 60000,
          "closingRank": 88000
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 56000,
          "closingRank": 84000
        }
      ]
    }
  },
  {
    "id": "pes-university-bengaluru",
    "name": "PES University Bengaluru",
    "slug": "pes-university-bengaluru",
    "location": "Ahmedabad, Gujarat",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "description": "Premier private engineering institution in Ahmedabad, Gujarat renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "PES University Bengaluru was established in 1976. Located in Ahmedabad, Gujarat, the institute spans 46 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #83.",
    "logoUrl": "https://images.unsplash.com/photo-1562774062?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907207?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://pes-university-bengaluru.ac.in",
    "feesAnnual": 300000,
    "rating": 4.7,
    "reviewsCount": 84,
    "averagePlacementLpa": 12.3,
    "highestPlacementLpa": 41,
    "type": "Private",
    "affiliation": "Gujarat Technological University",
    "establishedYear": 1976,
    "campusSizeAcres": 46,
    "studentCount": 15250,
    "accreditation": "NAAC A++ | NIRF #83",
    "nirfRank": 83,
    "featured": false,
    "courses": [
      {
        "id": "c1-49",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 300000,
        "stream": "Engineering"
      },
      {
        "id": "c2-49",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 285000,
        "stream": "Engineering"
      },
      {
        "id": "c3-49",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 270000,
        "stream": "Engineering"
      },
      {
        "id": "c4-49",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 255000,
        "stream": "Engineering"
      },
      {
        "id": "c5-49",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 300000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 12.3,
      "highestLpa": 41,
      "medianLpa": 10.8,
      "placementPercentage": 92,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 12.3,
          "highestPackageLpa": 41,
          "medianPackageLpa": 10.8,
          "placementPercentage": 92,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 11.3,
          "highestPackageLpa": 36.9,
          "medianPackageLpa": 10.1,
          "placementPercentage": 90,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 10.5,
          "highestPackageLpa": 34.9,
          "medianPackageLpa": 9.6,
          "placementPercentage": 87,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Ahmedabad International Airport",
        "distanceKm": 16
      },
      "nearestRailwayStation": {
        "name": "Ahmedabad Central Junction",
        "distanceKm": 10
      },
      "nearestMetroPoint": {
        "name": "Ahmedabad Metro Station",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Ahmedabad, PES University Bengaluru is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Ahmedabad Central Junction and Ahmedabad International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to PES University Bengaluru are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 33200,
          "closingRank": 49800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 31125,
          "closingRank": 47725
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 35275,
          "closingRank": 51875
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 37350,
          "closingRank": 53950
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 39425,
          "closingRank": 56025
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 62250,
          "closingRank": 91300
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 58100,
          "closingRank": 87150
        }
      ]
    }
  },
  {
    "id": "the-lnmiit-jaipur",
    "name": "The LNMIIT Jaipur",
    "slug": "the-lnmiit-jaipur",
    "location": "Kolkata, West Bengal",
    "city": "Kolkata",
    "state": "West Bengal",
    "description": "Premier deemed engineering institution in Kolkata, West Bengal renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "The LNMIIT Jaipur was established in 1977. Located in Kolkata, West Bengal, the institute spans 47 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #86.",
    "logoUrl": "https://images.unsplash.com/photo-1562774053?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907198?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://the-lnmiit-jaipur.ac.in",
    "feesAnnual": 150000,
    "rating": 4.1,
    "reviewsCount": 88,
    "averagePlacementLpa": 13.1,
    "highestPlacementLpa": 42.5,
    "type": "Deemed",
    "affiliation": "West Bengal Technological University",
    "establishedYear": 1977,
    "campusSizeAcres": 47,
    "studentCount": 15500,
    "accreditation": "NAAC A++ | NIRF #86",
    "nirfRank": 86,
    "featured": false,
    "courses": [
      {
        "id": "c1-50",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 150000,
        "stream": "Engineering"
      },
      {
        "id": "c2-50",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 142500,
        "stream": "Engineering"
      },
      {
        "id": "c3-50",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      },
      {
        "id": "c4-50",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 127500,
        "stream": "Engineering"
      },
      {
        "id": "c5-50",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 150000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 13.1,
      "highestLpa": 42.5,
      "medianLpa": 11.5,
      "placementPercentage": 93,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 13.1,
          "highestPackageLpa": 42.5,
          "medianPackageLpa": 11.5,
          "placementPercentage": 93,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 12.1,
          "highestPackageLpa": 38.3,
          "medianPackageLpa": 10.7,
          "placementPercentage": 91,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 11.1,
          "highestPackageLpa": 36.1,
          "medianPackageLpa": 10.2,
          "placementPercentage": 88,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Kolkata International Airport",
        "distanceKm": 17
      },
      "nearestRailwayStation": {
        "name": "Kolkata Central Junction",
        "distanceKm": 11
      },
      "nearestMetroPoint": {
        "name": "Kolkata Metro Station",
        "distanceKm": 4
      },
      "connectivityDetails": "Located in Kolkata, The LNMIIT Jaipur is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Kolkata Central Junction and Kolkata International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to The LNMIIT Jaipur are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 8256,
          "closingRank": 12384
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 7740,
          "closingRank": 11868
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 8772,
          "closingRank": 12900
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 9288,
          "closingRank": 13416
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 9804,
          "closingRank": 13932
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 15480,
          "closingRank": 22704
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 14448,
          "closingRank": 21672
        }
      ]
    }
  },
  {
    "id": "iiest-shibpur-kolkata",
    "name": "IIEST Shibpur Kolkata",
    "slug": "iiest-shibpur-kolkata",
    "location": "Coimbatore, Tamil Nadu",
    "city": "Coimbatore",
    "state": "Tamil Nadu",
    "description": "Premier private engineering institution in Coimbatore, Tamil Nadu renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "IIEST Shibpur Kolkata was established in 1978. Located in Coimbatore, Tamil Nadu, the institute spans 48 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #89.",
    "logoUrl": "https://images.unsplash.com/photo-1562774054?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907199?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://iiest-shibpur-kolkata.ac.in",
    "feesAnnual": 340000,
    "rating": 4.2,
    "reviewsCount": 92,
    "averagePlacementLpa": 13.9,
    "highestPlacementLpa": 44,
    "type": "Private",
    "affiliation": "Tamil Nadu Technological University",
    "establishedYear": 1978,
    "campusSizeAcres": 48,
    "studentCount": 15750,
    "accreditation": "NAAC A++ | NIRF #89",
    "nirfRank": 89,
    "featured": false,
    "courses": [
      {
        "id": "c1-51",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 340000,
        "stream": "Engineering"
      },
      {
        "id": "c2-51",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 323000,
        "stream": "Engineering"
      },
      {
        "id": "c3-51",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 306000,
        "stream": "Engineering"
      },
      {
        "id": "c4-51",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 289000,
        "stream": "Engineering"
      },
      {
        "id": "c5-51",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 340000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 13.9,
      "highestLpa": 44,
      "medianLpa": 12.2,
      "placementPercentage": 94,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 13.9,
          "highestPackageLpa": 44,
          "medianPackageLpa": 12.2,
          "placementPercentage": 94,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 12.8,
          "highestPackageLpa": 39.6,
          "medianPackageLpa": 11.4,
          "placementPercentage": 92,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 11.8,
          "highestPackageLpa": 37.4,
          "medianPackageLpa": 10.8,
          "placementPercentage": 89,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Coimbatore International Airport",
        "distanceKm": 18
      },
      "nearestRailwayStation": {
        "name": "Coimbatore Central Junction",
        "distanceKm": 12
      },
      "nearestMetroPoint": {
        "name": "Coimbatore Metro Station",
        "distanceKm": 5
      },
      "connectivityDetails": "Located in Coimbatore, IIEST Shibpur Kolkata is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Coimbatore Central Junction and Coimbatore International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to IIEST Shibpur Kolkata are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 35600,
          "closingRank": 53400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 33375,
          "closingRank": 51175
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 37825,
          "closingRank": 55625
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 40050,
          "closingRank": 57850
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 42275,
          "closingRank": 60075
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 66750,
          "closingRank": 97900
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 62300,
          "closingRank": 93450
        }
      ]
    }
  },
  {
    "id": "jamia-millia-islamia-new-delhi",
    "name": "Jamia Millia Islamia New Delhi",
    "slug": "jamia-millia-islamia-new-delhi",
    "location": "Jaipur, Rajasthan",
    "city": "Jaipur",
    "state": "Rajasthan",
    "description": "Premier autonomous engineering institution in Jaipur, Rajasthan renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Jamia Millia Islamia New Delhi was established in 1979. Located in Jaipur, Rajasthan, the institute spans 49 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #92.",
    "logoUrl": "https://images.unsplash.com/photo-1562774055?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907200?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://jamia-millia-islamia-new-delhi.ac.in",
    "feesAnnual": 180000,
    "rating": 4.3,
    "reviewsCount": 96,
    "averagePlacementLpa": 14.7,
    "highestPlacementLpa": 45.5,
    "type": "Autonomous",
    "affiliation": "Rajasthan Technological University",
    "establishedYear": 1979,
    "campusSizeAcres": 49,
    "studentCount": 16000,
    "accreditation": "NAAC A++ | NIRF #92",
    "nirfRank": 92,
    "featured": false,
    "courses": [
      {
        "id": "c1-52",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      },
      {
        "id": "c2-52",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 171000,
        "stream": "Engineering"
      },
      {
        "id": "c3-52",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 162000,
        "stream": "Engineering"
      },
      {
        "id": "c4-52",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 153000,
        "stream": "Engineering"
      },
      {
        "id": "c5-52",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 14.7,
      "highestLpa": 45.5,
      "medianLpa": 12.9,
      "placementPercentage": 95,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 14.7,
          "highestPackageLpa": 45.5,
          "medianPackageLpa": 12.9,
          "placementPercentage": 95,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 13.5,
          "highestPackageLpa": 41,
          "medianPackageLpa": 12.1,
          "placementPercentage": 93,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 12.5,
          "highestPackageLpa": 38.7,
          "medianPackageLpa": 11.5,
          "placementPercentage": 90,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Jaipur International Airport",
        "distanceKm": 19
      },
      "nearestRailwayStation": {
        "name": "Jaipur Central Junction",
        "distanceKm": 13
      },
      "nearestMetroPoint": {
        "name": "Jaipur Metro Station",
        "distanceKm": 6
      },
      "connectivityDetails": "Located in Jaipur, Jamia Millia Islamia New Delhi is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Jaipur Central Junction and Jaipur International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Jamia Millia Islamia New Delhi are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 36800,
          "closingRank": 55200
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 34500,
          "closingRank": 52900
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 39100,
          "closingRank": 57500
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 41400,
          "closingRank": 59800
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 43700,
          "closingRank": 62100
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 69000,
          "closingRank": 101200
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 64400,
          "closingRank": 96600
        }
      ]
    }
  },
  {
    "id": "psg-college-of-technology-coimbatore",
    "name": "PSG College of Technology Coimbatore",
    "slug": "psg-college-of-technology-coimbatore",
    "location": "Bengaluru, Karnataka",
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Premier private engineering institution in Bengaluru, Karnataka renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "PSG College of Technology Coimbatore was established in 1980. Located in Bengaluru, Karnataka, the institute spans 50 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #95.",
    "logoUrl": "https://images.unsplash.com/photo-1562774056?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907201?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://psg-college-of-technology-coimbatore.ac.in",
    "feesAnnual": 180000,
    "rating": 4.4,
    "reviewsCount": 100,
    "averagePlacementLpa": 7.5,
    "highestPlacementLpa": 47,
    "type": "Private",
    "affiliation": "Karnataka Technological University",
    "establishedYear": 1980,
    "campusSizeAcres": 50,
    "studentCount": 16250,
    "accreditation": "NAAC A++ | NIRF #95",
    "nirfRank": 95,
    "featured": false,
    "courses": [
      {
        "id": "c1-53",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      },
      {
        "id": "c2-53",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 171000,
        "stream": "Engineering"
      },
      {
        "id": "c3-53",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 162000,
        "stream": "Engineering"
      },
      {
        "id": "c4-53",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 153000,
        "stream": "Engineering"
      },
      {
        "id": "c5-53",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 7.5,
      "highestLpa": 47,
      "medianLpa": 6.6,
      "placementPercentage": 96,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 7.5,
          "highestPackageLpa": 47,
          "medianPackageLpa": 6.6,
          "placementPercentage": 96,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 6.9,
          "highestPackageLpa": 42.3,
          "medianPackageLpa": 6.1,
          "placementPercentage": 94,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 6.4,
          "highestPackageLpa": 39.9,
          "medianPackageLpa": 5.9,
          "placementPercentage": 91,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Bengaluru International Airport",
        "distanceKm": 20
      },
      "nearestRailwayStation": {
        "name": "Bengaluru Central Junction",
        "distanceKm": 14
      },
      "nearestMetroPoint": {
        "name": "Bengaluru Metro Station",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Bengaluru, PSG College of Technology Coimbatore is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Bengaluru Central Junction and Bengaluru International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to PSG College of Technology Coimbatore are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 38000,
          "closingRank": 57000
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 35625,
          "closingRank": 54625
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 40375,
          "closingRank": 59375
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 42750,
          "closingRank": 61750
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 45125,
          "closingRank": 64125
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 71250,
          "closingRank": 104500
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 66500,
          "closingRank": 99750
        }
      ]
    }
  },
  {
    "id": "ssn-college-of-engineering-chennai",
    "name": "SSN College of Engineering Chennai",
    "slug": "ssn-college-of-engineering-chennai",
    "location": "Hyderabad, Telangana",
    "city": "Hyderabad",
    "state": "Telangana",
    "description": "Premier deemed engineering institution in Hyderabad, Telangana renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "SSN College of Engineering Chennai was established in 1981. Located in Hyderabad, Telangana, the institute spans 51 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #98.",
    "logoUrl": "https://images.unsplash.com/photo-1562774057?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907202?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://ssn-college-of-engineering-chennai.ac.in",
    "feesAnnual": 135000,
    "rating": 4.5,
    "reviewsCount": 104,
    "averagePlacementLpa": 8.3,
    "highestPlacementLpa": 48.5,
    "type": "Deemed",
    "affiliation": "Telangana Technological University",
    "establishedYear": 1981,
    "campusSizeAcres": 51,
    "studentCount": 16500,
    "accreditation": "NAAC A++ | NIRF #98",
    "nirfRank": 98,
    "featured": false,
    "courses": [
      {
        "id": "c1-54",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      },
      {
        "id": "c2-54",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 128250,
        "stream": "Engineering"
      },
      {
        "id": "c3-54",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 121500,
        "stream": "Engineering"
      },
      {
        "id": "c4-54",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 114750,
        "stream": "Engineering"
      },
      {
        "id": "c5-54",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 8.3,
      "highestLpa": 48.5,
      "medianLpa": 7.3,
      "placementPercentage": 97,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 8.3,
          "highestPackageLpa": 48.5,
          "medianPackageLpa": 7.3,
          "placementPercentage": 97,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 7.6,
          "highestPackageLpa": 43.6,
          "medianPackageLpa": 6.8,
          "placementPercentage": 95,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 7.1,
          "highestPackageLpa": 41.2,
          "medianPackageLpa": 6.5,
          "placementPercentage": 92,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Hyderabad International Airport",
        "distanceKm": 21
      },
      "nearestRailwayStation": {
        "name": "Hyderabad Central Junction",
        "distanceKm": 15
      },
      "nearestMetroPoint": {
        "name": "Hyderabad Metro Station",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Hyderabad, SSN College of Engineering Chennai is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Hyderabad Central Junction and Hyderabad International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to SSN College of Engineering Chennai are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 39200,
          "closingRank": 58800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 36750,
          "closingRank": 56350
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 41650,
          "closingRank": 61250
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 44100,
          "closingRank": 63700
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 46550,
          "closingRank": 66150
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 73500,
          "closingRank": 107800
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 68600,
          "closingRank": 102900
        }
      ]
    }
  },
  {
    "id": "dhirubhai-ambani-institute-da-iict",
    "name": "Dhirubhai Ambani Institute DA-IICT",
    "slug": "dhirubhai-ambani-institute-da-iict",
    "location": "Chennai, Tamil Nadu",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "description": "Premier private engineering institution in Chennai, Tamil Nadu renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Dhirubhai Ambani Institute DA-IICT was established in 1982. Located in Chennai, Tamil Nadu, the institute spans 52 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #101.",
    "logoUrl": "https://images.unsplash.com/photo-1562774058?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907203?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://dhirubhai-ambani-institute-da-iict.ac.in",
    "feesAnnual": 220000,
    "rating": 4.6,
    "reviewsCount": 108,
    "averagePlacementLpa": 9.1,
    "highestPlacementLpa": 50,
    "type": "Private",
    "affiliation": "Tamil Nadu Technological University",
    "establishedYear": 1982,
    "campusSizeAcres": 52,
    "studentCount": 16750,
    "accreditation": "NAAC A++ | NIRF #101",
    "nirfRank": 101,
    "featured": false,
    "courses": [
      {
        "id": "c1-55",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      },
      {
        "id": "c2-55",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 209000,
        "stream": "Engineering"
      },
      {
        "id": "c3-55",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 198000,
        "stream": "Engineering"
      },
      {
        "id": "c4-55",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 187000,
        "stream": "Engineering"
      },
      {
        "id": "c5-55",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 9.1,
      "highestLpa": 50,
      "medianLpa": 8,
      "placementPercentage": 98,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 50,
          "medianPackageLpa": 8,
          "placementPercentage": 98,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 8.4,
          "highestPackageLpa": 45,
          "medianPackageLpa": 7.5,
          "placementPercentage": 96,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 7.7,
          "highestPackageLpa": 42.5,
          "medianPackageLpa": 7.1,
          "placementPercentage": 93,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Chennai International Airport",
        "distanceKm": 22
      },
      "nearestRailwayStation": {
        "name": "Chennai Central Junction",
        "distanceKm": 4
      },
      "nearestMetroPoint": {
        "name": "Chennai Metro Station",
        "distanceKm": 4
      },
      "connectivityDetails": "Located in Chennai, Dhirubhai Ambani Institute DA-IICT is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Chennai Central Junction and Chennai International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Dhirubhai Ambani Institute DA-IICT are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 40400,
          "closingRank": 60600
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 37875,
          "closingRank": 58075
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 42925,
          "closingRank": 63125
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 45450,
          "closingRank": 65650
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 47975,
          "closingRank": 68175
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 75750,
          "closingRank": 111100
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 70700,
          "closingRank": 106050
        }
      ]
    }
  },
  {
    "id": "sastra-deemed-university-thanjavur",
    "name": "SASTRA Deemed University Thanjavur",
    "slug": "sastra-deemed-university-thanjavur",
    "location": "Pune, Maharashtra",
    "city": "Pune",
    "state": "Maharashtra",
    "description": "Premier deemed engineering institution in Pune, Maharashtra renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "SASTRA Deemed University Thanjavur was established in 1983. Located in Pune, Maharashtra, the institute spans 53 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #104.",
    "logoUrl": "https://images.unsplash.com/photo-1562774059?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907204?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://sastra-deemed-university-thanjavur.ac.in",
    "feesAnnual": 165000,
    "rating": 4.7,
    "reviewsCount": 112,
    "averagePlacementLpa": 9.9,
    "highestPlacementLpa": 51.5,
    "type": "Deemed",
    "affiliation": "Maharashtra Technological University",
    "establishedYear": 1983,
    "campusSizeAcres": 53,
    "studentCount": 17000,
    "accreditation": "NAAC A++ | NIRF #104",
    "nirfRank": 104,
    "featured": false,
    "courses": [
      {
        "id": "c1-56",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 165000,
        "stream": "Engineering"
      },
      {
        "id": "c2-56",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 156750,
        "stream": "Engineering"
      },
      {
        "id": "c3-56",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 148500,
        "stream": "Engineering"
      },
      {
        "id": "c4-56",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 140250,
        "stream": "Engineering"
      },
      {
        "id": "c5-56",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 165000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 9.9,
      "highestLpa": 51.5,
      "medianLpa": 8.7,
      "placementPercentage": 85,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 9.9,
          "highestPackageLpa": 51.5,
          "medianPackageLpa": 8.7,
          "placementPercentage": 85,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 46.4,
          "medianPackageLpa": 8.1,
          "placementPercentage": 83,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 8.4,
          "highestPackageLpa": 43.8,
          "medianPackageLpa": 7.7,
          "placementPercentage": 80,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Pune International Airport",
        "distanceKm": 23
      },
      "nearestRailwayStation": {
        "name": "Pune Central Junction",
        "distanceKm": 5
      },
      "nearestMetroPoint": {
        "name": "Pune Metro Station",
        "distanceKm": 5
      },
      "connectivityDetails": "Located in Pune, SASTRA Deemed University Thanjavur is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Pune Central Junction and Pune International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to SASTRA Deemed University Thanjavur are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 41600,
          "closingRank": 62400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 39000,
          "closingRank": 59800
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 44200,
          "closingRank": 65000
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 46800,
          "closingRank": 67600
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 49400,
          "closingRank": 70200
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 78000,
          "closingRank": 114400
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 72800,
          "closingRank": 109200
        }
      ]
    }
  },
  {
    "id": "walchand-college-of-engineering-sangli",
    "name": "Walchand College of Engineering Sangli",
    "slug": "walchand-college-of-engineering-sangli",
    "location": "Noida, Uttar Pradesh",
    "city": "Noida",
    "state": "Uttar Pradesh",
    "description": "Premier private engineering institution in Noida, Uttar Pradesh renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Walchand College of Engineering Sangli was established in 1984. Located in Noida, Uttar Pradesh, the institute spans 54 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #107.",
    "logoUrl": "https://images.unsplash.com/photo-1562774060?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907205?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://walchand-college-of-engineering-sangli.ac.in",
    "feesAnnual": 260000,
    "rating": 4.1,
    "reviewsCount": 116,
    "averagePlacementLpa": 10.7,
    "highestPlacementLpa": 53,
    "type": "Private",
    "affiliation": "Uttar Pradesh Technological University",
    "establishedYear": 1984,
    "campusSizeAcres": 54,
    "studentCount": 17250,
    "accreditation": "NAAC A++ | NIRF #107",
    "nirfRank": 107,
    "featured": false,
    "courses": [
      {
        "id": "c1-57",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 260000,
        "stream": "Engineering"
      },
      {
        "id": "c2-57",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 247000,
        "stream": "Engineering"
      },
      {
        "id": "c3-57",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 234000,
        "stream": "Engineering"
      },
      {
        "id": "c4-57",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 221000,
        "stream": "Engineering"
      },
      {
        "id": "c5-57",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 260000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 10.7,
      "highestLpa": 53,
      "medianLpa": 9.4,
      "placementPercentage": 86,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 10.7,
          "highestPackageLpa": 53,
          "medianPackageLpa": 9.4,
          "placementPercentage": 86,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 9.8,
          "highestPackageLpa": 47.7,
          "medianPackageLpa": 8.8,
          "placementPercentage": 84,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 45,
          "medianPackageLpa": 8.3,
          "placementPercentage": 81,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Noida International Airport",
        "distanceKm": 24
      },
      "nearestRailwayStation": {
        "name": "Noida Central Junction",
        "distanceKm": 6
      },
      "nearestMetroPoint": {
        "name": "Noida Metro Station",
        "distanceKm": 6
      },
      "connectivityDetails": "Located in Noida, Walchand College of Engineering Sangli is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Noida Central Junction and Noida International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Walchand College of Engineering Sangli are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 42800,
          "closingRank": 64200
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 40125,
          "closingRank": 61525
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 45475,
          "closingRank": 66875
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 48150,
          "closingRank": 69550
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 50825,
          "closingRank": 72225
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 80250,
          "closingRank": 117700
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 74900,
          "closingRank": 112350
        }
      ]
    }
  },
  {
    "id": "cummins-college-of-engineering-for-women-pune",
    "name": "Cummins College of Engineering for Women Pune",
    "slug": "cummins-college-of-engineering-for-women-pune",
    "location": "Gurugram, Haryana",
    "city": "Gurugram",
    "state": "Haryana",
    "description": "Premier autonomous engineering institution in Gurugram, Haryana renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Cummins College of Engineering for Women Pune was established in 1985. Located in Gurugram, Haryana, the institute spans 55 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #110.",
    "logoUrl": "https://images.unsplash.com/photo-1562774061?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907206?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://cummins-college-of-engineering-for-women-pune.ac.in",
    "feesAnnual": 120000,
    "rating": 4.2,
    "reviewsCount": 120,
    "averagePlacementLpa": 11.5,
    "highestPlacementLpa": 32,
    "type": "Autonomous",
    "affiliation": "Haryana Technological University",
    "establishedYear": 1985,
    "campusSizeAcres": 55,
    "studentCount": 17500,
    "accreditation": "NAAC A++ | NIRF #110",
    "nirfRank": 110,
    "featured": false,
    "courses": [
      {
        "id": "c1-58",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 120000,
        "stream": "Engineering"
      },
      {
        "id": "c2-58",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 114000,
        "stream": "Engineering"
      },
      {
        "id": "c3-58",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 108000,
        "stream": "Engineering"
      },
      {
        "id": "c4-58",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 102000,
        "stream": "Engineering"
      },
      {
        "id": "c5-58",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 120000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 11.5,
      "highestLpa": 32,
      "medianLpa": 10.1,
      "placementPercentage": 87,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 11.5,
          "highestPackageLpa": 32,
          "medianPackageLpa": 10.1,
          "placementPercentage": 87,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 10.6,
          "highestPackageLpa": 28.8,
          "medianPackageLpa": 9.4,
          "placementPercentage": 85,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 9.8,
          "highestPackageLpa": 27.2,
          "medianPackageLpa": 9,
          "placementPercentage": 82,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Gurugram International Airport",
        "distanceKm": 25
      },
      "nearestRailwayStation": {
        "name": "Gurugram Central Junction",
        "distanceKm": 7
      },
      "nearestMetroPoint": {
        "name": "Gurugram Metro Station",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Gurugram, Cummins College of Engineering for Women Pune is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Gurugram Central Junction and Gurugram International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Cummins College of Engineering for Women Pune are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 44000,
          "closingRank": 66000
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 41250,
          "closingRank": 63250
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 46750,
          "closingRank": 68750
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 49500,
          "closingRank": 71500
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 52250,
          "closingRank": 74250
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 82500,
          "closingRank": 121000
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 77000,
          "closingRank": 115500
        }
      ]
    }
  },
  {
    "id": "mit-world-peace-university-pune",
    "name": "MIT World Peace University Pune",
    "slug": "mit-world-peace-university-pune",
    "location": "Ahmedabad, Gujarat",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "description": "Premier private engineering institution in Ahmedabad, Gujarat renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "MIT World Peace University Pune was established in 1986. Located in Ahmedabad, Gujarat, the institute spans 56 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #113.",
    "logoUrl": "https://images.unsplash.com/photo-1562774062?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907207?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://mit-world-peace-university-pune.ac.in",
    "feesAnnual": 300000,
    "rating": 4.3,
    "reviewsCount": 124,
    "averagePlacementLpa": 12.3,
    "highestPlacementLpa": 33.5,
    "type": "Private",
    "affiliation": "Gujarat Technological University",
    "establishedYear": 1986,
    "campusSizeAcres": 56,
    "studentCount": 17750,
    "accreditation": "NAAC A++ | NIRF #113",
    "nirfRank": 113,
    "featured": false,
    "courses": [
      {
        "id": "c1-59",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 300000,
        "stream": "Engineering"
      },
      {
        "id": "c2-59",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 285000,
        "stream": "Engineering"
      },
      {
        "id": "c3-59",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 270000,
        "stream": "Engineering"
      },
      {
        "id": "c4-59",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 255000,
        "stream": "Engineering"
      },
      {
        "id": "c5-59",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 300000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 12.3,
      "highestLpa": 33.5,
      "medianLpa": 10.8,
      "placementPercentage": 88,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 12.3,
          "highestPackageLpa": 33.5,
          "medianPackageLpa": 10.8,
          "placementPercentage": 88,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 11.3,
          "highestPackageLpa": 30.2,
          "medianPackageLpa": 10.1,
          "placementPercentage": 86,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 10.5,
          "highestPackageLpa": 28.5,
          "medianPackageLpa": 9.6,
          "placementPercentage": 83,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Ahmedabad International Airport",
        "distanceKm": 26
      },
      "nearestRailwayStation": {
        "name": "Ahmedabad Central Junction",
        "distanceKm": 8
      },
      "nearestMetroPoint": {
        "name": "Ahmedabad Metro Station",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Ahmedabad, MIT World Peace University Pune is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Ahmedabad Central Junction and Ahmedabad International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to MIT World Peace University Pune are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 45200,
          "closingRank": 67800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 42375,
          "closingRank": 64975
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 48025,
          "closingRank": 70625
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 50850,
          "closingRank": 73450
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 53675,
          "closingRank": 76275
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 84750,
          "closingRank": 124300
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 79100,
          "closingRank": 118650
        }
      ]
    }
  },
  {
    "id": "graphic-era-university-dehradun",
    "name": "Graphic Era University Dehradun",
    "slug": "graphic-era-university-dehradun",
    "location": "Kolkata, West Bengal",
    "city": "Kolkata",
    "state": "West Bengal",
    "description": "Premier deemed engineering institution in Kolkata, West Bengal renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Graphic Era University Dehradun was established in 1987. Located in Kolkata, West Bengal, the institute spans 57 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #116.",
    "logoUrl": "https://images.unsplash.com/photo-1562774053?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907198?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://graphic-era-university-dehradun.ac.in",
    "feesAnnual": 150000,
    "rating": 4.4,
    "reviewsCount": 128,
    "averagePlacementLpa": 13.1,
    "highestPlacementLpa": 35,
    "type": "Deemed",
    "affiliation": "West Bengal Technological University",
    "establishedYear": 1987,
    "campusSizeAcres": 57,
    "studentCount": 3000,
    "accreditation": "NAAC A++ | NIRF #116",
    "nirfRank": 116,
    "featured": false,
    "courses": [
      {
        "id": "c1-60",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 150000,
        "stream": "Engineering"
      },
      {
        "id": "c2-60",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 142500,
        "stream": "Engineering"
      },
      {
        "id": "c3-60",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      },
      {
        "id": "c4-60",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 127500,
        "stream": "Engineering"
      },
      {
        "id": "c5-60",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 150000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 13.1,
      "highestLpa": 35,
      "medianLpa": 11.5,
      "placementPercentage": 89,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 13.1,
          "highestPackageLpa": 35,
          "medianPackageLpa": 11.5,
          "placementPercentage": 89,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 12.1,
          "highestPackageLpa": 31.5,
          "medianPackageLpa": 10.7,
          "placementPercentage": 87,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 11.1,
          "highestPackageLpa": 29.8,
          "medianPackageLpa": 10.2,
          "placementPercentage": 84,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Kolkata International Airport",
        "distanceKm": 27
      },
      "nearestRailwayStation": {
        "name": "Kolkata Central Junction",
        "distanceKm": 9
      },
      "nearestMetroPoint": {
        "name": "Kolkata Metro Station",
        "distanceKm": 4
      },
      "connectivityDetails": "Located in Kolkata, Graphic Era University Dehradun is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Kolkata Central Junction and Kolkata International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Graphic Era University Dehradun are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 46400,
          "closingRank": 69600
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 43500,
          "closingRank": 66700
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 49300,
          "closingRank": 72500
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 52200,
          "closingRank": 75400
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 55100,
          "closingRank": 78300
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 87000,
          "closingRank": 127600
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 81200,
          "closingRank": 121800
        }
      ]
    }
  },
  {
    "id": "upes-dehradun",
    "name": "UPES Dehradun",
    "slug": "upes-dehradun",
    "location": "Coimbatore, Tamil Nadu",
    "city": "Coimbatore",
    "state": "Tamil Nadu",
    "description": "Premier private engineering institution in Coimbatore, Tamil Nadu renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "UPES Dehradun was established in 1988. Located in Coimbatore, Tamil Nadu, the institute spans 58 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #119.",
    "logoUrl": "https://images.unsplash.com/photo-1562774054?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907199?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://upes-dehradun.ac.in",
    "feesAnnual": 340000,
    "rating": 4.5,
    "reviewsCount": 132,
    "averagePlacementLpa": 13.9,
    "highestPlacementLpa": 36.5,
    "type": "Private",
    "affiliation": "Tamil Nadu Technological University",
    "establishedYear": 1988,
    "campusSizeAcres": 58,
    "studentCount": 3250,
    "accreditation": "NAAC A++ | NIRF #119",
    "nirfRank": 119,
    "featured": false,
    "courses": [
      {
        "id": "c1-61",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 340000,
        "stream": "Engineering"
      },
      {
        "id": "c2-61",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 323000,
        "stream": "Engineering"
      },
      {
        "id": "c3-61",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 306000,
        "stream": "Engineering"
      },
      {
        "id": "c4-61",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 289000,
        "stream": "Engineering"
      },
      {
        "id": "c5-61",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 340000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 13.9,
      "highestLpa": 36.5,
      "medianLpa": 12.2,
      "placementPercentage": 90,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 13.9,
          "highestPackageLpa": 36.5,
          "medianPackageLpa": 12.2,
          "placementPercentage": 90,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 12.8,
          "highestPackageLpa": 32.9,
          "medianPackageLpa": 11.4,
          "placementPercentage": 88,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 11.8,
          "highestPackageLpa": 31,
          "medianPackageLpa": 10.8,
          "placementPercentage": 85,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Coimbatore International Airport",
        "distanceKm": 28
      },
      "nearestRailwayStation": {
        "name": "Coimbatore Central Junction",
        "distanceKm": 10
      },
      "nearestMetroPoint": {
        "name": "Coimbatore Metro Station",
        "distanceKm": 5
      },
      "connectivityDetails": "Located in Coimbatore, UPES Dehradun is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Coimbatore Central Junction and Coimbatore International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to UPES Dehradun are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 47600,
          "closingRank": 71400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 44625,
          "closingRank": 68425
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 50575,
          "closingRank": 74375
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 53550,
          "closingRank": 77350
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 56525,
          "closingRank": 80325
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 89250,
          "closingRank": 130900
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 83300,
          "closingRank": 124950
        }
      ]
    }
  },
  {
    "id": "galgotias-university-greater-noida",
    "name": "Galgotias University Greater Noida",
    "slug": "galgotias-university-greater-noida",
    "location": "Jaipur, Rajasthan",
    "city": "Jaipur",
    "state": "Rajasthan",
    "description": "Premier deemed engineering institution in Jaipur, Rajasthan renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Galgotias University Greater Noida was established in 1989. Located in Jaipur, Rajasthan, the institute spans 59 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #122.",
    "logoUrl": "https://images.unsplash.com/photo-1562774055?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907200?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://galgotias-university-greater-noida.ac.in",
    "feesAnnual": 180000,
    "rating": 4.6,
    "reviewsCount": 136,
    "averagePlacementLpa": 14.7,
    "highestPlacementLpa": 38,
    "type": "Deemed",
    "affiliation": "Rajasthan Technological University",
    "establishedYear": 1989,
    "campusSizeAcres": 59,
    "studentCount": 3500,
    "accreditation": "NAAC A++ | NIRF #122",
    "nirfRank": 122,
    "featured": false,
    "courses": [
      {
        "id": "c1-62",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      },
      {
        "id": "c2-62",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 171000,
        "stream": "Engineering"
      },
      {
        "id": "c3-62",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 162000,
        "stream": "Engineering"
      },
      {
        "id": "c4-62",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 153000,
        "stream": "Engineering"
      },
      {
        "id": "c5-62",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 14.7,
      "highestLpa": 38,
      "medianLpa": 12.9,
      "placementPercentage": 91,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 14.7,
          "highestPackageLpa": 38,
          "medianPackageLpa": 12.9,
          "placementPercentage": 91,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 13.5,
          "highestPackageLpa": 34.2,
          "medianPackageLpa": 12.1,
          "placementPercentage": 89,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 12.5,
          "highestPackageLpa": 32.3,
          "medianPackageLpa": 11.5,
          "placementPercentage": 86,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Jaipur International Airport",
        "distanceKm": 29
      },
      "nearestRailwayStation": {
        "name": "Jaipur Central Junction",
        "distanceKm": 11
      },
      "nearestMetroPoint": {
        "name": "Jaipur Metro Station",
        "distanceKm": 6
      },
      "connectivityDetails": "Located in Jaipur, Galgotias University Greater Noida is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Jaipur Central Junction and Jaipur International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Galgotias University Greater Noida are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 48800,
          "closingRank": 73200
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 45750,
          "closingRank": 70150
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 51850,
          "closingRank": 76250
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 54900,
          "closingRank": 79300
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 57950,
          "closingRank": 82350
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 91500,
          "closingRank": 134200
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 85400,
          "closingRank": 128100
        }
      ]
    }
  },
  {
    "id": "gla-university-mathura",
    "name": "GLA University Mathura",
    "slug": "gla-university-mathura",
    "location": "Bengaluru, Karnataka",
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Premier private engineering institution in Bengaluru, Karnataka renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "GLA University Mathura was established in 1990. Located in Bengaluru, Karnataka, the institute spans 60 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #125.",
    "logoUrl": "https://images.unsplash.com/photo-1562774056?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907201?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://gla-university-mathura.ac.in",
    "feesAnnual": 180000,
    "rating": 4.7,
    "reviewsCount": 140,
    "averagePlacementLpa": 7.5,
    "highestPlacementLpa": 39.5,
    "type": "Private",
    "affiliation": "Karnataka Technological University",
    "establishedYear": 1990,
    "campusSizeAcres": 60,
    "studentCount": 3750,
    "accreditation": "NAAC A++ | NIRF #125",
    "nirfRank": 125,
    "featured": false,
    "courses": [
      {
        "id": "c1-63",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      },
      {
        "id": "c2-63",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 171000,
        "stream": "Engineering"
      },
      {
        "id": "c3-63",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 162000,
        "stream": "Engineering"
      },
      {
        "id": "c4-63",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 153000,
        "stream": "Engineering"
      },
      {
        "id": "c5-63",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 7.5,
      "highestLpa": 39.5,
      "medianLpa": 6.6,
      "placementPercentage": 92,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 7.5,
          "highestPackageLpa": 39.5,
          "medianPackageLpa": 6.6,
          "placementPercentage": 92,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 6.9,
          "highestPackageLpa": 35.6,
          "medianPackageLpa": 6.1,
          "placementPercentage": 90,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 6.4,
          "highestPackageLpa": 33.6,
          "medianPackageLpa": 5.9,
          "placementPercentage": 87,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Bengaluru International Airport",
        "distanceKm": 30
      },
      "nearestRailwayStation": {
        "name": "Bengaluru Central Junction",
        "distanceKm": 12
      },
      "nearestMetroPoint": {
        "name": "Bengaluru Metro Station",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Bengaluru, GLA University Mathura is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Bengaluru Central Junction and Bengaluru International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to GLA University Mathura are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 50000,
          "closingRank": 75000
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 46875,
          "closingRank": 71875
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 53125,
          "closingRank": 78125
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 56250,
          "closingRank": 81250
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 59375,
          "closingRank": 84375
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 93750,
          "closingRank": 137500
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 87500,
          "closingRank": 131250
        }
      ]
    }
  },
  {
    "id": "sharda-university-greater-noida",
    "name": "Sharda University Greater Noida",
    "slug": "sharda-university-greater-noida",
    "location": "Hyderabad, Telangana",
    "city": "Hyderabad",
    "state": "Telangana",
    "description": "Premier autonomous engineering institution in Hyderabad, Telangana renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Sharda University Greater Noida was established in 1991. Located in Hyderabad, Telangana, the institute spans 61 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #128.",
    "logoUrl": "https://images.unsplash.com/photo-1562774057?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907202?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://sharda-university-greater-noida.ac.in",
    "feesAnnual": 135000,
    "rating": 4.1,
    "reviewsCount": 144,
    "averagePlacementLpa": 8.3,
    "highestPlacementLpa": 41,
    "type": "Autonomous",
    "affiliation": "Telangana Technological University",
    "establishedYear": 1991,
    "campusSizeAcres": 61,
    "studentCount": 4000,
    "accreditation": "NAAC A++ | NIRF #128",
    "nirfRank": 128,
    "featured": false,
    "courses": [
      {
        "id": "c1-64",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      },
      {
        "id": "c2-64",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 128250,
        "stream": "Engineering"
      },
      {
        "id": "c3-64",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 121500,
        "stream": "Engineering"
      },
      {
        "id": "c4-64",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 114750,
        "stream": "Engineering"
      },
      {
        "id": "c5-64",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 8.3,
      "highestLpa": 41,
      "medianLpa": 7.3,
      "placementPercentage": 93,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 8.3,
          "highestPackageLpa": 41,
          "medianPackageLpa": 7.3,
          "placementPercentage": 93,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 7.6,
          "highestPackageLpa": 36.9,
          "medianPackageLpa": 6.8,
          "placementPercentage": 91,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 7.1,
          "highestPackageLpa": 34.9,
          "medianPackageLpa": 6.5,
          "placementPercentage": 88,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Hyderabad International Airport",
        "distanceKm": 31
      },
      "nearestRailwayStation": {
        "name": "Hyderabad Central Junction",
        "distanceKm": 13
      },
      "nearestMetroPoint": {
        "name": "Hyderabad Metro Station",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Hyderabad, Sharda University Greater Noida is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Hyderabad Central Junction and Hyderabad International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Sharda University Greater Noida are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 51200,
          "closingRank": 76800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 48000,
          "closingRank": 73600
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 54400,
          "closingRank": 80000
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 57600,
          "closingRank": 83200
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 60800,
          "closingRank": 86400
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 96000,
          "closingRank": 140800
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 89600,
          "closingRank": 134400
        }
      ]
    }
  },
  {
    "id": "jaypee-institute-of-information-technology-jiit",
    "name": "Jaypee Institute of Information Technology (JIIT)",
    "slug": "jaypee-institute-of-information-technology-jiit",
    "location": "Chennai, Tamil Nadu",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "description": "Premier private engineering institution in Chennai, Tamil Nadu renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Jaypee Institute of Information Technology (JIIT) was established in 1992. Located in Chennai, Tamil Nadu, the institute spans 62 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #131.",
    "logoUrl": "https://images.unsplash.com/photo-1562774058?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907203?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://jaypee-institute-of-information-technology-jiit.ac.in",
    "feesAnnual": 220000,
    "rating": 4.2,
    "reviewsCount": 148,
    "averagePlacementLpa": 9.1,
    "highestPlacementLpa": 42.5,
    "type": "Private",
    "affiliation": "Tamil Nadu Technological University",
    "establishedYear": 1992,
    "campusSizeAcres": 62,
    "studentCount": 4250,
    "accreditation": "NAAC A++ | NIRF #131",
    "nirfRank": 131,
    "featured": false,
    "courses": [
      {
        "id": "c1-65",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      },
      {
        "id": "c2-65",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 209000,
        "stream": "Engineering"
      },
      {
        "id": "c3-65",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 198000,
        "stream": "Engineering"
      },
      {
        "id": "c4-65",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 187000,
        "stream": "Engineering"
      },
      {
        "id": "c5-65",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 9.1,
      "highestLpa": 42.5,
      "medianLpa": 8,
      "placementPercentage": 94,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 42.5,
          "medianPackageLpa": 8,
          "placementPercentage": 94,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 8.4,
          "highestPackageLpa": 38.3,
          "medianPackageLpa": 7.5,
          "placementPercentage": 92,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 7.7,
          "highestPackageLpa": 36.1,
          "medianPackageLpa": 7.1,
          "placementPercentage": 89,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Chennai International Airport",
        "distanceKm": 32
      },
      "nearestRailwayStation": {
        "name": "Chennai Central Junction",
        "distanceKm": 14
      },
      "nearestMetroPoint": {
        "name": "Chennai Metro Station",
        "distanceKm": 4
      },
      "connectivityDetails": "Located in Chennai, Jaypee Institute of Information Technology (JIIT) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Chennai Central Junction and Chennai International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Advanced",
      "eligibilityText": "Admissions to Jaypee Institute of Information Technology (JIIT) are granted via JEE Advanced merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 12576,
          "closingRank": 18864
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 11790,
          "closingRank": 18078
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 13362,
          "closingRank": 19650
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 14148,
          "closingRank": 20436
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 14934,
          "closingRank": 21222
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 23580,
          "closingRank": 34584
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 22008,
          "closingRank": 33012
        }
      ]
    }
  },
  {
    "id": "jc-bose-university-ymca-faridabad",
    "name": "JC Bose University YMCA Faridabad",
    "slug": "jc-bose-university-ymca-faridabad",
    "location": "Pune, Maharashtra",
    "city": "Pune",
    "state": "Maharashtra",
    "description": "Premier deemed engineering institution in Pune, Maharashtra renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "JC Bose University YMCA Faridabad was established in 1993. Located in Pune, Maharashtra, the institute spans 63 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #134.",
    "logoUrl": "https://images.unsplash.com/photo-1562774059?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907204?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://jc-bose-university-ymca-faridabad.ac.in",
    "feesAnnual": 165000,
    "rating": 4.3,
    "reviewsCount": 152,
    "averagePlacementLpa": 9.9,
    "highestPlacementLpa": 44,
    "type": "Deemed",
    "affiliation": "Maharashtra Technological University",
    "establishedYear": 1993,
    "campusSizeAcres": 63,
    "studentCount": 4500,
    "accreditation": "NAAC A++ | NIRF #134",
    "nirfRank": 134,
    "featured": false,
    "courses": [
      {
        "id": "c1-66",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 165000,
        "stream": "Engineering"
      },
      {
        "id": "c2-66",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 156750,
        "stream": "Engineering"
      },
      {
        "id": "c3-66",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 148500,
        "stream": "Engineering"
      },
      {
        "id": "c4-66",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 140250,
        "stream": "Engineering"
      },
      {
        "id": "c5-66",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 165000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 9.9,
      "highestLpa": 44,
      "medianLpa": 8.7,
      "placementPercentage": 95,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 9.9,
          "highestPackageLpa": 44,
          "medianPackageLpa": 8.7,
          "placementPercentage": 95,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 39.6,
          "medianPackageLpa": 8.1,
          "placementPercentage": 93,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 8.4,
          "highestPackageLpa": 37.4,
          "medianPackageLpa": 7.7,
          "placementPercentage": 90,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Pune International Airport",
        "distanceKm": 33
      },
      "nearestRailwayStation": {
        "name": "Pune Central Junction",
        "distanceKm": 15
      },
      "nearestMetroPoint": {
        "name": "Pune Metro Station",
        "distanceKm": 5
      },
      "connectivityDetails": "Located in Pune, JC Bose University YMCA Faridabad is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Pune Central Junction and Pune International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to JC Bose University YMCA Faridabad are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 53600,
          "closingRank": 80400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 50250,
          "closingRank": 77050
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 56950,
          "closingRank": 83750
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 60300,
          "closingRank": 87100
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 63650,
          "closingRank": 90450
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 100500,
          "closingRank": 147400
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 93800,
          "closingRank": 140700
        }
      ]
    }
  },
  {
    "id": "bms-institute-of-technology-bmsit",
    "name": "BMS Institute of Technology BMSIT",
    "slug": "bms-institute-of-technology-bmsit",
    "location": "Noida, Uttar Pradesh",
    "city": "Noida",
    "state": "Uttar Pradesh",
    "description": "Premier private engineering institution in Noida, Uttar Pradesh renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "BMS Institute of Technology BMSIT was established in 1994. Located in Noida, Uttar Pradesh, the institute spans 64 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #137.",
    "logoUrl": "https://images.unsplash.com/photo-1562774060?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907205?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://bms-institute-of-technology-bmsit.ac.in",
    "feesAnnual": 260000,
    "rating": 4.4,
    "reviewsCount": 156,
    "averagePlacementLpa": 10.7,
    "highestPlacementLpa": 45.5,
    "type": "Private",
    "affiliation": "Uttar Pradesh Technological University",
    "establishedYear": 1994,
    "campusSizeAcres": 64,
    "studentCount": 4750,
    "accreditation": "NAAC A++ | NIRF #137",
    "nirfRank": 137,
    "featured": false,
    "courses": [
      {
        "id": "c1-67",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 260000,
        "stream": "Engineering"
      },
      {
        "id": "c2-67",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 247000,
        "stream": "Engineering"
      },
      {
        "id": "c3-67",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 234000,
        "stream": "Engineering"
      },
      {
        "id": "c4-67",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 221000,
        "stream": "Engineering"
      },
      {
        "id": "c5-67",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 260000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 10.7,
      "highestLpa": 45.5,
      "medianLpa": 9.4,
      "placementPercentage": 96,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 10.7,
          "highestPackageLpa": 45.5,
          "medianPackageLpa": 9.4,
          "placementPercentage": 96,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 9.8,
          "highestPackageLpa": 41,
          "medianPackageLpa": 8.8,
          "placementPercentage": 94,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 38.7,
          "medianPackageLpa": 8.3,
          "placementPercentage": 91,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Noida International Airport",
        "distanceKm": 34
      },
      "nearestRailwayStation": {
        "name": "Noida Central Junction",
        "distanceKm": 4
      },
      "nearestMetroPoint": {
        "name": "Noida Metro Station",
        "distanceKm": 6
      },
      "connectivityDetails": "Located in Noida, BMS Institute of Technology BMSIT is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Noida Central Junction and Noida International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to BMS Institute of Technology BMSIT are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 54800,
          "closingRank": 82200
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 51375,
          "closingRank": 78775
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 58225,
          "closingRank": 85625
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 61650,
          "closingRank": 89050
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 65075,
          "closingRank": 92475
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 102750,
          "closingRank": 150700
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 95900,
          "closingRank": 143850
        }
      ]
    }
  },
  {
    "id": "reva-university-bengaluru",
    "name": "REVA University Bengaluru",
    "slug": "reva-university-bengaluru",
    "location": "Gurugram, Haryana",
    "city": "Gurugram",
    "state": "Haryana",
    "description": "Premier deemed engineering institution in Gurugram, Haryana renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "REVA University Bengaluru was established in 1995. Located in Gurugram, Haryana, the institute spans 65 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #140.",
    "logoUrl": "https://images.unsplash.com/photo-1562774061?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907206?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://reva-university-bengaluru.ac.in",
    "feesAnnual": 120000,
    "rating": 4.5,
    "reviewsCount": 160,
    "averagePlacementLpa": 11.5,
    "highestPlacementLpa": 47,
    "type": "Deemed",
    "affiliation": "Haryana Technological University",
    "establishedYear": 1995,
    "campusSizeAcres": 65,
    "studentCount": 5000,
    "accreditation": "NAAC A++ | NIRF #140",
    "nirfRank": 140,
    "featured": false,
    "courses": [
      {
        "id": "c1-68",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 120000,
        "stream": "Engineering"
      },
      {
        "id": "c2-68",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 114000,
        "stream": "Engineering"
      },
      {
        "id": "c3-68",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 108000,
        "stream": "Engineering"
      },
      {
        "id": "c4-68",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 102000,
        "stream": "Engineering"
      },
      {
        "id": "c5-68",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 120000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 11.5,
      "highestLpa": 47,
      "medianLpa": 10.1,
      "placementPercentage": 97,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 11.5,
          "highestPackageLpa": 47,
          "medianPackageLpa": 10.1,
          "placementPercentage": 97,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 10.6,
          "highestPackageLpa": 42.3,
          "medianPackageLpa": 9.4,
          "placementPercentage": 95,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 9.8,
          "highestPackageLpa": 39.9,
          "medianPackageLpa": 9,
          "placementPercentage": 92,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Gurugram International Airport",
        "distanceKm": 10
      },
      "nearestRailwayStation": {
        "name": "Gurugram Central Junction",
        "distanceKm": 5
      },
      "nearestMetroPoint": {
        "name": "Gurugram Metro Station",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Gurugram, REVA University Bengaluru is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Gurugram Central Junction and Gurugram International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to REVA University Bengaluru are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 56000,
          "closingRank": 84000
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 52500,
          "closingRank": 80500
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 59500,
          "closingRank": 87500
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 63000,
          "closingRank": 91000
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 66500,
          "closingRank": 94500
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 105000,
          "closingRank": 154000
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 98000,
          "closingRank": 147000
        }
      ]
    }
  },
  {
    "id": "chaitanya-bharathi-institute-of-technology-cbit",
    "name": "Chaitanya Bharathi Institute of Technology (CBIT)",
    "slug": "chaitanya-bharathi-institute-of-technology-cbit",
    "location": "Ahmedabad, Gujarat",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "description": "Premier private engineering institution in Ahmedabad, Gujarat renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Chaitanya Bharathi Institute of Technology (CBIT) was established in 1996. Located in Ahmedabad, Gujarat, the institute spans 66 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #143.",
    "logoUrl": "https://images.unsplash.com/photo-1562774062?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907207?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://chaitanya-bharathi-institute-of-technology-cbit.ac.in",
    "feesAnnual": 300000,
    "rating": 4.6,
    "reviewsCount": 164,
    "averagePlacementLpa": 12.3,
    "highestPlacementLpa": 48.5,
    "type": "Private",
    "affiliation": "Gujarat Technological University",
    "establishedYear": 1996,
    "campusSizeAcres": 66,
    "studentCount": 5250,
    "accreditation": "NAAC A++ | NIRF #143",
    "nirfRank": 143,
    "featured": false,
    "courses": [
      {
        "id": "c1-69",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 300000,
        "stream": "Engineering"
      },
      {
        "id": "c2-69",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 285000,
        "stream": "Engineering"
      },
      {
        "id": "c3-69",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 270000,
        "stream": "Engineering"
      },
      {
        "id": "c4-69",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 255000,
        "stream": "Engineering"
      },
      {
        "id": "c5-69",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 300000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 12.3,
      "highestLpa": 48.5,
      "medianLpa": 10.8,
      "placementPercentage": 98,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 12.3,
          "highestPackageLpa": 48.5,
          "medianPackageLpa": 10.8,
          "placementPercentage": 98,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 11.3,
          "highestPackageLpa": 43.6,
          "medianPackageLpa": 10.1,
          "placementPercentage": 96,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 10.5,
          "highestPackageLpa": 41.2,
          "medianPackageLpa": 9.6,
          "placementPercentage": 93,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Ahmedabad International Airport",
        "distanceKm": 11
      },
      "nearestRailwayStation": {
        "name": "Ahmedabad Central Junction",
        "distanceKm": 6
      },
      "nearestMetroPoint": {
        "name": "Ahmedabad Metro Station",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Ahmedabad, Chaitanya Bharathi Institute of Technology (CBIT) is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Ahmedabad Central Junction and Ahmedabad International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Chaitanya Bharathi Institute of Technology (CBIT) are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 57200,
          "closingRank": 85800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 53625,
          "closingRank": 82225
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 60775,
          "closingRank": 89375
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 64350,
          "closingRank": 92950
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 67925,
          "closingRank": 96525
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 107250,
          "closingRank": 157300
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 100100,
          "closingRank": 150150
        }
      ]
    }
  },
  {
    "id": "vasavi-college-of-engineering-hyderabad",
    "name": "Vasavi College of Engineering Hyderabad",
    "slug": "vasavi-college-of-engineering-hyderabad",
    "location": "Kolkata, West Bengal",
    "city": "Kolkata",
    "state": "West Bengal",
    "description": "Premier autonomous engineering institution in Kolkata, West Bengal renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Vasavi College of Engineering Hyderabad was established in 1997. Located in Kolkata, West Bengal, the institute spans 67 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #146.",
    "logoUrl": "https://images.unsplash.com/photo-1562774053?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907198?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://vasavi-college-of-engineering-hyderabad.ac.in",
    "feesAnnual": 150000,
    "rating": 4.7,
    "reviewsCount": 168,
    "averagePlacementLpa": 13.1,
    "highestPlacementLpa": 50,
    "type": "Autonomous",
    "affiliation": "West Bengal Technological University",
    "establishedYear": 1997,
    "campusSizeAcres": 67,
    "studentCount": 5500,
    "accreditation": "NAAC A++ | NIRF #146",
    "nirfRank": 146,
    "featured": false,
    "courses": [
      {
        "id": "c1-70",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 150000,
        "stream": "Engineering"
      },
      {
        "id": "c2-70",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 142500,
        "stream": "Engineering"
      },
      {
        "id": "c3-70",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      },
      {
        "id": "c4-70",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 127500,
        "stream": "Engineering"
      },
      {
        "id": "c5-70",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 150000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 13.1,
      "highestLpa": 50,
      "medianLpa": 11.5,
      "placementPercentage": 85,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 13.1,
          "highestPackageLpa": 50,
          "medianPackageLpa": 11.5,
          "placementPercentage": 85,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 12.1,
          "highestPackageLpa": 45,
          "medianPackageLpa": 10.7,
          "placementPercentage": 83,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 11.1,
          "highestPackageLpa": 42.5,
          "medianPackageLpa": 10.2,
          "placementPercentage": 80,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Kolkata International Airport",
        "distanceKm": 12
      },
      "nearestRailwayStation": {
        "name": "Kolkata Central Junction",
        "distanceKm": 7
      },
      "nearestMetroPoint": {
        "name": "Kolkata Metro Station",
        "distanceKm": 4
      },
      "connectivityDetails": "Located in Kolkata, Vasavi College of Engineering Hyderabad is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Kolkata Central Junction and Kolkata International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Vasavi College of Engineering Hyderabad are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 58400,
          "closingRank": 87600
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 54750,
          "closingRank": 83950
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 62050,
          "closingRank": 91250
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 65700,
          "closingRank": 94900
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 69350,
          "closingRank": 98550
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 109500,
          "closingRank": 160600
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 102200,
          "closingRank": 153300
        }
      ]
    }
  },
  {
    "id": "vnr-vignana-jyothi-institute-vnrvjiet",
    "name": "VNR Vignana Jyothi Institute VNRVJIET",
    "slug": "vnr-vignana-jyothi-institute-vnrvjiet",
    "location": "Coimbatore, Tamil Nadu",
    "city": "Coimbatore",
    "state": "Tamil Nadu",
    "description": "Premier private engineering institution in Coimbatore, Tamil Nadu renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "VNR Vignana Jyothi Institute VNRVJIET was established in 1998. Located in Coimbatore, Tamil Nadu, the institute spans 68 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #149.",
    "logoUrl": "https://images.unsplash.com/photo-1562774054?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907199?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://vnr-vignana-jyothi-institute-vnrvjiet.ac.in",
    "feesAnnual": 340000,
    "rating": 4.1,
    "reviewsCount": 172,
    "averagePlacementLpa": 13.9,
    "highestPlacementLpa": 51.5,
    "type": "Private",
    "affiliation": "Tamil Nadu Technological University",
    "establishedYear": 1998,
    "campusSizeAcres": 68,
    "studentCount": 5750,
    "accreditation": "NAAC A++ | NIRF #149",
    "nirfRank": 149,
    "featured": false,
    "courses": [
      {
        "id": "c1-71",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 340000,
        "stream": "Engineering"
      },
      {
        "id": "c2-71",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 323000,
        "stream": "Engineering"
      },
      {
        "id": "c3-71",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 306000,
        "stream": "Engineering"
      },
      {
        "id": "c4-71",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 289000,
        "stream": "Engineering"
      },
      {
        "id": "c5-71",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 340000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 13.9,
      "highestLpa": 51.5,
      "medianLpa": 12.2,
      "placementPercentage": 86,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 13.9,
          "highestPackageLpa": 51.5,
          "medianPackageLpa": 12.2,
          "placementPercentage": 86,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 12.8,
          "highestPackageLpa": 46.4,
          "medianPackageLpa": 11.4,
          "placementPercentage": 84,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 11.8,
          "highestPackageLpa": 43.8,
          "medianPackageLpa": 10.8,
          "placementPercentage": 81,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Coimbatore International Airport",
        "distanceKm": 13
      },
      "nearestRailwayStation": {
        "name": "Coimbatore Central Junction",
        "distanceKm": 8
      },
      "nearestMetroPoint": {
        "name": "Coimbatore Metro Station",
        "distanceKm": 5
      },
      "connectivityDetails": "Located in Coimbatore, VNR Vignana Jyothi Institute VNRVJIET is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Coimbatore Central Junction and Coimbatore International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to VNR Vignana Jyothi Institute VNRVJIET are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 59600,
          "closingRank": 89400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 55875,
          "closingRank": 85675
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 63325,
          "closingRank": 93125
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 67050,
          "closingRank": 96850
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 70775,
          "closingRank": 100575
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 111750,
          "closingRank": 163900
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 104300,
          "closingRank": 156450
        }
      ]
    }
  },
  {
    "id": "gokaraju-rangaraju-institute-griet",
    "name": "Gokaraju Rangaraju Institute GRIET",
    "slug": "gokaraju-rangaraju-institute-griet",
    "location": "Jaipur, Rajasthan",
    "city": "Jaipur",
    "state": "Rajasthan",
    "description": "Premier deemed engineering institution in Jaipur, Rajasthan renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Gokaraju Rangaraju Institute GRIET was established in 1999. Located in Jaipur, Rajasthan, the institute spans 69 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #152.",
    "logoUrl": "https://images.unsplash.com/photo-1562774055?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907200?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://gokaraju-rangaraju-institute-griet.ac.in",
    "feesAnnual": 180000,
    "rating": 4.2,
    "reviewsCount": 176,
    "averagePlacementLpa": 14.7,
    "highestPlacementLpa": 53,
    "type": "Deemed",
    "affiliation": "Rajasthan Technological University",
    "establishedYear": 1999,
    "campusSizeAcres": 69,
    "studentCount": 6000,
    "accreditation": "NAAC A++ | NIRF #152",
    "nirfRank": 152,
    "featured": false,
    "courses": [
      {
        "id": "c1-72",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      },
      {
        "id": "c2-72",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 171000,
        "stream": "Engineering"
      },
      {
        "id": "c3-72",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 162000,
        "stream": "Engineering"
      },
      {
        "id": "c4-72",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 153000,
        "stream": "Engineering"
      },
      {
        "id": "c5-72",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 14.7,
      "highestLpa": 53,
      "medianLpa": 12.9,
      "placementPercentage": 87,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 14.7,
          "highestPackageLpa": 53,
          "medianPackageLpa": 12.9,
          "placementPercentage": 87,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 13.5,
          "highestPackageLpa": 47.7,
          "medianPackageLpa": 12.1,
          "placementPercentage": 85,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 12.5,
          "highestPackageLpa": 45,
          "medianPackageLpa": 11.5,
          "placementPercentage": 82,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Jaipur International Airport",
        "distanceKm": 14
      },
      "nearestRailwayStation": {
        "name": "Jaipur Central Junction",
        "distanceKm": 9
      },
      "nearestMetroPoint": {
        "name": "Jaipur Metro Station",
        "distanceKm": 6
      },
      "connectivityDetails": "Located in Jaipur, Gokaraju Rangaraju Institute GRIET is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Jaipur Central Junction and Jaipur International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Gokaraju Rangaraju Institute GRIET are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 60800,
          "closingRank": 91200
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 57000,
          "closingRank": 87400
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 64600,
          "closingRank": 95000
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 68400,
          "closingRank": 98800
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 72200,
          "closingRank": 102600
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 114000,
          "closingRank": 167200
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 106400,
          "closingRank": 159600
        }
      ]
    }
  },
  {
    "id": "sreenidhi-institute-of-science-snist",
    "name": "Sreenidhi Institute of Science SNIST",
    "slug": "sreenidhi-institute-of-science-snist",
    "location": "Bengaluru, Karnataka",
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Premier private engineering institution in Bengaluru, Karnataka renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Sreenidhi Institute of Science SNIST was established in 2000. Located in Bengaluru, Karnataka, the institute spans 70 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #155.",
    "logoUrl": "https://images.unsplash.com/photo-1562774056?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907201?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://sreenidhi-institute-of-science-snist.ac.in",
    "feesAnnual": 180000,
    "rating": 4.3,
    "reviewsCount": 180,
    "averagePlacementLpa": 7.5,
    "highestPlacementLpa": 32,
    "type": "Private",
    "affiliation": "Karnataka Technological University",
    "establishedYear": 2000,
    "campusSizeAcres": 70,
    "studentCount": 6250,
    "accreditation": "NAAC A++ | NIRF #155",
    "nirfRank": 155,
    "featured": false,
    "courses": [
      {
        "id": "c1-73",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      },
      {
        "id": "c2-73",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 171000,
        "stream": "Engineering"
      },
      {
        "id": "c3-73",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 162000,
        "stream": "Engineering"
      },
      {
        "id": "c4-73",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 153000,
        "stream": "Engineering"
      },
      {
        "id": "c5-73",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 7.5,
      "highestLpa": 32,
      "medianLpa": 6.6,
      "placementPercentage": 88,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 7.5,
          "highestPackageLpa": 32,
          "medianPackageLpa": 6.6,
          "placementPercentage": 88,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 6.9,
          "highestPackageLpa": 28.8,
          "medianPackageLpa": 6.1,
          "placementPercentage": 86,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 6.4,
          "highestPackageLpa": 27.2,
          "medianPackageLpa": 5.9,
          "placementPercentage": 83,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Bengaluru International Airport",
        "distanceKm": 15
      },
      "nearestRailwayStation": {
        "name": "Bengaluru Central Junction",
        "distanceKm": 10
      },
      "nearestMetroPoint": {
        "name": "Bengaluru Metro Station",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Bengaluru, Sreenidhi Institute of Science SNIST is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Bengaluru Central Junction and Bengaluru International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Sreenidhi Institute of Science SNIST are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 62000,
          "closingRank": 93000
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 58125,
          "closingRank": 89125
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 65875,
          "closingRank": 96875
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 69750,
          "closingRank": 100750
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 73625,
          "closingRank": 104625
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 116250,
          "closingRank": 170500
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 108500,
          "closingRank": 162750
        }
      ]
    }
  },
  {
    "id": "muffakham-jah-college-of-engineering",
    "name": "Muffakham Jah College of Engineering",
    "slug": "muffakham-jah-college-of-engineering",
    "location": "Hyderabad, Telangana",
    "city": "Hyderabad",
    "state": "Telangana",
    "description": "Premier deemed engineering institution in Hyderabad, Telangana renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Muffakham Jah College of Engineering was established in 2001. Located in Hyderabad, Telangana, the institute spans 71 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #158.",
    "logoUrl": "https://images.unsplash.com/photo-1562774057?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907202?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://muffakham-jah-college-of-engineering.ac.in",
    "feesAnnual": 135000,
    "rating": 4.4,
    "reviewsCount": 184,
    "averagePlacementLpa": 8.3,
    "highestPlacementLpa": 33.5,
    "type": "Deemed",
    "affiliation": "Telangana Technological University",
    "establishedYear": 2001,
    "campusSizeAcres": 71,
    "studentCount": 6500,
    "accreditation": "NAAC A++ | NIRF #158",
    "nirfRank": 158,
    "featured": false,
    "courses": [
      {
        "id": "c1-74",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      },
      {
        "id": "c2-74",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 128250,
        "stream": "Engineering"
      },
      {
        "id": "c3-74",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 121500,
        "stream": "Engineering"
      },
      {
        "id": "c4-74",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 114750,
        "stream": "Engineering"
      },
      {
        "id": "c5-74",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 8.3,
      "highestLpa": 33.5,
      "medianLpa": 7.3,
      "placementPercentage": 89,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 8.3,
          "highestPackageLpa": 33.5,
          "medianPackageLpa": 7.3,
          "placementPercentage": 89,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 7.6,
          "highestPackageLpa": 30.2,
          "medianPackageLpa": 6.8,
          "placementPercentage": 87,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 7.1,
          "highestPackageLpa": 28.5,
          "medianPackageLpa": 6.5,
          "placementPercentage": 84,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Hyderabad International Airport",
        "distanceKm": 16
      },
      "nearestRailwayStation": {
        "name": "Hyderabad Central Junction",
        "distanceKm": 11
      },
      "nearestMetroPoint": {
        "name": "Hyderabad Metro Station",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Hyderabad, Muffakham Jah College of Engineering is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Hyderabad Central Junction and Hyderabad International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Muffakham Jah College of Engineering are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 63200,
          "closingRank": 94800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 59250,
          "closingRank": 90850
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 67150,
          "closingRank": 98750
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 71100,
          "closingRank": 102700
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 75050,
          "closingRank": 106650
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 118500,
          "closingRank": 173800
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 110600,
          "closingRank": 165900
        }
      ]
    }
  },
  {
    "id": "vardhaman-college-of-engineering",
    "name": "Vardhaman College of Engineering",
    "slug": "vardhaman-college-of-engineering",
    "location": "Chennai, Tamil Nadu",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "description": "Premier private engineering institution in Chennai, Tamil Nadu renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Vardhaman College of Engineering was established in 2002. Located in Chennai, Tamil Nadu, the institute spans 72 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #161.",
    "logoUrl": "https://images.unsplash.com/photo-1562774058?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907203?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://vardhaman-college-of-engineering.ac.in",
    "feesAnnual": 220000,
    "rating": 4.5,
    "reviewsCount": 188,
    "averagePlacementLpa": 9.1,
    "highestPlacementLpa": 35,
    "type": "Private",
    "affiliation": "Tamil Nadu Technological University",
    "establishedYear": 2002,
    "campusSizeAcres": 72,
    "studentCount": 6750,
    "accreditation": "NAAC A++ | NIRF #161",
    "nirfRank": 161,
    "featured": false,
    "courses": [
      {
        "id": "c1-75",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      },
      {
        "id": "c2-75",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 209000,
        "stream": "Engineering"
      },
      {
        "id": "c3-75",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 198000,
        "stream": "Engineering"
      },
      {
        "id": "c4-75",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 187000,
        "stream": "Engineering"
      },
      {
        "id": "c5-75",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 9.1,
      "highestLpa": 35,
      "medianLpa": 8,
      "placementPercentage": 90,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 35,
          "medianPackageLpa": 8,
          "placementPercentage": 90,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 8.4,
          "highestPackageLpa": 31.5,
          "medianPackageLpa": 7.5,
          "placementPercentage": 88,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 7.7,
          "highestPackageLpa": 29.8,
          "medianPackageLpa": 7.1,
          "placementPercentage": 85,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Chennai International Airport",
        "distanceKm": 17
      },
      "nearestRailwayStation": {
        "name": "Chennai Central Junction",
        "distanceKm": 12
      },
      "nearestMetroPoint": {
        "name": "Chennai Metro Station",
        "distanceKm": 4
      },
      "connectivityDetails": "Located in Chennai, Vardhaman College of Engineering is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Chennai Central Junction and Chennai International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Vardhaman College of Engineering are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 64400,
          "closingRank": 96600
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 60375,
          "closingRank": 92575
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 68425,
          "closingRank": 100625
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 72450,
          "closingRank": 104650
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 76475,
          "closingRank": 108675
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 120750,
          "closingRank": 177100
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 112700,
          "closingRank": 169050
        }
      ]
    }
  },
  {
    "id": "kakatiya-institute-of-technology-kits",
    "name": "Kakatiya Institute of Technology KITS",
    "slug": "kakatiya-institute-of-technology-kits",
    "location": "Pune, Maharashtra",
    "city": "Pune",
    "state": "Maharashtra",
    "description": "Premier autonomous engineering institution in Pune, Maharashtra renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Kakatiya Institute of Technology KITS was established in 2003. Located in Pune, Maharashtra, the institute spans 73 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #164.",
    "logoUrl": "https://images.unsplash.com/photo-1562774059?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907204?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://kakatiya-institute-of-technology-kits.ac.in",
    "feesAnnual": 165000,
    "rating": 4.6,
    "reviewsCount": 192,
    "averagePlacementLpa": 9.9,
    "highestPlacementLpa": 36.5,
    "type": "Autonomous",
    "affiliation": "Maharashtra Technological University",
    "establishedYear": 2003,
    "campusSizeAcres": 73,
    "studentCount": 7000,
    "accreditation": "NAAC A++ | NIRF #164",
    "nirfRank": 164,
    "featured": false,
    "courses": [
      {
        "id": "c1-76",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 165000,
        "stream": "Engineering"
      },
      {
        "id": "c2-76",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 156750,
        "stream": "Engineering"
      },
      {
        "id": "c3-76",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 148500,
        "stream": "Engineering"
      },
      {
        "id": "c4-76",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 140250,
        "stream": "Engineering"
      },
      {
        "id": "c5-76",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 165000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 9.9,
      "highestLpa": 36.5,
      "medianLpa": 8.7,
      "placementPercentage": 91,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 9.9,
          "highestPackageLpa": 36.5,
          "medianPackageLpa": 8.7,
          "placementPercentage": 91,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 32.9,
          "medianPackageLpa": 8.1,
          "placementPercentage": 89,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 8.4,
          "highestPackageLpa": 31,
          "medianPackageLpa": 7.7,
          "placementPercentage": 86,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Pune International Airport",
        "distanceKm": 18
      },
      "nearestRailwayStation": {
        "name": "Pune Central Junction",
        "distanceKm": 13
      },
      "nearestMetroPoint": {
        "name": "Pune Metro Station",
        "distanceKm": 5
      },
      "connectivityDetails": "Located in Pune, Kakatiya Institute of Technology KITS is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Pune Central Junction and Pune International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Kakatiya Institute of Technology KITS are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 65600,
          "closingRank": 98400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 61500,
          "closingRank": 94300
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 69700,
          "closingRank": 102500
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 73800,
          "closingRank": 106600
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 77900,
          "closingRank": 110700
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 123000,
          "closingRank": 180400
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 114800,
          "closingRank": 172200
        }
      ]
    }
  },
  {
    "id": "jntu-college-of-engineering-hyderabad",
    "name": "JNTU College of Engineering Hyderabad",
    "slug": "jntu-college-of-engineering-hyderabad",
    "location": "Noida, Uttar Pradesh",
    "city": "Noida",
    "state": "Uttar Pradesh",
    "description": "Premier private engineering institution in Noida, Uttar Pradesh renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "JNTU College of Engineering Hyderabad was established in 2004. Located in Noida, Uttar Pradesh, the institute spans 74 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #167.",
    "logoUrl": "https://images.unsplash.com/photo-1562774060?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907205?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://jntu-college-of-engineering-hyderabad.ac.in",
    "feesAnnual": 260000,
    "rating": 4.7,
    "reviewsCount": 196,
    "averagePlacementLpa": 10.7,
    "highestPlacementLpa": 38,
    "type": "Private",
    "affiliation": "Uttar Pradesh Technological University",
    "establishedYear": 2004,
    "campusSizeAcres": 74,
    "studentCount": 7250,
    "accreditation": "NAAC A++ | NIRF #167",
    "nirfRank": 167,
    "featured": false,
    "courses": [
      {
        "id": "c1-77",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 260000,
        "stream": "Engineering"
      },
      {
        "id": "c2-77",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 247000,
        "stream": "Engineering"
      },
      {
        "id": "c3-77",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 234000,
        "stream": "Engineering"
      },
      {
        "id": "c4-77",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 221000,
        "stream": "Engineering"
      },
      {
        "id": "c5-77",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 260000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 10.7,
      "highestLpa": 38,
      "medianLpa": 9.4,
      "placementPercentage": 92,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 10.7,
          "highestPackageLpa": 38,
          "medianPackageLpa": 9.4,
          "placementPercentage": 92,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 9.8,
          "highestPackageLpa": 34.2,
          "medianPackageLpa": 8.8,
          "placementPercentage": 90,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 32.3,
          "medianPackageLpa": 8.3,
          "placementPercentage": 87,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Noida International Airport",
        "distanceKm": 19
      },
      "nearestRailwayStation": {
        "name": "Noida Central Junction",
        "distanceKm": 14
      },
      "nearestMetroPoint": {
        "name": "Noida Metro Station",
        "distanceKm": 6
      },
      "connectivityDetails": "Located in Noida, JNTU College of Engineering Hyderabad is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Noida Central Junction and Noida International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to JNTU College of Engineering Hyderabad are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 66800,
          "closingRank": 100200
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 62625,
          "closingRank": 96025
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 70975,
          "closingRank": 104375
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 75150,
          "closingRank": 108550
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 79325,
          "closingRank": 112725
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 125250,
          "closingRank": 183700
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 116900,
          "closingRank": 175350
        }
      ]
    }
  },
  {
    "id": "jntu-college-of-engineering-kakinada",
    "name": "JNTU College of Engineering Kakinada",
    "slug": "jntu-college-of-engineering-kakinada",
    "location": "Gurugram, Haryana",
    "city": "Gurugram",
    "state": "Haryana",
    "description": "Premier deemed engineering institution in Gurugram, Haryana renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "JNTU College of Engineering Kakinada was established in 2005. Located in Gurugram, Haryana, the institute spans 75 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #170.",
    "logoUrl": "https://images.unsplash.com/photo-1562774061?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907206?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://jntu-college-of-engineering-kakinada.ac.in",
    "feesAnnual": 120000,
    "rating": 4.1,
    "reviewsCount": 200,
    "averagePlacementLpa": 11.5,
    "highestPlacementLpa": 39.5,
    "type": "Deemed",
    "affiliation": "Haryana Technological University",
    "establishedYear": 2005,
    "campusSizeAcres": 75,
    "studentCount": 7500,
    "accreditation": "NAAC A++ | NIRF #170",
    "nirfRank": 170,
    "featured": false,
    "courses": [
      {
        "id": "c1-78",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 120000,
        "stream": "Engineering"
      },
      {
        "id": "c2-78",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 114000,
        "stream": "Engineering"
      },
      {
        "id": "c3-78",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 108000,
        "stream": "Engineering"
      },
      {
        "id": "c4-78",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 102000,
        "stream": "Engineering"
      },
      {
        "id": "c5-78",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 120000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 11.5,
      "highestLpa": 39.5,
      "medianLpa": 10.1,
      "placementPercentage": 93,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 11.5,
          "highestPackageLpa": 39.5,
          "medianPackageLpa": 10.1,
          "placementPercentage": 93,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 10.6,
          "highestPackageLpa": 35.6,
          "medianPackageLpa": 9.4,
          "placementPercentage": 91,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 9.8,
          "highestPackageLpa": 33.6,
          "medianPackageLpa": 9,
          "placementPercentage": 88,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Gurugram International Airport",
        "distanceKm": 20
      },
      "nearestRailwayStation": {
        "name": "Gurugram Central Junction",
        "distanceKm": 15
      },
      "nearestMetroPoint": {
        "name": "Gurugram Metro Station",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Gurugram, JNTU College of Engineering Kakinada is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Gurugram Central Junction and Gurugram International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to JNTU College of Engineering Kakinada are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 68000,
          "closingRank": 102000
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 63750,
          "closingRank": 97750
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 72250,
          "closingRank": 106250
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 76500,
          "closingRank": 110500
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 80750,
          "closingRank": 114750
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 127500,
          "closingRank": 187000
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 119000,
          "closingRank": 178500
        }
      ]
    }
  },
  {
    "id": "au-college-of-engineering-visakhapatnam",
    "name": "AU College of Engineering Visakhapatnam",
    "slug": "au-college-of-engineering-visakhapatnam",
    "location": "Ahmedabad, Gujarat",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "description": "Premier private engineering institution in Ahmedabad, Gujarat renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "AU College of Engineering Visakhapatnam was established in 2006. Located in Ahmedabad, Gujarat, the institute spans 76 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #173.",
    "logoUrl": "https://images.unsplash.com/photo-1562774062?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907207?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://au-college-of-engineering-visakhapatnam.ac.in",
    "feesAnnual": 300000,
    "rating": 4.2,
    "reviewsCount": 204,
    "averagePlacementLpa": 12.3,
    "highestPlacementLpa": 41,
    "type": "Private",
    "affiliation": "Gujarat Technological University",
    "establishedYear": 2006,
    "campusSizeAcres": 76,
    "studentCount": 7750,
    "accreditation": "NAAC A++ | NIRF #173",
    "nirfRank": 173,
    "featured": false,
    "courses": [
      {
        "id": "c1-79",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 300000,
        "stream": "Engineering"
      },
      {
        "id": "c2-79",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 285000,
        "stream": "Engineering"
      },
      {
        "id": "c3-79",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 270000,
        "stream": "Engineering"
      },
      {
        "id": "c4-79",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 255000,
        "stream": "Engineering"
      },
      {
        "id": "c5-79",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 300000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 12.3,
      "highestLpa": 41,
      "medianLpa": 10.8,
      "placementPercentage": 94,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 12.3,
          "highestPackageLpa": 41,
          "medianPackageLpa": 10.8,
          "placementPercentage": 94,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 11.3,
          "highestPackageLpa": 36.9,
          "medianPackageLpa": 10.1,
          "placementPercentage": 92,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 10.5,
          "highestPackageLpa": 34.9,
          "medianPackageLpa": 9.6,
          "placementPercentage": 89,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Ahmedabad International Airport",
        "distanceKm": 21
      },
      "nearestRailwayStation": {
        "name": "Ahmedabad Central Junction",
        "distanceKm": 4
      },
      "nearestMetroPoint": {
        "name": "Ahmedabad Metro Station",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Ahmedabad, AU College of Engineering Visakhapatnam is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Ahmedabad Central Junction and Ahmedabad International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to AU College of Engineering Visakhapatnam are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 69200,
          "closingRank": 103800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 64875,
          "closingRank": 99475
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 73525,
          "closingRank": 108125
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 77850,
          "closingRank": 112450
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 82175,
          "closingRank": 116775
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 129750,
          "closingRank": 190300
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 121100,
          "closingRank": 181650
        }
      ]
    }
  },
  {
    "id": "vr-siddhartha-engineering-college-vijayawada",
    "name": "VR Siddhartha Engineering College Vijayawada",
    "slug": "vr-siddhartha-engineering-college-vijayawada",
    "location": "Kolkata, West Bengal",
    "city": "Kolkata",
    "state": "West Bengal",
    "description": "Premier deemed engineering institution in Kolkata, West Bengal renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "VR Siddhartha Engineering College Vijayawada was established in 2007. Located in Kolkata, West Bengal, the institute spans 77 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #176.",
    "logoUrl": "https://images.unsplash.com/photo-1562774053?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907198?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://vr-siddhartha-engineering-college-vijayawada.ac.in",
    "feesAnnual": 150000,
    "rating": 4.3,
    "reviewsCount": 208,
    "averagePlacementLpa": 13.1,
    "highestPlacementLpa": 42.5,
    "type": "Deemed",
    "affiliation": "West Bengal Technological University",
    "establishedYear": 2007,
    "campusSizeAcres": 77,
    "studentCount": 8000,
    "accreditation": "NAAC A++ | NIRF #176",
    "nirfRank": 176,
    "featured": false,
    "courses": [
      {
        "id": "c1-80",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 150000,
        "stream": "Engineering"
      },
      {
        "id": "c2-80",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 142500,
        "stream": "Engineering"
      },
      {
        "id": "c3-80",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      },
      {
        "id": "c4-80",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 127500,
        "stream": "Engineering"
      },
      {
        "id": "c5-80",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 150000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 13.1,
      "highestLpa": 42.5,
      "medianLpa": 11.5,
      "placementPercentage": 95,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 13.1,
          "highestPackageLpa": 42.5,
          "medianPackageLpa": 11.5,
          "placementPercentage": 95,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 12.1,
          "highestPackageLpa": 38.3,
          "medianPackageLpa": 10.7,
          "placementPercentage": 93,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 11.1,
          "highestPackageLpa": 36.1,
          "medianPackageLpa": 10.2,
          "placementPercentage": 90,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Kolkata International Airport",
        "distanceKm": 22
      },
      "nearestRailwayStation": {
        "name": "Kolkata Central Junction",
        "distanceKm": 5
      },
      "nearestMetroPoint": {
        "name": "Kolkata Metro Station",
        "distanceKm": 4
      },
      "connectivityDetails": "Located in Kolkata, VR Siddhartha Engineering College Vijayawada is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Kolkata Central Junction and Kolkata International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to VR Siddhartha Engineering College Vijayawada are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 70400,
          "closingRank": 105600
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 66000,
          "closingRank": 101200
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 74800,
          "closingRank": 110000
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 79200,
          "closingRank": 114400
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 83600,
          "closingRank": 118800
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 132000,
          "closingRank": 193600
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 123200,
          "closingRank": 184800
        }
      ]
    }
  },
  {
    "id": "velagapudi-ramakrishna-vrsec-guntur",
    "name": "Velagapudi Ramakrishna VRSEC Guntur",
    "slug": "velagapudi-ramakrishna-vrsec-guntur",
    "location": "Coimbatore, Tamil Nadu",
    "city": "Coimbatore",
    "state": "Tamil Nadu",
    "description": "Premier private engineering institution in Coimbatore, Tamil Nadu renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Velagapudi Ramakrishna VRSEC Guntur was established in 2008. Located in Coimbatore, Tamil Nadu, the institute spans 78 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #179.",
    "logoUrl": "https://images.unsplash.com/photo-1562774054?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907199?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://velagapudi-ramakrishna-vrsec-guntur.ac.in",
    "feesAnnual": 340000,
    "rating": 4.4,
    "reviewsCount": 212,
    "averagePlacementLpa": 13.9,
    "highestPlacementLpa": 44,
    "type": "Private",
    "affiliation": "Tamil Nadu Technological University",
    "establishedYear": 2008,
    "campusSizeAcres": 78,
    "studentCount": 8250,
    "accreditation": "NAAC A++ | NIRF #179",
    "nirfRank": 179,
    "featured": false,
    "courses": [
      {
        "id": "c1-81",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 340000,
        "stream": "Engineering"
      },
      {
        "id": "c2-81",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 323000,
        "stream": "Engineering"
      },
      {
        "id": "c3-81",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 306000,
        "stream": "Engineering"
      },
      {
        "id": "c4-81",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 289000,
        "stream": "Engineering"
      },
      {
        "id": "c5-81",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 340000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 13.9,
      "highestLpa": 44,
      "medianLpa": 12.2,
      "placementPercentage": 96,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 13.9,
          "highestPackageLpa": 44,
          "medianPackageLpa": 12.2,
          "placementPercentage": 96,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 12.8,
          "highestPackageLpa": 39.6,
          "medianPackageLpa": 11.4,
          "placementPercentage": 94,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 11.8,
          "highestPackageLpa": 37.4,
          "medianPackageLpa": 10.8,
          "placementPercentage": 91,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Coimbatore International Airport",
        "distanceKm": 23
      },
      "nearestRailwayStation": {
        "name": "Coimbatore Central Junction",
        "distanceKm": 6
      },
      "nearestMetroPoint": {
        "name": "Coimbatore Metro Station",
        "distanceKm": 5
      },
      "connectivityDetails": "Located in Coimbatore, Velagapudi Ramakrishna VRSEC Guntur is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Coimbatore Central Junction and Coimbatore International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Velagapudi Ramakrishna VRSEC Guntur are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 71600,
          "closingRank": 107400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 67125,
          "closingRank": 102925
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 76075,
          "closingRank": 111875
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 80550,
          "closingRank": 116350
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 85025,
          "closingRank": 120825
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 134250,
          "closingRank": 196900
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 125300,
          "closingRank": 187950
        }
      ]
    }
  },
  {
    "id": "gayatri-vidya-parishad-gvp-visakhapatnam",
    "name": "Gayatri Vidya Parishad GVP Visakhapatnam",
    "slug": "gayatri-vidya-parishad-gvp-visakhapatnam",
    "location": "Jaipur, Rajasthan",
    "city": "Jaipur",
    "state": "Rajasthan",
    "description": "Premier autonomous engineering institution in Jaipur, Rajasthan renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Gayatri Vidya Parishad GVP Visakhapatnam was established in 2009. Located in Jaipur, Rajasthan, the institute spans 79 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #182.",
    "logoUrl": "https://images.unsplash.com/photo-1562774055?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907200?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://gayatri-vidya-parishad-gvp-visakhapatnam.ac.in",
    "feesAnnual": 180000,
    "rating": 4.5,
    "reviewsCount": 216,
    "averagePlacementLpa": 14.7,
    "highestPlacementLpa": 45.5,
    "type": "Autonomous",
    "affiliation": "Rajasthan Technological University",
    "establishedYear": 2009,
    "campusSizeAcres": 79,
    "studentCount": 8500,
    "accreditation": "NAAC A++ | NIRF #182",
    "nirfRank": 182,
    "featured": false,
    "courses": [
      {
        "id": "c1-82",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      },
      {
        "id": "c2-82",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 171000,
        "stream": "Engineering"
      },
      {
        "id": "c3-82",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 162000,
        "stream": "Engineering"
      },
      {
        "id": "c4-82",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 153000,
        "stream": "Engineering"
      },
      {
        "id": "c5-82",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 14.7,
      "highestLpa": 45.5,
      "medianLpa": 12.9,
      "placementPercentage": 97,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 14.7,
          "highestPackageLpa": 45.5,
          "medianPackageLpa": 12.9,
          "placementPercentage": 97,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 13.5,
          "highestPackageLpa": 41,
          "medianPackageLpa": 12.1,
          "placementPercentage": 95,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 12.5,
          "highestPackageLpa": 38.7,
          "medianPackageLpa": 11.5,
          "placementPercentage": 92,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Jaipur International Airport",
        "distanceKm": 24
      },
      "nearestRailwayStation": {
        "name": "Jaipur Central Junction",
        "distanceKm": 7
      },
      "nearestMetroPoint": {
        "name": "Jaipur Metro Station",
        "distanceKm": 6
      },
      "connectivityDetails": "Located in Jaipur, Gayatri Vidya Parishad GVP Visakhapatnam is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Jaipur Central Junction and Jaipur International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Gayatri Vidya Parishad GVP Visakhapatnam are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 72800,
          "closingRank": 109200
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 68250,
          "closingRank": 104650
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 77350,
          "closingRank": 113750
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 81900,
          "closingRank": 118300
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 86450,
          "closingRank": 122850
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 136500,
          "closingRank": 200200
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 127400,
          "closingRank": 191100
        }
      ]
    }
  },
  {
    "id": "sri-venkateswara-university-svu-tirupati",
    "name": "Sri Venkateswara University SVU Tirupati",
    "slug": "sri-venkateswara-university-svu-tirupati",
    "location": "Bengaluru, Karnataka",
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Premier private engineering institution in Bengaluru, Karnataka renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Sri Venkateswara University SVU Tirupati was established in 2010. Located in Bengaluru, Karnataka, the institute spans 80 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #185.",
    "logoUrl": "https://images.unsplash.com/photo-1562774056?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907201?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://sri-venkateswara-university-svu-tirupati.ac.in",
    "feesAnnual": 180000,
    "rating": 4.6,
    "reviewsCount": 220,
    "averagePlacementLpa": 7.5,
    "highestPlacementLpa": 47,
    "type": "Private",
    "affiliation": "Karnataka Technological University",
    "establishedYear": 2010,
    "campusSizeAcres": 80,
    "studentCount": 8750,
    "accreditation": "NAAC A++ | NIRF #185",
    "nirfRank": 185,
    "featured": false,
    "courses": [
      {
        "id": "c1-83",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      },
      {
        "id": "c2-83",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 171000,
        "stream": "Engineering"
      },
      {
        "id": "c3-83",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 162000,
        "stream": "Engineering"
      },
      {
        "id": "c4-83",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 153000,
        "stream": "Engineering"
      },
      {
        "id": "c5-83",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 7.5,
      "highestLpa": 47,
      "medianLpa": 6.6,
      "placementPercentage": 98,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 7.5,
          "highestPackageLpa": 47,
          "medianPackageLpa": 6.6,
          "placementPercentage": 98,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 6.9,
          "highestPackageLpa": 42.3,
          "medianPackageLpa": 6.1,
          "placementPercentage": 96,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 6.4,
          "highestPackageLpa": 39.9,
          "medianPackageLpa": 5.9,
          "placementPercentage": 93,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Bengaluru International Airport",
        "distanceKm": 25
      },
      "nearestRailwayStation": {
        "name": "Bengaluru Central Junction",
        "distanceKm": 8
      },
      "nearestMetroPoint": {
        "name": "Bengaluru Metro Station",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Bengaluru, Sri Venkateswara University SVU Tirupati is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Bengaluru Central Junction and Bengaluru International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Sri Venkateswara University SVU Tirupati are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 74000,
          "closingRank": 111000
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 69375,
          "closingRank": 106375
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 78625,
          "closingRank": 115625
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 83250,
          "closingRank": 120250
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 87875,
          "closingRank": 124875
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 138750,
          "closingRank": 203500
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 129500,
          "closingRank": 194250
        }
      ]
    }
  },
  {
    "id": "coimbatore-institute-of-technology-cit",
    "name": "Coimbatore Institute of Technology CIT",
    "slug": "coimbatore-institute-of-technology-cit",
    "location": "Hyderabad, Telangana",
    "city": "Hyderabad",
    "state": "Telangana",
    "description": "Premier deemed engineering institution in Hyderabad, Telangana renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Coimbatore Institute of Technology CIT was established in 2011. Located in Hyderabad, Telangana, the institute spans 81 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #188.",
    "logoUrl": "https://images.unsplash.com/photo-1562774057?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907202?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://coimbatore-institute-of-technology-cit.ac.in",
    "feesAnnual": 135000,
    "rating": 4.7,
    "reviewsCount": 224,
    "averagePlacementLpa": 8.3,
    "highestPlacementLpa": 48.5,
    "type": "Deemed",
    "affiliation": "Telangana Technological University",
    "establishedYear": 2011,
    "campusSizeAcres": 81,
    "studentCount": 9000,
    "accreditation": "NAAC A++ | NIRF #188",
    "nirfRank": 188,
    "featured": false,
    "courses": [
      {
        "id": "c1-84",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      },
      {
        "id": "c2-84",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 128250,
        "stream": "Engineering"
      },
      {
        "id": "c3-84",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 121500,
        "stream": "Engineering"
      },
      {
        "id": "c4-84",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 114750,
        "stream": "Engineering"
      },
      {
        "id": "c5-84",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 8.3,
      "highestLpa": 48.5,
      "medianLpa": 7.3,
      "placementPercentage": 85,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 8.3,
          "highestPackageLpa": 48.5,
          "medianPackageLpa": 7.3,
          "placementPercentage": 85,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 7.6,
          "highestPackageLpa": 43.6,
          "medianPackageLpa": 6.8,
          "placementPercentage": 83,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 7.1,
          "highestPackageLpa": 41.2,
          "medianPackageLpa": 6.5,
          "placementPercentage": 80,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Hyderabad International Airport",
        "distanceKm": 26
      },
      "nearestRailwayStation": {
        "name": "Hyderabad Central Junction",
        "distanceKm": 9
      },
      "nearestMetroPoint": {
        "name": "Hyderabad Metro Station",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Hyderabad, Coimbatore Institute of Technology CIT is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Hyderabad Central Junction and Hyderabad International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Coimbatore Institute of Technology CIT are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 75200,
          "closingRank": 112800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 70500,
          "closingRank": 108100
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 79900,
          "closingRank": 117500
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 84600,
          "closingRank": 122200
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 89300,
          "closingRank": 126900
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 141000,
          "closingRank": 206800
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 131600,
          "closingRank": 197400
        }
      ]
    }
  },
  {
    "id": "thiagarajar-college-of-engineering-tce-madurai",
    "name": "Thiagarajar College of Engineering TCE Madurai",
    "slug": "thiagarajar-college-of-engineering-tce-madurai",
    "location": "Chennai, Tamil Nadu",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "description": "Premier private engineering institution in Chennai, Tamil Nadu renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Thiagarajar College of Engineering TCE Madurai was established in 2012. Located in Chennai, Tamil Nadu, the institute spans 82 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #191.",
    "logoUrl": "https://images.unsplash.com/photo-1562774058?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907203?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://thiagarajar-college-of-engineering-tce-madurai.ac.in",
    "feesAnnual": 220000,
    "rating": 4.1,
    "reviewsCount": 228,
    "averagePlacementLpa": 9.1,
    "highestPlacementLpa": 50,
    "type": "Private",
    "affiliation": "Tamil Nadu Technological University",
    "establishedYear": 2012,
    "campusSizeAcres": 82,
    "studentCount": 9250,
    "accreditation": "NAAC A++ | NIRF #191",
    "nirfRank": 191,
    "featured": false,
    "courses": [
      {
        "id": "c1-85",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      },
      {
        "id": "c2-85",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 209000,
        "stream": "Engineering"
      },
      {
        "id": "c3-85",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 198000,
        "stream": "Engineering"
      },
      {
        "id": "c4-85",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 187000,
        "stream": "Engineering"
      },
      {
        "id": "c5-85",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 9.1,
      "highestLpa": 50,
      "medianLpa": 8,
      "placementPercentage": 86,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 50,
          "medianPackageLpa": 8,
          "placementPercentage": 86,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 8.4,
          "highestPackageLpa": 45,
          "medianPackageLpa": 7.5,
          "placementPercentage": 84,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 7.7,
          "highestPackageLpa": 42.5,
          "medianPackageLpa": 7.1,
          "placementPercentage": 81,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Chennai International Airport",
        "distanceKm": 27
      },
      "nearestRailwayStation": {
        "name": "Chennai Central Junction",
        "distanceKm": 10
      },
      "nearestMetroPoint": {
        "name": "Chennai Metro Station",
        "distanceKm": 4
      },
      "connectivityDetails": "Located in Chennai, Thiagarajar College of Engineering TCE Madurai is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Chennai Central Junction and Chennai International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Thiagarajar College of Engineering TCE Madurai are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 76400,
          "closingRank": 114600
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 71625,
          "closingRank": 109825
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 81175,
          "closingRank": 119375
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 85950,
          "closingRank": 124150
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 90725,
          "closingRank": 128925
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 143250,
          "closingRank": 210100
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 133700,
          "closingRank": 200550
        }
      ]
    }
  },
  {
    "id": "kumaraguru-college-of-technology-kct",
    "name": "Kumaraguru College of Technology KCT",
    "slug": "kumaraguru-college-of-technology-kct",
    "location": "Pune, Maharashtra",
    "city": "Pune",
    "state": "Maharashtra",
    "description": "Premier deemed engineering institution in Pune, Maharashtra renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Kumaraguru College of Technology KCT was established in 2013. Located in Pune, Maharashtra, the institute spans 83 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #194.",
    "logoUrl": "https://images.unsplash.com/photo-1562774059?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907204?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://kumaraguru-college-of-technology-kct.ac.in",
    "feesAnnual": 165000,
    "rating": 4.2,
    "reviewsCount": 232,
    "averagePlacementLpa": 9.9,
    "highestPlacementLpa": 51.5,
    "type": "Deemed",
    "affiliation": "Maharashtra Technological University",
    "establishedYear": 2013,
    "campusSizeAcres": 83,
    "studentCount": 9500,
    "accreditation": "NAAC A++ | NIRF #194",
    "nirfRank": 194,
    "featured": false,
    "courses": [
      {
        "id": "c1-86",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 165000,
        "stream": "Engineering"
      },
      {
        "id": "c2-86",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 156750,
        "stream": "Engineering"
      },
      {
        "id": "c3-86",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 148500,
        "stream": "Engineering"
      },
      {
        "id": "c4-86",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 140250,
        "stream": "Engineering"
      },
      {
        "id": "c5-86",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 165000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 9.9,
      "highestLpa": 51.5,
      "medianLpa": 8.7,
      "placementPercentage": 87,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 9.9,
          "highestPackageLpa": 51.5,
          "medianPackageLpa": 8.7,
          "placementPercentage": 87,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 46.4,
          "medianPackageLpa": 8.1,
          "placementPercentage": 85,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 8.4,
          "highestPackageLpa": 43.8,
          "medianPackageLpa": 7.7,
          "placementPercentage": 82,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Pune International Airport",
        "distanceKm": 28
      },
      "nearestRailwayStation": {
        "name": "Pune Central Junction",
        "distanceKm": 11
      },
      "nearestMetroPoint": {
        "name": "Pune Metro Station",
        "distanceKm": 5
      },
      "connectivityDetails": "Located in Pune, Kumaraguru College of Technology KCT is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Pune Central Junction and Pune International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Kumaraguru College of Technology KCT are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 77600,
          "closingRank": 116400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 72750,
          "closingRank": 111550
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 82450,
          "closingRank": 121250
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 87300,
          "closingRank": 126100
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 92150,
          "closingRank": 130950
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 145500,
          "closingRank": 213400
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 135800,
          "closingRank": 203700
        }
      ]
    }
  },
  {
    "id": "sri-sairam-engineering-college-chennai",
    "name": "Sri Sairam Engineering College Chennai",
    "slug": "sri-sairam-engineering-college-chennai",
    "location": "Noida, Uttar Pradesh",
    "city": "Noida",
    "state": "Uttar Pradesh",
    "description": "Premier private engineering institution in Noida, Uttar Pradesh renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Sri Sairam Engineering College Chennai was established in 2014. Located in Noida, Uttar Pradesh, the institute spans 84 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #197.",
    "logoUrl": "https://images.unsplash.com/photo-1562774060?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907205?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://sri-sairam-engineering-college-chennai.ac.in",
    "feesAnnual": 260000,
    "rating": 4.3,
    "reviewsCount": 236,
    "averagePlacementLpa": 10.7,
    "highestPlacementLpa": 53,
    "type": "Private",
    "affiliation": "Uttar Pradesh Technological University",
    "establishedYear": 2014,
    "campusSizeAcres": 84,
    "studentCount": 9750,
    "accreditation": "NAAC A++ | NIRF #197",
    "nirfRank": 197,
    "featured": false,
    "courses": [
      {
        "id": "c1-87",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 260000,
        "stream": "Engineering"
      },
      {
        "id": "c2-87",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 247000,
        "stream": "Engineering"
      },
      {
        "id": "c3-87",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 234000,
        "stream": "Engineering"
      },
      {
        "id": "c4-87",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 221000,
        "stream": "Engineering"
      },
      {
        "id": "c5-87",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 260000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 10.7,
      "highestLpa": 53,
      "medianLpa": 9.4,
      "placementPercentage": 88,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 10.7,
          "highestPackageLpa": 53,
          "medianPackageLpa": 9.4,
          "placementPercentage": 88,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 9.8,
          "highestPackageLpa": 47.7,
          "medianPackageLpa": 8.8,
          "placementPercentage": 86,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 45,
          "medianPackageLpa": 8.3,
          "placementPercentage": 83,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Noida International Airport",
        "distanceKm": 29
      },
      "nearestRailwayStation": {
        "name": "Noida Central Junction",
        "distanceKm": 12
      },
      "nearestMetroPoint": {
        "name": "Noida Metro Station",
        "distanceKm": 6
      },
      "connectivityDetails": "Located in Noida, Sri Sairam Engineering College Chennai is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Noida Central Junction and Noida International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Sri Sairam Engineering College Chennai are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 78800,
          "closingRank": 118200
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 73875,
          "closingRank": 113275
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 83725,
          "closingRank": 123125
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 88650,
          "closingRank": 128050
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 93575,
          "closingRank": 132975
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 147750,
          "closingRank": 216700
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 137900,
          "closingRank": 206850
        }
      ]
    }
  },
  {
    "id": "st-josephs-college-of-engineering-chennai",
    "name": "St. Josephs College of Engineering Chennai",
    "slug": "st-josephs-college-of-engineering-chennai",
    "location": "Gurugram, Haryana",
    "city": "Gurugram",
    "state": "Haryana",
    "description": "Premier autonomous engineering institution in Gurugram, Haryana renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "St. Josephs College of Engineering Chennai was established in 1970. Located in Gurugram, Haryana, the institute spans 85 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #200.",
    "logoUrl": "https://images.unsplash.com/photo-1562774061?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907206?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://st-josephs-college-of-engineering-chennai.ac.in",
    "feesAnnual": 120000,
    "rating": 4.4,
    "reviewsCount": 240,
    "averagePlacementLpa": 11.5,
    "highestPlacementLpa": 32,
    "type": "Autonomous",
    "affiliation": "Haryana Technological University",
    "establishedYear": 1970,
    "campusSizeAcres": 85,
    "studentCount": 10000,
    "accreditation": "NAAC A++ | NIRF #200",
    "nirfRank": 200,
    "featured": false,
    "courses": [
      {
        "id": "c1-88",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 120000,
        "stream": "Engineering"
      },
      {
        "id": "c2-88",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 114000,
        "stream": "Engineering"
      },
      {
        "id": "c3-88",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 108000,
        "stream": "Engineering"
      },
      {
        "id": "c4-88",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 102000,
        "stream": "Engineering"
      },
      {
        "id": "c5-88",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 120000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 11.5,
      "highestLpa": 32,
      "medianLpa": 10.1,
      "placementPercentage": 89,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 11.5,
          "highestPackageLpa": 32,
          "medianPackageLpa": 10.1,
          "placementPercentage": 89,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 10.6,
          "highestPackageLpa": 28.8,
          "medianPackageLpa": 9.4,
          "placementPercentage": 87,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 9.8,
          "highestPackageLpa": 27.2,
          "medianPackageLpa": 9,
          "placementPercentage": 84,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Gurugram International Airport",
        "distanceKm": 30
      },
      "nearestRailwayStation": {
        "name": "Gurugram Central Junction",
        "distanceKm": 13
      },
      "nearestMetroPoint": {
        "name": "Gurugram Metro Station",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Gurugram, St. Josephs College of Engineering Chennai is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Gurugram Central Junction and Gurugram International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to St. Josephs College of Engineering Chennai are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 80000,
          "closingRank": 120000
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 75000,
          "closingRank": 115000
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 85000,
          "closingRank": 125000
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 90000,
          "closingRank": 130000
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 95000,
          "closingRank": 135000
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 150000,
          "closingRank": 220000
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 140000,
          "closingRank": 210000
        }
      ]
    }
  },
  {
    "id": "saveetha-engineering-college-chennai",
    "name": "Saveetha Engineering College Chennai",
    "slug": "saveetha-engineering-college-chennai",
    "location": "Ahmedabad, Gujarat",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "description": "Premier private engineering institution in Ahmedabad, Gujarat renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Saveetha Engineering College Chennai was established in 1971. Located in Ahmedabad, Gujarat, the institute spans 86 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #203.",
    "logoUrl": "https://images.unsplash.com/photo-1562774062?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907207?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://saveetha-engineering-college-chennai.ac.in",
    "feesAnnual": 300000,
    "rating": 4.5,
    "reviewsCount": 244,
    "averagePlacementLpa": 12.3,
    "highestPlacementLpa": 33.5,
    "type": "Private",
    "affiliation": "Gujarat Technological University",
    "establishedYear": 1971,
    "campusSizeAcres": 86,
    "studentCount": 10250,
    "accreditation": "NAAC A++ | NIRF #203",
    "nirfRank": 203,
    "featured": false,
    "courses": [
      {
        "id": "c1-89",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 300000,
        "stream": "Engineering"
      },
      {
        "id": "c2-89",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 285000,
        "stream": "Engineering"
      },
      {
        "id": "c3-89",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 270000,
        "stream": "Engineering"
      },
      {
        "id": "c4-89",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 255000,
        "stream": "Engineering"
      },
      {
        "id": "c5-89",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 300000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 12.3,
      "highestLpa": 33.5,
      "medianLpa": 10.8,
      "placementPercentage": 90,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 12.3,
          "highestPackageLpa": 33.5,
          "medianPackageLpa": 10.8,
          "placementPercentage": 90,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 11.3,
          "highestPackageLpa": 30.2,
          "medianPackageLpa": 10.1,
          "placementPercentage": 88,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 10.5,
          "highestPackageLpa": 28.5,
          "medianPackageLpa": 9.6,
          "placementPercentage": 85,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Ahmedabad International Airport",
        "distanceKm": 31
      },
      "nearestRailwayStation": {
        "name": "Ahmedabad Central Junction",
        "distanceKm": 14
      },
      "nearestMetroPoint": {
        "name": "Ahmedabad Metro Station",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Ahmedabad, Saveetha Engineering College Chennai is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Ahmedabad Central Junction and Ahmedabad International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Saveetha Engineering College Chennai are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 81200,
          "closingRank": 121800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 76125,
          "closingRank": 116725
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 86275,
          "closingRank": 126875
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 91350,
          "closingRank": 131950
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 96425,
          "closingRank": 137025
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 152250,
          "closingRank": 223300
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 142100,
          "closingRank": 213150
        }
      ]
    }
  },
  {
    "id": "rajalakshmi-engineering-college-rec-chennai",
    "name": "Rajalakshmi Engineering College REC Chennai",
    "slug": "rajalakshmi-engineering-college-rec-chennai",
    "location": "Kolkata, West Bengal",
    "city": "Kolkata",
    "state": "West Bengal",
    "description": "Premier deemed engineering institution in Kolkata, West Bengal renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Rajalakshmi Engineering College REC Chennai was established in 1972. Located in Kolkata, West Bengal, the institute spans 87 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #206.",
    "logoUrl": "https://images.unsplash.com/photo-1562774053?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907198?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://rajalakshmi-engineering-college-rec-chennai.ac.in",
    "feesAnnual": 150000,
    "rating": 4.6,
    "reviewsCount": 248,
    "averagePlacementLpa": 13.1,
    "highestPlacementLpa": 35,
    "type": "Deemed",
    "affiliation": "West Bengal Technological University",
    "establishedYear": 1972,
    "campusSizeAcres": 87,
    "studentCount": 10500,
    "accreditation": "NAAC A++ | NIRF #206",
    "nirfRank": 206,
    "featured": false,
    "courses": [
      {
        "id": "c1-90",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 150000,
        "stream": "Engineering"
      },
      {
        "id": "c2-90",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 142500,
        "stream": "Engineering"
      },
      {
        "id": "c3-90",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      },
      {
        "id": "c4-90",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 127500,
        "stream": "Engineering"
      },
      {
        "id": "c5-90",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 150000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 13.1,
      "highestLpa": 35,
      "medianLpa": 11.5,
      "placementPercentage": 91,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 13.1,
          "highestPackageLpa": 35,
          "medianPackageLpa": 11.5,
          "placementPercentage": 91,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 12.1,
          "highestPackageLpa": 31.5,
          "medianPackageLpa": 10.7,
          "placementPercentage": 89,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 11.1,
          "highestPackageLpa": 29.8,
          "medianPackageLpa": 10.2,
          "placementPercentage": 86,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Kolkata International Airport",
        "distanceKm": 32
      },
      "nearestRailwayStation": {
        "name": "Kolkata Central Junction",
        "distanceKm": 15
      },
      "nearestMetroPoint": {
        "name": "Kolkata Metro Station",
        "distanceKm": 4
      },
      "connectivityDetails": "Located in Kolkata, Rajalakshmi Engineering College REC Chennai is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Kolkata Central Junction and Kolkata International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Rajalakshmi Engineering College REC Chennai are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 82400,
          "closingRank": 123600
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 77250,
          "closingRank": 118450
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 87550,
          "closingRank": 128750
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 92700,
          "closingRank": 133900
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 97850,
          "closingRank": 139050
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 154500,
          "closingRank": 226600
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 144200,
          "closingRank": 216300
        }
      ]
    }
  },
  {
    "id": "sona-college-of-technology-salem",
    "name": "Sona College of Technology Salem",
    "slug": "sona-college-of-technology-salem",
    "location": "Coimbatore, Tamil Nadu",
    "city": "Coimbatore",
    "state": "Tamil Nadu",
    "description": "Premier private engineering institution in Coimbatore, Tamil Nadu renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Sona College of Technology Salem was established in 1973. Located in Coimbatore, Tamil Nadu, the institute spans 88 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #209.",
    "logoUrl": "https://images.unsplash.com/photo-1562774054?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907199?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://sona-college-of-technology-salem.ac.in",
    "feesAnnual": 340000,
    "rating": 4.7,
    "reviewsCount": 252,
    "averagePlacementLpa": 13.9,
    "highestPlacementLpa": 36.5,
    "type": "Private",
    "affiliation": "Tamil Nadu Technological University",
    "establishedYear": 1973,
    "campusSizeAcres": 88,
    "studentCount": 10750,
    "accreditation": "NAAC A++ | NIRF #209",
    "nirfRank": 209,
    "featured": false,
    "courses": [
      {
        "id": "c1-91",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 340000,
        "stream": "Engineering"
      },
      {
        "id": "c2-91",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 323000,
        "stream": "Engineering"
      },
      {
        "id": "c3-91",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 306000,
        "stream": "Engineering"
      },
      {
        "id": "c4-91",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 289000,
        "stream": "Engineering"
      },
      {
        "id": "c5-91",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 340000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 13.9,
      "highestLpa": 36.5,
      "medianLpa": 12.2,
      "placementPercentage": 92,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 13.9,
          "highestPackageLpa": 36.5,
          "medianPackageLpa": 12.2,
          "placementPercentage": 92,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 12.8,
          "highestPackageLpa": 32.9,
          "medianPackageLpa": 11.4,
          "placementPercentage": 90,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 11.8,
          "highestPackageLpa": 31,
          "medianPackageLpa": 10.8,
          "placementPercentage": 87,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Coimbatore International Airport",
        "distanceKm": 33
      },
      "nearestRailwayStation": {
        "name": "Coimbatore Central Junction",
        "distanceKm": 4
      },
      "nearestMetroPoint": {
        "name": "Coimbatore Metro Station",
        "distanceKm": 5
      },
      "connectivityDetails": "Located in Coimbatore, Sona College of Technology Salem is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Coimbatore Central Junction and Coimbatore International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Sona College of Technology Salem are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 83600,
          "closingRank": 125400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 78375,
          "closingRank": 120175
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 88825,
          "closingRank": 130625
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 94050,
          "closingRank": 135850
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 99275,
          "closingRank": 141075
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 156750,
          "closingRank": 229900
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 146300,
          "closingRank": 219450
        }
      ]
    }
  },
  {
    "id": "kongu-engineering-college-perundurai",
    "name": "Kongu Engineering College Perundurai",
    "slug": "kongu-engineering-college-perundurai",
    "location": "Jaipur, Rajasthan",
    "city": "Jaipur",
    "state": "Rajasthan",
    "description": "Premier deemed engineering institution in Jaipur, Rajasthan renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Kongu Engineering College Perundurai was established in 1974. Located in Jaipur, Rajasthan, the institute spans 89 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #212.",
    "logoUrl": "https://images.unsplash.com/photo-1562774055?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907200?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://kongu-engineering-college-perundurai.ac.in",
    "feesAnnual": 180000,
    "rating": 4.1,
    "reviewsCount": 256,
    "averagePlacementLpa": 14.7,
    "highestPlacementLpa": 38,
    "type": "Deemed",
    "affiliation": "Rajasthan Technological University",
    "establishedYear": 1974,
    "campusSizeAcres": 89,
    "studentCount": 11000,
    "accreditation": "NAAC A++ | NIRF #212",
    "nirfRank": 212,
    "featured": false,
    "courses": [
      {
        "id": "c1-92",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      },
      {
        "id": "c2-92",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 171000,
        "stream": "Engineering"
      },
      {
        "id": "c3-92",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 162000,
        "stream": "Engineering"
      },
      {
        "id": "c4-92",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 153000,
        "stream": "Engineering"
      },
      {
        "id": "c5-92",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 14.7,
      "highestLpa": 38,
      "medianLpa": 12.9,
      "placementPercentage": 93,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 14.7,
          "highestPackageLpa": 38,
          "medianPackageLpa": 12.9,
          "placementPercentage": 93,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 13.5,
          "highestPackageLpa": 34.2,
          "medianPackageLpa": 12.1,
          "placementPercentage": 91,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 12.5,
          "highestPackageLpa": 32.3,
          "medianPackageLpa": 11.5,
          "placementPercentage": 88,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Jaipur International Airport",
        "distanceKm": 34
      },
      "nearestRailwayStation": {
        "name": "Jaipur Central Junction",
        "distanceKm": 5
      },
      "nearestMetroPoint": {
        "name": "Jaipur Metro Station",
        "distanceKm": 6
      },
      "connectivityDetails": "Located in Jaipur, Kongu Engineering College Perundurai is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Jaipur Central Junction and Jaipur International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Kongu Engineering College Perundurai are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 84800,
          "closingRank": 127200
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 79500,
          "closingRank": 121900
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 90100,
          "closingRank": 132500
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 95400,
          "closingRank": 137800
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 100700,
          "closingRank": 143100
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 159000,
          "closingRank": 233200
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 148400,
          "closingRank": 222600
        }
      ]
    }
  },
  {
    "id": "mepco-schlenk-engineering-college-sivakasi",
    "name": "Mepco Schlenk Engineering College Sivakasi",
    "slug": "mepco-schlenk-engineering-college-sivakasi",
    "location": "Bengaluru, Karnataka",
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Premier private engineering institution in Bengaluru, Karnataka renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Mepco Schlenk Engineering College Sivakasi was established in 1975. Located in Bengaluru, Karnataka, the institute spans 90 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #215.",
    "logoUrl": "https://images.unsplash.com/photo-1562774056?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907201?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://mepco-schlenk-engineering-college-sivakasi.ac.in",
    "feesAnnual": 180000,
    "rating": 4.2,
    "reviewsCount": 260,
    "averagePlacementLpa": 7.5,
    "highestPlacementLpa": 39.5,
    "type": "Private",
    "affiliation": "Karnataka Technological University",
    "establishedYear": 1975,
    "campusSizeAcres": 90,
    "studentCount": 11250,
    "accreditation": "NAAC A++ | NIRF #215",
    "nirfRank": 215,
    "featured": false,
    "courses": [
      {
        "id": "c1-93",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      },
      {
        "id": "c2-93",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 171000,
        "stream": "Engineering"
      },
      {
        "id": "c3-93",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 162000,
        "stream": "Engineering"
      },
      {
        "id": "c4-93",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 153000,
        "stream": "Engineering"
      },
      {
        "id": "c5-93",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 7.5,
      "highestLpa": 39.5,
      "medianLpa": 6.6,
      "placementPercentage": 94,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 7.5,
          "highestPackageLpa": 39.5,
          "medianPackageLpa": 6.6,
          "placementPercentage": 94,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 6.9,
          "highestPackageLpa": 35.6,
          "medianPackageLpa": 6.1,
          "placementPercentage": 92,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 6.4,
          "highestPackageLpa": 33.6,
          "medianPackageLpa": 5.9,
          "placementPercentage": 89,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Bengaluru International Airport",
        "distanceKm": 10
      },
      "nearestRailwayStation": {
        "name": "Bengaluru Central Junction",
        "distanceKm": 6
      },
      "nearestMetroPoint": {
        "name": "Bengaluru Metro Station",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Bengaluru, Mepco Schlenk Engineering College Sivakasi is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Bengaluru Central Junction and Bengaluru International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Mepco Schlenk Engineering College Sivakasi are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 86000,
          "closingRank": 129000
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 80625,
          "closingRank": 123625
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 91375,
          "closingRank": 134375
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 96750,
          "closingRank": 139750
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 102125,
          "closingRank": 145125
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 161250,
          "closingRank": 236500
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 150500,
          "closingRank": 225750
        }
      ]
    }
  },
  {
    "id": "vel-tech-rangarajan-dr-sagunthala-r-d-institute",
    "name": "Vel Tech Rangarajan Dr.Sagunthala R&D Institute",
    "slug": "vel-tech-rangarajan-dr-sagunthala-r-d-institute",
    "location": "Hyderabad, Telangana",
    "city": "Hyderabad",
    "state": "Telangana",
    "description": "Premier autonomous engineering institution in Hyderabad, Telangana renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Vel Tech Rangarajan Dr.Sagunthala R&D Institute was established in 1976. Located in Hyderabad, Telangana, the institute spans 91 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #218.",
    "logoUrl": "https://images.unsplash.com/photo-1562774057?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907202?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://vel-tech-rangarajan-dr-sagunthala-r-d-institute.ac.in",
    "feesAnnual": 135000,
    "rating": 4.3,
    "reviewsCount": 264,
    "averagePlacementLpa": 8.3,
    "highestPlacementLpa": 41,
    "type": "Autonomous",
    "affiliation": "Telangana Technological University",
    "establishedYear": 1976,
    "campusSizeAcres": 91,
    "studentCount": 11500,
    "accreditation": "NAAC A++ | NIRF #218",
    "nirfRank": 218,
    "featured": false,
    "courses": [
      {
        "id": "c1-94",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      },
      {
        "id": "c2-94",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 128250,
        "stream": "Engineering"
      },
      {
        "id": "c3-94",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 121500,
        "stream": "Engineering"
      },
      {
        "id": "c4-94",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 114750,
        "stream": "Engineering"
      },
      {
        "id": "c5-94",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 8.3,
      "highestLpa": 41,
      "medianLpa": 7.3,
      "placementPercentage": 95,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 8.3,
          "highestPackageLpa": 41,
          "medianPackageLpa": 7.3,
          "placementPercentage": 95,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 7.6,
          "highestPackageLpa": 36.9,
          "medianPackageLpa": 6.8,
          "placementPercentage": 93,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 7.1,
          "highestPackageLpa": 34.9,
          "medianPackageLpa": 6.5,
          "placementPercentage": 90,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Hyderabad International Airport",
        "distanceKm": 11
      },
      "nearestRailwayStation": {
        "name": "Hyderabad Central Junction",
        "distanceKm": 7
      },
      "nearestMetroPoint": {
        "name": "Hyderabad Metro Station",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Hyderabad, Vel Tech Rangarajan Dr.Sagunthala R&D Institute is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Hyderabad Central Junction and Hyderabad International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Vel Tech Rangarajan Dr.Sagunthala R&D Institute are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 87200,
          "closingRank": 130800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 81750,
          "closingRank": 125350
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 92650,
          "closingRank": 136250
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 98100,
          "closingRank": 141700
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 103550,
          "closingRank": 147150
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 163500,
          "closingRank": 239800
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 152600,
          "closingRank": 228900
        }
      ]
    }
  },
  {
    "id": "karunya-institute-of-technology-coimbatore",
    "name": "Karunya Institute of Technology Coimbatore",
    "slug": "karunya-institute-of-technology-coimbatore",
    "location": "Chennai, Tamil Nadu",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "description": "Premier private engineering institution in Chennai, Tamil Nadu renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Karunya Institute of Technology Coimbatore was established in 1977. Located in Chennai, Tamil Nadu, the institute spans 92 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #221.",
    "logoUrl": "https://images.unsplash.com/photo-1562774058?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907203?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://karunya-institute-of-technology-coimbatore.ac.in",
    "feesAnnual": 220000,
    "rating": 4.4,
    "reviewsCount": 268,
    "averagePlacementLpa": 9.1,
    "highestPlacementLpa": 42.5,
    "type": "Private",
    "affiliation": "Tamil Nadu Technological University",
    "establishedYear": 1977,
    "campusSizeAcres": 92,
    "studentCount": 11750,
    "accreditation": "NAAC A++ | NIRF #221",
    "nirfRank": 221,
    "featured": false,
    "courses": [
      {
        "id": "c1-95",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      },
      {
        "id": "c2-95",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 209000,
        "stream": "Engineering"
      },
      {
        "id": "c3-95",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 198000,
        "stream": "Engineering"
      },
      {
        "id": "c4-95",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 187000,
        "stream": "Engineering"
      },
      {
        "id": "c5-95",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 9.1,
      "highestLpa": 42.5,
      "medianLpa": 8,
      "placementPercentage": 96,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 42.5,
          "medianPackageLpa": 8,
          "placementPercentage": 96,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 8.4,
          "highestPackageLpa": 38.3,
          "medianPackageLpa": 7.5,
          "placementPercentage": 94,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 7.7,
          "highestPackageLpa": 36.1,
          "medianPackageLpa": 7.1,
          "placementPercentage": 91,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Chennai International Airport",
        "distanceKm": 12
      },
      "nearestRailwayStation": {
        "name": "Chennai Central Junction",
        "distanceKm": 8
      },
      "nearestMetroPoint": {
        "name": "Chennai Metro Station",
        "distanceKm": 4
      },
      "connectivityDetails": "Located in Chennai, Karunya Institute of Technology Coimbatore is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Chennai Central Junction and Chennai International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Karunya Institute of Technology Coimbatore are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 88400,
          "closingRank": 132600
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 82875,
          "closingRank": 127075
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 93925,
          "closingRank": 138125
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 99450,
          "closingRank": 143650
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 104975,
          "closingRank": 149175
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 165750,
          "closingRank": 243100
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 154700,
          "closingRank": 232050
        }
      ]
    }
  },
  {
    "id": "hindustan-institute-of-technology-hit-chennai",
    "name": "Hindustan Institute of Technology HIT Chennai",
    "slug": "hindustan-institute-of-technology-hit-chennai",
    "location": "Pune, Maharashtra",
    "city": "Pune",
    "state": "Maharashtra",
    "description": "Premier deemed engineering institution in Pune, Maharashtra renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Hindustan Institute of Technology HIT Chennai was established in 1978. Located in Pune, Maharashtra, the institute spans 93 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #224.",
    "logoUrl": "https://images.unsplash.com/photo-1562774059?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907204?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://hindustan-institute-of-technology-hit-chennai.ac.in",
    "feesAnnual": 165000,
    "rating": 4.5,
    "reviewsCount": 272,
    "averagePlacementLpa": 9.9,
    "highestPlacementLpa": 44,
    "type": "Deemed",
    "affiliation": "Maharashtra Technological University",
    "establishedYear": 1978,
    "campusSizeAcres": 93,
    "studentCount": 12000,
    "accreditation": "NAAC A++ | NIRF #224",
    "nirfRank": 224,
    "featured": false,
    "courses": [
      {
        "id": "c1-96",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 165000,
        "stream": "Engineering"
      },
      {
        "id": "c2-96",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 156750,
        "stream": "Engineering"
      },
      {
        "id": "c3-96",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 148500,
        "stream": "Engineering"
      },
      {
        "id": "c4-96",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 140250,
        "stream": "Engineering"
      },
      {
        "id": "c5-96",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 165000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 9.9,
      "highestLpa": 44,
      "medianLpa": 8.7,
      "placementPercentage": 97,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 9.9,
          "highestPackageLpa": 44,
          "medianPackageLpa": 8.7,
          "placementPercentage": 97,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 39.6,
          "medianPackageLpa": 8.1,
          "placementPercentage": 95,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 8.4,
          "highestPackageLpa": 37.4,
          "medianPackageLpa": 7.7,
          "placementPercentage": 92,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Pune International Airport",
        "distanceKm": 13
      },
      "nearestRailwayStation": {
        "name": "Pune Central Junction",
        "distanceKm": 9
      },
      "nearestMetroPoint": {
        "name": "Pune Metro Station",
        "distanceKm": 5
      },
      "connectivityDetails": "Located in Pune, Hindustan Institute of Technology HIT Chennai is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Pune Central Junction and Pune International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Hindustan Institute of Technology HIT Chennai are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 89600,
          "closingRank": 134400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 84000,
          "closingRank": 128800
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 95200,
          "closingRank": 140000
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 100800,
          "closingRank": 145600
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 106400,
          "closingRank": 151200
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 168000,
          "closingRank": 246400
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 156800,
          "closingRank": 235200
        }
      ]
    }
  },
  {
    "id": "b-s-abdur-rahman-crescent-institute",
    "name": "B.S. Abdur Rahman Crescent Institute",
    "slug": "b-s-abdur-rahman-crescent-institute",
    "location": "Noida, Uttar Pradesh",
    "city": "Noida",
    "state": "Uttar Pradesh",
    "description": "Premier private engineering institution in Noida, Uttar Pradesh renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "B.S. Abdur Rahman Crescent Institute was established in 1979. Located in Noida, Uttar Pradesh, the institute spans 94 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #227.",
    "logoUrl": "https://images.unsplash.com/photo-1562774060?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907205?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://b-s-abdur-rahman-crescent-institute.ac.in",
    "feesAnnual": 260000,
    "rating": 4.6,
    "reviewsCount": 276,
    "averagePlacementLpa": 10.7,
    "highestPlacementLpa": 45.5,
    "type": "Private",
    "affiliation": "Uttar Pradesh Technological University",
    "establishedYear": 1979,
    "campusSizeAcres": 94,
    "studentCount": 12250,
    "accreditation": "NAAC A++ | NIRF #227",
    "nirfRank": 227,
    "featured": false,
    "courses": [
      {
        "id": "c1-97",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 260000,
        "stream": "Engineering"
      },
      {
        "id": "c2-97",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 247000,
        "stream": "Engineering"
      },
      {
        "id": "c3-97",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 234000,
        "stream": "Engineering"
      },
      {
        "id": "c4-97",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 221000,
        "stream": "Engineering"
      },
      {
        "id": "c5-97",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 260000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 10.7,
      "highestLpa": 45.5,
      "medianLpa": 9.4,
      "placementPercentage": 98,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 10.7,
          "highestPackageLpa": 45.5,
          "medianPackageLpa": 9.4,
          "placementPercentage": 98,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 9.8,
          "highestPackageLpa": 41,
          "medianPackageLpa": 8.8,
          "placementPercentage": 96,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 38.7,
          "medianPackageLpa": 8.3,
          "placementPercentage": 93,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Noida International Airport",
        "distanceKm": 14
      },
      "nearestRailwayStation": {
        "name": "Noida Central Junction",
        "distanceKm": 10
      },
      "nearestMetroPoint": {
        "name": "Noida Metro Station",
        "distanceKm": 6
      },
      "connectivityDetails": "Located in Noida, B.S. Abdur Rahman Crescent Institute is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Noida Central Junction and Noida International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to B.S. Abdur Rahman Crescent Institute are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 90800,
          "closingRank": 136200
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 85125,
          "closingRank": 130525
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 96475,
          "closingRank": 141875
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 102150,
          "closingRank": 147550
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 107825,
          "closingRank": 153225
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 170250,
          "closingRank": 249700
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 158900,
          "closingRank": 238350
        }
      ]
    }
  },
  {
    "id": "sathyabama-institute-of-science-and-technology",
    "name": "Sathyabama Institute of Science and Technology",
    "slug": "sathyabama-institute-of-science-and-technology",
    "location": "Gurugram, Haryana",
    "city": "Gurugram",
    "state": "Haryana",
    "description": "Premier deemed engineering institution in Gurugram, Haryana renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Sathyabama Institute of Science and Technology was established in 1980. Located in Gurugram, Haryana, the institute spans 95 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #230.",
    "logoUrl": "https://images.unsplash.com/photo-1562774061?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907206?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://sathyabama-institute-of-science-and-technology.ac.in",
    "feesAnnual": 120000,
    "rating": 4.7,
    "reviewsCount": 280,
    "averagePlacementLpa": 11.5,
    "highestPlacementLpa": 47,
    "type": "Deemed",
    "affiliation": "Haryana Technological University",
    "establishedYear": 1980,
    "campusSizeAcres": 95,
    "studentCount": 12500,
    "accreditation": "NAAC A++ | NIRF #230",
    "nirfRank": 230,
    "featured": false,
    "courses": [
      {
        "id": "c1-98",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 120000,
        "stream": "Engineering"
      },
      {
        "id": "c2-98",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 114000,
        "stream": "Engineering"
      },
      {
        "id": "c3-98",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 108000,
        "stream": "Engineering"
      },
      {
        "id": "c4-98",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 102000,
        "stream": "Engineering"
      },
      {
        "id": "c5-98",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 120000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 11.5,
      "highestLpa": 47,
      "medianLpa": 10.1,
      "placementPercentage": 85,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 11.5,
          "highestPackageLpa": 47,
          "medianPackageLpa": 10.1,
          "placementPercentage": 85,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 10.6,
          "highestPackageLpa": 42.3,
          "medianPackageLpa": 9.4,
          "placementPercentage": 83,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 9.8,
          "highestPackageLpa": 39.9,
          "medianPackageLpa": 9,
          "placementPercentage": 80,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Gurugram International Airport",
        "distanceKm": 15
      },
      "nearestRailwayStation": {
        "name": "Gurugram Central Junction",
        "distanceKm": 11
      },
      "nearestMetroPoint": {
        "name": "Gurugram Metro Station",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Gurugram, Sathyabama Institute of Science and Technology is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Gurugram Central Junction and Gurugram International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Sathyabama Institute of Science and Technology are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 92000,
          "closingRank": 138000
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 86250,
          "closingRank": 132250
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 97750,
          "closingRank": 143750
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 103500,
          "closingRank": 149500
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 109250,
          "closingRank": 155250
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 172500,
          "closingRank": 253000
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 161000,
          "closingRank": 241500
        }
      ]
    }
  },
  {
    "id": "college-of-engineering-guindy-ceg-anna-university",
    "name": "College of Engineering Guindy CEG Anna University",
    "slug": "college-of-engineering-guindy-ceg-anna-university",
    "location": "Ahmedabad, Gujarat",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "description": "Premier private engineering institution in Ahmedabad, Gujarat renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "College of Engineering Guindy CEG Anna University was established in 1981. Located in Ahmedabad, Gujarat, the institute spans 96 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #233.",
    "logoUrl": "https://images.unsplash.com/photo-1562774062?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907207?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://college-of-engineering-guindy-ceg-anna-university.ac.in",
    "feesAnnual": 300000,
    "rating": 4.1,
    "reviewsCount": 284,
    "averagePlacementLpa": 12.3,
    "highestPlacementLpa": 48.5,
    "type": "Private",
    "affiliation": "Gujarat Technological University",
    "establishedYear": 1981,
    "campusSizeAcres": 96,
    "studentCount": 12750,
    "accreditation": "NAAC A++ | NIRF #233",
    "nirfRank": 233,
    "featured": false,
    "courses": [
      {
        "id": "c1-99",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 300000,
        "stream": "Engineering"
      },
      {
        "id": "c2-99",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 285000,
        "stream": "Engineering"
      },
      {
        "id": "c3-99",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 270000,
        "stream": "Engineering"
      },
      {
        "id": "c4-99",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 255000,
        "stream": "Engineering"
      },
      {
        "id": "c5-99",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 300000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 12.3,
      "highestLpa": 48.5,
      "medianLpa": 10.8,
      "placementPercentage": 86,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 12.3,
          "highestPackageLpa": 48.5,
          "medianPackageLpa": 10.8,
          "placementPercentage": 86,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 11.3,
          "highestPackageLpa": 43.6,
          "medianPackageLpa": 10.1,
          "placementPercentage": 84,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 10.5,
          "highestPackageLpa": 41.2,
          "medianPackageLpa": 9.6,
          "placementPercentage": 81,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Ahmedabad International Airport",
        "distanceKm": 16
      },
      "nearestRailwayStation": {
        "name": "Ahmedabad Central Junction",
        "distanceKm": 12
      },
      "nearestMetroPoint": {
        "name": "Ahmedabad Metro Station",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Ahmedabad, College of Engineering Guindy CEG Anna University is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Ahmedabad Central Junction and Ahmedabad International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to College of Engineering Guindy CEG Anna University are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 93200,
          "closingRank": 139800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 87375,
          "closingRank": 133975
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 99025,
          "closingRank": 145625
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 104850,
          "closingRank": 151450
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 110675,
          "closingRank": 157275
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 174750,
          "closingRank": 256300
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 163100,
          "closingRank": 244650
        }
      ]
    }
  },
  {
    "id": "madras-institute-of-technology-mit-chromepet",
    "name": "Madras Institute of Technology MIT Chromepet",
    "slug": "madras-institute-of-technology-mit-chromepet",
    "location": "Kolkata, West Bengal",
    "city": "Kolkata",
    "state": "West Bengal",
    "description": "Premier autonomous engineering institution in Kolkata, West Bengal renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Madras Institute of Technology MIT Chromepet was established in 1982. Located in Kolkata, West Bengal, the institute spans 97 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #236.",
    "logoUrl": "https://images.unsplash.com/photo-1562774053?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907198?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://madras-institute-of-technology-mit-chromepet.ac.in",
    "feesAnnual": 150000,
    "rating": 4.2,
    "reviewsCount": 288,
    "averagePlacementLpa": 13.1,
    "highestPlacementLpa": 50,
    "type": "Autonomous",
    "affiliation": "West Bengal Technological University",
    "establishedYear": 1982,
    "campusSizeAcres": 97,
    "studentCount": 13000,
    "accreditation": "NAAC A++ | NIRF #236",
    "nirfRank": 236,
    "featured": false,
    "courses": [
      {
        "id": "c1-100",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 150000,
        "stream": "Engineering"
      },
      {
        "id": "c2-100",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 142500,
        "stream": "Engineering"
      },
      {
        "id": "c3-100",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      },
      {
        "id": "c4-100",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 127500,
        "stream": "Engineering"
      },
      {
        "id": "c5-100",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 150000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 13.1,
      "highestLpa": 50,
      "medianLpa": 11.5,
      "placementPercentage": 87,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 13.1,
          "highestPackageLpa": 50,
          "medianPackageLpa": 11.5,
          "placementPercentage": 87,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 12.1,
          "highestPackageLpa": 45,
          "medianPackageLpa": 10.7,
          "placementPercentage": 85,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 11.1,
          "highestPackageLpa": 42.5,
          "medianPackageLpa": 10.2,
          "placementPercentage": 82,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Kolkata International Airport",
        "distanceKm": 17
      },
      "nearestRailwayStation": {
        "name": "Kolkata Central Junction",
        "distanceKm": 13
      },
      "nearestMetroPoint": {
        "name": "Kolkata Metro Station",
        "distanceKm": 4
      },
      "connectivityDetails": "Located in Kolkata, Madras Institute of Technology MIT Chromepet is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Kolkata Central Junction and Kolkata International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Madras Institute of Technology MIT Chromepet are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 94400,
          "closingRank": 141600
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 88500,
          "closingRank": 135700
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 100300,
          "closingRank": 147500
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 106200,
          "closingRank": 153400
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 112100,
          "closingRank": 159300
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 177000,
          "closingRank": 259600
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 165200,
          "closingRank": 247800
        }
      ]
    }
  },
  {
    "id": "psg-itech-coimbatore",
    "name": "PSG iTech Coimbatore",
    "slug": "psg-itech-coimbatore",
    "location": "Coimbatore, Tamil Nadu",
    "city": "Coimbatore",
    "state": "Tamil Nadu",
    "description": "Premier private engineering institution in Coimbatore, Tamil Nadu renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "PSG iTech Coimbatore was established in 1983. Located in Coimbatore, Tamil Nadu, the institute spans 98 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #239.",
    "logoUrl": "https://images.unsplash.com/photo-1562774054?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907199?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://psg-itech-coimbatore.ac.in",
    "feesAnnual": 340000,
    "rating": 4.3,
    "reviewsCount": 292,
    "averagePlacementLpa": 13.9,
    "highestPlacementLpa": 51.5,
    "type": "Private",
    "affiliation": "Tamil Nadu Technological University",
    "establishedYear": 1983,
    "campusSizeAcres": 98,
    "studentCount": 13250,
    "accreditation": "NAAC A++ | NIRF #239",
    "nirfRank": 239,
    "featured": false,
    "courses": [
      {
        "id": "c1-101",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 340000,
        "stream": "Engineering"
      },
      {
        "id": "c2-101",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 323000,
        "stream": "Engineering"
      },
      {
        "id": "c3-101",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 306000,
        "stream": "Engineering"
      },
      {
        "id": "c4-101",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 289000,
        "stream": "Engineering"
      },
      {
        "id": "c5-101",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 340000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 13.9,
      "highestLpa": 51.5,
      "medianLpa": 12.2,
      "placementPercentage": 88,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 13.9,
          "highestPackageLpa": 51.5,
          "medianPackageLpa": 12.2,
          "placementPercentage": 88,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 12.8,
          "highestPackageLpa": 46.4,
          "medianPackageLpa": 11.4,
          "placementPercentage": 86,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 11.8,
          "highestPackageLpa": 43.8,
          "medianPackageLpa": 10.8,
          "placementPercentage": 83,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Coimbatore International Airport",
        "distanceKm": 18
      },
      "nearestRailwayStation": {
        "name": "Coimbatore Central Junction",
        "distanceKm": 14
      },
      "nearestMetroPoint": {
        "name": "Coimbatore Metro Station",
        "distanceKm": 5
      },
      "connectivityDetails": "Located in Coimbatore, PSG iTech Coimbatore is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Coimbatore Central Junction and Coimbatore International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to PSG iTech Coimbatore are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 95600,
          "closingRank": 143400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 89625,
          "closingRank": 137425
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 101575,
          "closingRank": 149375
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 107550,
          "closingRank": 155350
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 113525,
          "closingRank": 161325
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 179250,
          "closingRank": 262900
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 167300,
          "closingRank": 250950
        }
      ]
    }
  },
  {
    "id": "government-college-of-technology-gct-coimbatore",
    "name": "Government College of Technology GCT Coimbatore",
    "slug": "government-college-of-technology-gct-coimbatore",
    "location": "Jaipur, Rajasthan",
    "city": "Jaipur",
    "state": "Rajasthan",
    "description": "Premier deemed engineering institution in Jaipur, Rajasthan renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Government College of Technology GCT Coimbatore was established in 1984. Located in Jaipur, Rajasthan, the institute spans 99 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #242.",
    "logoUrl": "https://images.unsplash.com/photo-1562774055?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907200?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://government-college-of-technology-gct-coimbatore.ac.in",
    "feesAnnual": 180000,
    "rating": 4.4,
    "reviewsCount": 296,
    "averagePlacementLpa": 14.7,
    "highestPlacementLpa": 53,
    "type": "Deemed",
    "affiliation": "Rajasthan Technological University",
    "establishedYear": 1984,
    "campusSizeAcres": 99,
    "studentCount": 13500,
    "accreditation": "NAAC A++ | NIRF #242",
    "nirfRank": 242,
    "featured": false,
    "courses": [
      {
        "id": "c1-102",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      },
      {
        "id": "c2-102",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 171000,
        "stream": "Engineering"
      },
      {
        "id": "c3-102",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 162000,
        "stream": "Engineering"
      },
      {
        "id": "c4-102",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 153000,
        "stream": "Engineering"
      },
      {
        "id": "c5-102",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 14.7,
      "highestLpa": 53,
      "medianLpa": 12.9,
      "placementPercentage": 89,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 14.7,
          "highestPackageLpa": 53,
          "medianPackageLpa": 12.9,
          "placementPercentage": 89,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 13.5,
          "highestPackageLpa": 47.7,
          "medianPackageLpa": 12.1,
          "placementPercentage": 87,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 12.5,
          "highestPackageLpa": 45,
          "medianPackageLpa": 11.5,
          "placementPercentage": 84,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Jaipur International Airport",
        "distanceKm": 19
      },
      "nearestRailwayStation": {
        "name": "Jaipur Central Junction",
        "distanceKm": 15
      },
      "nearestMetroPoint": {
        "name": "Jaipur Metro Station",
        "distanceKm": 6
      },
      "connectivityDetails": "Located in Jaipur, Government College of Technology GCT Coimbatore is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Jaipur Central Junction and Jaipur International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Government College of Technology GCT Coimbatore are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 96800,
          "closingRank": 145200
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 90750,
          "closingRank": 139150
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 102850,
          "closingRank": 151250
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 108900,
          "closingRank": 157300
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 114950,
          "closingRank": 163350
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 181500,
          "closingRank": 266200
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 169400,
          "closingRank": 254100
        }
      ]
    }
  },
  {
    "id": "government-college-of-engineering-salem",
    "name": "Government College of Engineering Salem",
    "slug": "government-college-of-engineering-salem",
    "location": "Bengaluru, Karnataka",
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Premier private engineering institution in Bengaluru, Karnataka renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Government College of Engineering Salem was established in 1985. Located in Bengaluru, Karnataka, the institute spans 100 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #245.",
    "logoUrl": "https://images.unsplash.com/photo-1562774056?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907201?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://government-college-of-engineering-salem.ac.in",
    "feesAnnual": 180000,
    "rating": 4.5,
    "reviewsCount": 300,
    "averagePlacementLpa": 7.5,
    "highestPlacementLpa": 32,
    "type": "Private",
    "affiliation": "Karnataka Technological University",
    "establishedYear": 1985,
    "campusSizeAcres": 100,
    "studentCount": 13750,
    "accreditation": "NAAC A++ | NIRF #245",
    "nirfRank": 245,
    "featured": false,
    "courses": [
      {
        "id": "c1-103",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      },
      {
        "id": "c2-103",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 171000,
        "stream": "Engineering"
      },
      {
        "id": "c3-103",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 162000,
        "stream": "Engineering"
      },
      {
        "id": "c4-103",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 153000,
        "stream": "Engineering"
      },
      {
        "id": "c5-103",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 180000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 7.5,
      "highestLpa": 32,
      "medianLpa": 6.6,
      "placementPercentage": 90,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 7.5,
          "highestPackageLpa": 32,
          "medianPackageLpa": 6.6,
          "placementPercentage": 90,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 6.9,
          "highestPackageLpa": 28.8,
          "medianPackageLpa": 6.1,
          "placementPercentage": 88,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 6.4,
          "highestPackageLpa": 27.2,
          "medianPackageLpa": 5.9,
          "placementPercentage": 85,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Bengaluru International Airport",
        "distanceKm": 20
      },
      "nearestRailwayStation": {
        "name": "Bengaluru Central Junction",
        "distanceKm": 4
      },
      "nearestMetroPoint": {
        "name": "Bengaluru Metro Station",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Bengaluru, Government College of Engineering Salem is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Bengaluru Central Junction and Bengaluru International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Government College of Engineering Salem are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 98000,
          "closingRank": 147000
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 91875,
          "closingRank": 140875
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 104125,
          "closingRank": 153125
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 110250,
          "closingRank": 159250
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 116375,
          "closingRank": 165375
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 183750,
          "closingRank": 269500
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 171500,
          "closingRank": 257250
        }
      ]
    }
  },
  {
    "id": "college-of-engineering-trivandrum-cet",
    "name": "College of Engineering Trivandrum CET",
    "slug": "college-of-engineering-trivandrum-cet",
    "location": "Hyderabad, Telangana",
    "city": "Hyderabad",
    "state": "Telangana",
    "description": "Premier deemed engineering institution in Hyderabad, Telangana renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "College of Engineering Trivandrum CET was established in 1986. Located in Hyderabad, Telangana, the institute spans 101 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #248.",
    "logoUrl": "https://images.unsplash.com/photo-1562774057?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907202?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://college-of-engineering-trivandrum-cet.ac.in",
    "feesAnnual": 135000,
    "rating": 4.6,
    "reviewsCount": 304,
    "averagePlacementLpa": 8.3,
    "highestPlacementLpa": 33.5,
    "type": "Deemed",
    "affiliation": "Telangana Technological University",
    "establishedYear": 1986,
    "campusSizeAcres": 101,
    "studentCount": 14000,
    "accreditation": "NAAC A++ | NIRF #248",
    "nirfRank": 248,
    "featured": false,
    "courses": [
      {
        "id": "c1-104",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      },
      {
        "id": "c2-104",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 128250,
        "stream": "Engineering"
      },
      {
        "id": "c3-104",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 121500,
        "stream": "Engineering"
      },
      {
        "id": "c4-104",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 114750,
        "stream": "Engineering"
      },
      {
        "id": "c5-104",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 135000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 8.3,
      "highestLpa": 33.5,
      "medianLpa": 7.3,
      "placementPercentage": 91,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 8.3,
          "highestPackageLpa": 33.5,
          "medianPackageLpa": 7.3,
          "placementPercentage": 91,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 7.6,
          "highestPackageLpa": 30.2,
          "medianPackageLpa": 6.8,
          "placementPercentage": 89,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 7.1,
          "highestPackageLpa": 28.5,
          "medianPackageLpa": 6.5,
          "placementPercentage": 86,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Hyderabad International Airport",
        "distanceKm": 21
      },
      "nearestRailwayStation": {
        "name": "Hyderabad Central Junction",
        "distanceKm": 5
      },
      "nearestMetroPoint": {
        "name": "Hyderabad Metro Station",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Hyderabad, College of Engineering Trivandrum CET is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Hyderabad Central Junction and Hyderabad International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to College of Engineering Trivandrum CET are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 99200,
          "closingRank": 148800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 93000,
          "closingRank": 142600
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 105400,
          "closingRank": 155000
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 111600,
          "closingRank": 161200
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 117800,
          "closingRank": 167400
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 186000,
          "closingRank": 272800
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 173600,
          "closingRank": 260400
        }
      ]
    }
  },
  {
    "id": "government-engineering-college-thrissur-gec",
    "name": "Government Engineering College Thrissur GEC",
    "slug": "government-engineering-college-thrissur-gec",
    "location": "Chennai, Tamil Nadu",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "description": "Premier private engineering institution in Chennai, Tamil Nadu renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Government Engineering College Thrissur GEC was established in 1987. Located in Chennai, Tamil Nadu, the institute spans 102 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #251.",
    "logoUrl": "https://images.unsplash.com/photo-1562774058?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907203?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://government-engineering-college-thrissur-gec.ac.in",
    "feesAnnual": 220000,
    "rating": 4.7,
    "reviewsCount": 308,
    "averagePlacementLpa": 9.1,
    "highestPlacementLpa": 35,
    "type": "Private",
    "affiliation": "Tamil Nadu Technological University",
    "establishedYear": 1987,
    "campusSizeAcres": 102,
    "studentCount": 14250,
    "accreditation": "NAAC A++ | NIRF #251",
    "nirfRank": 251,
    "featured": false,
    "courses": [
      {
        "id": "c1-105",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      },
      {
        "id": "c2-105",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 209000,
        "stream": "Engineering"
      },
      {
        "id": "c3-105",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 198000,
        "stream": "Engineering"
      },
      {
        "id": "c4-105",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 187000,
        "stream": "Engineering"
      },
      {
        "id": "c5-105",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 220000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 9.1,
      "highestLpa": 35,
      "medianLpa": 8,
      "placementPercentage": 92,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 35,
          "medianPackageLpa": 8,
          "placementPercentage": 92,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 8.4,
          "highestPackageLpa": 31.5,
          "medianPackageLpa": 7.5,
          "placementPercentage": 90,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 7.7,
          "highestPackageLpa": 29.8,
          "medianPackageLpa": 7.1,
          "placementPercentage": 87,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Chennai International Airport",
        "distanceKm": 22
      },
      "nearestRailwayStation": {
        "name": "Chennai Central Junction",
        "distanceKm": 6
      },
      "nearestMetroPoint": {
        "name": "Chennai Metro Station",
        "distanceKm": 4
      },
      "connectivityDetails": "Located in Chennai, Government Engineering College Thrissur GEC is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Chennai Central Junction and Chennai International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Government Engineering College Thrissur GEC are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 100400,
          "closingRank": 150600
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 94125,
          "closingRank": 144325
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 106675,
          "closingRank": 156875
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 112950,
          "closingRank": 163150
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 119225,
          "closingRank": 169425
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 188250,
          "closingRank": 276100
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 175700,
          "closingRank": 263550
        }
      ]
    }
  },
  {
    "id": "tkm-college-of-engineering-kollam",
    "name": "TKM College of Engineering Kollam",
    "slug": "tkm-college-of-engineering-kollam",
    "location": "Pune, Maharashtra",
    "city": "Pune",
    "state": "Maharashtra",
    "description": "Premier autonomous engineering institution in Pune, Maharashtra renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "TKM College of Engineering Kollam was established in 1988. Located in Pune, Maharashtra, the institute spans 103 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #254.",
    "logoUrl": "https://images.unsplash.com/photo-1562774059?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907204?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://tkm-college-of-engineering-kollam.ac.in",
    "feesAnnual": 165000,
    "rating": 4.1,
    "reviewsCount": 312,
    "averagePlacementLpa": 9.9,
    "highestPlacementLpa": 36.5,
    "type": "Autonomous",
    "affiliation": "Maharashtra Technological University",
    "establishedYear": 1988,
    "campusSizeAcres": 103,
    "studentCount": 14500,
    "accreditation": "NAAC A++ | NIRF #254",
    "nirfRank": 254,
    "featured": false,
    "courses": [
      {
        "id": "c1-106",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 165000,
        "stream": "Engineering"
      },
      {
        "id": "c2-106",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 156750,
        "stream": "Engineering"
      },
      {
        "id": "c3-106",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 148500,
        "stream": "Engineering"
      },
      {
        "id": "c4-106",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 140250,
        "stream": "Engineering"
      },
      {
        "id": "c5-106",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 165000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 9.9,
      "highestLpa": 36.5,
      "medianLpa": 8.7,
      "placementPercentage": 93,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 9.9,
          "highestPackageLpa": 36.5,
          "medianPackageLpa": 8.7,
          "placementPercentage": 93,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 32.9,
          "medianPackageLpa": 8.1,
          "placementPercentage": 91,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 8.4,
          "highestPackageLpa": 31,
          "medianPackageLpa": 7.7,
          "placementPercentage": 88,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Pune International Airport",
        "distanceKm": 23
      },
      "nearestRailwayStation": {
        "name": "Pune Central Junction",
        "distanceKm": 7
      },
      "nearestMetroPoint": {
        "name": "Pune Metro Station",
        "distanceKm": 5
      },
      "connectivityDetails": "Located in Pune, TKM College of Engineering Kollam is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Pune Central Junction and Pune International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to TKM College of Engineering Kollam are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 101600,
          "closingRank": 152400
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 95250,
          "closingRank": 146050
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 107950,
          "closingRank": 158750
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 114300,
          "closingRank": 165100
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 120650,
          "closingRank": 171450
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 190500,
          "closingRank": 279400
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 177800,
          "closingRank": 266700
        }
      ]
    }
  },
  {
    "id": "model-engineering-college-mec-kochi",
    "name": "Model Engineering College MEC Kochi",
    "slug": "model-engineering-college-mec-kochi",
    "location": "Noida, Uttar Pradesh",
    "city": "Noida",
    "state": "Uttar Pradesh",
    "description": "Premier private engineering institution in Noida, Uttar Pradesh renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "Model Engineering College MEC Kochi was established in 1989. Located in Noida, Uttar Pradesh, the institute spans 104 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #257.",
    "logoUrl": "https://images.unsplash.com/photo-1562774060?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907205?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://model-engineering-college-mec-kochi.ac.in",
    "feesAnnual": 260000,
    "rating": 4.2,
    "reviewsCount": 316,
    "averagePlacementLpa": 10.7,
    "highestPlacementLpa": 38,
    "type": "Private",
    "affiliation": "Uttar Pradesh Technological University",
    "establishedYear": 1989,
    "campusSizeAcres": 104,
    "studentCount": 14750,
    "accreditation": "NAAC A++ | NIRF #257",
    "nirfRank": 257,
    "featured": false,
    "courses": [
      {
        "id": "c1-107",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 260000,
        "stream": "Engineering"
      },
      {
        "id": "c2-107",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 247000,
        "stream": "Engineering"
      },
      {
        "id": "c3-107",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 234000,
        "stream": "Engineering"
      },
      {
        "id": "c4-107",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 221000,
        "stream": "Engineering"
      },
      {
        "id": "c5-107",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 260000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 10.7,
      "highestLpa": 38,
      "medianLpa": 9.4,
      "placementPercentage": 94,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 10.7,
          "highestPackageLpa": 38,
          "medianPackageLpa": 9.4,
          "placementPercentage": 94,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 9.8,
          "highestPackageLpa": 34.2,
          "medianPackageLpa": 8.8,
          "placementPercentage": 92,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 9.1,
          "highestPackageLpa": 32.3,
          "medianPackageLpa": 8.3,
          "placementPercentage": 89,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Noida International Airport",
        "distanceKm": 24
      },
      "nearestRailwayStation": {
        "name": "Noida Central Junction",
        "distanceKm": 8
      },
      "nearestMetroPoint": {
        "name": "Noida Metro Station",
        "distanceKm": 6
      },
      "connectivityDetails": "Located in Noida, Model Engineering College MEC Kochi is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Noida Central Junction and Noida International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to Model Engineering College MEC Kochi are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 102800,
          "closingRank": 154200
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 96375,
          "closingRank": 147775
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 109225,
          "closingRank": 160625
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 115650,
          "closingRank": 167050
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 122075,
          "closingRank": 173475
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 192750,
          "closingRank": 282700
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 179900,
          "closingRank": 269850
        }
      ]
    }
  },
  {
    "id": "ma-college-of-engineering-kothamangalam",
    "name": "MA College of Engineering Kothamangalam",
    "slug": "ma-college-of-engineering-kothamangalam",
    "location": "Gurugram, Haryana",
    "city": "Gurugram",
    "state": "Haryana",
    "description": "Premier deemed engineering institution in Gurugram, Haryana renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "MA College of Engineering Kothamangalam was established in 1990. Located in Gurugram, Haryana, the institute spans 105 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #260.",
    "logoUrl": "https://images.unsplash.com/photo-1562774061?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907206?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://ma-college-of-engineering-kothamangalam.ac.in",
    "feesAnnual": 120000,
    "rating": 4.3,
    "reviewsCount": 320,
    "averagePlacementLpa": 11.5,
    "highestPlacementLpa": 39.5,
    "type": "Deemed",
    "affiliation": "Haryana Technological University",
    "establishedYear": 1990,
    "campusSizeAcres": 105,
    "studentCount": 15000,
    "accreditation": "NAAC A++ | NIRF #260",
    "nirfRank": 260,
    "featured": false,
    "courses": [
      {
        "id": "c1-108",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 120000,
        "stream": "Engineering"
      },
      {
        "id": "c2-108",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 114000,
        "stream": "Engineering"
      },
      {
        "id": "c3-108",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 108000,
        "stream": "Engineering"
      },
      {
        "id": "c4-108",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 102000,
        "stream": "Engineering"
      },
      {
        "id": "c5-108",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 120000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 11.5,
      "highestLpa": 39.5,
      "medianLpa": 10.1,
      "placementPercentage": 95,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 11.5,
          "highestPackageLpa": 39.5,
          "medianPackageLpa": 10.1,
          "placementPercentage": 95,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 10.6,
          "highestPackageLpa": 35.6,
          "medianPackageLpa": 9.4,
          "placementPercentage": 93,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 9.8,
          "highestPackageLpa": 33.6,
          "medianPackageLpa": 9,
          "placementPercentage": 90,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Gurugram International Airport",
        "distanceKm": 25
      },
      "nearestRailwayStation": {
        "name": "Gurugram Central Junction",
        "distanceKm": 9
      },
      "nearestMetroPoint": {
        "name": "Gurugram Metro Station",
        "distanceKm": 2
      },
      "connectivityDetails": "Located in Gurugram, MA College of Engineering Kothamangalam is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Gurugram Central Junction and Gurugram International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to MA College of Engineering Kothamangalam are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 104000,
          "closingRank": 156000
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 97500,
          "closingRank": 149500
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 110500,
          "closingRank": 162500
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 117000,
          "closingRank": 169000
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 123500,
          "closingRank": 175500
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 195000,
          "closingRank": 286000
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 182000,
          "closingRank": 273000
        }
      ]
    }
  },
  {
    "id": "nss-college-of-engineering-palakkad",
    "name": "NSS College of Engineering Palakkad",
    "slug": "nss-college-of-engineering-palakkad",
    "location": "Ahmedabad, Gujarat",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "description": "Premier private engineering institution in Ahmedabad, Gujarat renowned for technology education, placements, and campus infrastructure.",
    "aboutText": "NSS College of Engineering Palakkad was established in 1991. Located in Ahmedabad, Gujarat, the institute spans 106 acres offering top undergraduate and postgraduate degree programs accredited with NIRF rank #263.",
    "logoUrl": "https://images.unsplash.com/photo-1562774062?auto=format&fit=crop&w=160&h=160&q=80",
    "bannerUrl": "https://images.unsplash.com/photo-1541339907207?auto=format&fit=crop&w=1200&h=400&q=80",
    "websiteUrl": "https://nss-college-of-engineering-palakkad.ac.in",
    "feesAnnual": 300000,
    "rating": 4.4,
    "reviewsCount": 324,
    "averagePlacementLpa": 12.3,
    "highestPlacementLpa": 41,
    "type": "Private",
    "affiliation": "Gujarat Technological University",
    "establishedYear": 1991,
    "campusSizeAcres": 106,
    "studentCount": 15250,
    "accreditation": "NAAC A++ | NIRF #263",
    "nirfRank": 263,
    "featured": false,
    "courses": [
      {
        "id": "c1-109",
        "name": "B.Tech Computer Science & Engineering",
        "code": "CSE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 300000,
        "stream": "Engineering"
      },
      {
        "id": "c2-109",
        "name": "B.Tech Electronics & Communication",
        "code": "ECE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 285000,
        "stream": "Engineering"
      },
      {
        "id": "c3-109",
        "name": "B.Tech Electrical & Electronics",
        "code": "EEE",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 270000,
        "stream": "Engineering"
      },
      {
        "id": "c4-109",
        "name": "B.Tech Mechanical Engineering",
        "code": "ME",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 255000,
        "stream": "Engineering"
      },
      {
        "id": "c5-109",
        "name": "B.Tech Artificial Intelligence & Data Science",
        "code": "AI-DS",
        "degree": "B.Tech",
        "durationYears": 4,
        "annualFees": 300000,
        "stream": "Engineering"
      }
    ],
    "placements": {
      "averageLpa": 12.3,
      "highestLpa": 41,
      "medianLpa": 10.8,
      "placementPercentage": 96,
      "placementYear": 2025,
      "historicalData": [
        {
          "year": 2025,
          "averagePackageLpa": 12.3,
          "highestPackageLpa": 41,
          "medianPackageLpa": 10.8,
          "placementPercentage": 96,
          "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Texas Instruments"
          ]
        },
        {
          "year": 2024,
          "averagePackageLpa": 11.3,
          "highestPackageLpa": 36.9,
          "medianPackageLpa": 10.1,
          "placementPercentage": 94,
          "topRecruiters": [
            "Amazon",
            "Adobe",
            "Oracle",
            "Goldman Sachs"
          ]
        },
        {
          "year": 2023,
          "averagePackageLpa": 10.5,
          "highestPackageLpa": 34.9,
          "medianPackageLpa": 9.6,
          "placementPercentage": 91,
          "topRecruiters": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant"
          ]
        }
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "Texas Instruments",
        "Atlassian",
        "Oracle",
        "TCS Digital"
      ],
      "sectorBreakdown": [
        {
          "sector": "Software & IT",
          "percentage": 45
        },
        {
          "sector": "Core Engineering",
          "percentage": 25
        },
        {
          "sector": "Analytics & Consulting",
          "percentage": 20
        },
        {
          "sector": "Finance & HFT",
          "percentage": 10
        }
      ]
    },
    "facilities": [
      "High Speed Campus Wi-Fi",
      "Central Digital Library",
      "Advanced Computing Labs",
      "Incubation & Startup Cell",
      "Hostels & Mess",
      "Sports Complex & Gymnasium"
    ],
    "connectivity": {
      "nearestAirport": {
        "name": "Ahmedabad International Airport",
        "distanceKm": 26
      },
      "nearestRailwayStation": {
        "name": "Ahmedabad Central Junction",
        "distanceKm": 10
      },
      "nearestMetroPoint": {
        "name": "Ahmedabad Metro Station",
        "distanceKm": 3
      },
      "connectivityDetails": "Located in Ahmedabad, NSS College of Engineering Palakkad is well connected by 24/7 city buses, app cabs, and metro/suburban transit lines linking the campus directly to Ahmedabad Central Junction and Ahmedabad International Airport."
    },
    "jeeCriteria": {
      "examName": "JEE Main",
      "eligibilityText": "Admissions to NSS College of Engineering Palakkad are granted via JEE Main merit scores and JoSAA/State counseling, requiring Class 12 aggregate of 75%+ (65% for reserved categories).",
      "cutoffTrends": [
        {
          "year": 2025,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 105200,
          "closingRank": 157800
        },
        {
          "year": 2024,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 98625,
          "closingRank": 151225
        },
        {
          "year": 2023,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 111775,
          "closingRank": 164375
        },
        {
          "year": 2022,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 118350,
          "closingRank": 170950
        },
        {
          "year": 2021,
          "branch": "Computer Science & Engineering",
          "category": "General",
          "openingRank": 124925,
          "closingRank": 177525
        },
        {
          "year": 2025,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 197250,
          "closingRank": 289300
        },
        {
          "year": 2024,
          "branch": "Electronics & Communication",
          "category": "General",
          "openingRank": 184100,
          "closingRank": 276150
        }
      ]
    }
  }
];
