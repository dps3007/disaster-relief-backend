# Disaster Relief Resource Allocation System (Backend) 

A Node.js + Express + MongoDB backend API that helps NGOs and local authorities efficiently manage resources, volunteers, and aid distribution during disaster situations.


 # Why This Project?

In real-world disasters, distributing food, water, and medical supplies quickly is critical. This system provides:

✅ Centralized database for resources & shelters

✅ Volunteer and role management

✅ Request & approval workflows for aid

✅ Scalable backend for real-time use


# Features

🔐 Authentication & Authorization (JWT + Role-based access)

👥 User roles → Admin, Volunteer, Coordinator

📦 Resource tracking (food, water, medicine, shelters)

🏥 Relief center management

📍 Location-based distribution

📑 Request/Approval system for resource allocation


# Tech Stack

= Node.js → JavaScript runtime for building the backend

= Express.js → Framework for creating REST APIs

= MongoDB → NoSQL database for storing users, resources, requests

= Mongoose → ODM for modeling MongoDB data

= JWT → Authentication & secure user sessions

= Cors & Cookie-parser → Middleware for cross-origin + cookies handling
# Project Setup
## Clone repo
git clone https://github.com/your-username/disaster-relief-backend.git
cd disaster-relief-backend

## Install dependencies
npm install

## Setup environment variables
cp .env.example .env   # Add your MongoDB URI & JWT secret

## Run server
npm run dev

# API Endpoints
### Auth Routes
Method	Endpoint	Description

POST	/auth/register	Register user

POST	/auth/login	Login user

### Resource Routes
Method	Endpoint	Role	Description

GET	/resources	All	List all resources

POST	/resources	Admin	Add new resource

### Relief Center Routes
Method	Endpoint	Role	Description

GET	/relief-centers	All	List relief centers

POST	/relief-centers	Admin	Add new relief center

### Request Routes
Method	Endpoint	Role	Description

POST	/requests	Volunteer	Request resource

PATCH	/requests/:id/approve	Coordinator	Approve resource request


# Future Enhancements

🔔 Real-time updates with WebSockets

📊 Analytics dashboard frontend with React

🗺 Integration with Google Maps API for geo-tracking

# Author

Built with ❤️ by Deepanshu Pal
