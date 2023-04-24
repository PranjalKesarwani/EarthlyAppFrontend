import React from "react";
import Card from "./CardTemp";
import { useDispatch } from 'react-redux';
import { addInCart } from "../store/slices/userSlice";
import { getProducts } from "../store/slices/productSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "./Url";







const CardSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productData = async () => {
    let response = await fetch(`${BASE_URL}/products`, { method: 'GET' });
    let data = await response.json();
    dispatch(getProducts(data));

  }
  productData();






  const addToCart = async (elem) => {


    let response = await fetch(`${BASE_URL}/addtocart`, {
      method: 'POST',
      withCredentials: true,
      credentials: 'include',
      body: JSON.stringify({ ...elem, quantity: '1' }),
      headers: {
        "Content-Type": "application/json",
      }
    })

    const data = await response.json();
    if (!data.status) {
      navigate('/loginsignup')
    }
    
    toast.success('Item added!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      style: {
        fontSize: '1.8rem'
      },
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    dispatch(addInCart({ ...data.item, quantity: 1 }))
  }

  return (
    <React.StrictMode>

      <div id="cardSection">
        <div className="cards">
          <Card addToCart={addToCart} />
        </div>
      </div>
      <ToastContainer />

    </React.StrictMode>
  )
}
export default CardSection;