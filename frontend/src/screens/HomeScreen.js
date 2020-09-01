import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {

  const productList = useSelector(state => state.productList);
  const {products, loading, error} = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());

    return () => {
      //
    };
  }, []);

  return loading ? <div>Loading...</div> :
  error ? <div>{error}</div> :
  <div>
    <div class="image-container">
      <img src="/images/explore1.png" />
      <h2>explore with us.</h2>
      <p>At taiga&#174;, we believe that a life outdoors is a life well lived. 
        We've been sharing our passion for the outdoors since the 1990's. Check out some of our
        favorite products below.</p>
    </div>
    <ul className="products">
      {
        products.map(product => 
          <li key={product._id}>
            <div className="product">
                <div className="product-name">
                    <Link to={'/product/' + product._id}>
                      <img className="product-image" src={product.image} alt="product"/>{product.name}
                    </Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">{product.rating} stars ({product.numReviews} reviews)</div>
            </div>
          </li>)
      }
    </ul>
  </div>
}

export default HomeScreen;