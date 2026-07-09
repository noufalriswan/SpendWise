import React, { useEffect, useState } from "react";
import axios from "axios";

function RecentTransactions() {

    const [transactions, setTransactions] = useState([]);

    const getTransactions = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/api/transaction-history"
            );

            setTransactions(res.data);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <div className="recent-card">

            <div className="recent-header">
                <h3>Recent Transactions</h3>
                <button>View All</button>
            </div>

            {transactions.map((item) => (

                <div className="transaction-item" key={item._id}>

                    <div className="transaction-left">

                        <div
                            className={`icon-box ${item.type === "Income"
                                    ? "income-icon"
                                    : "expense-icon"
                                }`}
                        >
                            <i
                                className={
                                    item.type === "Income"
                                        ? "bi bi-wallet2"
                                        : "bi bi-cart-fill"
                                }
                            ></i>
                        </div>

                        <div>

                            <h5>{item.title}</h5>

                            <p>
                                {new Date(item.date).toLocaleDateString()}
                                &nbsp; • &nbsp;
                                {item.category}
                            </p>

                        </div>

                    </div>

                    <h4
                        className={
                            item.type === "Income"
                                ? "Income"
                                : "Expense"
                        }
                    >
                        {item.type === "Income" ? "+" : "-"}$
                        {Number(item.amount).toFixed(2)}
                    </h4>

                </div>

            ))}

        </div>
    );
}

export default RecentTransactions;