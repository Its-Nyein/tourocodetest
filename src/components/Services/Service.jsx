import React from "react";

function Service() {
  return (
    <div className="py-10">
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center justify-center p-5">
          <div className="flex flex-col border shadow-xl py-10 px-7 items-center text-center">
            <h2 className="text-3xl text-[#ea580c] font-bold">24+</h2>
            <p className="font-semibold text-lg mt-3">Cities</p>
          </div>
          <div className="flex flex-col border shadow-lg py-10 px-7 items-center text-center">
            <h2 className="text-3xl text-[#ea580c] font-bold">700+</h2>
            <p className="font-semibold text-lg mt-3">Place</p>
          </div>
          <div className="flex flex-col border shadow-lg py-10 px-7 items-center text-center">
            <h2 className="text-3xl text-[#ea580c] font-bold">200+</h2>
            <p className="font-semibold text-lg mt-3">Hotel</p>
          </div>
          <div className="flex flex-col border shadow-lg py-10 px-7 items-center text-center">
            <h2 className="text-3xl text-[#ea580c] font-bold">2k+</h2>
            <p className="font-semibold text-lg mt-3">Review</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
