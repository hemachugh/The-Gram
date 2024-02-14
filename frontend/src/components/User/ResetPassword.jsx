import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { clearErrors, resetPassword } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import BackdropLoader from "../Layouts/BackdropLoader";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { error, success, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword.length < 8) {
      toast.warn("Password length must be atleast 8 characters");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Password Doesn't Match");
      return;
    }
    dispatch(resetPassword(params.token, newPassword));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      toast.success("Password Updated Successfully");
      navigate("/login");
    }
  }, [dispatch, error, success, navigate]);

  return (
    <>
      {loading && <BackdropLoader />}
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 pattern-subtle">
        <div className="w-full max-w-xs bg-gradient-to-br from-white to-gray-100 flex flex-col gap-2 p-6 pt-12 shadow-inner rounded-xl border border-gray-200">
          <h1 className="text-black font-medium w-full text-2xl text-center">
            Enter New Password
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-3 m-3 md:m-8"
          >
            <TextField
              fullWidth
              size="small"
              className="bg-white"
              label="New Password"
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <TextField
              fullWidth
              size="small"
              label="Confirm New Password"
              className="bg-white"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-primary-blue font-medium py-2 rounded text-white w-full my-3"
            >
              Submit
            </button>
          </form>
          <div className="ribbon-top">🎀</div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
