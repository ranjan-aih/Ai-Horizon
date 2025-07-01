import React from "react";
import { NavLink } from "react-router";
import aih_logo_light from "../../assets/aih_logo_light.png";

const Navbar = () => {
  return (
    <div className="w-[1280px] h-[65px] flex justify-center items-center ">
      <div className="flex justify-center items-center gap-5 w-[1040px] h-[40px] ">
        <NavLink>
          <img
            src={aih_logo_light}
            alt="AIH logo"
            className="w-[117px] h-[40px] object-cover overflow-hidden "
          />
        </NavLink>
        <NavLink>Company</NavLink>
        <NavLink>Platform</NavLink>
        <NavLink>Solutions</NavLink>
        <NavLink>Enterprises</NavLink>
        <NavLink>Resources</NavLink>
        <NavLink>Carrier</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
