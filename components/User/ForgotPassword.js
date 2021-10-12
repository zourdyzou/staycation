import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { LockClosedIcon } from "@heroicons/react/solid";

import { forgotPassword, clearError } from "../../redux/actions/userAction";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }

    if (message) {
      toast.success(message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, message, error]);

  const forgotPasswordHandler = (e) => {
    e.preventDefault();

    const userData = {
      email,
    };

    dispatch(forgotPassword(userData));
  };

  return (
    <div className="pt-36 max-w-lg mx-auto px-4">
      <div className=" flex flex-col bg-gradient-to-tr from-blue-500 to-purple-300 py-6 px-4 rounded-md">
        <form
          className="flex flex-col space-y-4"
          onSubmit={forgotPasswordHandler}
        >
          <h1 className="text-2xl text-white font-semibold py-2 pb-8">
            Forgot Password
          </h1>
          <div className="flex flex-col py-3 space-y-2">
            <label htmlFor="email_field" className="text-white">
              Enter Email:
            </label>
            <input
              type="email"
              id="email_field"
              className="py-2 bg-transparent outline-none focus:border-gray-200 border-2 rounded-md text-white"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
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
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};
