import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Dummy data until backend is ready
const restaurantMockData = {
  1: {
    id: 1,
    name: "Taste of Lagos",
    description:
      "Enjoy authentic Nigerian delicacies including jollof rice, moi moi, and asun. A perfect blend of tradition and modern dining.",
    cuisine: "Nigerian",
    rating: 4.6,
    image: "/assets/taste-of-lagos.jpg",
    tags: ["Jollof", "Traditional", "Vegan Options"],
    menu: [
      { name: "Jollof Rice with Chicken", price: "₦2,500" },
      { name: "Egusi Soup & Pounded Yam", price: "₦3,000" },
      { name: "Suya Platter", price: "₦2,800" },
    ],
    gallery: [
      "/assets/taste-1.jpg",
      "/assets/taste-2.jpg",
      "/assets/taste-3.jpg",
    ],
  },
};

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = restaurantMockData[id]; // Replace with real API later
  const [showModal, setShowModal] = useState(false);

  if (!restaurant) {
    return <p className="text-center mt-20">Restaurant not found 💔</p>;
  }

  return (
    <div className="min-h-screen bg-[#fffdf9]">
      {/* Hero Image */}
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-64 object-cover"
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-white/80 text-gray-700 px-3 py-1 rounded-lg shadow hover:bg-white"
        >
          ← Back
        </button>
      </div>

      <div className="px-4 md:px-10 py-6">
        {/* Info */}
        <h1 className="text-3xl font-bold text-orange-600">
          {restaurant.name}
        </h1>
        <p className="text-gray-600">{restaurant.cuisine} Cuisine</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-orange-500 font-semibold">
            ⭐ {restaurant.rating}
          </span>
          <span className="text-gray-500">
            ({restaurant.rating * 50}+ reviews)
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-700 text-sm leading-relaxed">
          {restaurant.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {restaurant.tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-orange-100 text-orange-700 px-3 py-1 text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3">Gallery</h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {restaurant.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`gallery-${i}`}
                className="h-32 rounded-xl object-cover"
              />
            ))}
          </div>
        </div>

        {/* Menu */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3">Menu Preview</h2>
          <div className="space-y-2">
            {restaurant.menu.map((item, i) => (
              <div
                key={i}
                className="flex justify-between bg-white p-3 rounded-xl shadow-sm"
              >
                <span className="font-medium text-gray-800">{item.name}</span>
                <span className="text-orange-600">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reserve Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowModal(true)}
            className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition"
          >
            Reserve Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4">Make a Reservation</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowModal(false);
                alert("Reservation request sent! 📩");
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="date"
                required
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="time"
                required
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="number"
                placeholder="Number of guests"
                required
                className="w-full border p-2 rounded-lg"
              />
              <div className="flex justify-between gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                >
                  Reserve
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetailsPage;
