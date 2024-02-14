import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BackdropLoader from "../Layouts/BackdropLoader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loginUser } from "../../actions/userAction";
import { useLocation } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();

  const { loading, isAuthenticated, error, user } = useSelector(
    (state) => state.user
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      // navigate(`/${user.username}`);
      navigate(`/`);
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, isAuthenticated, navigate]);
  return (
    <>
      {loading && <BackdropLoader />}
      {/* <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
        <div className="w-full max-w-xs bg-gradient-to-br from-white to-gray-100 flex flex-col gap-2 p-6 pt-12 shadow-xl rounded-lg"> */}
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 pattern-subtle">
        <div className="w-full max-w-xs bg-gradient-to-br from-white to-gray-100 flex flex-col gap-2 p-6 pt-12 shadow-inner rounded-xl border border-gray-200">
          <h1 className="text-black font-medium w-full text-2xl text-center ">
            Member Login
          </h1>
          <form
            onSubmit={handleLogin}
            className="flex flex-col justify-center  items-center gap-3 m-3 md:m-8"
          >
            <TextField
              label="Email/Username"
              type="text"
              className="bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              size="small"
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              className="bg-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              size="small"
              fullWidth
            />
            <button
              type="submit"
              className="bg-primary-blue font-medium py-2 rounded text-white w-full"
            >
              Log In
            </button>
            <span className=" text-gray-500">OR</span>
            <Link
              to="/password/forgot"
              className="text-sm font-medium text-blue-800"
            >
              Forgot password?
            </Link>
            <div className="text-center">
              <p>Don't have an account? </p>
              <Link to="/register" className="text-primary-blue">
                Sign up
              </Link>
            </div>
          </form>
          <div className="ribbon-top">🎀</div>
        </div>
      </div>
    </>
  );
};

export default Login;
