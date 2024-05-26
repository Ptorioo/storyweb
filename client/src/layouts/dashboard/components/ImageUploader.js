import React, { useRef, useState, useEffect } from "react";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import { Box } from "@mui/material";

const ImageUploader = ({ onImageUpload, reset }) => {
  const inputRef = useRef(null);
  const [filename, setFilename] = useState("");

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      onImageUpload(file);
      setFilename(file.name);
    }
  };

  const handleBoxClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  useEffect(() => {
    if (reset) {
      setFilename("");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }, [reset]);

  return (
    <Box
      sx={{
        height: 200,
        width: 200,
        border: "2px dashed #8ab1e3",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={handleBoxClick}
    >
      <input
        type="file"
        accept="image/*"
        name="image"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <CropOriginalIcon sx={{ color: "#8ab1e3", fontSize: 60 }} />
      {filename}
    </Box>
  );
};

export default ImageUploader;
