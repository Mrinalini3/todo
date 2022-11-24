import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import PropTypes from "prop-types";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Button, Grid } from "@mui/material/";
import "./daily.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const WallPaper = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
  background: "linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)",
});

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
  "& .MuiRating-iconFilled": {
    color: "#5a9ffa",
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function Rate() {
  const theme = useTheme();
  const duration = 10;
  const [position, setPosition] = React.useState(5);

  return (
    <div>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Widget>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography s> Rate Your Day</Typography>
            <Box sx={{ ml: 1.5, minWidth: 0 }}></Box>
          </Box>
          <StyledRating
            name="highlight-selected-only"
            defaultValue={2}
            IconContainerComponent={IconContainer}
            getLabelText={(value) => customIcons[value].label}
            highlightSelectedOnly
          />
        </Widget>
        <WallPaper />
      </Box>
      <br />
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Widget>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography> Daily Water Log</Typography>
            <Box sx={{ ml: 1.5, minWidth: 0 }}></Box>
          </Box>
          <StyledRating>
            <Rating name="size-large" defaultValue={2} size="large" />
          </StyledRating>
        </Widget>
        <WallPaper />
      </Box>
      <br />
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Widget>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography> How long did you Sleep?</Typography>
            <Box sx={{ ml: 1.5, minWidth: 0 }}></Box>
          </Box>
          <Slider
            aria-label="time-indicator"
            size="small"
            valueLabelDisplay="on"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition(value)}
            sx={{
              color:
                theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
              height: 4,
            }}
          />
        </Widget>
        <WallPaper />
      </Box>
      <br />
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Widget>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography theme={theme}> WorkOut ?</Typography>
            <Box sx={{ ml: 1.5, minWidth: 0 }}></Box>
          </Box>
          <Grid align="center">
            <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons"
            >
              <Button sx={{ backgroundColor: "white", color: "red" }}>
                Yes
              </Button>
              <Button sx={{ backgroundColor: "red", color: "white" }}>
                No
              </Button>
            </ButtonGroup>
          </Grid>
        </Widget>
        <WallPaper />
      </Box>
      <br />
    </div>
  );
}
