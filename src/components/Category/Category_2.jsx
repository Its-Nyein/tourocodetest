import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import Image1 from "../../assets/images/category_4.jpg";
import Image2 from "../../assets/images/category_5.jpg";
import Image3 from "../../assets/images/category_6.jpg";

function Category_2() {
  return (
    <div className="py-3">
      <div className="container-fluid">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5 items-center justify-center">
          <div className="rounded-2xl relative h-[350px] flex flex-col shadow-lg">
            <div>
              <img
                src={Image1}
                alt=""
                className="h-[250px] rounded-2xl w-full object-cover object-center"
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <h1 className="font-semibold pl-2 text-lg">Whiteheaven Beach</h1>
              <p className="flex mr-2 items-center text-[#ea580c]">
                <FaStar className="mr-2" />
                <span className="tracking-wider font-semibold text-lg">
                  4.8
                </span>
              </p>
            </div>
            <div className="flex items-center mt-3 pl-2">
              <IoLocationOutline className="text-2xl text-[#0369a1] mr-2" />
              <span className="text-base font-semibold">Australia</span>
            </div>
          </div>

          <div className="rounded-2xl relative h-[350px] flex flex-col shadow-lg">
            <div>
              <img
                src={Image2}
                alt=""
                className="h-[250px] rounded-2xl w-full object-cover object-center"
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <h1 className="font-semibold pl-2 text-lg">Navagio Beach</h1>
              <p className="flex mr-2 items-center text-[#ea580c]">
                <FaStar className="mr-2" />
                <span className="tracking-wider font-semibold text-lg">
                  4.6
                </span>
              </p>
            </div>
            <div className="flex items-center mt-3 pl-2">
              <IoLocationOutline className="text-2xl text-[#0369a1] mr-2" />
              <span className="text-base font-semibold">Greece</span>
            </div>
          </div>

          <div className="rounded-2xl relative h-[350px] flex flex-col shadow-lg">
            <div>
              <img
                src={Image3}
                alt=""
                className="h-[250px] rounded-2xl w-full object-cover object-center"
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <h1 className="font-semibold pl-2 text-lg">Spiaggia Grande</h1>
              <p className="flex mr-2 items-center text-[#ea580c]">
                <FaStar className="mr-2" />
                <span className="tracking-wider font-semibold text-lg">
                  4.5
                </span>
              </p>
            </div>
            <div className="flex items-center mt-3 pl-2">
              <IoLocationOutline className="text-2xl text-[#0369a1] mr-2" />
              <span className="text-base font-semibold">Italy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category_2;
