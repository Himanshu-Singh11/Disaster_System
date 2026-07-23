# Nexus | Disaster Management & Emergency Response System

Nexus is a centralized, real-time command dashboard designed to streamline emergency coordination, incident reporting, and resource management. Built with a modern, high-fidelity glassmorphic interface, it provides distinct portals for **System Administrators** (Command & Control) and **Field Reporters** (Incident Logging).

---

## 🚀 Key Features

### 1. Dual-Role Authentication Gateway
Access is restricted via secure authorization codes tailored to each user's clearance level:
*   **Admin (Commander)**: Full access to the strategic dashboard, active map, rescue team registry, and resource dispatch panels.
*   **Reporter (Field Unit)**: A simplified, distraction-free interface optimized for rapid incident logging and public safety alerts.

### 2. Interactive Command & Control
*   **Live Radar Map**: Features a dynamic, rotating radar scan effect and pulsing neon emergency markers representing active incident locations.
*   **Dynamic Operations Loop**: Newly reported incidents from the field populate instantly on the Admin's panel in real-time.
*   **Tactical KPI Cards**: High-visibility metric cards tracking active incidents, deployed rescue crews, active broadcasts, and total available resources.

### 3. Resource & Team Management
*   **Team Deployment Registry**: A structured table for administrators to track teams, personnel sizes, specializations, and toggle active statuses.
*   **Resource Dispatcher**: A requisition utility allowing commanders to authorize the deployment of vital resources (Trauma Kits, Potable Water, MRE Rations, Heavy Equipment) with automatic inventory updates.

---

## 🛠️ Tech Stack

*   **Frontend**: HTML5, Semantic UI
*   **Styling**: CSS3 Custom Properties (Vanilla CSS) featuring a **Glassmorphic** space-cyber aesthetic, smooth keyframe animations, and container queries.
*   **Logic**: Vanilla JavaScript (ES6) handling state simulation, dynamic DOM updates, and custom toast notification pipelines.

---

## 💻 Getting Started

### Prerequisites
*   Python 3.x (recommended for launching a local development server to bypass file-system restrictions).

### Installation & Run
1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Himanshu-Singh11/Disaster_System.git
    cd Disaster_System
    ```

2.  **Start the Local Server**:
    Using Python's built-in HTTP server:
    ```bash
    python3 -m http.server 8000
    ```

3.  **Open in Browser**:
    Navigate to [http://localhost:8000](http://localhost:8000) in your web browser.

---

## 🔐 Credentials for Demo Testing

Use the following credentials at the login gateway to explore both roles:

| Operational Role | Access ID | Authorization Code |
| :--- | :--- | :--- |
| **Admin (Commander)** | `admin` | `admin123` |
| **Reporter (Field Unit)** | `reporter` | `rep123` |

---

## 📄 Project Documentation
For a deep dive into system design and project planning, refer to the included documents:
*   [SRS.md](SRS.md) - System Requirements Specification
*   [Diagrams.md](Diagrams.md) - ER & Class Architecture Diagrams
*   [Maintenance_Plan.md](Maintenance_Plan.md) - Project maintenance strategies
*   [Test_Cases.md](Test_Cases.md) - Quality assurance protocols
