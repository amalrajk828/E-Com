import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useState } from "react";
import api from "../services/api";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

import { setCredentials } from "../store/slices/authSlice";

import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit } = useForm();

  const submitHandler = async (formData) => {
    try {
      const { data } = await api.post("/auth/login", formData);

      console.log(data);

      localStorage.setItem("token", data.token);

      localStorage.setItem("user", JSON.stringify(data.user));

      // Save in Redux
      dispatch(
        setCredentials({
          user: data.user,
          token: data.token,
        }),
      );

      // Navigate
      if (data.user.role === "admin") {
        navigate("/admin/products");
      } else {
        navigate("/products");
      }
    } catch (error) {
      console.log(error);
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back 👋</h1>
          <p>Login to continue shopping</p>
        </div>

        <form onSubmit={handleSubmit(submitHandler)} className="login-form">
          <div className="input-group">
            <FaEnvelope className="input-icon" />

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
              })}
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="register-text">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
