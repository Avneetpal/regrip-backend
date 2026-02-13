# Task Management Backend – REGRIP Assignment

## Live Backend URL

https://regrip-backend-production.up.railway.app


## Tech Stack

- Node.js
- Express.js
- MySQL (Railway Hosted)
- Sequelize ORM
- JWT Authentication
- Email OTP Login


## Project Overview

This project is a secure Task Management Backend system built using Node.js and Express.

It supports:

- Email-based OTP authentication
- JWT-based authorization
- Secure CRUD operations for tasks
- User-level data isolation
- Production deployment on Railway


## Authentication Flow

1) Send OTP

POST /auth/send-otp

Body:
{
  "email": "user@example.com"
}

2) Verify OTP

POST /auth/verify-otp

Body:
{
  "email": "user@example.com",
  "otp": "123456"
}

Response:
{
  "token": "JWT_TOKEN"
}

Use this token in request headers for protected routes:

Authorization: Bearer YOUR_TOKEN


## Task Endpoints (Protected)

Create Task
POST /tasks

Get All Tasks
GET /tasks

Update Task
PUT /tasks/:id

Delete Task
DELETE /tasks/:id

All task operations are user-specific and secured using JWT middleware.


## Security Features

- Short-lived JWT tokens
- OTP expiry validation
- Strict user authorization
- Sequelize ORM for SQL injection prevention
- Environment variables for sensitive data


## Database Structure

Users Table
- id
- email
- otp
- otp_expiry
- createdAt
- updatedAt

Tasks Table
- id
- title
- description
- status
- userId (Foreign Key)
- createdAt
- updatedAt


## Environment Variables

Create a .env file with:

DATABASE_URL=
PORT=
JWT_SECRET=


## How to Run Locally

1. Clone the repository
2. Install dependencies

npm install

3. Add .env file
4. Start server

npm start


## Deployment

The backend is deployed on Railway with a managed MySQL database.

Deployment includes:

- Automatic GitHub integration
- Railway managed MySQL
- Production environment configuration
- Public hosted endpoint


## Repository Structure

src/
  config/
  controllers/
  middleware/
  models/
  routes/
  app.js

server.js
package.json
README.md


## Design Decisions

- Sequelize ORM used for structured database modeling.
- JWT used for stateless authentication.
- Email-based OTP for secure login without storing passwords.
- Modular folder structure for scalability and maintainability.
- Railway used for fast and reliable cloud deployment.


## Author

Avneet Pal
Backend Assignment Submission – REGRIP INDIA PVT. LTD.
