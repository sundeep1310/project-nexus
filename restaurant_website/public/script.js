const API_URL = 'http://localhost:5000/api';

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.username);
            alert('Login successful!');
            window.location.href = '/login';
        } else {
            console.error('Login error:', data);
            alert(data.error || 'An error occurred during login');
        }
    } catch (error) {
        console.error('Fetch error:', error);
        alert('An error occurred. Please try again.');
    }
}

async function signup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${API_URL}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert('Signup successful! Please login.');
            window.location.href = '/login';
        } else {
            console.error('Signup error:', data);
            alert(data.error || 'An error occurred during signup');
        }
    } catch (error) {
        console.error('Fetch error:', error);
        alert('An error occurred. Please try again.');
    }
}

function checkAuth() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token && username) {
        document.querySelector('.container').innerHTML = `
            <h1>Welcome, ${username}!</h1>
            <button onclick="logout()">Logout</button>
        `;
    }
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = '/login';
}

window.onload = checkAuth;