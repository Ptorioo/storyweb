/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Paper, TextField, Button } from "@mui/material";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import Footer from "components/Footer";
import Divider from "@mui/material/Divider";
import { useForm, Controller } from "react-hook-form";
import bgImage from "assets/bg-1.jpg";

function Dashboard() {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(30%)",
          zIndex: -1,
        }}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={{ xs: 2, md: 3 }} rowSpacing={1}>
          {Array.from(Array(4)).map((_, index) => (
            <Grid item xs={6} key={index}>
              <Box
                display="flex"
                justifyContent={index % 2 === 0 ? "flex-end" : "flex-start"}
              >
                <Paper
                  sx={{
                    display: "flex",
                    mt: 3,
                    padding: 3,
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Controller
                    name={`image${index}`}
                    control={control}
                    render={({ field }) => (
                      <>
                        <input
                          {...field}
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          id={`image-upload${index}`}
                        />
                        <label
                          htmlFor={`image-upload${index}`}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            minHeight: 200,
                            border: "2px dashed #8ab1e3",
                            cursor: "pointer",
                            marginBottom: 10,
                          }}
                        >
                          <CropOriginalIcon
                            sx={{ color: "#8ab1e3", fontSize: 60 }}
                          />
                        </label>
                      </>
                    )}
                  />
                  <TextField
                    id={`textfield${index}`}
                    label="Caption"
                    variant="outlined"
                    fullWidth
                    {...register(`caption${index}`)}
                  />
                </Paper>
              </Box>
            </Grid>
          ))}
          <Grid item xs={12} mb={4}>
            <Box display="flex" justifyContent="center" mt={2}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ width: 585 }}
              >
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
      <Divider />
      <Footer />
    </Box>
  );
}

export default Dashboard;
