import React from 'react';
import NewNav from '../Components/NewNav';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { orderDetails } from '../store/slices/orderSlice'
import { initializeUser, removeProduct, changeQuantity } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../Components/Url';


import Cart from '../Components/Cart'


const CartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartItems = useSelector((state) => {
        return state.user.cart;
    })







    const itemQuantity = async (quantity, item) => {
        let response = await fetch(`${BASE_URL}/changecart`, {
            method: 'POST',
            withCredentials: true,
            credentials: 'include',
            body: JSON.stringify({ ...item, quantity: quantity }),
            headers: {
                "Content-Type": "application/json",
            }
        })

        const data = await response.json();


        const newQuantity = parseInt(data.item.quantity, 10);

        dispatch(changeQuantity({ ...item, quantity: newQuantity }))
    }

    useEffect(() => {
        dispatch(orderDetails(cartItems));
    }, [cartItems, dispatch])

    useEffect(() => {
        const auth = async () => {
            let response = await fetch(`${BASE_URL}/cart`, {
                method: 'GET',
                withCredentials: true,
                credentials: 'include',
            })

            const data = await response.json();
           
            if (!data.status) {
                navigate('/loginsignup');
            }
            else if(data.user.cart.length === 0 && data.status === true) {
                navigate('/emptycartpage')
            }


          
            dispatch(initializeUser(data.user))

        }
        auth();

    }, [dispatch, navigate])


    const removeItem = async (item) => {
        try {
            let response = await fetch(`${BASE_URL}/removeitem`, {
                method: 'POST',
                withCredentials: true,
                credentials: 'include',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data = await response.json();
            if (data.user.cart.length === 0) {
                navigate('/emptycartpage')
            }

            dispatch(removeProduct(data.itemData));
        } catch (error) {
            console.log(error);
        }

    }

    const order = useSelector((state) => {
        return state.order;
    })








    return (
        <React.StrictMode>
            <NewNav />
            <Cart cartItems={cartItems} itemQuantity={itemQuantity} removeItem={removeItem} order={order} />
        </React.StrictMode>
    )
}

export default CartPage
