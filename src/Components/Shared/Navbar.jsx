import React from 'react';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const Navbar = () => {
  return (
    <div>
      <div className="navbar shadow bg-opacity-25 bg-white backdrop-filter backdrop-blur-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content -ml-3 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a> DESTINATION</a></li>
      <li><a>VISA</a></li>
      <li><a>BLOG</a></li>
      <li><a>MORE</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
      <img className=' w-28 ' src="https://i.ibb.co/thVTBVc/Capture-removebg-preview.png" alt="" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      <li><a>TOURS</a></li>
      <li>
        <details>
          <summary className='z-[1]'>PACKAE</summary>
          <ul className="p-2 ">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li> 
          </ul>
        </details>
      </li>
      <li><a> DESTINATION</a></li>
      <li><a>VISA</a></li>
      <li><a>BLOG</a></li>
      <li><a>MORE</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <a className=' mr-3 p-3' href="">
      <AccountCircleOutlinedIcon/>
      </a>
   <a className=' mr-3' href="">
    <WidgetsOutlinedIcon/>
   </a>
    <a className="hidden md:inline-block bg-red-400 p-3 hover:text-red-600 hover:bg-green-500 text-white font-bold rounded">
    <AddIcCallIcon/>
        99466437736
      </a>
      
  </div>
</div>
    </div>
  );
};

export default Navbar;