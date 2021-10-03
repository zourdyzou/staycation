import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { ButtonLoader } from "../Layout/ButtonLoader";
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
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow-lg" onSubmit={forgotPasswordHandler}>
          <h1 className="mb-3">Forgot Password</h1>
          <div className="form-group">
            <label htmlFor="email_field">Enter Email</label>
            <input
              type="email"
              id="email_field"
              className="form-control"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>

          <button
            id="forgot_password_button"
            type="submit"
            className="btn btn-block py-3"
            disabled={!!loading}
          >
            {loading ? <ButtonLoader /> : "Send Email"}
          </button>
        </form>
      </div>
    </div>
  );
};
