
import React from "react";

const Cart = ({ card }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        minHeight: "260px",
      }}
    >
      <img
        src={card.image}
        alt={card.title}
        style={{
          width: "130px",
          height: "80px",
          marginBottom: "10px",
          objectFit: "contain",
        }}
      />

      <div style={{ fontWeight: "bold", marginBottom: "8px", fontSize: "16px" }}>
        {card.title}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          fontSize: "14px",
          margin: "8px 0",
          padding: "0 4px",
        }}
      >
        <span><strong>Fee:</strong> {card.fee}</span>
        <span><strong>Time:</strong> {card.time}</span>
      </div>

      <div
        style={{
          fontWeight: "bold",
          fontSize: "14px",
          marginTop: "10px",
          marginBottom: "6px",
          alignSelf: "flex-start",
        }}
      >
        Required documents:
      </div>

      <ul
        style={{
          width: "100%",
          fontSize: "14px",
          paddingLeft: "20px",
          marginBottom: "12px",
          textAlign: "left",
        }}
      >
        <li>Aadhaar Card</li>
        <li>PAN Card</li>
        <li>Passport-size Photo</li>
      </ul>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          gap: "10px",
        }}
      >
        <button
          style={{
            backgroundColor: "#f2f2f2",
            color: "#333",
            padding: "6px 12px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            flex: 1,
            fontSize: "14px",
            cursor: "pointer",
          }}
          onClick={() => {
            alert("Guide PDF clicked");
          }}
        >
          📄 Guide PDF
        </button>

        <button
          style={{
            backgroundColor: "#1a1a40",
            color: "#fff",
            padding: "6px 12px",
            border: "none",
            borderRadius: "5px",
            flex: 1,
            fontSize: "14px",
            cursor: "pointer",
          }}
          onClick={() => {
            alert("Book Now clicked");
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
