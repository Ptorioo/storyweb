import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const ModalPopUp = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button color="primary" variant="contained" onClick={handleOpen}>
        Open
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Screen</DialogTitle>
        <DialogContent>
          <DialogContentText>Test</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" variant="contained" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ModalPopUp;
