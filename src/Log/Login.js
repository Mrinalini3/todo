import React from "react";
import { TextField, Button, Box } from "@mui/material";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
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
      <h1 className="h1">Login </h1>
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
          <Link to="/todo">
            <Button type="submit" variant="contained">
              LOGIN
            </Button>{" "}
          </Link>
          <br />
          <br />
        </form>
      </div>
    </Box>
  );
}

export default Login;
