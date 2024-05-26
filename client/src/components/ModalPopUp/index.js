import React from "react";
import { Button } from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const ModalPopUp = ({ open, handleClose, story }) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>{story.title}</DialogTitle>
      <DialogContent>
        {story.entries.map((entry, index) => (
          <div key={index}>
            <img
              src={`http://localhost:5000/uploads/${entry.image}`}
              alt={entry.text}
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <DialogContentText>{entry.text}</DialogContentText>
          </div>
        ))}
      </DialogContent>
      <DialogActions>
        <Button color="error" variant="contained" onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalPopUp;
