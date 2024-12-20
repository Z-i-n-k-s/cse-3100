import React from "react";
import JaneImage from "../assets/Jane.jfif";
import BobImage from "../assets/Bob.jfif";
import AliceImage from "../assets/Alice.jfif";
import NickImage from "../assets/Nick.jfif";

export default function AboutUs() {
  return (
    <div
      style={{
        padding: "2em",
        maxWidth: "1200px",
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
      }}
    >
      {/* Mission Section */}
      <section style={{ marginTop: "2em" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "1em" }}>Our Mission</h2>
        <p style={{ lineHeight: "1.6", color: "#555" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          iaculis lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>

      {/* History Section */}
      <section style={{ marginTop: "2em" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "1em" }}>Our History</h2>
        <p style={{ lineHeight: "1.6", color: "#555" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          iaculis lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>

      {/* Team Section */}
      <section style={{ marginTop: "2em" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "1em" }}>Our Team</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1em",
            marginTop: "1em",
          }}
        >
          {/* Individual Team Member Cards */}
          {/* Member 1 */}
          <div
            style={{
              padding: "1em",
              border: "1px solid #ddd",
              borderRadius: "8px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={JaneImage}
              alt="Jane Curter"
              style={{
                width: "100px",
                height: "100px",
                margin: "0 auto",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <h3 style={{ fontSize: "1rem", margin: "1em 0 0.5em", color: "#333" }}>
              Jane Curter
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>Manager</p>
          </div>

          {/* Member 2 */}
          <div
            style={{
              padding: "1em",
              border: "1px solid #ddd",
              borderRadius: "8px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={BobImage}
              alt="Bob Doe"
              style={{
                width: "100px",
                height: "100px",
                margin: "0 auto",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <h3 style={{ fontSize: "1rem", margin: "1em 0 0.5em", color: "#333" }}>
              Bob Doe
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>Volunteer</p>
          </div>

          {/* Member 3 */}
          <div
            style={{
              padding: "1em",
              border: "1px solid #ddd",
              borderRadius: "8px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={AliceImage}
              alt="Alice Doe"
              style={{
                width: "100px",
                height: "100px",
                margin: "0 auto",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <h3 style={{ fontSize: "1rem", margin: "1em 0 0.5em", color: "#333" }}>
              Alice Doe
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>Director</p>
          </div>

          {/* Member 4 */}
          <div
            style={{
              padding: "1em",
              border: "1px solid #ddd",
              borderRadius: "8px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={NickImage}
              alt="Nick White"
              style={{
                width: "100px",
                height: "100px",
                margin: "0 auto",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <h3 style={{ fontSize: "1rem", margin: "1em 0 0.5em", color: "#333" }}>
              Nick White
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>Director</p>
          </div>
        </div>
      </section>
    </div>
  );
}
