📚 Full Stack Learning Management System (LMS)
🔹 Project Overview

This project is a Full Stack Learning Management System (LMS) developed using Django (Backend) and React (Frontend).
The system supports secure JWT-based authentication, role-based access control, and course management features for Admin, Instructor, and Student roles.

The goal of this project is to demonstrate understanding of authentication, authorization, REST APIs, frontend-backend integration, and dashboard reporting.

🔹 Features
🔐 Authentication & Authorization

User Registration

User Login

JWT-based Authentication

Secure Logout

Role-based access (Admin, Instructor, Student)

👤 User & Profile Management

View user profile

Update profile information

Role-specific user handling

📘 LMS Core Features

Course creation, update, and deletion

Course category management

Instructor-course relationship

Student enrollment system

Course listing and details view

📊 Dashboard & Reports

Total users summary

Total courses summary

Enrollment statistics

Role-wise user count

Admin dashboard overview

🔹 Tech Stack

Backend

Python

Django

Django REST Framework (DRF)

JWT Authentication (SimpleJWT)

SQLite (Development)

Frontend

React

Axios

React Router

HTML / CSS

🔹 Setup Instructions
🖥 Backend Setup (Django)
cd backend
python -m venv env
source env/bin/activate   # Mac/Linux
env\Scripts\activate      # Windows

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver


Backend will run at:
👉 http://127.0.0.1:8000

🌐 Frontend Setup (React)
cd frontend
npm install
npm start


Frontend will run at:
👉 http://localhost:3000

🔹 API Communication

React frontend communicates with Django backend via REST APIs

JWT token is stored in browser localStorage

Protected routes are secured using JWT authorization headers
