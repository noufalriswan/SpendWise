import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import history from "../assets/history.png"
import Expense from '../components/Expense';
import Savings from '../components/Savings';
import Income from '../components/Income';
import History from '../components/History'
function Transaction() {

    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0)

    const getUser = () => {
        axios
            .get("http://localhost:5000/api/users")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => console.log(err));
    };

    const getCount = () => {
        axios
            .get("http://localhost:5000/api/transaction-history")
            .then((res) => { setCount(res.data.count) })
            .catch(
                (err) => console.log(err)
            )
    }
    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        getCount();
    }, [])
    return (
        <>
            <div className='d-flex gap-2'>
                <Sidebar />
                <div className="d-flex w-100 header d-flex flex-column">
                    <div className='d-flex w-100'>
                        <div>
                            <h4 className="text-light fw-bold">Transaction</h4>
                            <p className="text-light">
                                View and manage all your income and expenses in one place.
                            </p>
                        </div>

                        <div className="ms-auto py-1 notification-icon">
                            <i className="bi bi-bell text-light fs-4"></i>
                        </div>
                    </div>
                    <div className='d-flex mt-3 gap-2'>
                        <div className="dashboard-card total-container">
                            <div className="dashboard-icon">
                                <img src={history} alt="Savings" className="total" />
                            </div>

                            <div className="dashboard-content">
                                <p className="card-title">Total Balance</p>

                                <h2 className="card-amount">{count}</h2>
                            </div>
                        </div>
                        <Income />
                        <Expense />
                        <Savings />
                    </div>
                    <div>
                        <History />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transaction
