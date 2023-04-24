import React from 'react'
import NewNav from '../Components/NewNav'
import { Link } from 'react-router-dom'


const SuccessPage = () => {
    return (
        <React.StrictMode>
            <NewNav />

            <div style={{textAlign:'center',height:'100%',marginTop:'100px'}}>
                <i className="fa-solid fa-check" style={{ fontSize: '10rem', color: 'green' }}></i>
                <h1>Order Placed!</h1>
            </div>
            <div style={{fontSize:'2.5rem',textAlign:'center',marginTop:'30px'}}>
                <Link  to='/'>Go To Home Page</Link>
            </div>

        </React.StrictMode>
    )
}

export default SuccessPage
