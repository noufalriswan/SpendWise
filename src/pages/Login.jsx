import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "http://localhost:5000/api/login",
                {
                    email,
                    password,
                }
            );
            if (res.data.success) {

                localStorage.setItem(
                    "user",
                    JSON.stringify(res.data.user)
                );

                const user = JSON.parse(localStorage.getItem("user"));

                console.log(user._id);

                navigate("/dashboard");

            } else {
                alert(res.data.message);
            }

        } catch (error) {
            console.log(error);
            alert("Login Failed");
        }
    };
    return (
        <div className="login-page">
            <div className="login-card">
                <div className="logo">
                    <h1>💰 SpendWise</h1>
                    <p>Expense Tracker</p>
                </div>
                <h2>Welcome Back 👋</h2>
                <p className="subtitle">
                    Login to continue managing your finances
                </p>
                <form onSubmit={loginUser}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>
                <p className="register-text">
                    Don't have an account?{" "}
                    <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;