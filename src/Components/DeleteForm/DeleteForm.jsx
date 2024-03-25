import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function DeleteForm() {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const token = JSON.parse(sessionStorage.getItem("token"));
      const response = await axios.delete(
        "https://interview-plus.onrender.com/api/delete-user",
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      if (response.status === 200) {
        toast.success("Account Deleted Successfully !")
        navigate("/");
      } else {
        console.error("Delete request failed:", response);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
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
      <div
        style={{
          width: "500px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Delete Account</h2>
        <p style={{ marginBottom: "40px" }}>
          Are you sure you want to permanently delete your account?
        </p>
        <button
          className="btn btn-danger"
          style={{ marginRight: "10px" }}
          onClick={handleDelete}
        >
          Yes, Delete Account
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/home")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteForm;
