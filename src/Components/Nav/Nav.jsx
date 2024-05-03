import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { IoIosArrowForward } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { MdMenu } from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {
  const [view, setView] = useState(false);

  // console.log(hover);
  return (
    <div className="">
      <div className="my-1 sm:my-2 md:my-3 lg:my-4">
        <div className=" navbar flex items-center flex-col md:flex-row md:justify-between">
          <div className="navbar-start flex items-center flex-row-reverse justify-between w-full md:w-auto md:flex-row">
            <div className="flex gap-4 items-center">
              <div className="relative dropdown">
                <div
                  onClick={() => setView(!view)}
                  role="button"
                  className="text-slate-900 md:hidden text-3xl"
                >
                  {view ? <IoClose /> : <MdMenu />}
                </div>
                {view && (
                  <ul className="navManu absolute mt-1 md:mt-3 -ml-40 md:ml-4 z-10 p-2 shadow rounded-box w-52 border-2 border-solid border-firstColor bg-slate-800 text-white flex flex-col gap-2 md:hidden rounded-xl">
                    <div
                      onClick={() => setView(!view)}
                      className="md:hidden cursor-pointer text-secondColor hover:text-primeryColor bg-slate-800 text-3xl -translate-x-10 translate-y-1/2 top-[calc(50%-20px)] absolute rounded-l-md border-l-2 border-y-2 border-firstColor"
                    >
                      <IoIosArrowForward />
                    </div>
                    <NavLink
                      to={'/'}
                      className="hover:bg-slate-300 hover:text-primeryColor py-1 px-4 rounded"
                      onClick={() => setView(!view)}
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to={'/about'}
                      className="hover:bg-slate-300 hover:text-primeryColor py-1 px-4 rounded"
                      onClick={() => setView(!view)}
                    >
                      About
                    </NavLink>
                    <NavLink
                      to={'/services'}
                      className="hover:bg-slate-300 hover:text-primeryColor py-1 px-4 rounded"
                      onClick={() => setView(!view)}
                    >
                      Services
                    </NavLink>
                    <NavLink
                      to={'/blog'}
                      className="hover:bg-slate-300 hover:text-primeryColor py-1 px-4 rounded"
                      onClick={() => setView(!view)}
                    >
                      Blog
                    </NavLink>
                    <NavLink
                      to={'/contact'}
                      className="hover:bg-slate-300 hover:text-primeryColor py-1 px-4 rounded"
                      onClick={() => setView(!view)}
                    >
                      Contact
                    </NavLink>

                    <Link
                      to={'/register'}
                      className="font-semibold bg-slate-300 hover:bg-slate-100 text-primeryColor px-5 md:px-8 py-2 md:py-3 rounded-md active:scale-90 duration-150"
                      onClick={() => setView(!view)}
                    >
                      Appointment
                    </Link>
                  </ul>
                )}
              </div>
            </div>
            {/* Logo */}
            <Link
              to={'/'}
              className="text-3xl font-extrabold bg-white px-2 rounded-full"
            >
              <img className="h-10 md:h-12" src={logo} alt="" />
            </Link>
          </div>
          {/* Learge screen Menu  */}
          <div className="navbar-center hidden md:flex">
            <ul className="navManu menu menu-horizontal px-1 flex gap-2 xl:gap-6 text-slate-800 font-semibold">
              <NavLink
                to={'/'}
                className="border-b border-transparent hover:border-primeryColor hover:text-primeryColor px-2"
              >
                Home
              </NavLink>

              <NavLink
                to={'/about'}
                className="border-b border-transparent hover:border-primeryColor hover:text-primeryColor px-2"
              >
                About
              </NavLink>

              <NavLink
                to={'/services'}
                className="border-b border-transparent hover:border-primeryColor hover:text-primeryColor px-2"
              >
                Services
              </NavLink>

              <NavLink
                to={'/blog'}
                className="border-b border-transparent hover:border-primeryColor hover:text-primeryColor px-2"
              >
                Blog
              </NavLink>

              <NavLink
                to={'/contact'}
                className="border-b border-transparent hover:border-primeryColor hover:text-primeryColor px-2"
              >
                Contact
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-2 w-40">
            <button className="hidden md:block font-semibold bg-transparent hover:bg-primeryColor px-3 xl:px-4 rounded-md active:scale-90 duration-150 text-primeryColor border border-primeryColor hover:text-white py-2">
              Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
