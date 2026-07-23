# Software Requirement Specification (SRS)
## Disaster Management and Emergency Response System

### 1. Introduction
#### 1.1 Purpose
This document specifies the software requirements for the Disaster Management and Emergency Response System. It describes the scope, functional, and non-functional requirements to build a web-based platform for authorities to manage emergencies.

#### 1.2 Scope
The system will provide tools to collect real-time reports from citizens, broadcast alerts, coordinate rescue teams, and allocate resources efficiently.

---

### 2. Overall Description
#### 2.1 Product Perspective
The system operates as a unified web-based dashboard for disaster response coordinators. User reporting can be done via the web portal which immediately updates the centralized state.

#### 2.2 User Classes
- **Citizen/User**: Can report emergencies.
- **Admin/Authority**: Can issue alerts, manage rescue teams, monitor dashboard, and allocate resources.
- **Rescue Team**: Receives deployment tasks and reports status.

---

### 3. Functional Requirements
#### 3.1 User Registration and Reporting
- **REQ-1.1**: The system shall allow users to report emergencies anonymously or via a profile.
- **REQ-1.2**: Reports must include Location, Type of Disaster, Severity, and an optional Description.
- **REQ-1.3**: The system shall record the timestamp of each report automatically.

#### 3.2 Emergency Alert System
- **REQ-2.1**: Authorities shall be able to broadcast alerts to specific regions.
- **REQ-2.2**: Alerts shall be color-coded based on severity (e.g., Red for Critical, Yellow for Warning).

#### 3.3 Rescue Team Management
- **REQ-3.1**: The system shall maintain a database of available rescue units.
- **REQ-3.2**: Authorities can assign rescue teams to specific active disaster zones.
- **REQ-3.3**: The status of a team must toggle between 'Standby', 'Deployed', and 'Returning'.

#### 3.4 Resource Allocation Module
- **REQ-4.1**: The system shall track inventory of predefined resources (Medical Supplies, Food, Water, Equipment).
- **REQ-4.2**: Authorities shall be able to dispatch specific quantities of resources to specific disaster zones.
- **REQ-4.3**: Inventory counts must decrement automatically upon dispatch.

#### 3.5 Disaster Monitoring Dashboard
- **REQ-5.1**: The dashboard must display an aggregated view of active emergencies.
- **REQ-5.2**: The dashboard shall update data seamlessly to reflect real-time conditions.

---

### 4. Non-Functional Requirements
#### 4.1 Performance
The dashboard must load within 2 seconds and handle real-time data updates with minimal latency.

#### 4.2 Usability
The UI must be accessible and highly readable in high-stress environments, utilizing a dark-mode theme with high-contrast accent colors.

#### 4.3 Security
System access for Authorities and Rescue Teams requires secure authentication (future scope).
