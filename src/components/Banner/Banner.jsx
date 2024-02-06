import React from "react";
import { TbWorldPlus } from "react-icons/tb";
import { FaHotel } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import Image1 from "../../assets/images/banner_1.webp";
import Image2 from "../../assets/images/banner_2.jpg";
import Image3 from "../../assets/images/banner_3.jpg";
import Image4 from "../../assets/images/banner_4.jpg";
import Image5 from "../../assets/images/banner_5.jpg";
import Image6 from "../../assets/images/banner.png";

function Banner() {
  return (
    <section className="container-fluid">
      <div className="hero overflow-hidden min-h-[550px] sm:min-h-[650px] rounded-3xl flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="order-1">
                <div className="relative z-10">
                  <div className="relative flex float-start xl:left-[50px] 2xl:left-[200px] top-[120px] md:top-[110px]">
                    <div className="flex border shadow-lg w-[195px] z-50 bg-white py-3 px-5 rounded-md">
                      <img
                        src={Image1}
                        alt=""
                        className="w-[30px] h-[30px] rounded-full object-center object-cover"
                      />
                      <img
                        src={Image2}
                        alt=""
                        className="w-[30px] h-[30px] rounded-full object-center object-cover"
                      />
                      <img
                        src={Image3}
                        alt=""
                        className="w-[30px] h-[30px] rounded-full object-center object-cover"
                      />
                      <img
                        src={Image4}
                        alt=""
                        className="w-[30px] h-[30px] rounded-full object-center object-cover"
                      />
                      <img
                        src={Image5}
                        alt=""
                        className="w-[30px] h-[30px] rounded-full object-center object-cover"
                      />
                    </div>
                  </div>
                  <img
                    src={Image6}
                    alt=""
                    className="
                    w-[450px] h-[400px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40 object-center items-center justify-center
                    "
                  />
                  <div className="flex float-end relative top-[-130px]">
                    <div className="flex border gap-3 shadow-lg py-3 px-2 w-[270px] rounded-md z-50 bg-white">
                      <img
                        src={Image5}
                        alt=""
                        className="w-[40px] h-[40px] object-cover object-center rounded-full shadow-lg"
                      />
                      <div className="flex flex-col">
                        <p className="font-semibold text-base">
                          World Of The Best Agency
                        </p>
                        <p className="flex gap-1 text-[#ea580c]">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4 pl-0 md:pl-10 sm:pt-0 text-center sm:text-left order-2 relative z-10">
                <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                  Explore all corners of
                </h1>
                <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-bold xl:mb-4 mb-4">
                  The world with us
                </h1>
                <p className="font-semibold">
                  Travel plays an integral role in forcing you outside of your
                  comfort zone, encouraging you to become a stronger, better
                  version of yourself.
                </p>
                <div className="pl-5 pr-10">
                  <div className="flex justify-between mt-3 mb-8">
                    <div className="flex items-center">
                      <TbWorldPlus className="text-2xl mr-3 text-[#ea580c]" />
                      <span className="font-semibold text-lg">Flight</span>
                    </div>
                    <div className="flex items-center">
                      <FaHotel className="text-2xl mr-3 text-[#ea580c]" />
                      <span className="font-semibold text-lg">Hotel</span>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="flex items-center">
                      <FaWifi className="text-2xl mr-3 text-[#ea580c]" />
                      <span className="font-semibold text-lg">Wifi</span>
                    </div>
                    <div className="flex items-center">
                      <IoFastFoodOutline className="text-2xl mr-3 text-[#ea580c]" />
                      <span className="font-semibold text-lg">Food</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
