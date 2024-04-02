import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OTPInput from 'otp-input-react';
import '../resetpassword.css';

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [minutes, setMinutes] = useState(1);
const [seconds, setSeconds] = useState(30);
 
  const handleVerifyOTP = async () => {
    try {
      const email = localStorage.getItem("email")
      setEmail(email)
      const response = await fetch('http://localhost:8081/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          email,
          otp,
        }),
      });

      const responseData = await response.json();
      console.log(responseData);
    //   if (response.ok) {  
    //     alert('OTP verified successfully.');
    //   } else {
    //     console.error('Failed to verify OTP:', responseData.error);
    //     alert('Failed to verify OTP. Please check your OTP and try again.');
    //   }
    // } catch (error) {
    //   console.error('Error while verifying OTP:', error);
    //   alert('Failed to verify OTP. Please try again.');
    // }
    if (response.ok) {
      if (responseData.success) {
        alert('OTP verified successfully.');
        navigate('/reset-password');
        // You can add additional logic here if needed
      } else {
        console.error('Failed to verify OTP:', responseData.error);

        if (responseData.error === 'User not found') {
          alert('User not found. Please check your email and OTP and try again.');
        } else {
          alert(`Failed to verify OTP: ${responseData.error}`);
        }
      }
    } else {
      console.error('Failed to verify OTP:', responseData.error);
      alert('Failed to verify OTP. Please check your OTP and try again.');
    }
  } catch (error) {
    console.error('Error while verifying OTP:', error);
    alert('Failed to verify OTP. Please try again.');
  }
  };
  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
  };

  const handleSendOTP = async () => {
    try {
      console.log(email)
      // Call the backend endpoint to send OTP to the provided email
      const response = await fetch('http://localhost:8081/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: localStorage.getItem("email")
        }),
      });

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

    // localStorage.setItem("email",email)

    navigate('/verify-otp');
  };
  
  

  useEffect(() => {
    document.body.classList.add('resetpassword-body');
    return () => {
      document.body.classList.remove('resetpassword-body');
    };
  }, []);
  const otpInputStyle = {
    width: '2rem', // Set the width of each input box
    height: '2rem', // Set the height of each input box
    margin: '0.5rem', // Set the margin between input boxes
    fontSize: '1.5rem', // Set the font size of the input text
    border: '1px solid #ccc', // Set the border color
    borderRadius: '4px', // Set the border radius
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
  
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  
 
  return (
    <div className="resetpassowrd">
      <div className="form">
        <form>
          <h2>Verify OTP</h2>
          <label>Enter OTP:</label>
          <div className="otp-input">
          <OTPInput
              value={otp}
              onChange={setOtp}
              autoFocus
              OTPLength={6}
              otpType="number"
              disabled={false}
              secure
              inputStyle={otpInputStyle}
            />
            {/* <input
              type="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            /> */}
            <div className="countdown-text">
      {seconds > 0 || minutes > 0 ? (
        <p>
          Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </p>
      ) : (
        <p>Didn't recieve code?</p>
      )}
      <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                resendOTP();
                handleSendOTP();
              }}
              className={seconds > 0 || minutes > 0 ? 'resend-link-disabled' : ''}
            >
              Resend OTP
            </a>
    </div>
            <button type="button" onClick={handleVerifyOTP}>
              Verify OTP
            </button>
            
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
