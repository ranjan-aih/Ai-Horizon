import React from 'react';
import { NavLink } from 'react-router';
import aih_logo_light from '../../assets/aih_logo_light.png';

const menuItems = [
  { name: 'Company', to: '/about' },
  { name: 'Platform', to: '/partner' },
  { name: 'Solutions', to: '/solutions' },
  { name: 'Enterprises', to: '/enterprises' },
  { name: 'Resources', to: '/resources' },
  { name: 'Career', to: '/career' },
];

const Navbar = () => {
  return (
    <div className='w-full h-[65px] px-6 md:px-10 fixed top-0 z-50 bg-white/10 backdrop-blur-[15px] shadow-md flex items-center justify-center'>
      <div className='w-full max-w-[1280px] flex justify-between items-center'>
        {/* Logo */}
        <NavLink to='/' className='flex items-center gap-2'>
          <img
            src={aih_logo_light}
            alt='logo'
            className='w-[118px] h-[40px] object-contain overflow-hidden '
          />
        </NavLink>

        {/* Menu */}
        <div className='flex items-center gap-6 text-[14px] font-medium text-[#000000]'>
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className='hover:text-sky-600 transition duration-150'
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Book a Demo Button */}
        <NavLink
          to='/book-demo'
          className='bg-[#000000] text-[#FFFFFF] w-[105px] h-[35px] flex justify-center items-center rounded-[92px] hover:bg-gray-900 transition text-[12px] font-[400px]'
        >
          Book a Demo
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
