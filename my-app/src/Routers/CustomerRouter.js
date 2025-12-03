import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../customer/component/pages/HomePage';
import Card from '@mui/material/Card';
import Navigation from '../customer/component/Navigation/Navigation';
import Footer from '../customer/component/Footer/Footer';
import OrderDetails from '../customer/component/Order/OrderDetails';
import Product from '../customer/component/Product/Product';
import ProductDetails from '../ProductDetails/ProductDetails';
import Checkout from '../customer/component/Checkout/Checkout';
import Cart from '../customer/component/Cart/Cart';
import Order from '../customer/component/Order/Order';

const CustomerRouter = () => {
    return <div>
    <div>
<Navigation/>
    </div>
            <Routes>
                <Route path='/login' element={<HomePage />} ></Route>
                <Route path='/register' element={<HomePage />} ></Route>


                <Route path='/' element={<HomePage />} ></Route>
                <Route path='/cart' element={<Cart />} ></Route>
                <Route path='/:levelone/:leveltwo/:levelthrird' element={<Product />} ></Route>
                <Route path='/:product/:productId' element={<ProductDetails />} ></Route>
                <Route path='/checkout' element={<Checkout />} ></Route>
                <Route path='/account/order' element={<Order />} ></Route>
                <Route path='/account/order/:orderId' element={<OrderDetails />} ></Route>

            </Routes>


             <div>
       
      
       
       {/* <Order /> */}
       {/* <OrderDetails/> */}
        {/* <LinearDeterminate /> */}
      </div>
             <Footer />
    </div>;
}

export default CustomerRouter;