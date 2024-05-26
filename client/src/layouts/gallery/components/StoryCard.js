import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import ModalPopUp from "components/ModalPopUp";

const StoryCard = () => {
  const [open, setOpen] = useState(false);
  const [story, setStory] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/");
        const storyData = response.data[0];
        setStory(storyData);
      } catch (error) {
        console.error("There was an error fetching the story data!", error);
      }
    };

    fetchData();
  }, []);

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card sx={{ maxWidth: 345, margin: 4 }} onClick={handleOpen}>
        <CardActionArea>
          {story.entries && (
            <CardMedia
              component="img"
              height="140"
              image={`http://localhost:5000/uploads/${story.entries[0].image}`}
              alt={story.title}
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h6" color="text.primary">
              {story.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <ModalPopUp open={open} handleClose={handleClose} story={story} />
    </>
  );
};

export default StoryCard;
