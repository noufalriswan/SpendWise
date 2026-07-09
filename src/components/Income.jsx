import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import income from "../assets/income-removebg-preview.png"

function Income() {
    const [Income, setIncome] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/transactions")
            .then((res) => {
                setIncome(res.data);
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
            {Income.map((item) => {
                const balance = calculateChange(
                    item.totalIncome,
                    item.preIncome
                );

                return (
                    <div className="dashboard-card income-container" key={item._id}>
                        <div className="dashboard-icon">
                            <img src={income} alt="Savings" className="income" />
                        </div>

                        <div className="dashboard-content">
                            <p className="card-title">Total Income</p>

                            <h2 className="card-amount">$ {item.totalIncome}</h2>

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

export default Income
