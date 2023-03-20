import { Item } from "@/type";
import React from "react";
import { Toaster } from "react-hot-toast";
import SingleProduct from "./SingleProduct";

const Products = ({ productData }: any) => {
  return (
    <div className="py-6 px-4 grid grid-cols-4 gap-4">
      {productData.map((product: Item) => (
        <SingleProduct product={product} key={product._id} />
      ))}
      <Toaster
        reverseOrder={false}
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default Products;
