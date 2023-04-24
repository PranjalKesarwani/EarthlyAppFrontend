import React from 'react';
import Checkout from '../Components/Checkout';
import NewNav from '../Components/NewNav';
import { useSelector, useDispatch } from "react-redux";
import { setOrderAddress } from '../store/slices/orderSlice';
import { useEffect } from 'react';
import { orderDetails } from '../store/slices/orderSlice';
import { useNavigate } from 'react-router-dom';
import { initializeUser } from '../store/slices/userSlice';
import { BASE_URL } from '../Components/Url';



const CheckoutPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const auth = async () => {
            let response = await fetch(`${BASE_URL}/cart`, {
                method: 'GET',
                withCredentials: true,
                credentials: 'include'
            })

            const data = await response.json();
         
         
            if (!data.status) {
                navigate('/loginsignup');
            }
       
           

            dispatch(initializeUser(data.user))

        }
        auth();

    }, [dispatch,navigate])






    const cartItems = useSelector((state) => {
        return state.user.cart;
    })


    useEffect(() => {
        dispatch(orderDetails(cartItems));
    }, [cartItems, dispatch])

    const order = useSelector((state) => {
        return state.order;
    })

    const setDeliveryAddress = (addressDetails) => {

        dispatch(setOrderAddress(addressDetails));
    }

    const placeOrder = async () => {

        if (order.delivery_address === '') {
            alert('Choose address!')
        } else {
            let response = await fetch(`${BASE_URL}/placeorder`, {
                method: 'POST',
                withCredentials: true,
                credentials: 'include',
                body: JSON.stringify(order),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data = await response.json();
            if (!data.status) {
                navigate('/failurepage')
            }else{
                navigate('/successpage')
            } 

        }


    }





    return (
        <React.StrictMode>
            <NewNav />
            <Checkout setDeliveryAddress={setDeliveryAddress} order={order} placeOrder={placeOrder} />
        </React.StrictMode>
    )
}

export default CheckoutPage;

