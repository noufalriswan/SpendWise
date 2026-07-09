import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

function Header() {
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
        <>
            {users.map((user) => (
                <div
                    key={user._id}
                    className="d-flex w-100 header"
                >
                    <div>
                        <h4 className="text-light fw-bold">Welcome back, {user.fullName}👋</h4>
                        <p className="text-light">
                            Here's what's happening with your finances today.
                        </p>
                    </div>

                    <div className="ms-auto py-1 notification-icon">
                        <i className="bi bi-bell text-light fs-4"></i>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Header
