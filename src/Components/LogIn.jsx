import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({handleLoginForm}) => {

    const [form, setForm] = useState({});


    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <React.StrictMode>
         
            <div className="container col-xxl-4 col-xl-5 col-lg-5 col-md-5 col-sm-6">
                <form className="row g-3" method="POST" onSubmit={(e)=>{e.preventDefault(); handleLoginForm(form)}} >

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
                    <Link to="/signup">Don't have an account? Sign Up</Link>
                </form>
            </div>
        </React.StrictMode>
    )
}

export default Login;