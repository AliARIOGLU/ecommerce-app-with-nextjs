import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import {
  bannerImg,
  sliderImgFour,
  sliderImgThree,
  sliderImgTwo,
  sliderImgOne,
} from "../public/assets/images";
import BannerText from "./BannerText";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ButtonPrimary from "./ButtonPrimary";

const bannerData = [
  {
    id: 1,
    title: "Spring fashion in bloom",
    description: "New trends & styles to turn heads anytime, on any budget",
    btnText: "Shop now",
    color: "text-white",
    img: sliderImgOne,
  },
  {
    id: 2,
    title: "Up to 65% off",
    description: "New savings every week! Hurry to score low, low prices",
    btnText: "Show now",
    color: "text-black",
    img: sliderImgTwo,
  },
  {
    id: 3,
    title: "Up to 65% off",
    description: "New savings every week! Hurry to score low, low prices",
    btnText: "Show now",
    color: "text-black",
    img: sliderImgThree,
  },
  {
    id: 4,
    title: "You can save $1,300+ a year!",
    description: "Start saving with free delivery. Walmart Regards & more",
    btnText: "Try free",
    color: "text-blue",
    img: sliderImgFour,
  },
];

function SampleNextArrow(props: any) {
  const { onClick } = props;

  return (
    <div
      className="absolute bottom-12 left-6 w-12 h-8 border-[1px] shadow-md border-black text-black bg-white text-xl
    flex items-center justify-center rounded-md hover:bg-blue hover:border-transparent hover:text-white cursor-pointer duration-300 z-10"
      onClick={onClick}
    >
      <BsArrowLeft />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;

  return (
    <div
      className="absolute bottom-12 right-6 w-12 h-8 border-[1px] shadow-md border-black text-black bg-white text-xl
        flex items-center justify-center rounded-md hover:bg-blue hover:border-transparent hover:text-white cursor-pointer duration-300 z-10"
      onClick={onClick}
    >
      <BsArrowRight />
    </div>
  );
}

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-full bg-white px-4 py-6 font-titleFont flex gap-4 border-b-[1px]">
      <div className="w-2/3 rounded-lg h-[410px] shadow-bannerShadow relative">
        <Slider {...settings}>
          {bannerData.map((banner) => (
            <div className="w-full h-[410px] relative" key={banner.id}>
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={banner.img}
                alt="sliderImgOne"
                priority
              />
              <BannerText
                title={banner.title}
                description={banner.description}
                btnText={banner.btnText}
                color={banner.color}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-black">
            Flash Pick of the day
          </h2>
          <p className="text-base text-zinc-600 underline underline-offset-2">
            View all
          </p>
        </div>
        <Image className="h-60 object-cover" src={bannerImg} alt="flashImg" />
        <ButtonPrimary btnText="Options" />
        <p className="text-lg text-black font-semibold">From $199.90</p>
        <p className="text-base text-gray-500 -mt-1">
          uhomepro TV Stand Cabinet for Living Room...
        </p>
      </div>
    </div>
  );
};

export default Banner;
