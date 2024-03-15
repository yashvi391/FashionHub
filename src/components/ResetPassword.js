
import React, { useState, useEffect } from "react";
import "../resetpassword.css";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = async () => {
    try {
      // Check if the new password and confirm password match
      if (newPassword !== confirmPassword) {
        alert("New password and confirm password do not match.");
        return;
      }
      const email = localStorage.getItem("email")
      // Call the backend endpoint to reset the password
      const response = await fetch("http://localhost:8081/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          newPassword,
          // confirm_password:confirmPassword,
          confirmPassword,
        }),
      });
      const responseData = await response.json();
      console.log(responseData);
      localStorage.setItem("confirmpassword",confirmPassword)
      if (response.ok) {
        // Password reset successfully
        alert("Password reset successfully.");
        // You can redirect the user to the reset password page or handle it as needed
      } else {
        console.error("Failed to reset password:", responseData.error);
        alert(
          `Failed to reset password. ${
            responseData.error || "Please try again."
          }`
        );
      }
    } catch (error) {
      console.error("Error while resetting password:", error);
      alert("Failed to reset password. Please try again.");
    }
  };
  useEffect(() => {
    document.body.classList.add("resetpassword-body");
    return () => {
      document.body.classList.remove("resetpassword-body");
    };
  }, []);

  return (
    <div className="resetpassword">
      <div className="form">
        <form>
          <h2>Password Reset</h2>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <label>Confirm Password:</label>
          <input  
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="button" onClick={handleResetPassword}>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};
export default ResetPassword;
