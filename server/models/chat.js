import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // Replace with your server URL

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    // Listen for incoming chat messages from the server
    socket.on("chat message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect(); // Clean up when the component unmounts
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageInput.trim() !== "") {
      // Send the chat message to the server
      socket.emit("chat message", messageInput);
      setMessageInput("");
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
