import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const registerButtonRef = useRef(null);

  const formData = {
    name: name,
    email: email,
    password: password,
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://interview-plus.onrender.com/api/register",
        formData
      );
      console.log(response);
      toast.success("Account Created Successfully !!");
      navigate("/");
    } catch (error) {
      toast.error("Error in Registration");
      console.log("Error in Register:", error);
    }
  };

  const handleRegisterButtonClick = () => {
    registerButtonRef.current.click();
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
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
        <div style={{ marginBottom: "2rem" }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #BDBDBD",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <input
            type="email"
            placeholder="Email"
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
        <div style={{ marginBottom: "2rem" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
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

        <button
          type="submit"
          ref={registerButtonRef}
          style={{ display: "none" }}
        >
          Register
        </button>
        <button
          type="button"
          onClick={handleRegisterButtonClick}
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
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
