# Product Requirements Document (PRD)
## Disaster Relief Resource Allocation System (Backend)
### 1. Product Overview

**Product Name:**** Disaster Relief Resource Allocation System
**Version:** 1.0.0
**Product Type:** Backend API for Emergency Relief Management

The Disaster Relief Resource Allocation System is a backend-first platform that enables efficient allocation of critical resources (food, water, medicine, shelter) during natural disasters. Victims can request help via app, SMS, or volunteer relay, and NGOs/relief workers can fulfill requests through a real-time dashboard. The system ensures resilience in poor connectivity conditions, transparency in distribution, and optimized resource allocation.

### 2. Target Users

- **Victims:** Submit urgent help requests via app, SMS, or offline volunteer relay.

- **Volunteers:** Relay requests in offline conditions, act as intermediaries.

- **NGO/Relief Workers:** View and fulfill requests, update status of missions.

- **Admins:** Manage NGOs, monitor requests, oversee system operations.

### 3. Core Features
#### 3.1 User Authentication & Authorization

- **User Registration/Login**(JWT-based authentication).

- **Role-Based Access Control** (Admin, NGO/Relief Worker, Volunteer, Victim).

- **Password Management** (reset/change password).

- **Session Management** with refresh tokens.

#### 3.2 Request Management

- **equest Creation:** Victims submit help requests (App/SMS/Volunteer relay).

- **equest Listing:** NGOs can view all open requests filtered by priority/region.

- **equest Details:** Access detailed info (location, type of aid, urgency).

- **equest Updates:** Change status (Pending → In Progress → Fulfilled).

- **uplicate Detection:** Avoids multiple identical requests.

#### 3.3 Resource Allocation

- **Matching Engine:** Finds nearest available resources.

- **Fair Distribution Rules:** Priority to vulnerable groups (children, elderly).

- **Inventory Management:** Track available food, water, shelter, medicine.

- **Conflict Resolution:** Handles shortages with queue-based fairness.

#### 3.4 NGO/Relief Dashboard

- **Mission Assignment:** NGOs assign volunteers/resources to requests.

- **Status Tracking:** Visualize request lifecycle.

- **Geo-Tagging:** Location-based resource mapping.

- **Reporting Tools:** Generate summaries for operations.

#### 3.5 Communication Layer

- **Multi-Channel Notifications:** App push, SMS, radio/mesh relay.

- **Real-Time Updates:** WebSocket-based live dashboard.

- **Fallback Messaging:** LoRa/Volunteer relay in no-internet zones.

#### 3.6 System Health

- **Health Check API:** Endpoint for uptime monitoring.

- **Logs & Audit Trails:** Track all activities for accountability.

### 4. Technical Specifications
#### 4.1 API Endpoints Structure

- **Auth Routes** (`/api/v1/auth/`)

- **POST /register** – Register new user (`victim/NGO/volunteer/admin`).

- `POST /login` – User authentication.

- `POST /logout` – User logout.

- `POST /refresh-token` – Refresh access token.

- `POST /forgot-password` – Request password reset.

- `POST /reset-password/:token` – Reset password.

**Request Routes** (`/api/v1/requests/`)

- `POST /` – Submit request (victim/volunteer).

- `GET /` – List all requests (NGO/admin).

- `GET /:requestId` – Get request details.

- `PUT /:requestId` – Update request status (NGO/admin).

- `DELETE /:requestId` – Remove request (admin only).

**Resource Routes** (`/api/v1/resources/`)

- `POST /` – Add resources (NGO/admin).

- `GET /` – List available resources.

- `PUT /:resourceId` – Update resource quantity/status.

- `DELETE /:resourceId` – Remove resource (admin only).

**NGO Routes** (`/api/v1/ngos/`)

- `POST /` – Register NGO.

- `GET /` – List NGOs.

- `PUT /:ngoId` – Update NGO info.

- `DELETE /:ngoId` – Remove NGO (admin only).

**Health Check** (`/api/v1/healthcheck/`)

- `GET /` – System health status.

#### 4.2 Permission Matrix

| Feature                    | Admin | NGO/Relief Worker | Volunteer | Victim |
| -------------------------- | ----- | ----------------- | --------- | ------ |
| Register/Login             |  ✓    | ✓                | ✓         | ✓     |   
| Submit Request             |  ✗    | ✗                | ✓         | ✓     |
| View All Requests          |  ✓    | ✓                | ✗         | ✗     |
| Update Request Status      |  ✓    | ✓                | ✗         | ✗     |
| Manage Resources           |  ✓    | ✓                | ✗         | ✗     |
| Manage NGOs                |  ✓    | ✗                | ✗         | ✗     |
| Delete Requests/Resources  |  ✓    | ✗                | ✗         | ✗     |
| System Health Monitoring   |  ✓    | ✓                | ✗         | ✗     |


#### 4.3 Data Models

**User Roles:**

- `admin` – Full system control.

- `ngo_worker` – Manage and fulfill requests.

- `volunteer` – Relay requests, support NGOs.

- `victim` – Submit requests only.

**Request Status:**

- `pending` – Request received, awaiting action.

- `in_progress` – NGO allocated resources.

- `fulfilled` – Request completed.

**Resource Types:**

- `food, water, medicine, shelter, other.`

### 5. Security Features

- JWT authentication with refresh tokens.

- Role-based access middleware.

- Input validation for all endpoints.

- Encrypted SMS/API communication.

- Audit logs for all critical operations.

- CORS configuration for cross-origin requests.

### 6. File & Media Management

- Photo/Document Uploads: Victims can attach images (e.g., damaged house, injured person).

- File Storage: Stored in public/uploads or S3 bucket.

- Metadata Tracking: File name, size, type, uploader, timestamp.

- Secure Uploads: Validation against malicious files.

### 7. Success Criteria

- 90% of valid requests allocated within 5 minutes.

- System uptime 99% during disaster operations.

- Duplicate request detection accuracy >85%.

- End-to-end request lifecycle tracking.

- Smooth fallback to SMS/mesh when internet is unavailable.