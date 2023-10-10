// Make a login request to the API
const API_URL = 'http://localhost:8080';

const login = async (username, password) => {
    const res = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });
    return await res.json();
};

const getAnimals = async (token) => {
    const res = await fetch(`${API_URL}/api/animals`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
    });
    return await res.json();
}


export { login, getAnimals };