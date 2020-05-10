import {
  PRODUCT_ACTIVE, ADD_PRODUCT, QUANTITY_PRODUCT, REMOVE_PRODUCT,
} from '../actionType';

export const productActive = (id) => ({
  type: PRODUCT_ACTIVE,
  id,
});

export const addProduct = (id) => ({
  type: ADD_PRODUCT,
  id,
});

export const quantityProduct = (id, quantity) => ({
  type: QUANTITY_PRODUCT,
  id,
  quantity,
});

export const removeBascetProduct = (id) => ({
  type: REMOVE_PRODUCT,
  id,
});
