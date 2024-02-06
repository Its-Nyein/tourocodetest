import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Category",
    link: "/#category",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
  {
    title: "About Us",
    link: "/#about_us",
  },
];

const QuickLinks = [
  {
    title: "FAQS",
    link: "/#faqs",
  },
  {
    title: "Privacy Policy",
    link: "/#privacy",
  },
  {
    title: "Term & Condition",
    link: "/#term",
  },
  {
    title: "Support",
    link: "/#support",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-0 pt-5">
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-white font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
            >
              Touro
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3">
              If you've any questions, please email us at{" "}
              <a href="mailto:info@touro.org" className="text-[#9a3412]">
                info@hrlab.org
              </a>{" "}
              or visit our{" "}
              <a href="mailto:info@touro.org" className="text-[#9a3412]">
                FAQs.
              </a>{" "}
            </p>
            <div className="flex text-gray-500 gap-5 mt-5 text-2xl cursor-pointer">
              <FaFacebook className="hover:text-[#9a3412] hover:scale-110 duration-200" />
              <FaTwitter className="hover:text-[#9a3412] hover:scale-110 duration-200" />
              <FaInstagram className="hover:text-[#9a3412] hover:scale-110 duration-200" />
              <FaLinkedin className="hover:text-[#9a3412] hover:scale-110 duration-200" />
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 text-gray-600">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 text-gray-600">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {QuickLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4 col-span-2 sm:col-auto text-gray-600">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Contact Us
              </h1>
              <div>
                <div className="flex items-center gap-3">
                  <IoLocationSharp className="sm:text-2xl" />
                  <p>Miami, USA</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <GiRotaryPhone className="sm:text-2xl" />
                  <p>092226666</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <MdEmail className="sm:text-2xl" />
                  <a href="#">touro@agency.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full mb-5 opacity-100" />
        <div className="pb-10 text-center">
          <p className="text-gray-500 text-sm font-medium">
            Crafted by <span className="font-bold">Nyein Phyo Aung</span> &copy;{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
