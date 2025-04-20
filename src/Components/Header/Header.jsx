import React from 'react';
import { NavLink } from 'react-router';
import { IoIosCart } from "react-icons/io";
import { BsBookmarkPlusFill } from 'react-icons/bs';

const Header = () => {

    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              
              <li>
          <NavLink to='/' className={({isActive}) => (isActive? 'text-indigo-700' : '')}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' className={({isActive}) => (isActive? 'text-indigo-700' : '')}>About</NavLink>
            </li>
            <li>
          <NavLink to='/card' className={({isActive}) => (isActive? 'text-indigo-700' : '')}><IoIosCart /></NavLink>
            </li>
            <li>
              <NavLink to='/favorites' className={({isActive}) => (isActive? 'text-indigo-700' : '')}><BsBookmarkPlusFill /></NavLink>
            </li>

            </ul>
          </div>
          <a className="text-xl">BOI BAZAR</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
          <NavLink to='/' className={({isActive}) => (isActive? 'text-indigo-700' : '')}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' className={({isActive}) => (isActive? 'text-indigo-700' : '')}>About</NavLink>
            </li>
            <li>
          <NavLink to='/card' className={({isActive}) => (isActive? 'text-indigo-700' : '')}><IoIosCart /></NavLink>
            </li>
            <li>
              <NavLink to='/favorites' className={({isActive}) => (isActive? 'text-indigo-700' : '')}><BsBookmarkPlusFill /></NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Header;