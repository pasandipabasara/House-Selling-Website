

import React, { useEffect, useState } from "react";
import Card from "./Card";

// State to store house data,flat data and favorite properties

const MainLayout = ({ searchText, showFavorite }) => {
  // State for house, flat and favorite property data
  const [houseData, setHouseData] = useState();
  const [flatData, setFlatData] = useState();
  const [favoriteData, setFavoriteData] = useState([]);

  // Add a property to favorite

  const addToFavorites = (property) => {
    const isAlreadyInFavorites = favoriteData.some(
      (favProperty) => favProperty.id === property.id
    );

    if (!isAlreadyInFavorites) {
      setFavoriteData((prevFavoriteData) => {
        const updatedFavorites = [...prevFavoriteData, property];
        return updatedFavorites;
      });
    } else {
      window.alert(`Property with ID ${property.id} is already in favorites.`);
    }
  };

  // Remove a property to favorite

  const removeFromFavorites = (propertyId) => {
    setFavoriteData((prevFavoriteData) => {
      const updatedFavorites = prevFavoriteData.filter(
        (property) => property.id !== propertyId
      );
      return updatedFavorites;
    });
  };

  // Fetch house data from the API

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("src/data/HouseProperties.json");
        const data = await res.json();
        setHouseData(data.properties); // Update houseData state
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  
  // Fetch flat property data from the JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("src/data/FlatProperties.json");
        const data = await res.json();
        setFlatData(data.properties); // Update flatData state
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  // Filtered house data based on the search text

  const filteredHouseData = houseData?.filter((property) =>
    property.id.toLowerCase().includes(searchText.toLowerCase())
  );

  // Filtered flat data based on the search text

  const filteredFlatData = flatData?.filter((property) =>
    property.id.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    /* Displaying Favorite Properties */
    <div className="flex">
      <div className="px-[30px]">
        {showFavorite && (
          <>
            <h1 className="text-[30px] font-semibold">Favorites</h1>
            <div className="flex gap-8 flex-wrap mt-[20px]">

            

              {favoriteData && favoriteData.length > 0 ? (

                // Displaying favorite properties as cards

                favoriteData.map((property) => (
                  <Card
                    key={property.id}
                    property={property}
                    isFavorite={true}
                    removeFromFavorites={() => removeFromFavorites(property.id)}
                  />
                ))
              ) : (
                // Displaying a message if no favorites are found

                <p className="text-pink-700 font-bold">
                  No favorites to be found
                </p>
              )}
            </div>
          </>
        )}
        {/* Displaying House Properties */}

        <h1 className="text-[30px] font-semibold">House</h1>
        <div className="flex gap-8 flex-wrap mt-[20px]">
          {filteredHouseData && filteredHouseData.length > 0 ? (
            // Displaying house properties as cards

            filteredHouseData.map((property) => (
              <Card
                key={property.id}
                property={property}
                onAddToFavorites={() => addToFavorites(property)}
                isFavorite={false}
              />
            ))
          ) : (
            // Displaying a message if no house properties are found

            <p className="text-pink-700 font-bold">
              No Houses to be found with the searched name!
            </p>
          )}
        </div>

        {/* Displaying Flat Properties */}

        <h1 className="text-[30px] font-semibold">Flat</h1>
        <div className="flex gap-8 flex-wrap mt-[20px]">
          {filteredFlatData && filteredFlatData.length > 0 ? (
            filteredFlatData.map((property) => (
              <Card
                key={property.id}
                property={property}
                onAddToFavorites={() => addToFavorites(property)}
                isFavorite={false}
              />
            ))
          ) : (
            
            // Displaying a message if no flat properties are found

            <p className="text-pink-700 font-bold">
              No Flats to be found with the searched name!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
