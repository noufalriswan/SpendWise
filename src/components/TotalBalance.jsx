import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import total from '../assets/total-removebg-preview.png'

function TotalBalance() {
    const [Total, setTotal] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/transactions/${user._id}`)
            .then((res) => {
                setTotal(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const calculateChange = (current, previous) => {
        if (previous === 0) {
            return {
                percentage: 0,
                isIncrease: true,
            };
        }

        const change = ((current - previous) / previous) * 100;

        return {
            percentage: Math.abs(change).toFixed(1),
            isIncrease: change >= 0,
        };
    };

    return (
        <>
            {Total.map((item) => {
                const balance = calculateChange(
                    item.totalBalance,
                    item.preBalance
                );

                return (
                    <div className="dashboard-card total-container" key={item._id}>
                        <div className="dashboard-icon">
                            <img src={total} alt="Savings" className="total" />
                        </div>

                        <div className="dashboard-content">
                            <p className="card-title">Total Balance</p>

                            <h2 className="card-amount">$ {item.totalBalance}</h2>

                            <p className={balance.isIncrease ? "text-success" : "text-danger"}>
                                {balance.isIncrease ? "↑" : "↓"} {balance.percentage}% from last month
                            </p>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default TotalBalance;
