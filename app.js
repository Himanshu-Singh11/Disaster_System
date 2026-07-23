// Simulated Database State
const state = {
    currentUser: null, // role: 'admin' or 'user'
    incidents: [
        { id: 'INC-01', location: 'Downtown Dist', type: 'Fire', severity: 'High', time: '10 mins ago' },
        { id: 'INC-02', location: 'River Road', type: 'Flood', severity: 'Medium', time: '1 hr ago' }
    ],
    teams: [
        { id: 'T-Alpha', type: 'Fire & Rescue', size: 12, status: 'Standby' },
        { id: 'T-Bravo', type: 'Medical First Resp', size: 8, status: 'Deployed' },
        { id: 'T-Charlie', type: 'Heavy Search', size: 15, status: 'Standby' },
        { id: 'T-Delta', type: 'Water Rescue', size: 6, status: 'Deployed' }
    ],
    alerts: [
        { region: 'River Road Area', severity: 'Warning', msg: 'Flood levels rising. Prepare for potential evacuation.', time: new Date().toLocaleTimeString() }
    ],
    resources: [
        { id: 'Medical', name: 'Trauma Kits', count: 450, icon: '<svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-red)" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>' },
        { id: 'Water', name: 'Potable Water (L)', count: 12000, icon: '<svg viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"></path></svg>' },
        { id: 'Food', name: 'MRE Rations', count: 8500, icon: '<svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" stroke-width="2"><path d="M6 13.87A4 4 0 017.41 6a5.11 5.11 0 011.05-1.54 5 5 0 017.08 0A5.11 5.11 0 0116.59 6 4 4 0 0118 13.87V21H6Z"></path></svg>' },
        { id: 'Equipment', name: 'Heavy Equip', count: 24, icon: '<svg viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>' }
    ]
};

// Elements
const navBtns = document.querySelectorAll('.nav-btn');
const views = document.querySelectorAll('.view');
const pageTitle = document.getElementById('page-title');

// Auth & Role Logic
const credentials = {
    admin: { id: 'admin', pass: 'admin123' },
    user: { id: 'reporter', pass: 'rep123' }
};

let selectedRole = 'admin';
const roleOpts = document.querySelectorAll('.role-opt');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const loginIdInput = document.getElementById('login-id');
const loginPassInput = document.getElementById('login-pass');
const loginError = document.getElementById('login-error');

roleOpts.forEach(opt => {
    opt.addEventListener('click', () => {
        roleOpts.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        selectedRole = opt.getAttribute('data-role');
        loginError.style.display = 'none';
        
        // Clear inputs on role change
        loginIdInput.value = '';
        loginPassInput.value = '';
    });
});

loginBtn.addEventListener('click', () => {
    const id = loginIdInput.value.trim();
    const pass = loginPassInput.value.trim();
    
    // Validate credentials
    if (id === credentials[selectedRole].id && pass === credentials[selectedRole].pass) {
        loginError.style.display = 'none';
        state.currentUser = selectedRole;
        document.body.classList.add('logged-in', `role-${selectedRole}`);
        
        // Set display info
        document.getElementById('user-display-name').innerText = selectedRole === 'admin' ? 'Commander Nexus' : 'Field Reporter 7';
        document.getElementById('user-display-role').innerText = selectedRole === 'admin' ? 'System Authority' : 'Emergency Unit';
        
        // Auto-switch to default view based on role
        const defaultView = selectedRole === 'admin' ? 'dashboard-view' : 'report-view';
        switchView(defaultView);
        showToast(`Session Initialized: ${selectedRole.toUpperCase()} Protocol`, 'primary');
        updateUI();
    } else {
        loginError.style.display = 'block';
        loginError.innerText = 'Access Denied: Invalid ID or Password';
        loginPassInput.value = ''; // Reset password field
    }
});

logoutBtn.addEventListener('click', () => {
    document.body.classList.remove('logged-in', 'role-admin', 'role-user');
    state.currentUser = null;
    showToast('Session Terminated Safely');
});

// Navigation Logic
function switchView(targetId) {
    views.forEach(v => v.classList.remove('active'));
    const target = document.getElementById(targetId);
    if(target) target.classList.add('active');
    
    navBtns.forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('data-target') === targetId) btn.classList.add('active');
    });

    const activeBtn = document.querySelector(`.nav-btn[data-target="${targetId}"]`);
    if(activeBtn) pageTitle.innerText = activeBtn.innerText;
}

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        switchView(targetId);
        updateUI();
    });
});

