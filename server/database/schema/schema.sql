-- CampusMatch PostgreSQL Database Schema

CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    target_course VARCHAR(100),
    target_city VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS colleges (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    description TEXT,
    about_text TEXT,
    logo_url VARCHAR(500),
    banner_url VARCHAR(500),
    website_url VARCHAR(255),
    fees_annual DECIMAL(12, 2) NOT NULL,
    rating DECIMAL(3, 2) DEFAULT 0.0,
    reviews_count INT DEFAULT 0,
    average_placement_lpa DECIMAL(5, 2),
    highest_placement_lpa DECIMAL(5, 2),
    college_type VARCHAR(50) NOT NULL,
    affiliation VARCHAR(255),
    established_year INT,
    campus_size_acres INT,
    student_count INT,
    accreditation VARCHAR(100),
    nirf_rank INT,
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS courses (
    id VARCHAR(50) PRIMARY KEY,
    college_id VARCHAR(50) REFERENCES colleges(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(50),
    degree VARCHAR(50) NOT NULL,
    duration_years INT NOT NULL,
    annual_fees DECIMAL(12, 2) NOT NULL,
    seats INT,
    eligibility TEXT,
    stream VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS reviews (
    id VARCHAR(36) PRIMARY KEY,
    college_id VARCHAR(50) REFERENCES colleges(id) ON DELETE CASCADE,
    user_name VARCHAR(255) NOT NULL,
    user_course VARCHAR(100),
    passout_year INT,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(255),
    comment TEXT NOT NULL,
    pros TEXT[],
    cons TEXT[],
    is_verified BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS saved_colleges (
    user_id VARCHAR(36) REFERENCES users(id) ON DELETE CASCADE,
    college_id VARCHAR(50) REFERENCES colleges(id) ON DELETE CASCADE,
    saved_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, college_id)
);
