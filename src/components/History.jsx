import React from 'react'

function History() {
    return (
        <>
            {/* <div className='History-container border me-3 p-3 mt-3'>
                <div className='btn-group gap-2'>
                    <button>All Transaction</button>
                    <button><i class="bi bi-circle-fill text-success"></i>Income</button>
                    <button><i class="bi bi-circle-fill text-danger"></i>Expense</button>
                </div>
            </div> */}
            <div className="transaction-page">

                {/* Header */}
                <div className="transaction-header">

                    <div className="left-header">
                        <button className="active-btn">
                            All Transactions
                        </button>

                        <span className="income-dot">
                            ● Income
                        </span>

                        <span className="expense-dot">
                            ● Expense
                        </span>
                    </div>

                    <div className="right-header">
                        <select>
                            <option>This Month</option>
                        </select>

                        <button className="add-btn">
                            <i className="bi bi-plus"></i>
                            Add Transaction
                        </button>
                    </div>
                </div>

                {/* Filters */}

                <div className="filters">

                    <input
                        type="text"
                        placeholder="Search transaction..."
                    />
                    <select>
                        <option>Category</option>
                    </select>
                    <select>
                        <option>Type</option>
                    </select>
                    <select>
                        <option>Payment Method</option>
                    </select>
                    <select>
                        <option>Newest</option>
                    </select>
                </div>
                {/* Table */}
                <table className="transaction-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Payment</th>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {/*  <tbody>

                        <tr>

                            <td>
                                May 30
                            </td>

                            <td>
                                Grocery
                            </td>

                            <td>
                                Grocery Shopping
                            </td>

                            <td>
                                Credit Card
                            </td>

                            <td className="expense">
                                -$65.24
                            </td>

                            <td>

                                <span className="expense-badge">
                                    Expense
                                </span>

                            </td>

                            <td>

                                <span className="completed">
                                    Completed
                                </span>

                            </td>

                            <td>

                                <i className="bi bi-pencil"></i>

                                <i className="bi bi-trash ms-3"></i>

                            </td>

                        </tr>

                    </tbody>
 */}
                </table>

            </div>
        </>
    )
}

export default History
