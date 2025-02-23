import React, { useState } from "react"; // Import React and the useState hook for managing component state.
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
} from "mdb-react-ui-kit"; // Import MDB React UI components for styling and layout.

// State to control the modal visibility

const Card = ({
  property,
  onAddToFavorites,
  removeFromFavorites,
  isFavorite,
}) => {
  const [modalOpen, setModalOpen] = useState(false); // Initialize state to track whether the modal is open or not.

  // Function to open and close the modal

  const openModal = () => {
    setModalOpen(true); // Set the modal state to open.
  };

  const closeModal = () => {
    setModalOpen(false); // Set the modal state to closed.
  };

  // Function to handle adding/removing favorites

  const handleOnClick = (id) => {
    if (isFavorite) {
      removeFromFavorites(id); // If already a favorite, call function to remove it from favorites.
    } else {
      onAddToFavorites({ property }); // Otherwise, call function to add it to favorites.
    }
  };

  const getFirst10Words = (text) => {
    const words = text.split(" "); // Split the text into an array of words.
    return words.slice(0, 10).join(" "); // Return the first 10 words joined as a string.
  };

  const description = getFirst10Words(property.description); // Get the first 10 words of the property description.

  
  return (
    <>

    {/* Property Card */}

      <div className="border rounded-lg border-green-800 w-[300px]">
        <img
          src={property.picture}
          alt="House"
          className="w-[300px] h-[200px] object-cover rounded-t-lg"
          onClick={openModal}
          style={{ cursor: "pointer" }}
        />

        <div className="my-[10px] px-[20px] flex flex-col gap-[10px]">
          <p className="text-[20px]">{property.id}</p>
          <p>Price: ${property.price}</p>
          <p className="h-[75px]">{description}</p>
          
          
          {/* Add to Favorite button */}

          {isFavorite ? (
            <button
              className="bg-[#28a739] text-white h-[35px] rounded-lg
              hover:bg-green-600 hover:scale-105 transition-transform duration-300"
              onClick={() => removeFromFavorites(property.id)}
            >
              Remove From Favorite
            </button>
          ) : (
            <button
              className="bg-[#28a739] text-white h-[35px] rounded-lg
              hover:bg-green-600 hover:scale-105 transition-transform duration-300"
              onClick={() => onAddToFavorites({ property })}
            >
              Add To Favorite
            </button>
          )}
        </div>
      </div>

      {/* Modal Content */}
      {modalOpen && (
        <div
          style={{
            position: "fixed", // Fix the modal overlay position.
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(61, 51, 51, 0.5)", // Semi-transparent dark background.
            zIndex: "999", // Place it above other content.
          }}
          onClick={closeModal} // Close the modal when clicking outside it.
        ></div>
      )}

      {/* Image */}
      {modalOpen && (
        <div
          style={{
            position: "fixed", // Fix the modal position.
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Center the modal on the screen.
            backgroundColor: "white", // Modal background color.
            padding: "20px", // Padding inside the modal.
            borderRadius: "8px", // Rounded corners.
            zIndex: "1000", // Place above the overlay.
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a slight shadow.
            width: "600px", // Sets the modal width.
            height: "auto", // Lets the height adjust to the content.
          }}
        >
          <img
            src={property.picture} 
            alt={`Modal`} 
            style={{ width: "100%" }} // Show the property's image in full width.
          /> 
          <p>{description}</p> {/* Show the shortened description. */}
          <p>Price: $ {property.price}</p> {/* Display the price again for emphasis. */}
          <p>Bedroom: {property.bedrooms}</p> {/* Show how many bedrooms the property has. */}
          <p>Location: {property.location}</p> {/* Show where the property is located. */}
          <p>Reservation: {property.reservation}</p> {/* Show how the reservation can do. */}

          {/* Close button for the modal. */}
          <button 
            type="button" 
            className="bg-pink-500 text-white rounded-lg p-2 mr-4
            hover:bg-red-600 hover:scale-105 transition-transform duration-300" // A pink button to close the modal.
            onClick={closeModal} // Closes the modal when clicked.
          >
            Close
            <i className="fas fa-circle-xmark text-pink-500"></i> {/* An icon to make it visually clear. */}
          </button>

          {/* Map button for the modal. */}
          <button 
            type="button" 
            className="bg-pink-500 text-white rounded-lg p-2
            hover:bg-red-600 hover:scale-105 transition-transform duration-300" 
            onClick={() => window.open('https://www.google.com/maps', '_blank')} // Redirect to the google map when clicked.
          >
            Map
            <i className="fas fa-circle-xmark text-pink-500"></i> {/* An icon to make it visually clear. */}
          </button>
        </div>
      )}
    </>
  );
};

export default Card; // Finally, we export the component so it can be used elsewhere.