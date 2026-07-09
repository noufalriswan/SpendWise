import React from 'react'
import Sidebar from '../components/Sidebar'
import MainBody from '../components/MainBody'

function Dashboard() {
    return (
        <>
            <div className='d-flex gap-4'>
                <Sidebar />
                <MainBody />
            </div>
        </>
    )
}

export default Dashboard
