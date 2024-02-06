import React from "react";

function Newletter() {
  return (
    <div className="py-20">
      <div className="container-fluid">
        <h1 className="text-3xl sm:text-2xl font-bold text-black text-center mb-4 md:mb-8">
          Sign up to our newsletter
        </h1>
        <div className="flex text-black justify-center">
          <input
            type="text"
            placeholder="Enter Your Email Here"
            className="shadow-xl border py-3 px-5 rounded-l-md placeholder:text-gray-900 placeholder:font-semibold outline-none"
          />
          <button className="bg-blue-600 px-5 rounded-r-md text-white font-semibold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newletter;
