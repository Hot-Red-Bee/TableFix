import React from "react";

// ✨ Mock reservations data (replace with real API later)
const mockReservations = [
  {
    id: 1,
    restaurantName: "Taste of Lagos",
    restaurantImage: "/assets/taste-of-lagos.jpg",
    date: "2025-07-21",
    time: "19:30",
    guests: 2,
    status: "Upcoming",
  },
  {
    id: 2,
    restaurantName: "Abuja Bites",
    restaurantImage: "/assets/abuja-bites.jpg",
    date: "2025-07-10",
    time: "13:00",
    guests: 4,
    status: "Completed",
  },
];

const MyReservationsPage = () => {
  return (
    <div className="min-h-screen bg-[#fffdf9] px-4 md:px-10 py-10">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">
        My Reservations
      </h1>

      {mockReservations.length === 0 ? (
        <p className="text-center text-gray-500">You have no reservations yet 🥲</p>
      ) : (
        <div className="grid gap-6">
          {mockReservations.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-xl shadow-md flex flex-col sm:flex-row overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={res.restaurantImage}
                alt={res.restaurantName}
                className="h-48 w-full sm:w-48 object-cover"
              />
              <div className="p-4 flex-1">
                <h2 className="text-xl font-semibold text-orange-700">
                  {res.restaurantName}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {res.date} at {res.time}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Guests: {res.guests}
                </p>
                <span
                  className={`inline-block mt-3 px-3 py-1 text-xs rounded-full font-medium ${
                    res.status === "Upcoming"
                      ? "bg-orange-100 text-orange-700"
                      : res.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {res.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReservationsPage;
