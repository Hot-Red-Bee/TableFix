import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ReservationSuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const reservation = location.state || {
    guests: 2,
    date: "2025-08-01",
    time: "19:00",
    restaurant: "Sample Restaurant",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffdf9] px-4 py-10">
      <div className="bg-white max-w-md w-full rounded-xl shadow-xl p-8 text-center">
        <div className="text-4xl mb-4">🥂</div>
        <h1 className="text-2xl font-bold text-orange-600 mb-2">
          Reservation Confirmed!
        </h1>
        <p className="text-gray-700 mb-6">
          Your table at <span className="font-medium">{reservation.restaurant}</span> has been reserved for
          <br />
          <span className="font-semibold">{reservation.guests}</span> guests on{" "}
          <span className="font-semibold">{reservation.date}</span> at{" "}
          <span className="font-semibold">{reservation.time}</span>.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition"
          >
            Back to Home
          </button>
          <button
            onClick={() => navigate("/my-reservations")}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            View My Reservations
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationSuccessPage;
