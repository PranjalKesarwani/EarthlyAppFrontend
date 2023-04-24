import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <React.StrictMode>
            <div style={{ textAlign: 'center', height: '100%', marginTop: '100px' }}>
                {/* <i className="fa-solid fa-check" style={{ fontSize: '10rem', color: 'green' }}></i> */}
                <div style={{ textAlign: 'center', height: '100%', marginTop: '200px'}}>
                    <i className="fa-sharp fa-solid fa-circle-exclamation" style={{ fontSize: '10rem', color: 'red',marginBottom:'20px' }}></i>
                    <h1>Error: Requested page not found</h1>
                </div>
            </div>
            <div style={{fontSize:'2.5rem',textAlign:'center',marginTop:'30px'}}>
                <Link  to='/'>Go To Home Page</Link>
            </div>
        </React.StrictMode>
    )
}

export default ErrorPage
