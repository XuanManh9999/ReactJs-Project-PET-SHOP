import { Types } from "../types";

const initState = [];

const LocalStorageReducer = (state = initState, actions) => {
  switch (actions.type) {
    case Types.saveDataFromLocalstore: {
      localStorage.setItem("cart", JSON.stringify(actions.payload));
      const newData = localStorage.getItem("cart");
      return JSON.parse(newData);
    }
    case Types.getManyProductsInCart: {
      const data = JSON.parse(localStorage.getItem("cart"));
      const quantity = data.reduce((acc, it) => acc + it.quantity, 0);
      return quantity;
    }
    default:
      return state;
  }
};
export default LocalStorageReducer;
