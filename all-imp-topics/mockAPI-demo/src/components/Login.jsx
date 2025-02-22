import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    const payload = {
      email: email,
      password: password,
    };
    // console.log("Output: ",payload);
    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", payload)
      .then((res) => {
        alert("Login Successful!!!");
        localStorage.setItem('token', JSON.stringify(res.data.access_token));
        console.log("Login Successful", res);
      })
      .catch((err) => console.log("Login Fail", err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-lg text-gray-700 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSubmit} className="w-full py-3 bg-gradient-to-r from-pink-500 to-violet-600 text-white text-lg font-semibold rounded-md shadow-md hover:scale-105 hover:bg-violet-500 hover:border-2 hover:border-orange-300 transition ease-in-out duration-200">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

/*
# Body
{
  "email": "john@mail.com",
  "password": "changeme"
}

*/
