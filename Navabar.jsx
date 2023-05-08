/** @format */

import React from "react";
import Bild1 from "../assets/landingPage.jpg";
import Logo from "../assets/logor.png";
import { useState, useEffect, useRef } from "react";
import "../styles/navIcon.css";

const Navabar = () => {
  const [toggle, setToggle] = React.useState(false);

  const [hidden, setHidden] = React.useState(true);

  const handleToggle = () => {
    setTimeout(() => {
      setHidden((prev) => !prev);
    }, 500);
    setToggle((prev) => !prev);
  };

  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const height = navbarRef.current.offsetHeight;
    setNavbarHeight(height);
  }, [navbarRef]);

  console.log(navbarHeight);

  return (
    <nav
      ref={navbarRef}
      className={`fixed px-10 w-full family text-paragraph`}
      style={{ zIndex: 70, backgroundImage: `url(${Bild1})` }}
    >
      <div>
        {/* Hier sitzt der Code für das Logo */}
        <div className="flex flex-row items-center ">
          {/* Pfeil */}
          <div className="  absolute items-center pfeil pfeilani">
            <svg
              fill="#ffffff"
              height="70px"
              width="70px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1792 1792"
              xml:space="preserve"
            >
              <path
                d="M1792,897l-431,198.5l84.5-157.5H462.9l-99.3,123.6H0l133.2-165L0,730.4h363.6l99.3,125.6h982.3l-84.5-159.5L1792,897z"
                fill="#ffffff"
              />
            </svg>
          </div>
          {/* //Logo mit Text */}
          <div className="ml-5 Ziel">
            <svg
              width="293"
              height="139"
              viewBox="0 0 293 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="60" cy="62" r="32" stroke="black" strokeWidth="4" />
              <circle
                cx="60.5"
                cy="62.5"
                r="19.5"
                stroke="black"
                strokeWidth="4"
              />
              <circle
                cx="60.5"
                cy="62.5"
                r="8"
                stroke="black"
                strokeWidth="3"
              />
              <circle cx="60.5" cy="62.5" r="2.5" fill="black" />
            </svg>
          </div>
          {/* Bis hier geht der Code von dem Logo */}
        </div>
      </div>

      <div
        style={{ zIndex: 60 }}
        onClick={handleToggle}
        className={`md:hidden   py-0 px-2.5 rounded-lg sm:right-10 right-2 cursor-pointer absolute`}
      >
        {/* {toggle ? <Close sx={{ color: "black" }} /> : <Menu />} */}
        {/* <div className={`nav-icon2 ${toggle ? "nav-icon2 open" : "nav-icon2"}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div> */}

        <div
          className={`menu-toggle  ${
            toggle ? "menu-toggle open " : "menu-toggel"
          }`}
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="cross">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div
        style={{ zIndex: 50 }}
        className={`md:hidden  bg-background1 ${
          toggle
            ? "menu-slide-right-left-open"
            : `menu-slide-left-right-close  ${hidden ? "hidden" : ""} `
        }  w-[55%]  top-0 right-0 h-[100vh] text-textgray   fixed `}
      >
        <ul className="flex flex-col pt-20 p-4  items-start text-lg">
          {/* {navbarContent.navLinks.map((item, index) => (
            <div className="w-full" key={index}>
              <li className="cursor-pointer hover:text-textwhite duration-300 py-2">
                <a onClick={handleToggle} href={item.href}>
                  {item.link}
                </a>
              </li>

              <hr className="w-[100%] border-none bg-gray-500 h-0.5" />
            </div>
          ))} */}
          ich bin toll
        </ul>
      </div>
    </nav>
  );
};

export default Navabar;
