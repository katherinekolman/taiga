import React from 'react';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <a href="index.html">taiga</a>
                </div>
                <div className="header-links">
                    <a href="cart.html">Cart</a>
                    <a href="login.html">Sign In</a>
                </div>
            </header>
            <aside className="sidebar">
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
            </aside>
            <main className="main">
                <div className="content">
                    <ul className="products">
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/i1.jpg" alt="product"/>
                                <div className="product-name">
                                    <a href="product.html">Hiking boots</a>
                                </div>
                                <div className="product-brand">Columbia</div>
                                <div className="product-price">$59.99</div>
                                <div className="product-rating">4.5 stars (10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/i1.jpg" alt="product"/>
                                <div className="product-name">
                                    <a href="product.html">Hiking boots</a>
                                </div>
                                <div className="product-brand">Columbia</div>
                                <div className="product-price">$59.99</div>
                                <div className="product-rating">4.5 stars (10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/i1.jpg" alt="product"/>
                                <div className="product-name">
                                    <a href="product.html">Hiking boots</a>
                                </div>
                                <div className="product-brand">Columbia</div>
                                <div className="product-price">$59.99</div>
                                <div className="product-rating">4.5 stars (10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/i1.jpg" alt="product"/>
                                <div className="product-name">
                                    <a href="product.html">Hiking boots</a>
                                </div>
                                <div className="product-brand">Columbia</div>
                                <div className="product-price">$59.99</div>
                                <div className="product-rating">4.5 stars (10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/i1.jpg" alt="product"/>
                                <div className="product-name">
                                    <a href="product.html">Hiking boots</a>
                                </div>
                                <div className="product-brand">Columbia</div>
                                <div className="product-price">$59.99</div>
                                <div className="product-rating">4.5 stars (10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/i1.jpg" alt="product"/>
                                <div className="product-name">
                                    <a href="product.html">Hiking boots</a>
                                </div>
                                <div className="product-brand">Columbia</div>
                                <div className="product-price">$59.99</div>
                                <div className="product-rating">4.5 stars (10 reviews)</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
            <footer className="footer">
                All rights reserved.
            </footer>
        </div>
  );
}

export default App;
