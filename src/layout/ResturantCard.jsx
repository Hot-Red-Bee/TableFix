        import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {restaurant.name}
        </h2>
        <p className="text-sm text-gray-600 mt-1">{restaurant.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm font-medium text-orange-500">
            ⭐ {restaurant.rating}
          </span>
          <button className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;


