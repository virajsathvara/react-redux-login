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

export const search_products = (products, query) => {
  console.log('search text is: ', query);
  console.log('res is: ', products.filter(p => p.name.includes(query)));
  return {
    type: "SEARCH_PRODUCTS",
    payload: query ? products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : products
  };
};

export const sort_by_qty = (products, type) => {
  return {
    type: "SORT_BY_QTY",
    payload: (type === "ASC") ? products.sort((a, b) => a.quantity - b.quantity) : products.sort((a, b) => b.quantity - a.quantity)
  };
};

export const sort_by_price = (products, type) => {
  return {
    type: "SORT_BY_PRICE",
    payload: (type === "ASC") ? products.sort((a, b) => a.price - b.price) : products.sort((a, b) => b.price - a.price)
  };
};