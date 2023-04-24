import React, { useEffect } from 'react';
import { useState } from 'react';
import { addAddress, initializeUser } from '../store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from './Url';




const Checkout = ({ order, setDeliveryAddress, placeOrder }) => {

  const dispatch = useDispatch();


  const blank_form = {
    first_name: '',
    last_name: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  }

  const [form, setForm] = useState(blank_form);

  const validateForm = async (form) => {

    if (!form.first_name || !form.last_name || !form.address || !form.city || !form.state || !form.zip) {
      alert('Enter the required fields');
    } else {
      let response = await fetch(`${BASE_URL}/addaddress`, {
        method: 'POST',
        withCredentials: true,
        credentials: 'include',
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        }
      })

      const data = await response.json();
      dispatch(addAddress(data.address));
    }
  }

  const addressData = useSelector((state) => {
    return state.user.addresses
  });


  const chosenAddress = useSelector((state) => {
    return state.order.delivery_address;
  })



  useEffect(() => {
    const auth = async () => {
      let response = await fetch(`${BASE_URL}/user`, {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
      })

      const data = await response.json();

      dispatch(initializeUser(data.user))

    }
    auth();

  }, [dispatch])






  return (
    <React.StrictMode>
      <div >
        <h1 className='addressHeading' style={{ textAlign: 'center', margin: '10px 0' }} >Checkout Page</h1>
        <hr className='w-25 mx-auto' />
      </div>

      <div className="container-fluid col-12 checkoutPageContainer">

        <div className="col-6 addressSection">

          {/* first column begins */}
          <div>
            <h1 className='addressHeading' style={{ marginBottom: '10px' }}>Select Address</h1>
          </div>
          <div className="" style={{ fontSize: '2rem' }}>

            {
              addressData.map((addressDetails, index) => {
                return <div key={index} className=" mb-3 addressOptions">
                  <div className="card-body">
                    <h5 className="card-title h1">Address</h5>
                    <p className="card-text">{addressDetails.address} {addressDetails.address2}, {addressDetails.city}, {addressDetails.zip},{addressDetails.state}</p>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Use this address
                    </label>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => { setDeliveryAddress(addressDetails) }} />
                  </div>
                </div>
              })
            }



          </div>

          <hr className='my-5' />
          <div>
            <h1 className='addressHeading' id='addressHeading'><span style={{ opacity: '0.5' }}>or</span> Add new address</h1>
          </div>


          <div className="col-md-12">
            <div className="form-control my-5  " >
              <form noValidate='' className="row g-3" style={{ fontSize: '2rem' }} onSubmit={(e) => { e.preventDefault(); validateForm(form) }}>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label" >First Name</label>
                  <input type="text" className="form-control" id="inputEmail4" style={{ fontSize: '2rem' }} onChange={(e) => { setForm({ ...form, first_name: e.target.value }) }} value={form.first_name} required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label" >Last Name</label>
                  <input type="text" className="form-control" id="inputPassword4" style={{ fontSize: '2rem' }} onChange={(e) => { setForm({ ...form, last_name: e.target.value }) }} value={form.last_name} required />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label" >Address</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" style={{ fontSize: '2rem' }} required onChange={(e) => { setForm({ ...form, address: e.target.value }) }} value={form.address} />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" style={{ fontSize: '2rem' }} onChange={(e) => { setForm({ ...form, address2: e.target.value }) }} value={form.address2} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">City</label>
                  <input type="text" className="form-control" id="inputCity" style={{ fontSize: '2rem' }} onChange={(e) => { setForm({ ...form, city: e.target.value }) }} value={form.city} required />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">State</label>
                  <select id="inputState" className="form-select" style={{ fontSize: '2rem' }} onChange={(e) => { setForm({ ...form, state: e.target.value }) }} value={form.state} required>
                    <option>Choose...</option>
                    <option>Uttar Pradesh</option>
                    <option>Delhi</option>
                    <option>Punjab</option>
                    <option>Haryana</option>
                    <option>Madhya Pradesh</option>
                    <option>Rajasthan</option>
                    <option>Orissa</option>
                    <option>Himachal Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>West Bengal</option>
                    <option>Maharashtra</option>
                    <option>Goa</option>
                    <option>Telangana</option>
                    <option>Tamil Nadu</option>
                    <option>Kerela</option>
                    <option>Andhra Pradesh</option>
                    <option>Chhatisgarh</option>
                    <option>Jharkhand</option>
                    <option>Bihar</option>
                    <option>Assam</option>
                    <option>Meghalaya</option>
                    <option>Jammu & Kashmir</option>
                    <option>Arunanchal Pradesh</option>
                    <option>Gujarat</option>
                    <option>Tripura</option>
                    <option>Sikkim</option>
                    <option>Nagaland</option>
                    <option>Manipur</option>
                    <option>Mizoram</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputZip" className="form-label" required>Zip</label>
                  <input type="number" maxLength={6} minLength={6} className="form-control" id="inputZip" style={{ fontSize: '2rem' }} onChange={(e) => { setForm({ ...form, zip: e.target.value }) }} value={form.zip} required />
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button className="btn btn-success my-4" type="submit" style={{ fontSize: '2rem' }}>Add New Address</button>
                </div>


              </form>
            </div>
          </div>

        </div>

        {/* first column ends */}

        {/* second column begins */}

        <div className="col-6 checkoutDetailsSection">


          <div className="checkoutDetails " >
            <div className="card-header h1">
              Order Details
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Quantity <span className='cartList'>{order.total_items} items</span> </li>
              <li className="list-group-item">Price<span className='cartList'>₹ {order.total_cost}</span></li>
              <li className="list-group-item">Discount(%)<span className='cartList'>{order.discount_in_percent}%</span></li>
              <li className="list-group-item">Delivery Charges<span className='cartList'>₹ {order.delivery_charge}</span></li>
              <li className="list-group-item">Total Amount<span className='cartList'>₹ {order.discounted_amount}</span></li>


            </ul>
            <div className="col-12">
              <button onClick={() => { placeOrder() }} type="submit" className="btn btn-primary w-100" style={{ fontSize: '2rem' }}>Place Order</button>
            </div>
          </div>



          <div className="addressDetails">
            <div className="" >
              <div className="card-body">
                <h5 className="card-title h1">Order Address</h5>

                <p className="card-text">{chosenAddress}</p>

              </div>
            </div>
          </div>


        </div>

        {/* second column ends */}


      </div>

    </React.StrictMode>
  )
}

export default Checkout

