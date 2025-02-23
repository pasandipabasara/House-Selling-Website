import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import SignUp from "./components/SignUp";

const App = () => {
  // State to manage the search text
  const [searchText, setSearchText] = useState("");
  // State to manage whether to show favorite properties
  const [showFavorites, setShowFavorites] = useState(false);

  // Function to handle search input changes
  const handleSearch = (text) => {
    setSearchText(text);
  };

  // Function to handle toggling the display of favorite properties
  const handleToggleFavorites = () => {
    setShowFavorites(!showFavorites);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div>
        <Routes>
          {/* Main Route */}
          <Route
            path="/"
            element={
              <div>
                {/* Header Component */}
                <Header
                  onSearch={handleSearch}
                  onToggleFavorites={handleToggleFavorites}
                />
                {/* MainLayout Component */}
                <MainLayout searchText={searchText} showFavorite={showFavorites} />
                {/* Footer Component */}
                <Footer />
              </div>
            }
          />
          {/* SignUp Route */}
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
