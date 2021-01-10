import { createStore } from "redux";
import allReducers from "./reducers";


function saveToLocalstorage(state) {
  try {
    const searilizedState = JSON.stringify(state);
    localStorage.setItem('state', searilizedState);
  } catch (error) {
    console.log(error);
  }
}

function loadFromLocalStorage() {
  try {
    const searilizedState = localStorage.getItem('state');
    if (!searilizedState) return undefined;
    return JSON.parse(searilizedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();
const store = createStore(
  allReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => saveToLocalstorage(store.getState()));

export default store;