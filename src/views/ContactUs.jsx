import React, { useState } from "react";

export default function ContactUs() {
 
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();   
    alert("Thank you for contacting us!");
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <div
      style={{
        padding: "2em",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1em" }}>Contact Us</h2>
      <p style={{ lineHeight: "1.6", color: "#555" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
        lorem id leo posuere euismod.
      </p>
      <form onSubmit={handleSubmit} style={{ marginTop: "1.5em" }}>
        
        <div style={{ marginBottom: "1em" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "0.5em", color: "#333" }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.75em",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
            required
          />
        </div>

        
        <div style={{ marginBottom: "1em" }}>
          <label
            htmlFor="phone"
            style={{ display: "block", marginBottom: "0.5em", color: "#333" }}
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.75em",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
            required
          />
        </div>

       
        <div style={{ marginBottom: "1em" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "0.5em", color: "#333" }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.75em",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
            required
          />
        </div>

        
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75em",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
