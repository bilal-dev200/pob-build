"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose, IoMdMail } from "react-icons/io";
import { usePathname } from "next/navigation";
import { HiPhone } from "react-icons/hi2";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import fetchData from "./fetchData";
import axios from "../../Utils/axios"
import { Image_Url } from "../../Utils/const";


const Header = () => {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [showMediaDropdown, setShowMediaDropdown] = useState(false);
  const [megaMenu, setMegaMenu] = useState(null);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const hideMenuTimeout = useRef(null);

  // useEffect(() => {
  //  const data = fetchData({
  //     url: "services-types/index",
  //     slug: "",
  //     setState: setMegaMenu,
  //     setLoading: () => {},
  //   });
  //   setMegaMenu(data)
  // }, []);

    useEffect(() => {
    const fetchMegaMenu = async () => {
      
      try {
        const res = await axios.public.post("services-types/index");
      console.log('das',res)
        setMegaMenu(res.data.data || []);
      } catch (error) {
        console.error("Error fetching mega menu:", error);
        setMegaMenu([]);
      }
      //  finally {
      //   setLoading(false);
      // }
    };

    fetchMegaMenu();
  }, []);
  const handleDonateClick = () => {
  const footer = document.getElementById("footer-section");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};

  const desktopNavItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us/" },
    { name: "Academics", link: "/academics/" },
    { name: "Services", link: "/services/" },
    { name: "Gallery", link: "/gallery/" },
    // {
    //   name: "Media & Publications",
    //   link: "/media-publications",
    //   submenu: [{ name: "Annual Reports", link: "/annual-reports/" }],
    // },
    { name: "Blogs", link: "/blog/" },
    {
      name: "How You Can Help",
      submenu: [
        { name: "Zakat", link: "/zakat/" },
        { name: "Sadaqah", link: "/sadaqah/" },
        { name: "Waqf", link: "/waqf/" },
        { name: "Kaffara", link: "/kaffara/" },
        { name: "Volunteers", link: "/volunteer/" },
        { name: "Sponser a Surgery", link: "/sponser-surgery/" },
      ],
    },
    { name: "Contact Us", link: "/contact-us/" },
  ];

  const mobileNavItems = [...desktopNavItems];

  const toggleShowNavbar = () => setShowNav(!showNav);

  console.log('megaMenu?.servicesType', megaMenu?.servicesType)

  return (
    <div className="flex flex-col items-center gap-2 fixed w-full z-50 h-[115px] md:h-[120px] bg-white">
      {/* Top Nav */}
      <section className="hidden md:block relative w-[90%] py-1 px-4 rounded-b-[10px] bg-black text-white">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <p className="flex gap-[2px] text-[11px]">
              <HiPhone className="mt-[1px] text-[14px]" />
              Karachi :
              <a href="tel:+9221111762544" className="hover:text-[#F39C12]">
                {" "}
                UAN +92-21-111-762-544
              </a>{" "}
              :
              <a href="tel:+922134156597" className="hover:text-[#F39C12]">
                +92-21-34156597
              </a>
            </p>
            <p className="flex gap-1 text-[11px]">
              <IoMdMail className="mt-[1px] text-[14px]" />
              <a
                href="mailto:careers@pobkarachi.org"
                className="hover:text-[#F39C12]"
              >
                careers@pobkarachi.org
              </a>{" "}
              :
              <a href="mailto:hr@pobtrust.org" className="hover:text-[#F39C12]">
                hr@pobtrust.org
              </a>
            </p>
          </div>
          <div className="flex space-x-4 text-white">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={12} />
            </a>
            <a
              href="https://wa.me/923479997772"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={12} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={12} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Donate Button */}
      <section className="block md:hidden w-full flex">
        <Link href="/donation/" className="w-full border border-r-white">
          <div className="cursor-pointer text-white  bg-[#F39C12] px-2 py-1 gap-1  flex items-center  justify-center   border-2 border-transparent outline-none">
            <div className=" bg-white px-1 py-1 rounded-[50%] ">
              <img src="/hand.png" alt="" className="w-6" />
            </div>

            <p className=" mx-1 font-inter text-md">Donate Now</p>
          </div>
        </Link>
      </section>

      {/* Navigation */}
      <nav className="w-[90%] md:w-[90%] flex justify-center items-center">
        <div className="hidden lg:flex h-full lg:justify-between w-[80%] lg:w-full items-center rounded-bl-[20px] rounded-br-[20px]">
          <Link href="/">
            <img
              src="/poblogo.png"
              alt="logo"
              className="w-10 md:w-28 object-cover"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex w-full max-w-[1300px] mx-auto justify-center items-center gap-6 px-3">
           {desktopNavItems.map((item, index) => {
  const normalizePath = (path) => (path || "").replace(/\/$/, "");
  const isActive = normalizePath(pathname) === normalizePath(item.link || "");

  return (
    <div
      key={index}
      className="relative cursor-pointer font-inter text-[15px] group"
    >
      {item.name === "Services" ? (
        <div
          className="relative"
          onMouseEnter={() => {
            clearTimeout(hideMenuTimeout.current);
            setShowMegaMenu(true);
          }}
          onMouseLeave={() => {
            hideMenuTimeout.current = setTimeout(
              () => setShowMegaMenu(false),
              300
            );
          }}
        >
          <Link
            href={item.link || "#"}
            className={`text-black hover:border-[#F39C12] hover:border-b-2 transition duration-200 ${
              isActive ? "border-b-2 border-[#F39C12]" : ""
            }`}
          >
            {item.name}
          </Link>
        </div>
      ) : item.submenu ? (
        <div>
          <Link
            href={item.link || "#"}
            className={`text-black hover:border-[#F39C12] hover:border-b-2 transition duration-200 ${
              isActive ? "border-b-2 border-[#F39C12]" : ""
            }`}
          >
            {item.name}
          </Link>

          <div className="absolute bg-white shadow-lg rounded-md hidden group-hover:block z-50 w-56">
            {item.submenu.map((subItem, subIndex) => (
              <Link
                key={subIndex}
                href={subItem.link || "#"}
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#F39C12] hover:text-white"
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Link
          href={item.link || "#"}
          className={`text-black hover:border-[#F39C12] hover:border-b-2 transition duration-200 ${
            isActive ? "border-b-2 border-[#F39C12]" : ""
          }`}
        >
          {item.name}
        </Link>
      )}
    </div>
  );
})}

          </div>

          {/* Mega Menu */}
          {showMegaMenu && (
            <div
              className="absolute border-t border-black top-full left-0 h-screen w-full bg-white shadow-lg overflow-y-auto max-h-[80vh]"
              onMouseEnter={() => {
                clearTimeout(hideMenuTimeout.current);
                setShowMegaMenu(true);
              }}
              onMouseLeave={() => {
                hideMenuTimeout.current = setTimeout(
                  () => setShowMegaMenu(false),
                  300
                );
              }}
            >
              <div className="flex gap-8 justify-between pl-10 py-8 px-20">
                <div className="w-2/3 grid grid-cols-2 gap-2">
                  {Array.isArray(megaMenu?.servicesType) &&
                    megaMenu.servicesType.map((service, index) => (
                      <Link
                        key={index}
                        href={`/services/${service.slug}`}
                        onClick={() => setShowMegaMenu(false)}
                        className="flex hover:bg-[#F6F6F6] py-3 px-2 items-start gap-2"
                      >
                        <div className="text-[#F39C12] text-xl -mt-2">➢</div>
                        <div>
                          <h3 className="text-lg font-inter mt-[-2px] mb-0 p-0 leading-none">
                            {service.name}
                          </h3>
                        </div>
                      </Link>
                    ))}
                </div>

                {/* Blogs */}
                <div className="w-1/3 bg-[#F6F6F6] rounded-lg p-6">
                  <h3 className="text-lg  mb-4">New Blogs</h3>

                  {/* Mapping Blog Items */}
                  {megaMenu?.blogs?.map((blog) => (
                    <div key={blog.id} className="flex items-start gap-4 mb-4">
                      <img
                        src={`${Image_Url}/${blog.main_image}`}
                        alt={blog.blog_title}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                      <div>
                        <h4 className="text-sm ">{blog.blog_title}</h4>
                        {/* <p className="text-black text-xs">{blog.description}</p> */}
                        <Link
                        href={`/blog/${blog.slug}`}
                          onClick={() => setShowMegaMenu(false)}
                          className="text-[#F39C12] text-xs flex items-center gap-1 mt-1"
                        >
                          Read More <FaArrowRight />
                        </Link>
                      </div>
                    </div>
                  ))}

                  {/* Blog Buttons */}
                  <div className="flex gap-2 mt-4">
                    {["Donate Now", "Subscribe Now", "Join Now"].map(
                      (btn, i) => (
                        <button
                          key={i}
                          onClick={
                            btn === "Donate Now"
                              ? () => {
                                handleDonateClick();
                                setShowMegaMenu(false);
                              }
                              : undefined
                          }
                          className="border border-black text-[12px] px-3 py-2 font-inter rounded-[41px] hover:bg-gray-200 transition"
                        >
                          {btn}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Donate Button */}
          <div className="flex gap-2">
            <Link href="/donation/">
              <div className="w-[145px] cursor-pointer text-white bg-[#F39C12] px-2 py-1 gap-1 flex items-center justify-center border-2 border-transparent rounded-full">
                <div className="bg-white px-1 py-1 rounded-[50%]">
                  <img src="/hand.png" alt="" className="w-6" />
                </div>
                <p className="mx-1 font-inter text-[14px]">Donate Now</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex justify-start w-full pl-2 items-center lg:hidden">
          <div
            className="lg:hidden text-black cursor-pointer right-[35px] absolute top-16"
            onClick={toggleShowNavbar}
          >
            <RxHamburgerMenu size={24} />
          </div>
          <Link href="/">
            <img
              src="/poblogo.png"
              alt="logo"
              className="w-20 h-16 object-contain"
            />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black h-screen z-50 bg-opacity-50 transition-transform transform ${
            showNav ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={() => setShowNav(false)}
        >
          <div
            className="w-2/3 relative z-40 bg-white h-screen p-4 ml-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-black text-[12px]"
              onClick={() => setShowNav(false)}
            >
              <IoMdClose size={24} />
            </button>
            <div className="space-y-4 mt-8 flex flex-col gap-2">
              {mobileNavItems.map((item, index) => (
                <div
                  key={index}
                  className="text-black font-newsLetter border-b border-gray-500"
                >
                  {item.name === "Services" ? (
                    <>
                      <div
                        onClick={() =>
                          setShowServiceDropdown(!showServiceDropdown)
                        }
                        className="flex justify-between items-center py-1 cursor-pointer"
                      >
                        <span>Services</span>
                        {showServiceDropdown ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </div>
                      {showServiceDropdown && (
                        <ul className="pl-4 pt-2 space-y-2 h-36 overflow-auto">
                          {Array.isArray(megaMenu?.servicesType) &&
                            megaMenu.servicesType.map((service, sIndex) => (
                              <Link
                                key={sIndex}
                                href={`/${service.slug}`}
                                onClick={() => setShowNav(false)}
                                className="flex items-center gap-2 text-sm text-gray-800"
                              >
                                <img
                                  src={`${Image_Url}/${service.image}`}
                                  alt="icon"
                                  className="w-4 h-4"
                                />
                                <span>{service.name}</span>
                              </Link>
                            ))}
                        </ul>
                      )}
                    </>
                  ) : item.name === "Media & Publications" ? (
                    <>
                      <div
                        onClick={() => setShowMediaDropdown(!showMediaDropdown)}
                        className="flex justify-between items-center py-1 cursor-pointer"
                      >
                        <span>Media & Publications</span>
                        {showMediaDropdown ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </div>
                      {showMediaDropdown && item.submenu && (
                        <ul className="pl-4 pt-2 space-y-2">
                          {item.submenu.map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              href={sub.link}
                              onClick={() => setShowNav(false)}
                              className="block text-sm text-gray-800"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.link || "#"}
                      className="block py-1"
                      onClick={() => setShowNav(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
