import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const content = (
    <>
      <div className="lg:hidden block absolute w-full top-20 left-0 right-0 bg-gray-500 z-[9999]">
        <ul className="text-center text-xl p-20 pt-10 pb-10">
          <Link spy={true} smooth={true} to="home">
            <li className="my-3 py-2">Home</li>
          </Link>
          <Link spy={true} smooth={true} to="category">
            <li className="my-3 py-2">Category</li>
          </Link>
          <Link spy={true} smooth={true} to="blog">
            <li className="my-3 py-2">Blog</li>
          </Link>
          <Link spy={true} smooth={true} to="about">
            <li className="my-3 py-2">About</li>
          </Link>
          <Link spy={true} smooth={true} to="login">
            <li className="my-3 py-2 bg-orange-400 rounded-md text-white">
              Login
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4 flex-1">
        <div className="flex items-center flex-1">
          <span className="text-2xl font-bold">Touro</span>
        </div>
        <div className="hidden lg:flex md:flex flex-1 items-center justify-end font-normal">
          <div className="flex-10">
            <ul className="flex gap-8 lg:text-[18px] md:text-[16px]">
              <Link spy={true} smooth={true} to="home">
                <li className="text-gray-500 hover:text-gray-900 border-b-2 hover:border-red-400 cursor-pointer duration-500 border-white">
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to="category">
                <li className="text-gray-500 hover:text-gray-900 border-b-2 hover:border-red-400 cursor-pointer duration-500 border-white">
                  Category
                </li>
              </Link>
              <Link spy={true} smooth={true} to="blog">
                <li className="text-gray-500 hover:text-gray-900 border-b-2 hover:border-red-400 cursor-pointer duration-500 border-white">
                  Blog
                </li>
              </Link>
              <Link spy={true} smooth={true} to="about">
                <li className="text-gray-500 hover:text-gray-900 border-b-2 hover:border-red-400 cursor-pointer duration-500 border-white">
                  About
                </li>
              </Link>
              <Link spy={true} smooth={true} to="login">
                <li className="ml-10 bg-orange-400 py-[1px] px-10 rounded-md text-white">
                  Login
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button
          className="block sm:hidden transition text-2xl"
          onClick={handleClick}
        >
          {click ? (
            <FaTimes className="font-bold" />
          ) : (
            <MdOutlineMenu className="font-bold" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
