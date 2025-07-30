Express.js + PostgreSQL User API Project

This is a simple RESTful API built with Express.js and PostgreSQL. It performs basic CRUD operations on a users table.

This project is part of a mini Node.js assessment and demonstrates:
- Express.js routing
- PostgreSQL database integration
- Error handling
- Environment configuration using .env

Project Objectives:

- Set up Express server
- Connect to PostgreSQL using pg
- Implement RESTful CRUD endpoints
- Use .env to manage database credentials
- Handle errors gracefully
- Test endpoints with Postman

Project Structure:

express-postgres-api/
─ .env              - Environment variables
─ db.js             - PostgreSQL database pool setup
─ server.js         - Main entry point for Express server
─ routes/
    └── users.js      - User-related API routes

Requirements

- Node.js (v14+)
- PostgreSQL
- npm (comes with Node.js)
- A REST client like Postman

Setup Instructions

1. Clone the Repository

   git clone https://github.com/jikenta/express-pg-api.git
   cd express-pg-api

2. Install Dependencies

   npm install

3. Create .env File

   Create pg.env file in the root directory and add your PostgreSQL credentials:

   PGHOST=localhost
   PGUSER=postgres
   PGPASSWORD=your_postgres_password same as on installation
   PGDATABASE=my_api_db
   PGPORT=5432

4. Create PostgreSQL Database and Table

   Open PostgreSQL using psql and run the following:

   CREATE DATABASE user_api;

   \c my_api_db

   CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     name VARCHAR(100),
     email VARCHAR(100),
     age INTEGER
   );

Running the Server:

Start the server with the command:

   node server.js

The server will be running at:

   http://localhost:3000

API Endpoints

GET /
- Health check
- Response: "Welcome to the User API"

GET /users
- Fetch all users
- Response: JSON array of user objects

GET /users/:id
- Fetch a specific user by ID
- Response: JSON object

POST /users
- Create a new user
- Request body:
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "age": 25
  }
- Response: Created user object

PUT /users/:id
- Update an existing user
- Request body:
  {
    "name": "Updated Name",
    "email": "newemail@example.com",
    "age": 28
  }
- Response: Updated user object

DELETE /users/:id
- Delete a user by ID
- Response:
  {
    "message": "User deleted successfully"
  }

Error Handling

- 400 Bad Request – Invalid or missing data
- 404 Not Found – User not found
- 500 Internal Server Error – Server/database errors

Author

Name: Ikenta John Ifeanyi  
Project: Node.js + PostgreSQL Mini Project  

License

This project is open-source and free to use for educational and non-commercial purposes.
