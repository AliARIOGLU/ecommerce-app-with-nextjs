import React from "react";

type AmountType = {
  amount: Number;
};

const FormatePrice = ({ amount }: AmountType) => {
  const formattedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return <span>{formattedAmount}</span>;
};

export default FormatePrice;
