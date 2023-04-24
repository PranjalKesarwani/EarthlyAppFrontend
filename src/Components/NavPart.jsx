import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from './Url';

const NavPart = ({ changeNav }) => {
    const navigate = useNavigate();

    const logout = async () => {

        let response = await fetch(`${BASE_URL}/logout`, {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
       
        })

        const data = await response.json();
        if (data.status) {
            navigate('/loginsignup')
        }else{
            alert('Please Login')
        }
    }

    return (
        <React.StrictMode>
            <nav id="navigation">

                <div >
                    <img src='./images/logo.png' alt="Some error occured" id="img" />
                    <p>Earthly</p>
                </div>

                <ul id='newNavPages' className="newNavPages">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/loginsignup">SignUp/Login</NavLink></li>
                    <li><NavLink role='button' onClick={() => { logout() }}>Logout</NavLink></li>
                    <li><NavLink to="/cartpage" ><i id="cart" className="fa-solid fa-cart-shopping"></i></NavLink></li>
                </ul>
                <div id="newHamburger" className='newBurger' onClick={changeNav}>
                    <div id="newBar1" className='newBar'></div>
                    <div id="newBar2" className='newBar'></div>
                    <div id="newBar3" className='newBar'></div>
                </div>
            </nav>

            {

            }
        </React.StrictMode>
    )
}

export default NavPart
