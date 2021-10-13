/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/client";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import {
  UserCircleIcon,
  CalendarIcon,
  LogoutIcon,
} from "@heroicons/react/outline";

import { loadUser } from "../../redux/actions/userAction";

export const Header = () => {
  const { user, loading } = useSelector((state) => state.loadUser);
  const dispatch = useDispatch();
  const router = useRouter();

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const logoutUser = () => {
    signOut();
  };

  return (
    <div className="bg-white w-full z-50 fixed top-0 shadow-md">
      <nav className="relative flex items-center justify-between z-50 w-full bg-white max-w-6xl mx-auto md:px-4 p-5 shadow-sm">
        <Link href="/" passHref>
          <div className="relative h-7 w-36 cursor-pointer">
            <Image
              src="/images/logo/Staycation.png"
              layout="fill"
              alt="Logo Staycation.com best places for spending your travel time!"
            />
          </div>
        </Link>

        {/* LINKS AND ROUTES */}
        <div className="hidden md:inline-flex items-center  space-x-3 sm:space-x-6 ">
          <Link href="/" passHref>
            <a
              className={`text-lg ${
                router.pathname === "/" ? "text-blue-500" : "text-black"
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="/properties" passHref>
            <a
              className={`text-lg ${user && "px-2"} ${
                router.pathname === "/properties" && "text-blue-500"
              }`}
            >
              Properties
            </a>
          </Link>

          {user ? (
            <div
              onClick={() => setToggle((toggle) => !toggle)}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="relative h-8 w-8">
                <Image
                  src={user.avatar.url}
                  alt="avatar profile for user | traveller"
                  layout="fill"
                  className="rounded-full"
                />
              </div>

              <h4>{user?.name}</h4>
            </div>
          ) : (
            /**
             * THE LOADING IS NEEDED BECAUSE IN THE BACK-END
             * WHEN WE LOADED THE USER
             * THERE IS A TWICE-CHECK IN THE STATE TO MAKE SURE USER IS LOGGED
             */
            !loading && (
              <>
                <Link href="/login" passHref>
                  <a className="text-lg text-white bg-blue-500 px-5 py-[5px] rounded-md hover:bg-indigo-600 ">
                    Login
                  </a>
                </Link>
                <Link href="/register" passHref>
                  <a className="text-lg border border-blue-600 rounded-md px-5 py-[5px] hover:bg-indigo-600 hover:text-white">
                    Register
                  </a>
                </Link>
              </>
            )
          )}

          {/* USER DRAWER NAVIGATION */}
          <div
            className={`absolute space-y-4 right-0 flex-col px-6 py-5 bg-gradient-to-r from-red-200 to-indigo-300 rounded-md z-50 transition ease-out duration-150   ${
              toggle ? "flex top-[72px]" : "top-[-72px] hidden"
            }`}
          >
            <Link passHref href="/me/update">
              <div className="flex items-center space-x-4 cursor-pointer px-2 py-2 hover:bg-indigo-600 bg-indigo-400 rounded-md text-gray-200 ">
                <UserCircleIcon className="h-6 2-6 " />
                <h2>My Profile</h2>
              </div>
            </Link>

            <Link passHref href="/booking/me">
              <div className="flex items-center space-x-4 cursor-pointer px-2 py-2 hover:bg-indigo-600 bg-indigo-400 rounded-md text-gray-200">
                <CalendarIcon className="h-6 2-6 " />
                <h2>My Bookings</h2>
              </div>
            </Link>
            <button
              className="flex items-center justify-center text-white bg-gradient-to-r from-blue-400 to-purple-500 py-3 rounded-md"
              onClick={logoutUser}
            >
              Logout <LogoutIcon className="h-6 2-6 ml-5" />
            </button>
          </div>

          {/* RESPONSIVE NAVIGATION DRAWER / SIDEBAR //TODO */}
        </div>
      </nav>
    </div>
  );
};

// <nav className="navbar row justify-content-center sticky-top">
//   <div className="container">
//     <div className="col-3 p-0">
//       <div className="navbar-brand">
//         <Link href="/" passHref>
//           <img
//             style={{ cursor: "pointer" }}
//             src="/images/bookit_logo.png"
//             alt="BookIT"
//           />
//         </Link>
//       </div>
//     </div>

//     <div className="col-3 mt-3 mt-md-0 text-center">
//       {user ? (
//         <div className="ml-4 dropdown d-line">
//           <a
//             className="btn dropdown-toggle mr-4"
//             id="dropDownMenuButton"
//             data-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <figure className="avatar avatar-nav">
//               <img
//                 src={user.avatar?.url}
//                 alt={user?.name}
//                 className="rounded-circle"
//               />
//             </figure>
//             <span>{user?.name}</span>
//           </a>

//           <div
//             className="dropdown-menu"
//             aria-labelledby="dropDownMenuButton"
//           >
//             <Link href="/booking/me" passHref>
//               <a className="dropdown-item">My Bookings</a>
//             </Link>
//             <Link href="/booking/me" passHref>
//               <a className="dropdown-item">My Profile</a>
//             </Link>
//             <Link href="/" passHref>
//               <a className="dropdown-item text-danger" onClick={logoutUser}>
//                 Logout
//               </a>
//             </Link>
//           </div>
//         </div>
//       ) : (
//         !loading && (

//       )}
//     </div>
//   </div>
// </nav>
