import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { AtSymbolIcon, ShieldExclamationIcon } from "@heroicons/react/outline";

import { signIn } from "next-auth/client";
import { toast } from "react-toastify";
import { LockClosedIcon } from "@heroicons/react/solid";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    console.log({
      CHECK: result,
    });

    if (result.error) {
      toast.error(result.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="px-10 py-10 flex justify-center">
      <form className="flex flex-col w-96" onSubmit={submitHandler}>
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
            Welcome back Travellers!
          </h1>
          <p>Sign in to your account.</p>
        </div>

        {/* INPUT */}
        <div className="py-6 space-y-3">
          <div className="flex items-center space-x-3 border py-2 px-1 pl-2 rounded-md focus:border-indigo-700">
            <AtSymbolIcon className="h-6 w-6 " />
            <input
              type="email"
              placeholder="email"
              className="outline-none focus:outline-none border-none bg-transparent w-full"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div className="flex items-center space-x-3 border py-2 px-1 pl-2 rounded-md focus:border-indigo-700">
            <ShieldExclamationIcon className="h-6 w-6 " />
            <input
              type="password"
              placeholder="password"
              className="outline-none focus:outline-none border-none bg-white placeholder-transparent"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between py-4 px-3 ">
          <h2 className="text-sm flex flex-col">
            New Traveller?{" "}
            <Link href="/register" passHref>
              <span className="underline cursor-pointer text-indigo-600">
                Sign up here
              </span>
            </Link>
          </h2>

          <Link passHref href="/password/forgot">
            <a className="text-sm text-indigo-700 hover:underline">
              Forgot your password?
            </a>
          </Link>
        </div>

        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={!!loading}
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Sign in
        </button>
      </form>
    </div>
  );
};
