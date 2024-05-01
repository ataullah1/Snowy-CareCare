import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { IoIosArrowForward, IoMdClose } from 'react-icons/io';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { ContextAuth } from '../../provider/Provider';
import userProfile from '../../assets/profile-blanck.png';
import { IoClose } from 'react-icons/io5';
import { MdMenu } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import { FiUserPlus } from 'react-icons/fi';

const Nav = () => {
  const { userDta } = useContext(ContextAuth);
  const [viewProfile, setViewProfile] = useState(false);
  const [view, setView] = useState(false);

  // console.log(hover);
  return (
    <div className="">
      <Tooltip id="my-tooltip" />
      <div className="w-11/12 mx-auto max-w-[1700px]">
        <div className=" navbar flex items-end flex-col sm:flex-row sm:justify-between">
          <div className="navbar-start flex items-center flex-row-reverse justify-between w-full sm:w-auto sm:flex-row">
            <div className="flex gap-4 items-center">
              {userDta ? (
                <div className="navbar-end flex sm:hidden gap-4 w-auto">
                  <img
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={userDta.displayName}
                    data-tooltip-place="bottom-end"
                    onClick={() => setViewProfile(!viewProfile)}
                    src={userDta.photoURL}
                    className="border-2 border-firstColor rounded-full h-12 w-12 cursor-pointer p-[2px]"
                    alt=""
                  />

                  <div
                    className={`absolute top-16 lg:top-20 right-8 duration-3000 transition-transform ${
                      viewProfile
                        ? 'translate-x-0 visible'
                        : 'translate-x-96 invisible'
                    }`}
                  >
                    <div className="relative">
                      <div
                        className="text-white absolute text-2xl top-3 left-3 border rounded cursor-pointer hover:border-firstColor duration-150"
                        onClick={() => setViewProfile(!viewProfile)}
                      >
                        <IoMdClose />
                      </div>
                      <ProfileMenu />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative dropdown">
                  <div
                    onClick={() => setView(!view)}
                    role="button"
                    className="text-white lg:hidden text-3xl"
                  >
                    {view ? <IoClose /> : <MdMenu />}
                  </div>
                  {view && (
                    <ul className="navManu absolute mt-1 sm:mt-3 -ml-40 sm:ml-4 z-10 p-2 shadow rounded-box w-52 border-2 border-solid border-firstColor bg-slate-800 text-white flex flex-col gap-2 lg:hidden">
                      <div
                        onClick={() => setView(!view)}
                        className="sm:hidden cursor-pointer text-secondColor hover:text-firstColor bg-slate-800 text-3xl -translate-x-10 translate-y-1/2 top-[calc(50%-20px)] absolute rounded-l-md border-l-2 border-y-2 border-firstColor"
                      >
                        <IoIosArrowForward />
                      </div>
                      <div
                        style={{ borderRadius: '0 10px 0px 10px' }}
                        onClick={() => setView(!view)}
                        className="hidden sm:block cursor-pointer  text-firstColor text-3xl -top-4  right-0 translate-y-1/2 absolute bg-firstColor"
                      >
                        <span className="text-white">
                          <IoMdClose />
                        </span>
                      </div>
                      <NavLink
                        to={'/'}
                        className="hover:bg-slate-300 hover:text-firstColor py-1 px-4 rounded"
                        onClick={() => setView(!view)}
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to={'/all-art-craft-items'}
                        className="hover:bg-slate-300 hover:text-firstColor py-1 px-4 rounded"
                        onClick={() => setView(!view)}
                      >
                        All Art & craft Items
                      </NavLink>
                      <NavLink
                        to={'/add-craft-item'}
                        className="hover:bg-slate-300 hover:text-firstColor py-1 px-4 rounded"
                        onClick={() => setView(!view)}
                      >
                        Add Craft Item
                      </NavLink>
                      <NavLink
                        to={'/my-art-craft-list'}
                        className="hover:bg-slate-300 hover:text-firstColor py-1 px-4 rounded"
                        onClick={() => setView(!view)}
                      >
                        My Art&Craft List
                      </NavLink>
                      <div className="flex sm:hidden flex-col gap-2 mt-2">
                        <Link
                          to={'/login'}
                          className="font-semibold hover:bg-firstColor hover:text-white px-5 sm:px-8 py-2 sm:py-3 rounded-md border-2 border-white text-white active:scale-90 duration-150"
                          onClick={() => setView(!view)}
                        >
                          Login
                        </Link>
                        <Link
                          to={'/register'}
                          className="font-semibold bg-firstColor hover:bg-white hover:text-firstColor text-white px-5 sm:px-8 py-2 sm:py-3 rounded-md active:scale-90 duration-150"
                          onClick={() => setView(!view)}
                        >
                          Register
                        </Link>
                      </div>
                    </ul>
                  )}
                </div>
              )}
            </div>
            {/* Logo */}
            <Link
              to={'/'}
              className="text-3xl font-extrabold bg-white px-2 rounded-full"
            >
              <img className="h-12 lg:h-[55px]" src={logo} alt="" />
            </Link>
          </div>
          {/* Learge screen Menu  */}
          <div className="navbar-center hidden lg:flex">
            <ul className="navManu menu menu-horizontal px-1 flex gap-2 xl:gap-6 text-white">
              <NavLink
                to={'/'}
                className="-skew-x-[15deg] w-28 py-2 border-2 px-3 text-center font-normal text-white rounded-md hover:border-firstColor"
              >
                Home
              </NavLink>
              <NavLink
                to={'/all-art-craft-items'}
                className="-skew-x-[15deg] py-2 border-2 px-3 text-center font-normal text-white rounded-md hover:border-firstColor"
              >
                All Art & craft Items
              </NavLink>
              <NavLink
                to={'/add-craft-item'}
                className="-skew-x-[15deg] py-2 border-2 px-3 text-center font-normal text-white rounded-md hover:border-firstColor"
              >
                Add Craft Item
              </NavLink>
              <NavLink
                to={'/my-art-craft-list'}
                className="-skew-x-[15deg] py-2 border-2 px-3 text-center font-normal text-white rounded-md hover:border-firstColor"
              >
                My Art&Craft List
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-2 w-40">
            {userDta ? (
              <div className="  hidden sm:flex gap-4">
                <img
                  onClick={() => setViewProfile(!viewProfile)}
                  src={userDta.photoURL ? userDta.photoURL : userProfile}
                  className="border-2 border-firstColor rounded-full h-12 w-12 cursor-pointer p-[2px]"
                  alt=""
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={userDta.displayName}
                  data-tooltip-place="bottom"
                />

                <div
                  className={`absolute top-16 lg:top-20 right-16 duration-3000 transition-transform ${
                    viewProfile
                      ? 'translate-x-0 visible'
                      : 'translate-x-96 invisible'
                  }`}
                >
                  <div className="relative">
                    <div
                      className="text-white absolute text-2xl top-3 left-3 border rounded cursor-pointer hover:border-firstColor duration-150"
                      onClick={() => setViewProfile(!viewProfile)}
                    >
                      <IoMdClose />
                    </div>
                    <ProfileMenu
                      viewProfile={viewProfile}
                      setViewProfile={setViewProfile}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="hidden sm:block">
                <button
                  onClick={() =>
                    document.getElementById('my_modal_1').showModal()
                  }
                  className="font-semibold bg-firstColor px-5 xl:px-8 rounded-md active:scale-90 duration-100 text-white button2"
                >
                  <span className="flex items-center gap-2">
                    <FiUserPlus /> Account
                  </span>
                </button>
              </div>
            )}
            {/* <dialog
              id="my_modal_1"
              className="hidden sm:flex items-center justify-center modal"
            >
              <div
                className="modal-box relative w-[700px]"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  boxShadow: '0px 0px 26px 5px #fff',
                }}
              >
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost h-10 w-10 absolute right-2 top-2 text-2xl bg-slate-500 text-white hover:bg-slate-800">
                    <CgClose />
                  </button>
                </form>
                <div className="flex gap-4 justify-center items-center min-h-72">
                  <Link to={'/login'}>
                    <button className="text-lg font-bold py-2 border-2 bg-secondColor text-white border-secondColor hover:scale-110 duration-200 px-3 rounded-md w-40  hover:text-white">
                      Log In
                    </button>
                  </Link>

                  <Link to={'/register'}>
                    <button className="text-lg font-bold py-2 border-2 bg-firstColor hover:scale-110 duration-200 shadow-lg border-firstColor hover:bg-firstColor px-3 rounded-md w-40 text-white">
                      Create Account
                    </button>
                  </Link>
                </div>
              </div>
            </dialog> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
