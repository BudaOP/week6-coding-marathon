import React, { useState } from 'react';
import useSignup from "../hooks/useSignup";
import useField from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  const { handleSignup, error: signupError } = useSignup(setIsAuthenticated);
  const nameField = useField("name");
  const emailField = useField("email");
  const passwordField = useField("password");
  const phoneNumber = useField("phone_number");
  const gender = useField("gender");
  const dateOfBirth = useField("date_of_birth");
  const [membershipStatus, setMembershipStatus] = useState(false);
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError(null);
    try {
      await handleSignup({
        name: nameField.value,
        email: emailField.value, 
        password: passwordField.value, 
        phone_number: phoneNumber.value,
        gender: gender.value,
        date_of_birth: dateOfBirth.value,
        membership_status: membershipStatus
      });
      // Note: setIsAuthenticated is now handled within the useSignup hook
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'An error occurred during signup');
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-3xl text-center font-semibold mb-6">Sign up</h2>

            <div>
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name:
              </label>
              <input 
                className="border rounded w-full py-2 px-3" 
                {...nameField} 
                required 
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email:
              </label>
              <input 
                className="border rounded w-full py-2 px-3" 
                {...emailField} 
                required 
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password:
              </label>
              <input 
                className="border rounded w-full py-2 px-3" 
                {...passwordField} 
                required 
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                Phone:
              </label>
              <input 
                className="border rounded w-full py-2 px-3" 
                {...phoneNumber} 
                required 
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                Gender:
              </label>
              <select 
                className="border rounded w-full py-2 px-3" 
                {...gender} 
                required 
                aria-required="true"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">
                Date of Birth:
              </label>
              <input 
                className="border rounded w-full py-2 px-3" 
                {...dateOfBirth} 
                required 
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="membership" className="block text-gray-700 font-bold mb-2">
                Membership Status:
              </label>
              <div className="flex items-center">
                <input
                  id="membership"
                  type="checkbox"
                  className="mr-2"
                  checked={membershipStatus}
                  onChange={(e) => setMembershipStatus(e.target.checked)}
                />
                <span>Active Member</span>
              </div>
            </div>

            {(formError || signupError) && (
              <p className="text-red-500" role="alert">
                {formError || signupError}
              </p>
            )}

            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupComponent;