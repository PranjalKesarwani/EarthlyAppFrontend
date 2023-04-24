import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import SuccessPage from './Pages/SuccessPage';
import FailurePage from './Pages/FailurePage';
import LoginSignupPage from './Pages/LoginSignupPage';
import EmptyCartPage from './Pages/EmptyCartPage';






const App = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/cartpage' element={<CartPage />} />
                <Route exact path='/checkoutpage' element={<CheckoutPage />} />
                <Route exact path='/loginsignup' element={<LoginSignupPage/>} />
                <Route exact path='/emptycartpage' element={<EmptyCartPage/>} />
                <Route exact path='/successpage' element={<SuccessPage/>} />
                <Route exact path='/failurepage' element={<FailurePage/>} />
                <Route  path='*' element={<ErrorPage/>} />

            </Routes>

        </BrowserRouter>




    )
}

export default App;