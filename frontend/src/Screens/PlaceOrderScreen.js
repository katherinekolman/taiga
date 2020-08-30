import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

function PlaceOrderScreen(props) {

    const cart = useSelector(state => state.cart);

    const {cartItems, shipping, payment} = cart;

    if (!shipping.address) {
        props.history.push("/shipping");
    } else if (!payment.paymentMethod) {
        props.history.push("/payment");
    }

    const itemsPrice = cartItems.reduce((a, c) => (a + c.price*c.qty).toFixed(2), 0);
    const shippingPrice = itemsPrice > 100 ? 0 : 7.54;
    const taxPrice = (0.15 * itemsPrice).toFixed(2);
    const totalPrice = (Number(itemsPrice) + Number(shippingPrice) + Number(taxPrice)).toFixed(2);

    const dispatch = useDispatch();

    const placeOrderHandler = () => {
        props.history.push("/");
    }

    useEffect(() => {
    }, []);


    return <div>
        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <div className="placeOrder">
            <div className="placeOrder-info">
                <div>
                    <h3>Shipping</h3>
                    <div>
                        {cart.shipping.address}, {cart.shipping.city},
                        {cart.shipping.zipCode}, {cart.shipping.country}
                    </div>
                </div>
                <div>
                    <h3>Payment</h3>
                    <div>Payment Method: {cart.payment.paymentMethod}</div>
                </div>
                <div>
                    <ul className="cart-list-container">
                        <li>
                            <h3>Shopping Cart</h3>
                            <div>Price:</div>
                        </li>
                            {
                                cartItems.length === 0 ? <div>Cart is empty</div> :
                                cartItems.map(item => 
                                    <li>
                                    <div className="cart-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                        <div className="cart-name">
                                            <div>
                                                <Link to={"/product/" + item.product}>{item.name}</Link>
                                            </div>
                                            <div>Quantity: {item.qty}
                                            </div>
                                        </div>
                                    <div className="cart-price">
                                        ${item.price}
                                    </div>
                                    </li>
                                )
                            }
                    </ul>
                </div>
            </div>
            <div className="placeOrder-action">
                <ul>
                    <li>
                        <button className="button-primary full-width" onClick={placeOrderHandler}>Place Order</button>
                    </li>
                    <li>
                        <h3>Order Summary</h3>
                    </li>
                    <li>
                        <div>Items</div>
                        <div>${itemsPrice}</div>
                    </li>
                    <li>
                        <div>Shipping</div>
                        <div>${shippingPrice}</div>
                    </li>
                    <li>
                        <div>Tax</div>
                        <div>${taxPrice}</div>
                    </li>
                    <li>
                        <div>Order Total</div>
                        <div>${totalPrice}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

export default PlaceOrderScreen;