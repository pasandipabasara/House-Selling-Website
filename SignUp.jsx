import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const SignUp = () => {
  // State to manage the email and form stage
  const [email, setEmail] = useState("");
  const [stage, setStage] = useState(1); // Stage 1: Email input, Stage 2: Full form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    postcode: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState(false); // State for success message
  const navigate = useNavigate(); // Hook for navigation

  // Handle email submission
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setStage(2); // Move to the next stage
  };

  // Handle full form submission
  const handleFullSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true); // Show success message
    // Add backend integration here
  };

  // Redirect to main page after 3 seconds if successMessage is true
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        navigate("/"); // Redirect to the main page (change "/" to the desired route)
      }, 3000);
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [successMessage, navigate]);

  // Handle changes in the second form
  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      {successMessage ? (
        <div className="flex flex-col items-center bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-semibold mb-4 text-green-500">Account successfully created!</h1>
          <p className="text-lg">Redirecting to the main page...</p>
        </div>
      ) : stage === 1 ? (
        // First stage: Email input
        <div className="flex flex-col items-center bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-semibold mb-4">Sign in or create an account</h1>
          <form onSubmit={handleEmailSubmit} className="flex flex-col items-center">
            <label htmlFor="email" className="mb-2 text-lg">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-pink-500 p-2 rounded w-80 mb-4"
              required
            />
            <button
              type="submit"
              className="bg-teal-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-teal-300"
            >
              Continue
            </button>
          </form>
        </div>
      ) : (
        // Second stage: Full form
        <div className="flex flex-col items-center bg-white p-6 rounded shadow w-96">
          <h1 className="text-2xl font-semibold mb-4">Finish creating your account</h1>
          <p className="text-lg mb-4 bg-gray-100 p-2 rounded w-full text-center">{email}</p>
          <form onSubmit={handleFullSubmit} className="flex flex-col gap-4 w-full">
            <div>
              <label htmlFor="firstName" className="block mb-1">First name</label>
              <input
                id="firstName"
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleFormChange}
                className="border-2 p-2 rounded w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-1">Last name</label>
              <input
                id="lastName"
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleFormChange}
                className="border-2 p-2 rounded w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="postcode" className="block mb-1">Postcode (Optional)</label>
              <input
                id="postcode"
                type="text"
                placeholder="Postcode"
                value={formData.postcode}
                onChange={handleFormChange}
                className="border-2 p-2 rounded w-full"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleFormChange}
                className="border-2 p-2 rounded w-full"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="staySignedIn" />
              <label htmlFor="staySignedIn">Stay signed in</label>
            </div>
            <button
              type="submit"
              className="bg-teal-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-teal-300 w-full"
            >
              Create an account
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
