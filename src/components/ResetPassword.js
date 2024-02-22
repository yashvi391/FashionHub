import React, { useState,useEffect } from 'react';
import "../resetpassword.css";
const ResetPassword = () => {
 const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleResetPassword = async () => {
    try {
      // Call the backend endpoint to reset the password
      const response = await fetch('http://localhost:8081/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          otp,
          newPassword,
        }),
      });
      const responseData = await response.json();
      console.log(responseData);

      if (response.ok) {
        // Password reset successfully
        alert('Password reset successfully.');
        // You can redirect the user to the login page or handle it as needed
      } else {
        // Handle error
        console.error('Failed to reset password:', responseData.error);
        alert('Failed to reset password. Please check your OTP and try again.');
      }
    } catch (error) {
      console.error('Error while resetting password:', error);
      alert('Failed to reset password. Please try again.');
    }
  };
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
  };
  
  // const handleSendOTP = async () => {
  //   try {
  //     // Call the backend endpoint to send OTP to the provided email
  //     const response = await fetch('http://localhost:8081/send-otp', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email,
  //       }),
  //     });

  //     const responseData = await response.json();
  //     console.log(responseData);

  //     if (response.ok) {
  //       // OTP sent successfully
  //       alert('OTP sent successfully.');
  //     } else {
  //       // Handle error
  //       console.error('Failed to send OTP:', responseData.error);
  //       alert('Failed to send OTP. Please check your email and try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error while sending OTP:', error);
  //     alert('Failed to send OTP. Please try again.');
  //   }
  // };

  const handleVerifyOTP = async () => {
    // Implement the logic to verify the OTP
    try {
      // Call the backend endpoint to verify the OTP
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

      if (response.ok) {
        // OTP verification successful
        alert('OTP verified successfully.');
      } else {
        // Handle error
        console.error('Failed to verify OTP:', responseData.error);
        alert('Failed to verify OTP. Please check your OTP and try again.');
      }
    } catch (error) {
      console.error('Error while verifying OTP:', error);
      alert('Failed to verify OTP. Please try again.');
    }
  };
  useEffect(() => {
    document.body.classList.add('resetpassword-body');
    return () => {
      document.body.classList.remove('resetpassword-body');
    };
  }, []);

  return (
    <div className="resetpassowrd">
      <div className="form">
        <form>
          <h2>Password Reset</h2>
          <label>Email:</label>
          <div className="email-input">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="button" onClick={handleSendOTP}>Send OTp</button>
          </div>
          <label>Enter OTP:</label>
          <div className="otp-input">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button type="button" onClick={handleVerifyOTP}>Verify OTP</button>
          </div>
          <label>Enter New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button type="button" onClick={handleResetPassword}>Reset Password</button>
        </form>
      </div>
    </div>
  );
};
export default ResetPassword;

// import React from "react";
// import { useState } from "react";
// import { useContext } from "react";
// import { RecoveryContext } from "../App";

// export default function () {
//   const { email, otp, setPage } = useContext(RecoveryContext);
//   const [timerCount, setTimer] = React.useState(60);
//   const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
//   const [disable, setDisable] = useState(true);

//   function resendOTP() {
//     if (disable) return;
//     axios
//       .post("http://localhost:5000/send_recovery_email", {
//         OTP: otp,
//         recipient_email: email,
//       })
//       .then(() => setDisable(true))
//       .then(() => alert("A new OTP has succesfully been sent to your email."))
//       .then(() => setTimer(60))
//       .catch(console.log);
//   }

//   function verfiyOTP() {
//     if (parseInt(OTPinput.join("")) === otp) {
//       setPage("reset");
//       return;
//     }
//     alert(
//       "The code you have entered is not correct, try again or re-send the link"
//     );
//     return;
//   }

//   React.useEffect(() => {
//     let interval = setInterval(() => {
//       setTimer((lastTimerCount) => {
//         lastTimerCount <= 1 && clearInterval(interval);
//         if (lastTimerCount <= 1) setDisable(false);
//         if (lastTimerCount <= 0) return lastTimerCount;
//         return lastTimerCount - 1;
//       });
//     }, 1000); //each count lasts for a second
//     //cleanup the interval on complete
//     return () => clearInterval(interval);
//   }, [disable]);

//   return (
//     <div className="flex justify-center items-center w-screen h-screen bg-gray-50">
//       <div className="bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
//         <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
//           <div className="flex flex-col items-center justify-center text-center space-y-2">
//             <div className="font-semibold text-3xl">
//               <p>Email Verification</p>
//             </div>
//             <div className="flex flex-row text-sm font-medium text-gray-400">
//               <p>We have sent a code to your email {email}</p>
//             </div>
//           </div>

//           <div>
//             <form>
//               <div className="flex flex-col space-y-16">
//                 <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
//                   <div className="w-16 h-16 ">
//                     <input
//                       maxLength="1"
//                       className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
//                       type="text"
//                       name=""
//                       id=""
//                       onChange={(e) =>
//                         setOTPinput([
//                           e.target.value,
//                           OTPinput[1],
//                           OTPinput[2],
//                           OTPinput[3],
//                         ])
//                       }
//                     ></input>
//                   </div>
//                   <div className="w-16 h-16 ">
//                     <input
//                       maxLength="1"
//                       className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
//                       type="text"
//                       name=""
//                       id=""
//                       onChange={(e) =>
//                         setOTPinput([
//                           OTPinput[0],
//                           e.target.value,
//                           OTPinput[2],
//                           OTPinput[3],
//                         ])
//                       }
//                     ></input>
//                   </div>
//                   <div className="w-16 h-16 ">
//                     <input
//                       maxLength="1"
//                       className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
//                       type="text"
//                       name=""
//                       id=""
//                       onChange={(e) =>
//                         setOTPinput([
//                           OTPinput[0],
//                           OTPinput[1],
//                           e.target.value,
//                           OTPinput[3],
//                         ])
//                       }
//                     ></input>
//                   </div>
//                   <div className="w-16 h-16 ">
//                     <input
//                       maxLength="1"
//                       className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
//                       type="text"
//                       name=""
//                       id=""
//                       onChange={(e) =>
//                         setOTPinput([
//                           OTPinput[0],
//                           OTPinput[1],
//                           OTPinput[2],
//                           e.target.value,
//                         ])
//                       }
//                     ></input>
//                   </div>
//                 </div>

//                 <div className="flex flex-col space-y-5">
//                   <div>
//                     <a
//                       onClick={() => verfiyOTP()}
//                       className="flex flex-row cursor-pointer items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
//                     >
//                       Verify Account
//                     </a>
//                   </div>

//                   <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
//                     <p>Didn't recieve code?</p>{" "}
//                     <a
//                       className="flex flex-row items-center"
//                       style={{
//                         color: disable ? "gray" : "blue",
//                         cursor: disable ? "none" : "pointer",
//                         textDecorationLine: disable ? "none" : "underline",
//                       }}
//                       onClick={() => resendOTP()}
//                     >
//                       {disable ? `Resend OTP in ${timerCount}s` : "Resend OTP"}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }