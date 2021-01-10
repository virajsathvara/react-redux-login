const initialState = [{
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
},];

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADDING_PRODUCT':
      return [
        ...state,
        action.payload
      ];

    case 'REMOVING_PRODUCT':
      return state.filter(product => product.name !== payload.name);

    case 'RESET_PRODUCTS':
      return initialState;

    default:
      return state;
  }
};

export default productsReducer;