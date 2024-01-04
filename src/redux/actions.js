import { Types } from "./types";

export const saveDataFromLocalstore = (data) => {
    return {
        type: Types.saveDataFromLocalstore,
        payload: data,
    };
};

export const getDataLocastore = () => {
    return {
        type: Types.getDataLocastore
    }
}
