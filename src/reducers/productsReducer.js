const initialState = {
  all: [{
    name: "PlayStation",
    description: "Gaming Console",
    price: 70000,
    quantity: 10,
    image: "https://picsum.photos/40"
  }, {
    name: "LightSaber",
    description: "Can cut through anything except bescar",
    price: 1000,
    quantity: 5,
    image: "https://picsum.photos/40"
  }, {
    name: "MacBook",
    description: "Simple laptop",
    price: 100000,
    quantity: 20,
    image: "https://picsum.photos/40"
  },],
  filtered: []
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADDING_PRODUCT':
      return {
        ...state,
        all: [...state.all, payload]
      };

    case 'REMOVING_PRODUCT':
      return {
        ...state,
        all: state.all.filter((product) => product.name !== payload.name)
      };

    case 'RESET_PRODUCTS':
      return initialState;

    case 'SEARCH_PRODUCTS':
      return {
        ...state,
        filtered: payload
      };

    case 'SORT_BY_QTY':
      return {
        ...state,
        filtered: payload
      };

    case 'SORT_BY_PRICE':
      return {
        ...state,
        filtered: payload
      };

    default:
      return state;
  }
};

export default productsReducer;