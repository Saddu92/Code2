Code2 School Management API Project Overview
This project implements a RESTful API using Node.js, Express.js, and MySQL to manage school data. It allows users to:

Add new schools with details including name, address, geographic coordinates (latitude and longitude), and contact number.
Retrieve a list of all schools sorted by proximity to a specified location (user's latitude and longitude).

Features
Add School:
Users can add schools by providing necessary information with validation.
List Schools:
Retrieve all schools sorted based on their distance from the user's location using geospatial calculations.
Input Validation:
Ensures required fields are provided and valid before insertion.
Error Handling:
Provides proper error responses for invalid inputs or database issues.

Technology Stack
Node.js — server runtime
Express.js — framework for building API endpoints
MySQL — database for persistent storage
mysql2 npm package — for MySQL connectivity
dotenv — for environment variable management
Postman / Insomnia — tools for API testing

Setup Instructions
1. Clone the repository
git clone 
cd 
2. Install dependencies
npm install

4. Setup MySQL Database
Login to your MySQL server and run:
CREATE DATABASE school_management;

USE school_management;

CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  contactNumber VARCHAR(20)
);

4. Configure Environment Variables
Create a .env file in the project root with:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=school_management
Replace your_mysql_password with your actual MySQL password.

5. Start the Server
node index.js

