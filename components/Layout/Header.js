/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from "react";
import Link from "next/link";
// import { signOut } from "next-auth/client";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";

import { loadUser } from "../../redux/actions/userAction";

export const Header = () => {
  const { user, loading } = useSelector((state) => state.loadUser);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  // const logoutUser = () => {
  //   signOut();
  // };

  return (
    <div className="bg-white w-full z-50 fixed top-0 shadow-md">
      <nav className="flex items-center justify-between z-50 w-full bg-white max-w-6xl mx-auto md:px-4 p-5 shadow-sm">
        <Link href="/" passHref>
          <div className="relative h-7 w-36 cursor-pointer">
            <Image
              src="/images/logo/Staycation.png"
              layout="fill"
              alt="Logo Staycation.com best places for spending your travel time!"
            />
          </div>
        </Link>
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
            <a className={`text-lg ${user && "px-2"}`}>Properties</a>
          </Link>

          {user ? (
            <div className="flex items-center space-x-3 cursor-pointer">
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
