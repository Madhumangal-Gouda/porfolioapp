import React from "react";
import { Icons } from "../Librarary/IconLybrary";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="max-w-screen-2xl w-full mx-auto px-4">
        <div className="hover:text- transition-all delay-100 ease-in-out">
          <a href="/">
            <img src={logo} className="w-5" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
