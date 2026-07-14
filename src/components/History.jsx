import React, { useEffect, useState } from "react";
import axios from "axios";

function History() {

    const [transactions, setTransactions] = useState([]);

    const getTransactions = () => {
        axios
            .get("http://localhost:5000/api/transaction-history")
            .then((res) => {
                console.log(res.data);
                setTransactions(res.data.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <div className="Log-container">
            <div className="transaction-buttons w-100">
                <button className="active-btn">
                    All Transactions
                </button>
                <button className="income-btn">
                    <i className="bi bi-circle-fill"></i>
                    Income
                </button>
                <button className="expense-btn">
                    <i className="bi bi-circle-fill"></i>
                    Expense
                </button>
                <div className="ms-auto">
                    <button className="add-btn">
                        <i className="bi bi-plus"></i>
                        Add Transaction
                    </button>
                </div>
            </div>

            <div className="filter-section">
                <div className="search-box">
                    <i className="bi bi-search"></i>
                    <input
                        type="text"
                        placeholder="Search transaction..."
                    />
                </div>

                <select>
                    <option>Category</option>
                    <option>Food</option>
                    <option>Shopping</option>
                    <option>Transport</option>
                    <option>Salary</option>
                    <option>Bills</option>
                </select>
                <select>
                    <option>Type</option>
                    <option>Income</option>
                    <option>Expense</option>
                </select>
                <select>
                    <option>Payment Method</option>
                    <option>Cash</option>
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                    <option>UPI</option>
                </select>
                <select>
                    <option>Sort By Newest</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                </select>
                <button className="filter-btn">
                    <i className="bi bi-funnel"></i>
                </button>
            </div>

            <table className="transaction-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length > 0 ? (
                        transactions.map((item) => (
                            <tr key={item._id}>
                                <td>
                                    {new Date(item.date).toLocaleDateString()}
                                </td>
                                <td>{item.category}</td>
                                <td>{item.title}</td>
                                <td
                                    style={{
                                        color:
                                            item.type === "Income"
                                                ? "#22c55e"
                                                : "#ef4444",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {item.type === "Income" ? "+" : "-"}$
                                    {item.amount}
                                </td>

                                <td>

                                    <span
                                        className={
                                            item.type === "Income"
                                                ? "income-badge"
                                                : "expense-badge"
                                        }
                                    >
                                        {item.type}
                                    </span>

                                </td>

                            </tr>

                        ))

                    ) : (

                        <tr>
                            <td colSpan="5" style={{ textAlign: "center" }}>
                                No Transactions Found
                            </td>
                        </tr>

                    )}

                </tbody>

            </table>

        </div>
    );
}

export default History;