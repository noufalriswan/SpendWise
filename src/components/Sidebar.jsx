import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

function Sidebar() {

    const [users, setUsers] = useState([]);

    const getUser = () => {
        axios
            .get("http://localhost:5000/api/users")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="main-container">
            <div className="wrapper">
                {/* Logo */}
                <div className="Logo">
                    <img src={logo} alt="Logo" />
                    <div className="mt-3">
                        <h3>SpendWise</h3>
                        <p>Expense Tracker</p>
                    </div>
                </div>
                {/* Navigation */}
                <div className="navbar-btn">
                    <Link className="active" to="/dashboard">
                        <i className="bi bi-house-door-fill"></i>
                        Dashboard
                    </Link>
                    <Link to="/transaction">
                        <i className="bi bi-wallet2"></i>
                        Transactions
                    </Link>
                    <Link to="/addtransaction">
                        <i className="bi bi-plus-circle-fill"></i>
                        Add Transaction
                    </Link>
                    <Link to="/catogories">
                        <i className="bi bi-grid-fill"></i>
                        Categories
                    </Link>
                    <Link className="report">
                        <i className="bi bi-bar-chart-fill"></i>
                        Reports
                    </Link>
                    <Link to="/budgets">
                        <i className="bi bi-pie-chart-fill"></i>
                        Budgets
                    </Link>
                    <Link to="/goals">
                        <i className="bi bi-bullseye"></i>
                        Goals
                    </Link>
                    <Link to="/setting">
                        <i className="bi bi-gear-fill"></i>
                        Settings
                    </Link>
                </div>
                {/* Upgrade Card */}
                <div className="upgrade-card">
                    <div className="crown">
                        <i className="bi bi-crown-fill"></i>
                    </div>
                    <h4>Upgrade to Pro</h4>
                    <p>
                        Unlock advanced analytics and smart budgeting.
                    </p>
                    <button className="upgrade-btn">
                        Upgrade Now
                    </button>
                </div>
            </div>
            {/* Profile */}
            {users.map((user) => (
                <div className="profile-container mt-3" key={user._id}>
                    <div className="profile-left">
                        <img
                            src={profile}
                            alt="Profile"
                        />
                        <div>
                            <h5>{user.fullName}</h5>
                            <p>{user.email}</p>
                        </div>
                    </div>
                    <i className="bi bi-chevron-down"></i>
                </div>
            ))}
        </div>
    );
}

export default Sidebar;