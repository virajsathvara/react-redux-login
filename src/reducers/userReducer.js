
const initialState = {
  isLoggedIn: false,
  name: ""
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGGINGIN":
      return {
        ...state,
        isLoggedIn: true,
        name: payload.name
      };

    case "LOGGINGOUT":
      console.log('state while loging out is:', state);
      return {
        ...state,
        isLoggedIn: false,
        name: ""
      };

    default:
      return state;
  }
};

export default userReducer;