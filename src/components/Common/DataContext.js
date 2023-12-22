// DataContext.js
import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useData = () => {
    return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
    const [yourData, setYourData] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );

    const updateData = (newData) => {
        setYourData(newData);
        localStorage.setItem("cart", JSON.stringify(newData));
    };

    return (
        <DataContext.Provider value={{ yourData, updateData }}>
            {children}
        </DataContext.Provider>
    );
};
