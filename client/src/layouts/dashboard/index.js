import React, { useState } from "react";
import axios from "axios";
import SubmitButton from "./components/SubmitButton";
import ImageUploader from "./components/ImageUploader";
import Footer from "components/Footer";
import { TextField, Box } from "@mui/material";
import bgImage from "assets/bg-1.jpg";

function Dashboard() {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([null, null, null, null]);
  const [texts, setTexts] = useState(["", "", "", ""]);
  const [reset, setReset] = useState(false);

  const handleImageUpload = (index, uploadedImage) => {
    const newImages = [...images];
    newImages[index] = uploadedImage;
    setImages(newImages);
  };

  const handleTextChange = (index, event) => {
    const newTexts = [...texts];
    newTexts[index] = event.target.value;
    setTexts(newTexts);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    images.forEach((image, index) => {
      if (image) formData.append(`image${index + 1}`, image);
    });
    texts.forEach((text, index) => {
      formData.append(`text${index + 1}`, text);
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/save",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);

      setTitle("");
      setImages([null, null, null, null]);
      setTexts(["", "", "", ""]);
      setReset(true);
      setTimeout(() => setReset(false), 0);
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "91.2vh",
          padding: 4,
        }}
      >
        <TextField
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter the story title here"
          sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: 1 }}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            marginTop: 2,
            marginBottom: 5,
          }}
        >
          {[0, 1, 2, 3].map((index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
                maxWidth: "250px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderRadius: 1,
                padding: 2,
              }}
            >
              <Box>
                <ImageUploader
                  onImageUpload={(image) => handleImageUpload(index, image)}
                  reset={reset}
                />
              </Box>
              <TextField
                value={texts[index]}
                onChange={(e) => handleTextChange(index, e)}
                placeholder={`Enter your plot...`}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderRadius: 1,
                }}
              />
            </Box>
          ))}
        </Box>
        <SubmitButton onSubmit={handleSubmit} />
      </Box>
      <Footer />
    </>
  );
}

export default Dashboard;
