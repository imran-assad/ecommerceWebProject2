import { createContext } from "react";
export const ShopContext = createContext();
import { products } from "../assets/frontend_assets/assets";

const ShopContextProvider = () => {
  const currency = "$";
  const delivery_fee = 10;

  const value = { products, currency, delivery_fee };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
