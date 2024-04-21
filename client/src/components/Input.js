import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Input = ({ onPlotGenerated, onLoading }) => {
  const [prompt, setPrompt] = useState("");

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      onLoading();
      const response = await axios.post("http://localhost:5000/generate-plot", {
        prompt,
      });
      const { plot } = response.data;
      onPlotGenerated(plot);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <input
          type="text"
          className="input"
          placeholder="Enter your prompt..."
          value={prompt}
          onChange={handleInputChange}
        />
        <button className="create-button" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default Input;
