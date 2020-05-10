import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Modal from '../Modal';
import { getBascetProduct } from '../../store/selectors/getBascetProduct';
import { quantityProduct, removeBascetProduct } from '../../store/action';

import './style.scss';

const Bascet = () => {
  const bascetProducts = useSelector(getBascetProduct);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const totalAmount = bascetProducts.reduce((num, item) => num + +item.sale * item.quantity, 0);

  const quantityChange = (e) => {
    const { value } = e.target;
    const { id } = e.target.dataset;

    setQuantity(value);
    dispatch(quantityProduct(id, quantity));
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  const handleRemove = (e) => {
    const { id } = e.target.dataset;
    dispatch(removeBascetProduct(id));
  };

  return (
    <>
      <div>
        <div className="titleBox">
          <h1>Bascet</h1>
          <Link to="/" className="BascetName"> come back home </Link>
        </div>
        <div className="home_body">
          {bascetProducts.length ? null : 'no products'}
          {bascetProducts.map((product) => (
            <div className="home_product_card bascet" key={product.id}>
              <div
                className="home_product_card-image"
                style={{ backgroundImage: `url(${product.img})` }}
              />
              <div className="home_product_card-about">{product.about}</div>
              <div className="home_product_card-sale">
                <div className="home_product_card-sale-price">
                  {product.sale * product.quantity}
                  <span className="dollar">$</span>
                </div>
                <div className="home_product_card-remove-button">
                  <button
                    type="button"
                    onClick={handleRemove}
                    data-id={product.id}
                  >
                    remove
                  </button>
                </div>
              </div>
              <div className="product_sum">
                <span>quantity of goods</span>
                <input
                  type="range"
                  min="1"
                  max="10"
                  onChange={quantityChange}
                  data-id={product.id}
                  data-sale={product.sale}
                  data-val={product.quantity}
                  value={product.quantity}
                />
                <span>{product.quantity}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="buy_card">
          <div className="total_amount">
            total amount:
            <span className="total_amout-number">
              {totalAmount}
            </span>
          </div>
          <div className="buy_card-button">
            <button
              type="button"
              className="buy_products_btn"
              onClick={handleToggleModal}
            >
              buy
            </button>
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        onClose={handleToggleModal}
        title="Receipt"
        onSubmit={() => {}}
      >
        <div className="modal_container">
          {useSelector(getBascetProduct).map((items) => (
            <div className="modal_body" key={items.id}>
              <div>
                name:
                {items.name}
              </div>
              <div>
                sale:
                {items.sale}
              </div>
              <div>
                quantity:
                {items.quantity}
              </div>
              <div>
                cost:
                {items.sale * items.quantity}
              </div>
            </div>
          ))}
          <div className="modal_total_amount">
            Total amount:
            {totalAmount}
            $
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Bascet;
