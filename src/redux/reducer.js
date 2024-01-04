import { Types } from "./types";

const initState = [];

const LocalStorageReducer = (state = initState, actions) => {
    switch (actions.type) {
        case Types.saveDataFromLocalstore: {
            localStorage.setItem("cart", JSON.stringify(actions.payload));
            const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
            return [...existingCart];
        }
        case Types.getDataLocastore: {
            const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
            return [...existingCart];
        }
        default:
            return state;
    }
};
export default LocalStorageReducer;
