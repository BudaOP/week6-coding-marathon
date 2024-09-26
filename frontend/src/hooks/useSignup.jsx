
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const useSignup = function (setIsAuthenticated) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (name, email, password, phone_number, gender, date_of_birth, membership_status) => {
    console.log(JSON.stringify({ name, email, password, phone_number, gender, date_of_birth, membership_status }));

    try {

    const response = await fetch("api/users/signup", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, phone_number, gender, date_of_birth, membership_status }),
    });

    if (response.ok) {
        const user = await response.json();
        sessionStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up successfully!");
        setIsAuthenticated(true);
        navigate("/");
    } else {
      const errorData = await response.json();
      setError(errorData.error || 'Signup failed');
    }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('An unexpected error occurred');
    }
  };

  return {
    handleSignup,
  };
};

export default useSignup;