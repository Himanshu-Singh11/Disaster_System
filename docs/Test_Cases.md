# Test Cases
## Disaster Management and Emergency Response System

| Test ID | Module | Description | Steps | Expected Result |
|---------|--------|-------------|-------|-----------------|
| TC-001 | User Reporting | Submit valid emergency report | 1. Go to Reporting form.<br>2. Fill all fields (Location='City Center', Type='Fire', Severity='High').<br>3. Click Submit. | A success message is shown, and the report appears on the Dashboard. |
| TC-002 | User Reporting | Submit report with missing fields | 1. Go to Reporting form.<br>2. Leave 'Location' blank.<br>3. Click Submit. | Form rejects submission and shows validation error on Location field. |
| TC-003 | Alert System | Broadcast an alert | 1. Go to Alerts module.<br>2. Enter message, select severity.<br>3. Click Broadcast. | Alert is added to active alerts list with appropriate color coding. |
| TC-004 | Rescue Teams | Deploy a Standby team | 1. Go to Rescue Teams module.<br>2. Select a team with 'Standby' status.<br>3. Change status to 'Deployed'. | Team status visually updates to 'Deployed' and increments deployed counter. |
| TC-005 | Resource Alloc | Dispatch resources | 1. Open Resource Allocation.<br>2. Enter quantity 50 for 'Medical'.<br>3. Click Allocate. | Medical inventory decreases by 50, transaction recorded in allocation history. |
| TC-006 | Resource Alloc | Over-allocate resources | 1. Open Resource Allocation.<br>2. Enter quantity greater than current stock.<br>3. Click Allocate. | System prevents allocation and displays "Insufficient quantity" warning. |
| TC-007 | Dashboard | Real-time overview aggregation | 1. Submit a new High severity report.<br>2. View Dashboard KPI counters. | Active Disaster counter increases by 1 instantly. |
