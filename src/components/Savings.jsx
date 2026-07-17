import React, { useEffect, useState } from 'react'
import saving from "../assets/bank-removebg-preview.png"
import axios from 'axios'

function Savings() {
    const [Saving, setSaving] = useState([]);
    
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/transactions/${user._id}`)
            .then((res) => {
                setSaving(res.data);
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
            {Saving.map((item) => {
                const balance = calculateChange(
                    item.totalSavings,
                    item.preSaving
                );

                return (
                    <div className="dashboard-card saving-container" key={item._id}>
                        <div className="dashboard-icon">
                            <img src={saving} alt="Savings" className="saving" />
                        </div>

                        <div className="dashboard-content">
                            <p className="card-title">Total Saving</p>

                            <h2 className="card-amount">$ {item.totalSavings}</h2>

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

export default Savings
