import React from "react";
import Image1 from "../../assets/images/blog_1.jpg";
import Image2 from "../../assets/images/blog_2.webp";
import Image3 from "../../assets/images/blog_3.jpg";
import Image4 from "../../assets/images/blog_4.jpg";
import Image5 from "../../assets/images/blog_5.jpg";
import Image6 from "../../assets/images/blog_6.jpg";

function Blog() {
  return (
    <div className="mb-10 mt-4">
      <div className="container-fluid">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 px-5">
          <div className="row-span-2">
            <img
              src={Image1}
              alt=""
              className="object-cover object-center h-full w-full rounded-xl shadow-lg"
            />
          </div>
          <div>
            <img
              src={Image2}
              alt=""
              className="object-cover object-center h-full w-full rounded-xl shadow-lg"
            />
          </div>
          <div className="row-span-2">
            <img
              src={Image3}
              alt=""
              className="object-cover object-center h-full w-full rounded-xl shadow-lg"
            />
          </div>
          <div className="col-start-3 row-start-3">
            <img
              src={Image4}
              alt=""
              className="object-cover object-center h-full w-full rounded-xl shadow-lg"
            />
          </div>
          <div className="row-span-2 col-start-2 row-start-2">
            <img
              src={Image5}
              alt=""
              className="object-cover object-center h-full w-full rounded-xl shadow-lg"
            />
          </div>
          <div className="col-start-1 row-start-3">
            <img
              src={Image6}
              alt=""
              className="object-cover object-center h-full w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
