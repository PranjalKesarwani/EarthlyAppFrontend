import React from 'react';
import LoginSignup from '../Components/LoginSignup';
import NewNav from '../Components/NewNav';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/slices/userSlice';
import { BASE_URL } from '../Components/Url';


const LoginSignupPage = () => {
    const dispatch = useDispatch()


    const navigate = useNavigate();

    const handleSignUp = async (form) => {
        // const response = await fetch('http://localhost:8000/signup', {
        const response = await fetch(`${BASE_URL}/signup`, {
            method: 'POST',
            withCredentials: true,
             credentials: 'include',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': "application/json"
            }
        })

        const data = await response.json();
        
        if (!data.status) {
            alert('Fill all input fields please');
        } else {
            navigate('/');
        }
        dispatch(loginUser(data))

    }

    const handleLoginForm = async (form) => {

        let response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            withCredentials: true,
            credentials: 'include',
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
            }
        })

        const data = await response.json();
        // console.log(data);
        if (!data.status) {
            alert('Invalid Login Credentials!');
        }
        else {
            navigate('/');
        }
        dispatch(loginUser(data))

    }



    return (
        <React.StrictMode>
            <NewNav />
            <LoginSignup handleLoginForm={handleLoginForm} handleSignUp={handleSignUp}/>
        </React.StrictMode>
    )
}

export default LoginSignupPage
