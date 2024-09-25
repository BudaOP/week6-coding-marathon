import useSignup from "../hooks/useSignup.jsx";
import useField from "../hooks/useField.jsx";

const SignupComponent = ({ setIsAuthenticated }) => {
  const { handleSignup } = useSignup(); // setIsAuthenticated
  const nameField = useField("name", "name");
  const emailField = useField("email", "email");
  const passwordField = useField("password", "password");
  const phone_number = useField("phone_number", "phone_number");
  const gender = useField("gender", "gender");
  const date_of_birth = useField("date_of_birth", "date_of_birth");
  const membership_status = useField("membership_status", "membership_status");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignup(
      nameField.value,
      emailField.value,
      passwordField.value,
      phone_number.value,
      gender.value,
      date_of_birth.value,
      membership_status.value
    );
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl text-center font-semibold mb-6">Sign up</h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Name:
              </label>
              <input
                className="border rounded w-full py-2 px-3 mb-2"
                {...nameField}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Email:
              </label>
              <input
                className="border rounded w-full py-2 px-3 mb-2"
                {...emailField}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                className="border rounded w-full py-2 px-3"
                {...passwordField}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone:
              </label>
              <input
                type="number"
                className="border rounded w-full py-2 px-3"
                {...phone_number}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Gender:
              </label>
              <input
                className="border rounded w-full py-2 px-3 mb-2"
                {...gender}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2"
              >
                Date of Birth:
              </label>
              {/* Updated to type="date" for date selection */}
              <input
                type="date"
                className="border rounded w-full py-2 px-3"
                {...date_of_birth}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
              >
                Membership Status:
              </label>
              {/* Dropdown for true/false membership status */}
              <select
                className="border rounded w-full py-2 px-3"
                {...membership_status}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupComponent;
