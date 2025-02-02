import { Eye } from "lucide-react";
import { NavLink } from "react-router";

const Signup = () => {
  return (
    <div className="min-h-screen bg-[#85A947]/70 flex flex-col">
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#123524]">
              Login in To Your Account
            </h1>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#123524] mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#85A947]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#123524] mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#85A947]"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <Eye size={20} />
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Password must be at least 8 characters long and include
                uppercase, lowercase, and numbers
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg font-semibold text-white bg-[#85A947] hover:bg-[#3E7B27] transition-colors"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-600">
              New User ?{" "}
              <NavLink to={"/signup"}>
                <span className="text-[#3E7B27] hover:text-[#85A947] font-medium">
                  Sign Up
                </span>
              </NavLink>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};
export default Signup;
