import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#fff");
        setTextColor("black");
      } else {
        setColor("transparent");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div style={{ backgroundColor: `${color}` }} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 className="font-bold text-4xl" style={{ color: `${textColor}` }}>
            Captur
          </h1>
        </Link>
        <ul className="hidden sm:flex ">
          <li className="p-4 ">
            <Link href="/">
              <h1 style={{ color: `${textColor}` }}>Home</h1>
            </Link>
          </li>
          <li className="p-4 ">
            <Link href="/#gallery">
              <h1 style={{ color: `${textColor}` }}>Gallery</h1>
            </Link>
          </li>
          <li className="p-4 ">
            <Link href="/work">
              <h1 style={{ color: `${textColor}` }}>Works</h1>
            </Link>
          </li>
          <li className="p-4 ">
            <Link href="/contact">
              <h1 style={{ color: `${textColor}` }}>Contacts</h1>
            </Link>
          </li>
        </ul>
        {/* Mobile button */}
        <div className="block sm:hidden z-10" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen  bg-black text-center ease-in duration-300 "
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen  bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">
                <h1>Home</h1>
              </Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#gallery">
                <h1>Gallery</h1>
              </Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/work">
                <h1>Works</h1>
              </Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">
                <h1>Contacts</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
