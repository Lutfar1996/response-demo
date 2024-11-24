import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = process.env.REACT_APP_BACKEND_URL;
console.log(apiUrl);

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Send GET request to the backend
    axios
      .get("/api/message")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + Node.js Fullstack App</h1>
      <p>{message || "Loading..."}</p>
    </div>
  );
}

export default App;
