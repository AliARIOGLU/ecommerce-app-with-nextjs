import React from "react";

type BannerTextProps = {
  title: string;
  description: string;
  btnText: string;
  color: string;
};

const BannerText = ({
  title,
  description,
  btnText,
  color,
}: BannerTextProps) => {
  return (
    <div
      className={`absolute w-60 h-full top-6 left-4 flex flex-col gap-3 ${color}`}
    >
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="text-sm leading-5">{description}</p>
      <button className="bg-white text-sm text-black font-semibold rounded-full w-24 h-8 border-[1px] border-black">
        {btnText}
      </button>
    </div>
  );
};

export default BannerText;
