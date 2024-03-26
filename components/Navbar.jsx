import exp from "constants";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "WORK",
    path: "/work",
  },

  {
    title: "CONTACT",
    path: "/contact",
  },

  {
    title: "ABOUT",
    path: "/about",
  },
];

const Navbar = () => {
  return (
    <nav className=" fixed top-0 left-0 right-0 z-10bg-opacity-90">
      <div className=" flex justify-betweenmx-auto p-3 px-4">
        <div className="grid grid-cols-5 lg:grid-cols-12">
          <Link
            href={"/"}
            className="text-lg md:text-2xl text-black font-semibold tracking-widest"
          >
            YIFAN ZHUANG
          </Link>
        </div>
        <div className="menu md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-6 sm:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
