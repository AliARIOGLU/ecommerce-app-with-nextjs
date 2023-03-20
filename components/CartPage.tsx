import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  emptyCart,
  phoneImg,
  ship1Img,
  ship2Img,
  ship3Img,
  warningImg,
} from "@/public/assets/images";
import { TbReload } from "react-icons/tb";
import { HiMinusSmall } from "react-icons/hi2";
import { MdOutlineAdd } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { StoreProduct } from "@/type";
import FormatePrice from "./FormatePrice";
import {
  deleteItem,
  minusQuantity,
  plusQuantity,
  resetCart,
} from "@/redux/shoppersSlice";

const CartPage = () => {
  const productData = useSelector((state: any) => state.shopper.productData);
  const dispatch = useDispatch();
  const [warningMsg, setWarningMsg] = useState<boolean>(false);

  const [totalOldPrice, setTotalOldPrice] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setWarningMsg(true);
    let oldPrice = 0;
    let savings = 0;
    let amount = 0;
    productData.map((item: StoreProduct) => {
      oldPrice += item.oldPrice * item.quantity;
      savings += item.oldPrice - item.price;
      amount += item.price * item.quantity;
      return;
    });
    setTotalOldPrice(oldPrice);
    setTotalSavings(savings);
    setTotalAmount(amount);
  }, [productData]);

  return (
    <div className="w-full py-10">
      <div className="w-full flex gap-10">
        <div className="w-2/3 flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-black">
            Cart{" "}
            <span className="text-lightText font-normal ">
              ({productData.length} items)
            </span>
          </h1>
          {/* Pickup Details */}
          <div>
            <div className="text-xl font-bold flex items-center gap-2 mb-2">
              <Image className="w-10" src={phoneImg} alt="phoneImg" />
              <p>Pickup and delivery options</p>
            </div>
            <div className="w-full grid grid-cols-3 gap-4 text-xs">
              <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                <Image className="w-10" src={ship1Img} alt="shippingImg" />
                <p className="font-bold">Shipping</p>
                <p>All items available</p>
              </div>
              <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                <Image className="w-10" src={ship2Img} alt="shippingImg" />
                <p className="font-bold">Pickup</p>
                <p>All items available</p>
              </div>
              <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                <Image className="w-10" src={ship3Img} alt="shippingImg" />
                <p className="font-bold">Delivery</p>
                <p>All items available</p>
              </div>
            </div>
            {/* Cart Product */}
            <div className="w-full p-5 border-[1px] border-zinc-400 rounded-md flex flex-col gap-4">
              <p className="font-semibold text-sm text-zinc-500">
                Sold and shipped by{" "}
                <span className="text-black font-semibold">Shoppers.com</span>
              </p>
              <div className="flex gap-2">
                <button className="px-2 py-[1px] text-hoverBg text-sm border-[1px] border-hoverBg rounded-sm hover:bg-blue hover:text-white">
                  Best seller
                </button>
                <button className="px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-600 rounded-sm hover:bg-red-600 hover:text-white">
                  Rollback
                </button>
              </div>
              {/* Items */}
              <div>
                {productData.map((item: StoreProduct) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between gap-4 border-b-[1px] border-b-zinc-200 pb-4"
                  >
                    <div className="w-3/4 flex items-center gap-6">
                      <Image
                        className="w-32"
                        width={500}
                        height={500}
                        src={item.image}
                        alt="productImg"
                      />
                      <div>
                        <h2 className="text-base text-zinc-900">
                          {item.title}
                        </h2>
                        <p className="text-sm text-zinc-500">
                          {item.description}
                        </p>
                        <p className="text-sm text-zinc-500">
                          price: ${item.price}
                        </p>
                        <p className="text-sm text-zinc-500 flex items-center gap-1">
                          <span className="bg-blue rounded-full text-white text-xs w-4 h-4 flex items-center justify-center">
                            <TbReload className="rotate-180" />
                          </span>
                          Free 30-day returns
                        </p>
                        {/* Buttons */}
                        <div className="mt-2 flex items-center gap-6">
                          <button
                            onClick={() => dispatch(deleteItem(item._id))}
                            className="text-sm underline underline-offset-2 decoration-[1px] text-zinc-600 hover:no-underline hover:tex-blue duration-300"
                          >
                            Remove
                          </button>
                          <div className="w-28 h-9 border border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3">
                            <button
                              onClick={() => dispatch(minusQuantity(item._id))}
                              className="text-base w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white rounded-full flex items-center 
                          justify-center cursor-pointer duration-200"
                            >
                              <HiMinusSmall />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => dispatch(plusQuantity(item._id))}
                              className="text-lg w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white rounded-full flex items-center 
                          justify-center cursor-pointer duration-200"
                            >
                              <MdOutlineAdd />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/4 text-right flex flex-col items-end gap-1">
                      <p className="font-semibold text-xl text-[#2a8703]">
                        <FormatePrice amount={item.price * item.quantity} />
                      </p>
                      <p className="text-sm line-through text-zinc-500">
                        <FormatePrice amount={item.oldPrice * item.quantity} />
                      </p>
                      <div className="flex items-center text-xs gap-2">
                        <p className="bg-green-200 text-[8px] uppercase px-2 py-[1px]">
                          You save
                        </p>
                        <p className="text-[#2a8703] font-semibold">
                          <FormatePrice
                            amount={
                              item.oldPrice * item.quantity -
                              item.price * item.quantity
                            }
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {productData.length > 0 ? (
                <button
                  onClick={() => dispatch(resetCart())}
                  className="w-44 bg-red-500 text-white h-10 rounded-full text-base font-semibold 
              hover:bg-red-800 duration-300"
                >
                  Reset Cart
                </button>
              ) : null}
            </div>
          </div>
        </div>
        <div className="w-1/3 p-4 mt-24 h-[500px] border-[1px] border-zinc-400 rounded-md flex flex-col justify-center gap-4">
          <div className="w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4">
            <button className="bg-blue hover:bg-hoverBg w-full text-white h-10 rounded-full font-semibold duration-300">
              Continue to checkout
            </button>
            <p className="text-sm text-center text-red-500 -mt-3 font-semibold">
              Please sign in for checkout
            </p>
            {warningMsg && (
              <div className="bg-[#002d58] text-white p-2 rounded-lg flex items-center justify-between gap-4">
                <Image className="w-8" src={warningImg} alt="warningImg" />
                <p className="text-sm">
                  Items in your have reduced prices. Check out now for extra
                  savings!
                </p>
                <IoMdClose
                  onClick={() => setWarningMsg(false)}
                  className="text-3xl hover:text-red-400 cursor-pointer duration-200"
                />
              </div>
            )}
            <p className="text-sm text-center">
              For the best shopping experience,{" "}
              <span className="underline underline-offset-2 decoration-[1px] cursor-pointer">
                Sign in
              </span>
            </p>
          </div>
          {/* Chekcout Price */}
          <div className="w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4">
            <div className="flex flex-col gap-1">
              <div className="text-sm flex justify-between">
                <p className="font-semibold">
                  Subtotal <span>({productData.length} items)</span>
                </p>
                <p className="line-through text-zinc-500 text-base">
                  <FormatePrice amount={totalOldPrice} />
                </p>
              </div>

              <div className="text-sm flex justify-between">
                <p className="font-semibold">Savings</p>
                <p className="text-[#2a8703] font-bold bg-green-100 py-1 px-[2px] rounded-lg flex">
                  -<FormatePrice amount={totalSavings} />
                </p>
              </div>

              <div className="text-sm flex justify-between">
                <p className="font-semibold">Total Amount</p>
                <p className="text-zinc-800 font-normal text-base">
                  -<FormatePrice amount={totalAmount} />
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4">
            <div className="flex flex-col gap-1">
              <div className="text-sm flex justify-between">
                <p>Shipping</p>
                <p className="text-[#2a8703]">Free</p>
              </div>
              <div className="text-sm flex justify-between">
                <p className="font-semibold">Taxes</p>
                <p className="text-zinc-800">Calculated at checkout</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p>Estimated total</p>
            <p className="text-zinc-800 font-bold text-lg">
              <FormatePrice amount={totalAmount} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
