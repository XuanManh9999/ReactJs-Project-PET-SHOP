import { Types } from "./types";

export const saveDataFromLocalstore = (data) => {
  return {
    type: Types.saveDataFromLocalstore,
    payload: data,
  };
};

export const getQuantityProducts = () => {
  return {
    type: Types.getManyProductsInCart,
  };
};
