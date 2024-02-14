import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors, registerUser } from "../../actions/userAction";
import BackdropLoader from "../Layouts/BackdropLoader";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );

  const [user, setUser] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });

  const { email, name, username, password } = user;

  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState();

  const handleRegister = (e) => {
    e.preventDefault();

    const userCheck = /^[a-z0-9_.-]{6,25}$/gim;

    if (password.length < 8) {
      toast.error("Password length must be atleast 8 characters");
      return;
    }
    if (!avatar) {
      toast.error("Select Profile Pic");
      return;
    }
    if (!userCheck.test(username)) {
      toast.error("Invalid Username");
      return;
    }

    const formData = new FormData();
    formData.set("email", email);
    formData.set("name", name);
    formData.set("username", username);
    formData.set("password", password);
    formData.set("avatar", avatar);

    dispatch(registerUser(formData));
  };

  const handleDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
      // console.log(e.target.files[0])
      setAvatar(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, error, isAuthenticated, navigate]);

  return (
    <>
      {loading && <BackdropLoader />}
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 pattern-subtle">
        <div className="w-full max-w-xs bg-gradient-to-br from-white to-gray-100 flex flex-col gap-2 p-6 pt-12 shadow-inner rounded-xl border border-gray-200">
          <h1 className="text-black font-medium w-full text-2xl text-center">
            Member Signup
          </h1>
          <form
            onSubmit={handleRegister}
            encType="multipart/form-data"
            className="flex flex-col justify-center items-center gap-3 m-3 md:m-8"
          >
            <TextField
              fullWidth
              label="Email"
              type="email"
              className="bg-white"
              name="email"
              value={email}
              onChange={handleDataChange}
              required
              size="small"
            />
            <TextField
              fullWidth
              label="Full Name"
              className="bg-white"
              name="name"
              value={name}
              onChange={handleDataChange}
              required
              size="small"
            />
            <TextField
              label="Username"
              type="text"
              name="username"
              className="bg-white"
              value={username}
              onChange={handleDataChange}
              size="small"
              required
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              className="bg-white"
              name="password"
              value={password}
              onChange={handleDataChange}
              required
              size="small"
              fullWidth
            />
            <div className="flex w-full justify-between gap-3 items-center">
              <Avatar
                alt="Avatar Preview"
                src={avatarPreview}
                sx={{ width: 48, height: 48 }}
              />
              <label>
                <input
                  type="file"
                  accept="image/*"
                  name="avatar"
                  onChange={handleDataChange}
                  className="block w-full text-sm text-gray-400
                                    file:mr-3 file:py-2 file:px-6
                                    file:rounded-full file:border-0
                                    file:text-sm file:cursor-pointer file:font-semibold
                                    file:bg-blue-100 file:text-blue-700
                                    hover:file:bg-blue-200
                                    "
                />
              </label>
            </div>

            <button
              type="submit"
              className="bg-primary-blue font-medium py-2 rounded text-white w-full"
            >
              Sign up
            </button>
            <span className=" text-gray-500">OR</span>
            <Link
              to="/password/forgot"
              className="text-sm font-medium  text-blue-800"
            >
              Forgot password?
            </Link>
            <div className="text-center">
              <span>
                Already have an account?{" "}
                <Link to="/login" className="text-primary-blue">
                  Log in
                </Link>
              </span>
            </div>
          </form>
          <div className="ribbon-top">🎀</div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
