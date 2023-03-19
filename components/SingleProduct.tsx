import { Item } from "@/type";
import Image from "next/image";
import React from "react";
import { GoPlus } from "react-icons/go";
import { BsStarFill } from "react-icons/bs";

type SingleProductPropsType = {
  product: Item;
};

const SingleProduct = ({ product }: SingleProductPropsType) => {
  return (
    <div className="border-[1px] border-gray-200 mb-6 group">
      <div className="w-full h-[350px] overflow-hidden p-1">
        <Image
          className="w-full h-full object-contain scale-100 group-hover:scale-105 duration-300"
          width={300}
          height={250}
          src={product.image}
          alt="productImage"
        />
      </div>
      {/* Product Desc. Start */}
      <div className="px-2 py-4 flex flex-col justify-center">
        {/* Buttons Start Here */}
        <div className="flex justify-between py-2">
          <button
            className="w-20 h-9 bg-blue text-white rounded-full flex gap-1 items-center
          justify-center hover:bg-[#004f9a] duration-300"
          >
            <span>
              <GoPlus />
            </span>
            Add
          </button>
          <button
            className="w-24 h-9 bg-white border-[1px] border-black text-black
          rounded-full flex items-center justify-center gap-1 hover:bg-black hover:text-white
          duration-300"
          >
            <span>
              <GoPlus />
            </span>
            Details
          </button>
        </div>
        {/* Details Start Here */}
        <div className="flex items-center gap-3 ">
          <p className="font-titleFont text-lg text-green-700 font-semibold">
            Now ${product.price}
          </p>
          <p className="text-gray-500 line-through decoration-[1px]">
            {product.oldPrice}
          </p>
        </div>
        <p className="text-lg font-semibold py-2">
          {product.title.substring(0, 25)}
        </p>
        <p className="text-base text-zinc-500">
          {product.description.substring(0, 80)}...
        </p>
        <div className="flex gap-2 items-center text-sm mt-2">
          <div className="flex text-sm gap-1">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <p>25</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
