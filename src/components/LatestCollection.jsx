import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  console.log(products);

  return (
    <>
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1={"LATEST"} text2={"COLLECTION"} />
        </div>
      </div>
      {/* Rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProduct.map((item, index) => (
          <ProductItem
            key={index}
            id={item._image}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default LatestCollection;
