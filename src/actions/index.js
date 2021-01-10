export const logging_in = (credentials) => {
  return {
    type: 'LOGGINGIN',
    payload: {
      isLoggedIn: true,
      name: credentials.name
    }
  };
};

export const logging_out = () => {
  return {
    type: 'LOGGINGOUT'
  };
};

export const adding_product = (product) => {
  return {
    type: "ADDING_PRODUCT",
    payload: product
  };
};

export const reset_products = () => {
  return {
    type: "RESET_PRODUCTS"
  };
};