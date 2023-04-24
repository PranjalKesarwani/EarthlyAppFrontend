import React from 'react'
import NewNav from '../Components/NewNav'
import { Link } from 'react-router-dom'

const FailurePage = () => {
    return (
        <React.StrictMode>
            <NewNav />
            <div style={{textAlign:'center',height:'100%',marginTop:'100px'}}>
                <i class="fa-solid fa-xmark" style={{ fontSize: '12rem', color: 'red' }}></i>
                <h1>Order Failed!</h1>
            </div>
            <div style={{fontSize:'2.5rem',textAlign:'center',marginTop:'30px'}}>
                <Link  to='/'>Go To Home Page</Link>
            </div>
        </React.StrictMode>
    )
}

export default FailurePage
