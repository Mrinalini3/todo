import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Typography, AppBar, Box, List, ListItem, Grid } from "@mui/material/";
import goal from "./assets/goals.png";
import "./goals.css";
import Sidebar from "./sidebar";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Goals() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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
        <img src={goal} height="200px" />
      </AppBar>
      ;
      <br />
      <br />
      <div className="box">
        <Box
          position="fixed"
          sx={{
            width: "850px",
            ml: `${-230}px`,
          }}
        >
          <Grid align="center">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{ backgroundColor: "pink" }}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography sx={{ fontSize: 40 }}>Career</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem>Weekly Tasks</ListItem>
                  <ListItem>Assignments</ListItem>
                  <ListItem>Projects</ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography sx={{ fontSize: 40 }}>Skills</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem>Driving</ListItem>
                  <ListItem>Swimming</ListItem>
                  <ListItem>Cooking</ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              sx={{ backgroundColor: "pink" }}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography sx={{ fontSize: 40 }}>Adventure</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem>Bungee Jumping</ListItem>
                  <ListItem>Scuba Diving</ListItem>
                  <ListItem>Skiing</ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
