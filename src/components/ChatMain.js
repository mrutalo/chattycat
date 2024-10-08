import React, { useState } from "react";

const ChatMain = () => {
  const [message, setMessage] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedText(message);
    setMessage("");
  };

  return (
    <div className="chat-main">
      <div className="chat-display">
        {submittedText && <p>{submittedText}</p>}
      </div>

      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message here..."
        className="chat-input"
      />

      {/* Submit button */}
      <button onClick={handleSubmit} className="chat-submit">
        Send
      </button>
    </div>
  );
};

export default ChatMain;
