import React from "react";
import { Button } from "@mui/material";

const SubmitButton = ({ onSubmit }) => {
  return (
    <Button variant="contained" color="primary" onClick={onSubmit}>
      Save
    </Button>
  );
};

export default SubmitButton;
