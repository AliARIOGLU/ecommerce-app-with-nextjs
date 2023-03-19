import { Item } from "@/type";
import React from "react";
import SingleProduct from "./SingleProduct";

const Products = ({ productData }: any) => {
  return (
    <div className="py-6 px-4 grid grid-cols-4 gap-4">
      {productData.map((product: Item) => (
        <SingleProduct product={product} key={product._id} />
      ))}
    </div>
  );
};

export default Products;
