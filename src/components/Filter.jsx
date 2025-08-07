import React, { useState, useEffect } from "react";
import {
  FaFileAlt,
  FaIdCard,
  FaWallet,
  FaCertificate,
  FaBook,
  FaBriefcase,
} from "react-icons/fa";
import Cart from "./Cart";

const Filter = () => {
  const allCards = [
    { id: 1, title: "Passport Application", fee: "₹1500", time: "15-20 days", category: "identity", image: "/passport.png" },
    { id: 2, title: "PAN Card", fee: "₹107", time: "7-10 days", category: "identity", image: "/pancard.png" },
    { id: 3, title: "Aadhar Update", fee: "₹50", time: "5-7 days", category: "identity", image: "/aadharcard.png" },
    { id: 4, title: "Driving License", fee: "₹100", time: "7-10 days", category: "certificates", image: "/driving license.png" },
    { id: 5, title: "Caste Certificate", fee: "₹90", time: "5-10 days", category: "certificates", image: "https://via.placeholder.com/40" },
    { id: 6, title: "Insurance", fee: "₹50", time: "2-3 days", category: "financial", image: "/insurance.png" },
    { id: 7, title: "Scholarship Application", fee: "Free", time: "Varies", category: "education", image: "https://via.placeholder.com/40" },
    { id: 8, title: "Bonafide Certificate", fee: "₹60", time: "2-3 days", category: "education", image: "https://via.placeholder.com/40" },
    { id: 9, title: "Employment NOC", fee: "₹75", time: "5 days", category: "employment", image: "https://via.placeholder.com/40" },
  ];

  const allFilters = [
    { label: "All", value: "all", icon: <FaFileAlt /> },
    { label: "Identity", value: "identity", icon: <FaIdCard /> },
    { label: "Financial", value: "financial", icon: <FaWallet /> },
    { label: "Certificates", value: "certificates", icon: <FaCertificate /> },
    { label: "Education", value: "education", icon: <FaBook /> },
    { label: "Employment", value: "employment", icon: <FaBriefcase /> },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCards, setVisibleCards] = useState(6);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const displayedFilters = showMoreFilters ? allFilters : allFilters.slice(0, 3);

  const handleViewMore = () => setVisibleCards((prev) => prev + 6);
  const handleViewLess = () => setVisibleCards(6);

  const filteredCards =
    selectedCategory === "all"
      ? allCards
      : allCards.filter((card) => card.category === selectedCategory);

  const cardsToShow = filteredCards.slice(0, visibleCards);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ width: "100%", backgroundColor: "#fff", padding: "40px 0" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "20px", padding: "0 20px" }}>
        <h4 style={{ margin: 0, color: "#1a1a40" }}>Apply for Official Documents Easily</h4>
        <p
          style={{
            color: "#555",
            marginTop: "10px",
            fontSize: "clamp(12px, 5.5vw, 9px)",
            fontWeight: "600",
            lineHeight: "1.2",
            textAlign: "center",
            margin: "0 auto",
            maxWidth: "100%",
            whiteSpace: "wrap",
          }}
        >
          Skip the queues. Apply online for Passport, PAN & more.
        </p>
      </div>

      {/* Filters */}
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
          gap: windowWidth <= 800 ? "6px" : "12px",
          padding: "0 20px",
          marginBottom: "30px",
          justifyContent: windowWidth > 700 ? "center" : "flex-start",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {displayedFilters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => {
              setSelectedCategory(filter.value);
              setVisibleCards(6); // reset view on filter change
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: windowWidth <= 768 ? "5px 10px" : "6px 14px",
              borderRadius: "9999px",
              border:
                selectedCategory === filter.value
                  ? "2px solid #1a1a40"
                  : "1px solid #ccc",
              backgroundColor:
                selectedCategory === filter.value ? "#e0e0f8" : "#e6e9f0",
              color: "#1a1a40",
              fontWeight: "500",
              fontSize: "13px",
              whiteSpace: "nowrap",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            {filter.icon}
            {filter.label}
          </button>
        ))}

        <button
          onClick={() => setShowMoreFilters(!showMoreFilters)}
          style={{
            padding: windowWidth <= 768 ? "5px 10px" : "6px 14px",
            borderRadius: "9999px",
            border: "1px solid #ccc",
            backgroundColor: "#f0f0f0",
            color: "#1a1a40",
            fontWeight: "500",
            fontSize: "13px",
            cursor: "pointer",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          {showMoreFilters ? "- Less" : "+ More"}
        </button>
      </div>

      {/* Cards Grid */}
      <div style={{ width: "100%", padding: "0 16px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              windowWidth <= 768 ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: windowWidth <= 768 ? "8px" : "12px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {cardsToShow.map((card) => (
            <Cart key={card.id} card={card} />
          ))}
        </div>
      </div>

      {/* View More / View Less */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        {visibleCards < filteredCards.length ? (
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#1a1a40",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
            onClick={handleViewMore}
          >
            View More
          </button>
        ) : (
          filteredCards.length > 6 && (
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: "#1a1a40",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={handleViewLess}
            >
              View Less
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Filter;
