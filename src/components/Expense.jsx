import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import expense from '../assets/expense-removebg-preview.png'

function Expense() {
    const [Expense, setExpense] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/transactions/${user._id}`)
            .then((res) => {
                setExpense(res.data);
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
            {Expense.map((item) => {
                const balance = calculateChange(
                    item.totalExpenses,
                    item.preExpense
                );

                return (
                    <div className="dashboard-card expense-container" key={item._id}>
                        <div className="dashboard-icon">
                            <img src={expense} alt="Savings" className="expense" />
                        </div>

                        <div className="dashboard-content">
                            <p className="card-title">Total Expense</p>

                            <h2 className="card-amount">$ {item.totalExpenses}</h2>

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

export default Expense
