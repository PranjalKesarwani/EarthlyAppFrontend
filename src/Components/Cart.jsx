import React from 'react'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'

const Cart = ({ itemQuantity, cartItems, removeItem, order }) => {

    return (
        <React.StrictMode>


            <h1 id='cartHeading' >Cart</h1>
            <hr className='my-4 w-25 mx-auto' />

            <div className="container my-5 itemContainer">


                <div className="cartItemsContainer mb-3 mx-3 col-7" >

                    {cartItems.map((item, index) => {
                        return <div key={index} className=" row g-0 mb-3 d-flex align-items-center justify-content-between cartItem" >
                            <div className="col-sm-4 col-5">
                                <img src={item.imgUrl} className="img-fluid rounded-start img-fluid" alt="Error occured" />
                            </div>
                            <div className="col-md-8 col-7 px-3">
                                <div className="card-body">
                                    <h5 className="card-title h1">{item.title}</h5>
                                    <span className='h2'>Quantity: </span><input type="number" max={9} min={1} value={item.quantity} onChange={(e) => { itemQuantity(e.target.value, item) }} />
                                    <div className='h2'>Price: ₹ {item.price}/-</div>
                                    <div className='h2'>Delivery Charge: ₹ 30/-</div>
                                    <div id='removeItem'><i onClick={() => { removeItem(item) }} className="fa-solid fa-trash"></i></div>
                                </div>
                            </div>
                        </div>
                    })}


                </div>

                <div>

                    <div className="cartDetails" >
                        <h1>Price Details</h1>
                        <hr />
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Quantity <span className='cartList'>{order.total_items} items</span> </li>
                            <li className="list-group-item">Price<span className='cartList'>₹ {order.total_cost}</span></li>
                            <li className="list-group-item">Discount(%)<span className='cartList'>{order.discount_in_percent}%</span></li>
                            <li className="list-group-item">Delivery Charges<span className='cartList'>₹ {order.delivery_charge}</span></li>
                            <li className="list-group-item">Total Amount<span className='cartList'>₹ {order.discounted_amount}</span></li>
                        </ul>
                        <hr />

                        <Link role='button' to="/checkoutpage" className='btn btn-warning w-100 px-3 py-3' style={{ fontSize: '17px' }}>Checkout</Link>

                    </div>
                </div>

            </div>


        </React.StrictMode>
    )
}

export default Cart
