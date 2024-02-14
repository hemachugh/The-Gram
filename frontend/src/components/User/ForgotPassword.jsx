import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { clearErrors, forgotPassword } from "../../actions/userAction";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import BackdropLoader from "../Layouts/BackdropLoader";

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
    setEmail("");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (message) {
      toast.success(message);
    }
  }, [dispatch, error, message]);

  return (
    <>
      {loading && <BackdropLoader />}
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 pattern-subtle">
        <div className="w-full max-w-xs bg-gradient-to-br from-white to-gray-100 flex flex-col gap-2 p-6 pt-12 shadow-inner rounded-xl border border-gray-200">
          <h1 className="text-black font-medium w-full text-2xl text-center">
            Mail Address Here
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-3 m-3 md:m-8"
          >
            <TextField
              label="Email"
              variant="outlined"
              className="bg-white"
              size="small"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-primary-blue font-medium py-2 rounded text-white w-full"
            >
              Submit
            </button>
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

export default ForgotPassword;
