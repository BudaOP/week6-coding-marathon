import useField from "../hooks/useField";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useLogin = (setIsAuthenticated) => {
  const emailField = useField("email", "email");
  const passwordField = useField("password", "password");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailField.value,
          password: passwordField.value,
        }),
      });

      if (response.ok) {
        const user = await response.json();
        sessionStorage.setItem("user", JSON.stringify(user));
        console.log("User logged in successfully!");
        toast.success("User Login Successful");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return { emailField, passwordField, handleLogin };
};
export default useLogin;
