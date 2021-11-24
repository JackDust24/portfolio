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

import Colors from "../utils/constants"
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    // display: "block",
    background: Colors.bkMildGreen,
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',
    '&:before': {
        content: '""',
        position: 'absolute',
        height: '100%',
        border: '1px solid tan',
        right: 40,
        top: 0
    },
    '&:after': {
        content: '""',
        display: 'table',
        clear: 'both'
    },
    [theme.breakpoints.up('md')]: {
        padding: '2rem',
        '&:before': {
            left: 'calc(50% - 1px)',
            right: 'auto'
        }
    }
  },
  pointerItem: {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
        content: '""',
        position: 'absolute'
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        right: '-0.625rem',
        top: 'calc(50% - 5px)',
        borderStyle: 'solid',
        borderColor: '#17D7A0 #17D7A0 transparent transparent',
        borderWidth: '0.625rem',
        transform: 'rotate(45deg)' // This is for the arrow
    },
    [theme.breakpoints.up('md')]: {
        width: '44%',
        margin: '1rem',
        '&:nth-of-type(2n)': {
            float: 'right',
            margin: '1rem',
            borderColor: 'tan'
        }, // This is the part for appearing in the right
        '&:nth-of-type(2n):before': {
            right: 'auto',
            left: '-0.625rem',
            borderColor: 'transparent transparent #17D7A0 #17D7A0'
        }
    }
  },
  pointers: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    background: Colors.bkDarkBlue,
    color: 'white',
    lineHeight: 1, 
    padding: '0.5rem 0 1rem',
    '&:before': {
        display: 'none'
    },
    [theme.breakpoints.up('md')]: {
        textAlign: 'center',
        margin: '0 auto',
        '&:nth-of-type(2n)': {
            float: 'none',
            margin: '0 auto'
        },
        '&:nth-of-type(2n):before': {
            display: 'none'
        }
    }
  },
  heading: {
    padding: "3rem 0",
    color: "tan",
    textTransform: "uppercase",
  },
  subHeading: {
    padding: "0",
    color: Colors.bkDarkBlue,
    textTransform: "uppercase",
  },
  subtitle: {
    color: "white",
  },
}));

export default function History() {
  const classes = useStyles();

  return (
    <Box component="header" className={classes.container}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Services
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.pointers} ${classes.pointerItem}`}
        >
          Frontend
        </Typography>
        <Box component="div" className={classes.pointerItem}>
          <Typography
            variant="h5"
            className={classes.subHeading}
          >
            React.js
          </Typography>
          <Typography
            variant="body1"
            className={classes.subtitle}
          >
            2 Years Experience
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ color: "tan" }}
          >
            Experienced in React, HTML, CSS, JQuery. Familiar with Gatsby, Next, TypeScript, MaterialUI.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.pointers} ${classes.pointerItem}`}
        >
          Mobile Dev
        </Typography>
        <Box component='div' className={classes.pointerItem}>
          <Typography
            variant="h5"
            align="left"
            className={classes.subHeading}
          >
            React Native & iOS native
          </Typography>
          <Typography
            variant="body1"
            align="left"
            className={classes.subtitle}
          >
            2-5 Years Experience
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            style={{ color: "tan" }}
          >
            Skilled in React Native Development and Swift, SwiftUI and Objective C for iOS development.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.pointers} ${classes.pointerItem}`}
        >
          Backend
        </Typography>
        <Box component='div' className={classes.pointerItem}>
          <Typography
            variant="h5"
            align="left"
            className={classes.subHeading}
          >
            Node.js & Express
          </Typography>
          <Typography
            variant="body1"
            align="left"
            className={classes.subtitle}
          >
            2 Years Experience
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            style={{ color: "tan" }}
          >
            Familiar with Node, Express and using MongoDB and PostgreSQL.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.pointers} ${classes.pointerItem}`}
        >
          CMS
        </Typography>
        <Box component='div' className={classes.pointerItem}>
          <Typography
            variant="h5"
            align="left"
            className={classes.subHeading}
          >
            WordPress & Strapi
          </Typography>
          <Typography
            variant="body1"
            align="left"
            className={classes.subtitle}
          >
            2-3 Years Experience
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            style={{ color: "tan" }}
          >
            Skilled with WordPress and Strapi CMS.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
