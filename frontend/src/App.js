import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';


function App() {

    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;

  const openMenu = () => {
    //document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
              <header className="header">
                  <div className="brand">
                      <button onClick={openMenu}>
                          &#9776;
                      </button>
                      <Link to="/">taiga</Link>
                  </div>
                  <div className="header-links">
                      <Link to="/cart">Cart</Link>
                      {userInfo ? <Link to="/profile">{userInfo.name}</Link> : <Link to="/signin">Sign in</Link>}
                  </div>
              </header>
              {/* FIXME: Future implementation */}
              {/* <aside className="sidebar">
                  <h3>Product Categories</h3>
                  <button className="sidebar-close-button" onClick={closeMenu}>X</button>
                  <ul>
                      <li>
                          <a href="index.html">Shoes</a>
                      </li>
                      <li>
                          <a href="index.html">Backpacks</a>
                      </li>
                  </ul>
              </aside> */}
              <main className="main">
                  <div className="content">
                      <Route path="/products" component={ProductsScreen}/>
                      <Route path="/payment" component={PaymentScreen}/>
                      <Route path="/placeOrder" component={PlaceOrderScreen}/>
                      <Route path="/shipping" component={ShippingScreen}/>
                      <Route path="/register" component={RegisterScreen}/>
                      <Route path="/signin" component={SigninScreen}/>
                      <Route path="/product/:id" component={ProductScreen}/>
                      <Route path="/cart/:id?" component={CartScreen} /> 
                      <Route path="/" exact={true} component={HomeScreen}/>
                  </div>
              </main>
              <footer className="footer">
                  <a href="https://github.com/katherinekolman/taiga"><img src='/images/github.png' alt='Github page' /></a>
              </footer>
          </div>
      </BrowserRouter>
  );
}

export default App;