import React from "react";

const ProfilePage = () => {
  // Placeholder user data – replace with real user data when you connect backend
  const user = {
    name: "Jane Doe",
    email: "janedoe@example.com",
    phone: "+234 801 234 5678",
    joinedAt: "2025-06-12",
  };

  return (
    <div className="min-h-screen bg-[#fffdf9] px-4 py-10 md:px-10">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-orange-600 mb-6">My Profile</h1>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="text-lg font-semibold text-gray-800">{user.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-semibold text-gray-800">{user.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-lg font-semibold text-gray-800">{user.phone}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Joined</p>
            <p className="text-lg font-semibold text-gray-800">{user.joinedAt}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="w-full sm:w-auto bg-orange-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-orange-600 transition">
            Edit Profile
          </button>
          <button className="w-full sm:w-auto bg-gray-200 text-gray-700 py-2 px-6 rounded-md font-semibold hover:bg-gray-300 transition">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
