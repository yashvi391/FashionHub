
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../resetpassword.css';

const SendOtp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  useEffect(() => {
    document.body.classList.add('resetpassword-body');
    return () => {
      document.body.classList.remove('resetpassword-body');
    };
  }, []);

  const handleSendOTP = async () => {
    try {
      // Call the backend endpoint to send OTP to the provided email
      const response = await fetch('http://localhost:8081/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      });
      localStorage.setItem('email',email)
      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      // Handle the successful response (if needed)
      const responseData = await response.json();
      console.log('Response Data:', responseData);
    } catch (error) {
      console.error('Error sending OTP:', error.message);
      // Add additional error handling as needed
    }

    localStorage.setItem("email",email)

    navigate('/verify-otp');
  };

  return (
    <div className="resetpassowrd">
      <div className="form">
        <form>
          <h2>Send OTP</h2>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="button" onClick={handleSendOTP}>
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendOtp;

