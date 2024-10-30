"use client";
import { useEffect, useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await fetch("http://localhost:8080/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Ensures cookies are sent
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          const data = await response.json();
          alert("Registration successful!");
        } else {
          alert("Registration failed");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred");
      }
    };
    handleSubmit();
  }, [username, password]);

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
