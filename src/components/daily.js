import React from "react";
import { Grid, Box, AppBar, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import daily from "./assets/daily.png";
import Rating from "@mui/material/Rating";
import "./daily.css";
import Rate from "./rating";
import Sidebar from "./sidebar";

////////////////

export default function Daily() {
  return (
    <div>
      <Sidebar />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${440}px)`,
          ml: `${440}px`,
        }}
      >
        <img src={daily} height="200px" />
      </AppBar>
      <Box
        position="fixed"
        sx={{
          width: `calc(100% - ${440}px)`,
          ml: `${440}px`,
          marginTop: 12,
        }}
      >
        <div className="rate">
          <Rate />
        </div>
      </Box>
    </div>
  );
}
