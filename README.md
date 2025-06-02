# Appointment Scheduler (Backend)

This is the **backend API** for an appointment scheduling application, built with:

- Node.js
- Express
- Sequelize ORM
- Microsoft SQL Server (MSSQL)

##  Features

- RESTful API for managing appointments
- Sequelize integration with MSSQL
- `.env`-based configuration for DB and ports
- Clean project structure (controllers, routes, models)

##  Tech Stack

- **Node.js**
- **Express**
- **Sequelize**
- **MSSQL**
- **dotenv**
- **cors**

## Project Structure
appointment_server/
│
├── controllers/
│ └── appointmentsController.js
├── models/
│ └── appointment.js
├── routes/
│ └── appointmentRoutes.js
├── config/
│ └── db.config.js
├── server.js
├── .env
├── .gitignore
└── package.json


Example API Endpoints
GET /api/appointments – Get all appointments

POST /api/appointments – Create a new appointment

PUT /api/appointments/:id – Update an appointment

DELETE /api/appointments/:id – Delete an appointment


