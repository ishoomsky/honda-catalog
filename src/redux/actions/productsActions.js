const PRODUCTS_LOADING='COUNTRIES_LOADING';
const PRODUCTS_ERROR='COUNTRIES_ERROR';
const PRODUCTS_SET='COUNTRIES_SET';

const productsLoadingAC = () => {
  return {
    type: PRODUCTS_LOADING,
  };
}

const productsErrorAC = () => {
  return {
    type: PRODUCTS_ERROR,
  };
}

const productsSetAC = (products) => {
  return {
    type: PRODUCTS_SET,
    products: products,
  };
}

export {
  productsLoadingAC, PRODUCTS_LOADING,
  productsErrorAC, PRODUCTS_ERROR,
  productsSetAC, PRODUCTS_SET,
}
