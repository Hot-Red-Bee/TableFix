import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReservationFormPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    restaurantId: "1", // Replace with dynamic restaurant ID later
    guests: 2,
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting reservation:", form);

    // 🔜 Replace this with actual API call when backend is ready

    // Navigate to success page with form data
    navigate("/reservation-success", {
      state: {
        guests: form.guests,
        date: form.date,
        time: form.time,
        restaurant: "Restaurant Name", // Replace with dynamic name later
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#fffdf9] px-4 py-10 md:px-10">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-orange-600 mb-6">
          Make a Reservation
        </h1>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div>
            <label className="block text-sm text-gray-700 font-medium mb-1">
              Number of Guests
            </label>
            <input
              type="number"
              name="guests"
              value={form.guests}
              onChange={handleChange}
              min="1"
              max="20"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 font-medium mb-1">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 font-medium mb-1">
              Time
            </label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 font-medium mb-1">
              Notes (Optional)
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows="3"
              placeholder="Any preferences or allergies?"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationFormPage;




