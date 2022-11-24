import React from "react";
import { TextField, Button, Box } from "@mui/material";
import "./Login.css";
import { Link } from "react-router-dom";

function Logup() {
  return (
    <Box
      className="box"
      sx={{
        backgroundColor: "#ff80ff",
        width: 450,
        height: 520,
        borderRadius: 25,
      }}
    >
      <h1 className="h1">Sign-Up</h1>
      <div className="box-contents">
        <br />
        <br />
        <br />
        <br />
        <form>
          <TextField label="Username" /> <br />
          <br />
          <TextField type="password" label="Password" /> <br />
          <br />
          <TextField type="password" label="Confirm Password" /> <br />
          <br />
          <Link to="/login">
            <Button type="submit" variant="contained">
              SIGN-UP
            </Button>{" "}
          </Link>
          <br />
          <br />
        </form>
      </div>
    </Box>
  );
}

export default Logup;
