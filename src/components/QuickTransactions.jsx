import React, { useEffect, useState } from "react";
import axios from "axios";

function QuickTransaction() {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("Expense");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    const user = JSON.parse(localStorage.getItem("user"));

    const addTransaction = async () => {

        try {

            console.log({
                title,
                amount,
                type,
                category,
                date
            });

            const res = await axios.post(
                "http://localhost:5000/api/transaction-history",
                {
                    userId: user._id,
                    title,
                    amount: Number(amount),
                    type,
                    category,
                    date
                }
            );



            alert("Transaction Added Successfully");
            window.location.reload();

            window.refersh()
            setTitle("");
            setAmount("");
            setCategory("");
            setDate("");
            setType("Expense");

        } catch (error) {
            console.log(error.response?.data || error);
        }

    };

    return (
        <div className="quick-card">

            <h3>Quick Add Transaction</h3>

            <div className="form-group">
                <label>Title</label>
                <input
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Amount</label>
                <input
                    type="number"
                    placeholder="$ Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Type</label>

                <div className="type-btns">

                    <button
                        type="button"
                        className={type === "Expense" ? "active" : ""}
                        onClick={() => setType("Expense")}
                    >
                        Expense
                    </button>

                    <button
                        type="button"
                        className={type === "Income" ? "active" : ""}
                        onClick={() => setType("Income")}
                    >
                        Income
                    </button>

                </div>
            </div>

            <div className="form-group">
                <label>Category</label>

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Salary">Salary</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Transport">Transport</option>
                    <option value="Bills">Bills</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
            </div>

            <div className="form-group">
                <label>Date</label>
                <input type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)} />
            </div>

            <button className="add-btn" onClick={addTransaction}>
                Add Transaction
            </button>

        </div>
    );
}

export default QuickTransaction;