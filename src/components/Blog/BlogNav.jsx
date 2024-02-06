import React from "react";
import { Link } from "react-scroll";

function BlogNav() {
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4 flex-1">
        <div className="flex flex-col lg:flex-row md:flex-col items-center flex-1 relative">
          <span className="text-2xl font-bold">Our Gallery</span>
          <p className="text-xs md:text-sm font-semibold lg:absolute lg:left-[130px] lg:bottom-0">
            Share Your Happy Moment
          </p>
        </div>
        <div className="hidden lg:flex md:flex flex-1 items-center justify-end font-normal">
          <div className="flex-10">
            <ul className="flex gap-8 lg:text-[16px] md:text-[15px]">
              <Link spy={true} smooth={true} to="login">
                <li className="cursor-pointer text-orange-600">ViewAll</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BlogNav;
