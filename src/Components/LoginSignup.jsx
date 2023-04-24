import React from 'react'
import { useState } from 'react'
// import { Link } from 'react-router-dom';


const LoginSignup = ({handleSignUp,handleLoginForm}) => {

    const [form, setForm] = useState({});
    const [showLogin, setShowLogin] = useState(true);
    const signupData = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return (
        <React.StrictMode>
       

            {showLogin ? <div className="container col-xxl-4 col-xl-5 col-lg-5 col-md-5 col-sm-6">
                <form className="row g-3" method="POST" onSubmit={(e) => { e.preventDefault(); handleLoginForm(form) }} >

                    <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input autoComplete="on" name="email" onChange={handleChange} type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input autoComplete="on" name="password" onChange={handleChange} type="password" className="form-control" id="inputPassword4" />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-success">Log in</button>

                    </div>
                    {/* <Link to="/signup"  onClick={() => setShowLogin(true)}>Don't have an account? Sign Up</Link> */}
                    <span className='link' onClick={() => setShowLogin(false)}>Don't have an account? Create One</span>

                </form>
            </div> : null}
            {/* -----------------------signup begins----------------------------------------------------------------------------------- */}
            {!showLogin ? <div className="container col-xxl-4 col-xl-5 col-lg-5 col-md-5 col-sm-6">
                <form className="row g-3" method="POST" onSubmit={(e) => { e.preventDefault(); handleSignUp(form) }}>

                    <div className="col-md-12">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input autoComplete="on" name="username" onChange={signupData} type="text" className="form-control" id="username" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input autoComplete="on" name="email" onChange={signupData} type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input autoComplete="on" name="password" onChange={signupData} type="password" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputPassword5" className="form-label">Confirm Password</label>
                        <input autoComplete="on" name="confirmPassword" onChange={signupData} type="password" className="form-control" id="inputPassword5" />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-success">Sign in</button>
                    </div>
                    {/* <Link to="/loginsignup" onClick={() => setShowLogin(true)}>Already have an account? Log In</Link> */}
                    <span className='link' onClick={() => setShowLogin(true)}>Already have an account? Log In</span>

                </form>

            </div>: null}

        </React.StrictMode>
    )
}

export default LoginSignup
