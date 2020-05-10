import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getProductItems } from '../../store/selectors/getProductItems';
import { productActive, addProduct } from '../../store/action';

import './style.scss';

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector(getProductItems);

  const handleClick = (e) => {
    e.preventDefault();
    const { id } = e.target.dataset;
    dispatch(productActive(id));
    dispatch(addProduct(id));
  };

  return (
    <div>
      <div className="home_head">
        <div className="home_head-title">
          <div className="subtext_link">look at the</div>
          <Link to="/bascet" className="home_head-title-link">Bascet</Link>
        </div>
      </div>
      <div className="home_body">
        {selector.map((product) => (
          <div className="home_product_card" key={product.id}>
            <div
              className="home_product_card-image"
              style={{ backgroundImage: `url(${product.img})` }}
            />
            <div className="home_product_card-about">{product.about}</div>
            <div className="home_product_card-sale">
              <div className="home_product_card-sale-price">
                {product.sale}
                <span className="dollar">$</span>
              </div>
              <div
                className="home_product_card-sale-active"
                style={{ color: product.active ? 'red' : 'green' }}
              >
                {`${product.active ? 'o' : 'x'}`}
              </div>
              <div className="home_product_card-sale-buy">
                <button
                  type="button"
                  className="home_product_card-sale-buy-button"
                  style={{ display: product.active ? 'none' : 'block' }}
                  onClick={handleClick}
                  data-id={product.id}
                >
                  {product.active ? 'cancel' : 'buy'}
                </button>
                {product.active ? 'product in bascet' : ''}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
