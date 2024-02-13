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
  const getQuantityProducts = () => {
    const data = JSON.parse(localStorage?.getItem("cart"));
    if (data) {
      return data.reduce((acc, it) => acc + it.quantity, 0);
    }
    return 0;
  };
  return (
    <DataContext.Provider value={{ yourData, updateData, getQuantityProducts }}>
      {children}
    </DataContext.Provider>
  );
};
