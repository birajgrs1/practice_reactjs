import axios from "axios";
import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProfileData = () => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("token"));
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", header)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error occurred while fetching profile data", err);
        setLoading(false);
      });
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    alert("Logout Successful");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-300 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">My Profile</h2>

        <div className="text-center mb-4">
          <button
            onClick={getProfileData}
            className="bg-pink-500 text-white px-5 py-2 m-2 rounded-xl hover:bg-pink-600 transition duration-200"
          >
            {loading ? "Loading..." : "Get Profile Data"}
          </button>
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white px-5 py-2 m-2 rounded-xl hover:bg-blue-600 transition duration-200"
          >
            Log Out
          </button>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {user && !loading && (
          <div className="mt-6 text-center">
            <div className="flex justify-center mb-4">
              <img
                className="rounded-full h-32 w-32 object-cover shadow-md"
                src={user.avatar}
                alt="Avatar"
              />
            </div>
            <p className="text-lg font-medium text-gray-800">Name: {user.name || "N/A"}</p>
            <p className="text-lg text-gray-700">Email: {user.email || "N/A"}</p>
            <p className="text-lg text-gray-700">Role: {user.role || "N/A"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
