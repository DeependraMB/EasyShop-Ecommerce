import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function UpdateProfileForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const updateButtonRef = useRef(null);

  const navigate = useNavigate();

  const formData = {
    name: name,
    password: password,
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "https://interview-plus.onrender.com/api/update-user",
        formData,
        {
          headers: {
            "x-access-token": JSON.parse(sessionStorage.getItem("token")),
          },
        }
      );

      navigate("/home");
    } catch (error) {
      console.log("Error in Update Profile:", error);
    }
  };

  const handleUpdateButtonClick = () => {
    updateButtonRef.current.click();
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
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Update Profile
        </h2>
        <div style={{ marginBottom: "2rem" }}>
          <input
            type="text"
            placeholder="Enter your new name"
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
            type="password"
            placeholder="Enter you new password"
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

        <button type="submit" ref={updateButtonRef} style={{ display: "none" }}>
          Update
        </button>
        <button
          type="button"
          onClick={handleUpdateButtonClick}
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
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateProfileForm;
