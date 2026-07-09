import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import TotalBalance from './TotalBalance';
import Income from './Income';
import Expense from './Expense';
import Savings from './Savings';
import ExpenseChart from './ExpenseChart';
import ExpensePieChart from './ExpensePieChart';
import QuickTransaction from './QuickTransactions'
import RecentTransactions from './RecentTransactions';
import GoalCard from './GoalCard';

function MainBody() {
    return (
        <>
            <div className='d-flex flex-column w-100'>
                <Header />
                <div className='d-flex justify-content-between pe-4 mt-2'>
                    <TotalBalance />
                    <Income />
                    <Expense />
                    <Savings />
                </div>
                <div className='pt-2 d-flex w-100 gap-2 pe-4'>
                    <ExpenseChart />
                    <ExpensePieChart />
                </div>
                <div className='d-flex gap-2 mb-3'>
                    <RecentTransactions />
                    <QuickTransaction />
                    <GoalCard />
                </div>
            </div>
        </>
    )
}

export default MainBody
