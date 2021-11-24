import {
  AppBar,
  Avatar,
  Box,
  Divider,
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
import { Apps, ArrowBack, AssignmentInd, Home } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import avatar from "../../images/Jason.png";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  menuContainer: {
    width: 250,
    height: "100%",
    background: "#1597E5",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "3em",
    [theme.breakpoints.down("md")]: {
      height: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.login,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  icons: {
    fontSize: "1.4rem",
    color: "white",
  },
  menu: {
    backgroundColor: theme.palette.common.purple,
    color: "white",
    borderRadius: "0px",
    marginTop: "50px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.8,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.purple,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemLogin: {
    backgroundColor: theme.palette.common.pink,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  menuIconToggle: {
    fontSize: "3rem",
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

// import {ArrowBack, AssignmentInd} from '@material-ui/icons';

function NavBar(props) {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  // For the menu items
  const handleClick = (e) => {
    console.log("handleClick");
    console.log("e.currentTarget");

    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const menuOptions = [
    {
      name: "Your Profile",
      link: "/yourprofile",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "Your Skills",
      link: "/skills",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "What you are looking for",
      link: "/lookingfor",
      activeIndex: 1,
      selectedIndex: 2,
    },
  ];

  const routes = [
    {
      name: "Home",
      link: "/",
      activeIndex: 0,
      icon: <Home className={classes.icons} />,
    },
    {
      name: "Profile",
      link: "/profile",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      icon: <AssignmentInd className={classes.icons} />,
      mouseOver: (event) => handleClick(event),
    },
    {
      name: "History",
      link: "/history",
      activeIndex: 2,
      icon: <Apps className={classes.icons} />,
    },
    // {
    //   name: "Job Match",
    //   link: "/match",
    //   activeIndex: 3,
    //   icon: <Apps className={classes.icons} />,
    // },
    // {
    //   name: "About Us",
    //   link: "/about",
    //   activeIndex: 4,
    //   icon: <Apps className={classes.icons} />,
    // },
    // {
    //   name: "Contact Us",
    //   link: "/contact",
    //   activeIndex: 5,
    //   icon: <Apps className={classes.icons} />,
    // },
  ];

  const SideList = (slider) => {
    return (
      <React.Fragment>
        <SwipeableDrawer
          disableBackdropTransition={!iOS}
          anchor="right"
          disableDiscovery={iOS}
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          onOpen={() => setOpenDrawer(true)}
          classes={{ paper: classes.drawer }}
        >
          <Box component="div" className={classes.menuContainer}>
            <Avatar className={classes.avatar} src={avatar} alt="avatar" />
            <List disablePadding>
              {routes.map((route) => (
                <ListItem
                  divider
                  key={`${route}${route.activeIndex}`}
                  button
                  component={Link}
                  to={route.link}
                  selected={props.value === route.activeIndex}
                  classes={{ selected: classes.drawerItemSelected }}
                  onClick={() => {
                    setOpenDrawer(false);
                    props.setValue(route.activeIndex);
                  }}
                >
                  <ListItemIcon>{route.icon}</ListItemIcon>
                  <ListItemText
                    className={classes.drawerItem}
                    disableTypography
                  >
                    {route.name}
                  </ListItemText>
                </ListItem>
              ))}
              <ListItem
                onClick={() => {
                  setOpenDrawer(false);
                  props.setValue(6);
                }}
                divider
                button
                component={Link}
                classes={{
                  root: classes.drawerItemlogin,
                  selected: classes.drawerItemSelected,
                }}
                to="/estimate"
                selected={props.value === 5}
              >
                {/* <ListItemText className={classes.drawerItem} disableTypography>
                  Login
                </ListItemText> */}
              </ListItem>
            </List>

            <Divider />
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    );
  };

  return (
    <>
      {openDrawer && <SideList />}

      <Box component="nav">
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h6" style={{ color: "tan" }}>
              Jason Whittaker
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;