// Toast System
function showToast(message, type = 'primary') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'danger' ? 'critical' : ''}`;
    toast.style.borderLeftColor = type === 'danger' ? 'var(--accent-red)' : 'var(--brand-primary)';
    toast.innerText = message;
    
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Update UI
function updateUI() {
    // Top KPIs
    document.getElementById('kpi-incidents').innerText = state.incidents.length;
    document.getElementById('kpi-teams').innerText = state.teams.filter(t => t.status === 'Deployed').length;
    document.getElementById('kpi-alerts').innerText = state.alerts.length;
    
    let totalRes = state.resources.reduce((acc, r) => acc + (r.id !== 'Equipment' ? r.count : 0), 0);
    document.getElementById('kpi-resources').innerText = (totalRes/1000).toFixed(1) + 'k';

    // Activity List
    const activityList = document.getElementById('activity-list');
    if(activityList) {
        activityList.innerHTML = state.incidents.map(inc => `
            <li class="activity-item">
                <div class="activity-icon ${inc.severity === 'High' ? 'red' : ''}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4m0 4h.01"></path></svg>
                </div>
                <div class="activity-content">
                    <h4>${inc.type} @ ${inc.location}</h4>
                    <p>Reported: ${inc.time} | Sev: ${inc.severity}</p>
                </div>
            </li>
        `).join('');

        // Add map markers randomly for effect
        const map = document.getElementById('simulated-map');
        if(map) {
            map.innerHTML = '<div class="map-radar"></div><div class="map-overlay">Radar Active...</div>'; // clear old
            state.incidents.forEach(inc => {
                const marker = document.createElement('div');
                marker.className = 'map-marker';
                marker.style.left = Math.floor(Math.random() * 80 + 10) + '%';
                marker.style.top = Math.floor(Math.random() * 80 + 10) + '%';
                if(inc.severity !== 'High') marker.style.background = 'var(--accent-orange)';
                map.appendChild(marker);
            });
        }
    }

    // Alerts List
    const alertList = document.getElementById('alert-list-container');
    if(alertList) {
        alertList.innerHTML = state.alerts.map(a => `
            <div class="alert-card ${a.severity === 'Critical' ? 'critical' : ''}">
                <h4>${a.severity} Alert: ${a.region} <span class="alert-time">${a.time}</span></h4>
                <p>${a.msg}</p>
            </div>
        `).reverse().join('');
    }

    // Teams Table
    const tbody = document.querySelector('#teams-table tbody');
    if(tbody) {
        tbody.innerHTML = state.teams.map((t, index) => `
            <tr>
                <td><strong>${t.id}</strong></td>
                <td>${t.type}</td>
                <td>${t.size} Pax</td>
                <td><span class="status-pill ${t.status === 'Standby' ? 'status-standby' : 'status-deployed'}">${t.status}</span></td>
                <td>
                    <select class="status-select" onchange="changeTeamStatus(${index}, this.value)">
                        <option value="Standby" ${t.status === 'Standby' ? 'selected' : ''}>Standby</option>
                        <option value="Deployed" ${t.status === 'Deployed' ? 'selected' : ''}>Deploy</option>
                    </select>
                </td>
            </tr>
        `).join('');
    }

    // Resources Grid
    const resGrid = document.getElementById('resource-container');
    if(resGrid) {
        resGrid.innerHTML = state.resources.map(r => `
            <div class="resource-card">
                <div class="resource-icon">${r.icon}</div>
                <h3>${r.name}</h3>
                <h2>${r.count.toLocaleString()}</h2>
            </div>
        `).join('');
    }
}

// Actions
window.changeTeamStatus = function(index, newStatus) {
    state.teams[index].status = newStatus;
    showToast(`${state.teams[index].id} status changed to ${newStatus}`);
    updateUI();
};

// Form Submissions
document.getElementById('report-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const loc = document.getElementById('report-location').value;
    const type = document.getElementById('report-type').value;
    const sev = document.getElementById('report-severity').value;
    
    state.incidents.unshift({
        id: 'INC-' + Math.floor(Math.random()*1000),
        location: loc, type: type, severity: sev, time: 'Just now'
    });
    
    showToast(`Incident logged at ${loc}`, 'danger');
    e.target.reset();
    updateUI();
});

document.getElementById('alert-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const region = document.getElementById('alert-region').value;
    const sev = document.getElementById('alert-severity').value;
    const msg = document.getElementById('alert-msg').value;

    state.alerts.push({ region, severity: sev, msg, time: new Date().toLocaleTimeString() });
    showToast(`Alert Broadcasted to ${region}`);
    e.target.reset();
    updateUI();
});

document.getElementById('dispatch-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const type = document.getElementById('dispatch-type').value;
    const qty = parseInt(document.getElementById('dispatch-qty').value);
    
    const resource = state.resources.find(r => r.id === type);
    if(resource) {
        if(resource.count >= qty) {
            resource.count -= qty;
            showToast(`${qty} units of ${resource.name} dispatched.`);
        } else {
            showToast('Insufficient Resource Quantity!', 'danger');
        }
    }
    e.target.reset();
    updateUI();
});

// Init
updateUI();
