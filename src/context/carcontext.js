import { createContext, useState } from 'react';

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <CarContext.Provider value={{ cart, addCart, removeCart }}>
      {children}
    </CarContext.Provider>
  );
};
