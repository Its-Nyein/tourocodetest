import React from "react";
import { Link } from "react-scroll";

function Nav() {
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4 flex-1">
        <div className="flex items-center flex-1">
          <span className="text-2xl font-bold">Popular Place</span>
        </div>
        <div className="hidden lg:flex md:flex flex-1 items-center justify-end font-normal">
          <div className="flex-10">
            <ul className="flex gap-8 lg:text-[16px] md:text-[15px]">
              <Link spy={true} smooth={true} to="home">
                <li className="text-gray-500 hover:text-gray-900 border-b-2 hover:border-red-400 cursor-pointer duration-500 border-white">
                  Beach
                </li>
              </Link>
              <Link spy={true} smooth={true} to="category">
                <li className="text-gray-500 hover:text-gray-900 border-b-2 hover:border-red-400 cursor-pointer duration-500 border-white">
                  Mountain
                </li>
              </Link>
              <Link spy={true} smooth={true} to="blog">
                <li className="text-gray-500 hover:text-gray-900 border-b-2 hover:border-red-400 cursor-pointer duration-500 border-white">
                  Waterfall
                </li>
              </Link>
              <Link spy={true} smooth={true} to="about">
                <li className="text-gray-500 hover:text-gray-900 border-b-2 hover:border-red-400 cursor-pointer duration-500 border-white">
                  Icebergs
                </li>
              </Link>
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

export default Nav;
