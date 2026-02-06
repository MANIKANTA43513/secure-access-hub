🚀 Backend Developer Intern Assignment

Scalable REST API with Authentication & Role-Based Access Control

📌 Overview

This project is a secure, scalable backend system built using Node.js and Express.js, featuring:

JWT-based authentication

Role-Based Access Control (RBAC)

CRUD operations on a secondary entity (Tasks)

API versioning

Input validation and error handling

Swagger API documentation

A basic frontend UI to demonstrate API usage

The goal of this assignment is to demonstrate real-world backend engineering practices, not just CRUD functionality.

🛠 Tech Stack
Backend

Runtime: Node.js

Framework: Express.js

Database: MongoDB (Mongoose)

Authentication: JSON Web Tokens (JWT)

Security: bcryptjs, helmet, cors

Validation: Joi

Documentation: Swagger (swagger-jsdoc, swagger-ui-express)

Frontend

Framework: React.js

State Management: React Hooks (useState, useEffect)

HTTP Client: Axios

Tools

VS Code

Postman / Insomnia

Git & GitHub

✨ Features
🔐 Authentication & Authorization

User registration with hashed passwords

Secure login with JWT generation

JWT verification middleware

Role-based access (user, admin)

🧩 Role-Based Access Control (RBAC)

Users can manage only their own tasks

Admins can manage all tasks

Clean middleware-based role enforcement

📝 Task Management (CRUD)

Create a task

Fetch all tasks (role-aware)

Update tasks (ownership enforced)

Delete tasks (admin override supported)

📦 API Best Practices

REST-compliant endpoints

Proper HTTP status codes

Centralized error handling

API versioning (/api/v1)

📚 API Documentation

Interactive Swagger UI for testing APIs

Clear request/response schemas

📁 Project Structure
backend-assignment/
│
├── src/
│   ├── config/          # DB connection & environment setup
│   ├── controllers/     # Auth & Task business logic
│   ├── middleware/      # JWT & RBAC middleware
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Versioned API routes
│   ├── utils/           # Validation & error helpers
│   └── app.js           # Express app entry point
│
├── frontend/
│   ├── components/      # UI components
│   └── services/        # Axios API layer
│
├── .env                 # Environment variables
├── .gitignore
├── README.md
└── package.json

⚙️ Setup & Installation
1️⃣ Clone the Repository
git clone https://github.com/your-username/backend-assignment.git
cd backend-assignment

2️⃣ Install Backend Dependencies
npm install

3️⃣ Environment Variables

Create a .env file in the root directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret_key

4️⃣ Run the Backend Server
npm run dev


Server will start at:

http://localhost:5000

🔎 API Documentation (Swagger)

Once the server is running, open:




You can:

Test authentication APIs

Copy JWT tokens

Call protected routes directly

🖥 Frontend Usage
Features

Register & Login users

Store JWT in localStorage

Fetch protected data

Perform CRUD actions on tasks

Display API success/error messages

Start Frontend
cd frontend
npm install
npm start


Frontend runs at:

http://localhost:3000

🔐 Security Measures

Passwords are hashed using bcrypt

JWT tokens are signed with a secure secret

Protected routes require valid tokens

Role checks prevent unauthorized access

Input validation prevents malformed data

Helmet secures HTTP headers

CORS configured for safe cross-origin access

📈 Scalability & Future Enhancements

If this application were to scale in production:

🔄 Performance

Redis caching for frequent reads

Pagination for large datasets

🧱 Architecture

Split into microservices (Auth, Tasks, Users)

API Gateway for centralized routing

🐳 Deployment

Dockerize services

Use Nginx as reverse proxy

Deploy on AWS / GCP / Azure

📊 Observability

Winston for logging

Prometheus + Grafana for monitoring

✅ Evaluation Checklist Mapping
Requirement	Status
JWT Authentication	✅ Implemented
Role-Based Access Control	✅ Implemented
CRUD APIs	✅ Implemented
API Versioning	✅ Implemented
Input Validation	✅ Implemented
Swagger Documentation	✅ Implemented
Frontend Integration	✅ Implemented
Scalability Considerations	✅ Documented
👨‍💻 Author

Manikanta
Backend Developer Intern Candidate

This project reflects real-world backend engineering practices, focusing on security, scalability, and clean architecture.
