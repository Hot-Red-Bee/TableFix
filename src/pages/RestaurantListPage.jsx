import React, { useState, useEffect } from "react";
import RestaurantCard from "../layout/RestaurantCard";
import SearchBar from "../layout/SearchBar";
import Filters from "../layout/Filters";

const RestaurantListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  const allRestaurants = [
    {
      id: 1,
      name: "Taste of Lagos",
      description: "Authentic Nigerian cuisine",
      cuisine: "Nigerian",
      rating: 4.6,
      image: "/assets/taste-of-lagos.jpg",
    },
    {
      id: 2,
      name: "Mama’s Place",
      description: "Hearty homecooked meals",
      cuisine: "Nigerian",
      rating: 4.4,
      image: "/assets/mamas-place.jpg",
    },
    {
      id: 3,
      name: "Suya Grill Hub",
      description: "Spicy grilled meats & suya",
      cuisine: "Suya",
      rating: 4.8,
      image: "/assets/suya-grill.jpg",
    },
    {
      id: 4,
      name: "SeaCatch Bistro",
      description: "Fresh seafood platters",
      cuisine: "Seafood",
      rating: 4.2,
      image: "/assets/seafood.jpg",
    },
  ];

  const filteredRestaurants = allRestaurants.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine =
      selectedCuisine === "All" || r.cuisine === selectedCuisine;

    return matchesSearch && matchesCuisine;
  });

  return (
    <div className="min-h-screen bg-[#fffdf9] px-4 md:px-10 py-8">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">
        Explore Restaurants
      </h1>

      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <Filters
        selectedCuisine={selectedCuisine}
        onSelectCuisine={setSelectedCuisine}
      />

      {filteredRestaurants.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 mt-10 text-center">
          No restaurants found 🍽️
        </p>
      )}
    </div>
  );
};

export default RestaurantListPage;
