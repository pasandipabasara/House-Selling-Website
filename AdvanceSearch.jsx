import React, { useState } from "react"; // Import React and state management.

const AdvanceSearch = () => {
  const [searchText, setSearchText] = useState(false); // Track if the advanced search is visible.
  const [formData, setFormData] = useState({
    type: "",
    price: "",
    bedrooms: "",
    dateAdded: "",
  });

  const [errors, setErrors] = useState({
    type: "",
    price: "",
    bedrooms: "",
    dateAdded: "",
  });

  const [suggestions, setSuggestions] = useState({
    type: ["House", "Flat"],
    price: [100000, 200000, 300000, 400000, 500000], // Example prices for demonstration
    bedrooms: [1, 2, 3, 4, 5],
    dateAdded: ["2024", "2025"], // Example dates for demonstration
  });

  const [filteredSuggestions, setFilteredSuggestions] = useState({
    type: [],
    price: [],
    bedrooms: [],
    dateAdded: [],
  });

  const toggleSearchText = () => {
    setSearchText(!searchText); // Toggle visibility of the inputs.
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Filter the suggestions based on the input value
    if (value.length > 0) {
      const filtered = suggestions[name].filter((item) =>
        item.toString().toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions({
        ...filteredSuggestions,
        [name]: filtered,
      });
    } else {
      // Clear filtered suggestions if the input is empty
      setFilteredSuggestions({
        ...filteredSuggestions,
        [name]: [],
      });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    let formIsValid = true;

    // Validate each field
    if (!formData.type) {
      newErrors.type = "Type is required";
      formIsValid = false;
    }

    if (!formData.price || isNaN(formData.price)) {
      newErrors.price = "Price must be a valid number";
      formIsValid = false;
    }

    if (!formData.bedrooms || isNaN(formData.bedrooms)) {
      newErrors.bedrooms = "Bedrooms must be a valid number";
      formIsValid = false;
    }

    if (!formData.dateAdded) {
      newErrors.dateAdded = "Date Added is required";
      formIsValid = false;
    }

    setErrors(newErrors); // Set the errors state
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If form is valid, handle search logic (can be passed to parent or processed here)
      console.log("Form submitted successfully", formData);
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Button to show or hide the advanced search inputs */}
      <button
        onClick={toggleSearchText}
        className="h-[40px] w-[180px] bg-[#28a739] rounded-xl mb-[10px] text-white"
      >
        {/* Show different text based on the value of searchText */}
        {searchText ? "Hide Advance Search" : "Show Advance Search"}
      </button>

      {/* Show advanced search inputs only if searchText is true */}
      {searchText && (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          {/* Input for 'Type' */}
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            placeholder="Type"
            className="border border-zinc-400 h-[35px] w-[400px] px-[10px] rounded-lg"
          />
          {errors.type && <p className="text-red-500">{errors.type}</p>}
          {/* Display suggestions */}
          {filteredSuggestions.type.length > 0 && (
            <ul className="border border-zinc-400 w-[400px] rounded-lg mt-1">
              {filteredSuggestions.type.map((suggestion, index) => (
                <li key={index} className="p-2 cursor-pointer">
                  {suggestion}
                </li>
              ))}
            </ul>
          )}

          {/* Input for 'Price' */}
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="border border-zinc-400 h-[35px] w-[400px] px-[10px] rounded-lg"
          />
          {errors.price && <p className="text-red-500">{errors.price}</p>}
          {/* Display suggestions */}
          {filteredSuggestions.price.length > 0 && (
            <ul className="border border-zinc-400 w-[400px] rounded-lg mt-1">
              {filteredSuggestions.price.map((suggestion, index) => (
                <li key={index} className="p-2 cursor-pointer">
                  {suggestion}
                </li>
              ))}
            </ul>
          )}

          {/* Input for 'Bedrooms' */}
          <input
            type="text"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleInputChange}
            placeholder="Bedrooms"
            className="border border-zinc-400 h-[35px] w-[400px] px-[10px] rounded-lg"
          />
          {errors.bedrooms && <p className="text-red-500">{errors.bedrooms}</p>}
          {/* Display suggestions */}
          {filteredSuggestions.bedrooms.length > 0 && (
            <ul className="border border-zinc-400 w-[400px] rounded-lg mt-1">
              {filteredSuggestions.bedrooms.map((suggestion, index) => (
                <li key={index} className="p-2 cursor-pointer">
                  {suggestion}
                </li>
              ))}
            </ul>
          )}

          {/* Input for 'Date Added' */}
          <input
            type="text"
            name="dateAdded"
            value={formData.dateAdded}
            onChange={handleInputChange}
            placeholder="Date Added"
            className="border border-zinc-400 h-[35px] w-[400px] px-[10px] rounded-lg"
          />
          {errors.dateAdded && <p className="text-red-500">{errors.dateAdded}</p>}
          {/* Display suggestions */}
          {filteredSuggestions.dateAdded.length > 0 && (
            <ul className="border border-zinc-400 w-[400px] rounded-lg mt-1">
              {filteredSuggestions.dateAdded.map((suggestion, index) => (
                <li key={index} className="p-2 cursor-pointer">
                  {suggestion}
                </li>
              ))}
            </ul>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="h-[40px] w-[180px] bg-[#28a739] rounded-xl text-white"
          >
            Search
          </button>
        </form>
      )}
    </div>
  );
};

export default AdvanceSearch;
