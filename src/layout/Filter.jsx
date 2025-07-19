
import React from "react";

const Filters = ({ selectedCuisine, onSelectCuisine }) => {
  const cuisines = ["All", "Nigerian", "Suya", "Seafood", "Grill", "Fusion"];

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {cuisines.map((cuisine) => (
        <button
          key={cuisine}
          onClick={() => onSelectCuisine(cuisine)}
          className={`px-4 py-2 rounded-full border ${
            selectedCuisine === cuisine
              ? "bg-orange-500 text-white border-orange-500"
              : "bg-white text-gray-700 border-gray-300"
          } hover:shadow transition`}
        >
          {cuisine}
        </button>
      ))}
    </div>
  );
};

export default Filters;
