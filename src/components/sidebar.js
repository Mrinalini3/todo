import React from "react";
import "./sidebar.css";
import {
  Toolbar,
  Drawer,
  List,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Button,
  Box,
  CssBaseline,
  AppBar,
} from "@mui/material";
import profile from "./assets/profile.png";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import FlagIcon from "@mui/icons-material/Flag";
import { Link } from "react-router-dom";

const drawerWidth = 440;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: 440,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Avatar
          alt="Profile"
          src={profile}
          sx={{ width: 240, height: 240, marginTop: 4, marginLeft: 12 }}
        />
        <br />
        <Divider />
        <br />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "green" }}>
                  <BorderColorIcon />
                </Avatar>
              </ListItemAvatar>
              <Link to="/todo">
                <ListItemText primary="To - Do" secondary="Lets get it done" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "red" }}>
                  <AutoGraphIcon />
                </Avatar>
              </ListItemAvatar>
              <div className="nav">
                <Link to="/daily">
                  <ListItemText
                    primary="Daily Chart"
                    secondary="Summary of your day"
                  />
                </Link>
              </div>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#054fb0" }}>
                  <AvTimerIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Monthly Chart"
                secondary="Your Month in view"
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#7c1ac7" }}>
                  <FlagIcon />
                </Avatar>
              </ListItemAvatar>
              <Link to="/goals">
                <ListItemText primary="Goals" secondary="Get Set GO" />
              </Link>{" "}
            </ListItemButton>
          </ListItem>
        </List>
        <div class="logout">
          <Typography align="center">Have a Nice Day!</Typography>
          <Button
            variant="contained"
            sx={{
              marginLeft: 10,
              marginRight: 10,
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: "#f21b9c",
            }}
            align="center"
          >
            LogOut
          </Button>
        </div>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      ></Box>
    </Box>
  );
}
