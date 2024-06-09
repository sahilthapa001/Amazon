import React, { createContext, useContext, useEffect, useState } from "react";

// Create the context
export const ProductContext = createContext();

// Context provider component
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("./data/itemList.json");
        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const providerValue = {
    products,
    setProducts,
    isLoading,
    error,
    filteredProducts,
    setFilteredProducts,
  };

  return (
    <ProductContext.Provider value={providerValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
