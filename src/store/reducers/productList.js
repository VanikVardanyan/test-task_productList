import {
  PRODUCT_ACTIVE, ADD_PRODUCT, QUANTITY_PRODUCT, REMOVE_PRODUCT,
} from '../actionType';
import mockData from '../mockData';

const initialState = {
  items: mockData,
  bascetProducts: [
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const bascetProductAdd = { ...state }.items.find((prod) => prod.id === action.id);

      const product = {
        name: bascetProductAdd.name,
        about: bascetProductAdd.about,
        sale: bascetProductAdd.sale,
        id: bascetProductAdd.id,
        quantity: bascetProductAdd.quantity,
        img: bascetProductAdd.img,
      };
      return { items: state.items, bascetProducts: [...state.bascetProducts, product] };
    }
    case PRODUCT_ACTIVE: {
      const newProductList = state.items.map((product) => (
        {
          ...product,
          active: product.id === action.id ? !product.active : product.active,
        }
      ));
      return { items: newProductList, bascetProducts: state.bascetProducts };
    }
    case QUANTITY_PRODUCT: {
      const quantityProduct = state.bascetProducts.map((items) => (
        {
          ...items,
          quantity: action.id === items.id ? action.quantity : items.quantity,
        }
      ));
      return { items: state.items, bascetProducts: [...quantityProduct] };
    }
    case REMOVE_PRODUCT: {
      const removeProducts = state.bascetProducts.filter((item) => item.id !== action.id);
      const returnActive = state.items.map((product) => ({
        ...product,
        active: product.id === action.id ? !product.active : product.active,
      }));
      return { items: returnActive, bascetProducts: removeProducts };
    }
    default: return state;
  }
};
