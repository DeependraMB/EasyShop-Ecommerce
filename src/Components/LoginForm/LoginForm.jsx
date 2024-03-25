import React, { useState, useRef } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginButtonRef = useRef(null); 

  const formData = {
    email: email,
    password: password,
  };

  const handleClick = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post(
        "https://interview-plus.onrender.com/api/login",
        formData
      );
      console.log(response);
      sessionStorage.setItem("token", JSON.stringify(response.data.token));
      toast.success("Login Successfully!!")
      navigate("/home");
    } catch (error) {
      toast.error("Error in Login")
      console.log("Error in Login:", error);
    }
  };

  const handleLoginButtonClick = () => {
    loginButtonRef.current.click();
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleClick}
        style={{
          width: "500px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "40px 40px 40px 40px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Log In</h2>
        <div style={{ marginBottom: "2rem" }}>
          <div>
            <input
              type="email"
              id="floatingInputValue"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #BDBDBD",
              }}
              required
            />
          </div>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <input
            id="password"
            value={password}
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #BDBDBD",
            }}
            required
          />
        </div>
       
        <button type="submit" ref={loginButtonRef} style={{ display: "none" }}>
          Login
        </button>
        <button
          type="button"
          onClick={handleLoginButtonClick}
          style={{
            width: "100%",
            backgroundColor: "#000000",
            color: "#FFFFFF",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <div style={{marginTop: "10px"}}>
        <NavLink to="/register" style={{textDecoration: "none", color: "black"}}>Don't have an account?<span style={{color: "red"}} to="/register"> Sign Up </span></NavLink>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
