// LoginForm.js
import React, { useState } from "react";
import { login } from "../service/Controller";
import "./LoginForm.css";
function LoginForm({ setUserToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            login(username, password).then((res) => {
                console.log(res);
                setUserToken(res.token);
            });
        } else {
            setError(true);
        }
    };

    return (
        <div className="Form">
            <form onSubmit={handleLogin}>
                <div className="container">
                    <h2>Iniciar sesión</h2>
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Iniciar sesión</button>
                    {error && <p>Usuario o contraseña incorrectos.</p>}
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
