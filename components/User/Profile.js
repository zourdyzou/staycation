/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { ButtonLoader } from "../Layout/ButtonLoader";
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
    <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={registerHandler}>
            <h1 className="mb-3">Update Profile</h1>

            <div className="form-group">
              <label htmlFor="name_field">Full Name</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="avatar_upload">Avatar</label>
              <div className="d-flex align-items-center">
                <div>
                  <figure className="avatar mr-3 item-rtl">
                    <img
                      src={avatarPreview}
                      className="rounded-circle"
                      alt="profile avatar"
                    />
                  </figure>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    name="avatar"
                    accept="images/*"
                    id="customFile"
                    onChange={handleChange}
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose Avatar
                  </label>
                </div>
              </div>
            </div>

            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={!!updateLoading}
            >
              {updateLoading ? <ButtonLoader /> : "UPDATE"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
