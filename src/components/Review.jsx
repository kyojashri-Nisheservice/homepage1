import React, { useRef, useState, useEffect } from "react";

const Review = () => {
  const scrollRef = useRef();
  const [cardWidth, setCardWidth] = useState(getCardWidth());

  const reviews = [
    { stars: 5, title: "Helpful and fast", details: "Great support and smooth process. Will use again.", author: "Sneha Patil" },
    { stars: 5, title: "Quick & Easy", details: "Very professional and user-friendly experience.", author: "Rohan Mehta" },
    { stars: 5, title: "Reliable service", details: "Handled everything without hassle.", author: "Aarti Singh" },
    { stars: 5, title: "Great Experience", details: "Super smooth and efficient process.", author: "Ankit Verma" },
    { stars: 5, title: "Very Helpful", details: "Customer support was very responsive.", author: "Nisha Gupta" },
    { stars: 5, title: "Awesome", details: "Used it twice, both times great!", author: "Pooja Sharma" },
    { stars: 5, title: "Fast Delivery", details: "Got my document faster than expected.", author: "Kiran Desai" }
  ];

  // Dynamic width calculation
  function getCardWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) return "calc(50% - 12px)"; // 2 cards
    return "calc(33.33% - 16px)"; // 3 cards
  }

  useEffect(() => {
    const handleResize = () => setCardWidth(getCardWidth());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (direction) => {
    const scrollAmount = scrollRef.current.offsetWidth / (cardWidth.includes("50%") ? 2 : 3);
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  const container = {
    padding: "20px",
    backgroundColor: "#f0f2f5",
    borderRadius: "8px",
    border: "1px solid #ccc",
    margin: "30px auto",
    maxWidth: "1000px"
  };

  const headingWrapper = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    borderBottom: "1px dashed #aaa",
    paddingBottom: "6px"
  };

 
  const headingText = {
  fontSize: "clamp(14px, 3vw, 18px)",
  fontWeight: 600                   
};

  const arrowButton = {
    padding: "5px 12px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "5px"
  };

  const reviewsContainer = {
    display: "flex",
    overflowX: "auto",
    scrollBehavior: "smooth",
    paddingBottom: "10px",
    gap: "16px"
  };

  const card = {
    backgroundColor: "white",
    borderRadius: "6px",
    padding: "15px",
    width: cardWidth,
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    flexShrink: 0
  };

  const stars = {
    color: "#f2b01e",
    marginBottom: "5px"
  };

  return (
    <div style={container}>
      <div style={headingWrapper}>
        <div style={headingText}>See Why Users Trust Us</div>
        <div>
          <button style={arrowButton} onClick={() => scroll("left")}>←</button>
          <button style={arrowButton} onClick={() => scroll("right")}>→</button>
        </div>
      </div>

      <div style={reviewsContainer} ref={scrollRef}>
        {reviews.map((review, index) => (
          <div key={index} style={card}>
            <div style={stars}>{"★".repeat(review.stars)}</div>
            <div><strong>“{review.title}”</strong></div>
            <div style={{ marginTop: "5px" }}>{review.details}</div>
            <div style={{ marginTop: "10px", fontWeight: "400" }}>— {review.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
