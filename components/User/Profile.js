/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Link from "next/link";
import Image from "next/image";
import {
  UserIcon,
  ShieldExclamationIcon,
  AtSymbolIcon,
} from "@heroicons/react/outline";
import { LockClosedIcon } from "@heroicons/react/solid";

import { Loader } from "../Layout/Loader";
import { updateProfile, clearError } from "../../redux/actions/userAction";
import { UPDATE_PROFILE_RESET } from "../../redux/constants/userConstant";

export const Profile = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/default_avatar.jpg"
  );

  const { user: loadedUser, loading } = useSelector((state) => state.auth);
  const {
    error,
    isUpdated,
    loading: updateLoading,
  } = useSelector((state) => state.user);

  useEffect(() => {
    if (loadedUser) {
      setUser({
        name: loadedUser.name,
        email: loadedUser.email,
      });

      setAvatarPreview(loadedUser.avatar.url);
    }

    if (error) {
      toast.error(error);
      dispatch(clearError());
    }

    if (isUpdated) {
      router.push("/");
      dispatch({ type: UPDATE_PROFILE_RESET });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isUpdated, error, loadedUser]);

  const registerHandler = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      avatar,
    };

    dispatch(updateProfile(userData));
  };

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
          setAvatarPreview(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser((prevUser) => {
        return { ...prevUser, [e.target.name]: e.target.value };
      });
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="px-10 py-10 flex justify-center">
      <form className="flex flex-col w-96" onSubmit={registerHandler}>
        {/* HEADER */}
        <div className="flex flex-col items-center space-y-4">
          <Link href="/" passHref>
            <div className="relative h-10 w-52 cursor-pointer select-none">
              <Image
                src="/images/logo/Staycation.png"
                layout="fill"
                className="select-none"
                alt="Logo Staycation.com best places for spending your travel time!"
              />
            </div>
          </Link>
          <h1 className="text-2xl text-indigo-600 font-bold">
            Welcome To Your Profile
          </h1>
          <p>Change your personal data information.</p>
        </div>

        {/* INPUT */}
        <div className="py-6 space-y-3">
          <div className="flex items-center space-x-3 border py-2 px-1 pl-2 rounded-md focus:border-indigo-700">
            <UserIcon className="h-6 w-6 " />
            <input
              type="name"
              name="name"
              className="outline-none focus:outline-none border-none bg-transparent"
              value={name}
              placeholder="Full Name"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex items-center space-x-3 border py-2 px-1 pl-2 rounded-md focus:border-indigo-700">
            <AtSymbolIcon className="h-6 w-6 " />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="outline-none focus:outline-none border-none bg-transparent w-full"
              value={email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex items-center space-x-3 border py-2 px-1 pl-2 rounded-md focus:border-indigo-700">
            <ShieldExclamationIcon className="h-6 w-6 " />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="outline-none focus:outline-none border-none bg-white placeholder-transparent"
              value={password}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className="flex items-center p-2 bg-gradient-to-tr from-blue-500 to-purple-600 text-white rounded-md mb-6">
          <figure className="relative h-12 w-[50px]">
            <Image
              src={avatarPreview}
              className="rounded-full"
              layout="fill"
              alt="profile avatar"
            />
          </figure>

          <div className="flex items-center space-x-10">
            <input
              type="file"
              className="p-2 bg-transparent hidden"
              name="avatar"
              accept="images/*"
              id="customFile"
              onChange={handleChange}
            />
            <label
              className="px-10 py-2 bg-indigo-300 text-black rounded-md"
              htmlFor="customFile"
            >
              Choose Avatar
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={!!updateLoading}
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Save
        </button>
      </form>
    </div>
  );
};
