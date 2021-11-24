import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@material-ui/core";

import React from "react";
import Typed from "react-typed";
import avatar from "../../images/Jason.png";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    // display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  }
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
    <Grid container justify="center">
      <Avatar src={avatar} className={classes.avatar} alt="JasonAvatar" />
      </Grid>
      <Typography variant="h4">
        <Typed strings={["Jason Whittaker"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography variant="h5">
        <Typed
          strings={["Web Designer", "MERN Stack", "Mobile App Developer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
}
