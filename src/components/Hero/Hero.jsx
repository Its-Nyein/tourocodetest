import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import HeroPng from "../../assets/images/Hero.png";

function Hero() {
  return (
    <section className="container-fluid">
      <div className="hero overflow-hidden min-h-[550px] sm:min-h-[650px] rounded-3xl flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="flex flex-col justify-center gap-4 pl-0 md:pl-10 lg:pl-10 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold">
                  Explore
                </h1>
                <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold xl:mb-4">
                  Beautiful
                </h1>
                <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-black">
                  World!
                </h1>
                <div className="hidden lg:flex justify-center lg:justify-start mt-10">
                  <div className="flex gap-1 lg:gap-3 border shadow-md py-3 px-4 lg:py-2 lg:px-4 text-sm font-bold">
                    <div>
                      <h2 className="text-blue-500">Location</h2>
                      <p className="flex gap-2 items-center">
                        Singapore
                        <span>
                          <IoIosArrowDown className="text-blue-600" />
                        </span>
                      </p>
                    </div>
                    <span className="text-2xl text-gray-500 opacity-30">|</span>
                    <div>
                      <h2 className="text-blue-500">Date</h2>
                      <p className="flex gap-2 items-center">
                        Mon 7 Nov
                        <span>
                          <IoIosArrowDown className="text-blue-600" />
                        </span>
                      </p>
                    </div>
                    <span className="text-2xl text-gray-500 opacity-30">|</span>
                    <div>
                      <h2 className="text-blue-500">Price Range</h2>
                      <p className="flex gap-2 items-center">
                        $400-$700
                        <span>
                          <IoIosArrowDown className="text-blue-600" />
                        </span>
                      </p>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-5 shadow-md rounded-r-md">
                    Search
                  </button>
                </div>
              </div>
              <div className="order-1 sm:order-2">
                <div className="relative z-10">
                  <img
                    src={HeroPng}
                    alt=""
                    className="
                    w-[350px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
