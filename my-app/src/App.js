
import './App.css';
import Footer from './customer/component/Footer/Footer';
import Navigation from './customer/component/Navigation/Navigation'
import HomePage from './customer/component/pages/HomePage';
import Product from './customer/component/Product/Product';
import ProductCard from './customer/component/Product/ProductCard';
import LinearDeterminate from './ProductDetails/LinearDeterminate';
import ProductDetails from './ProductDetails/ProductDetails';
import ComboPackage from './ShareMarketWebsite/ComboPackage';
import Header from './ShareMarketWebsite/Header';
import Footer1 from './ShareMarketWebsite/Footer';
import Cart from './customer/component/Cart/Cart';
import Checkout from './customer/component/Checkout/Checkout';
import Order from './customer/component/Order/Order';
import OrderDetails from './customer/component/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouter from './Routers/CustomerRouter';
function App() {
  return (
    <div>

        <Routes>
            <Route path='/*' element={<CustomerRouter />}></Route>
        </Routes>
</div>
      

  //Stock Market website
  // <div className="bg-gray-50 min-h-screen">
  //     {/* <Header /> */}
  //     <ComboPackage />
  //     <Footer1 />
  //   </div>
  );
}

export default App;
