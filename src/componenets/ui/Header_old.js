import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
} from "@material-ui/core";
import React, { cloneElement, useEffect, useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import { BsTrophy } from "react-icons/bs";
import Button from "@material-ui/core/Button";
import { CgProfile } from "react-icons/cg";
import { FiBookOpen } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../assets/logo.svg";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { useTheme } from "@material-ui/core/styles";
import zibby from "../../assets/zibby.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
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

export default function Header_old(props) {
  const classes = useStyles();
  const theme = useTheme();

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  // For when the tab changes
  const handleChange = (e, newValue) => {
    console.log("handleChange");
    props.setValue(newValue);
  };

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
      icon: <IoHomeOutline className={classes.icons} />,
    },
    {
      name: "Profile",
      link: "/profile",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      icon: <CgProfile className={classes.icons} />,
      mouseOver: (event) => handleClick(event),
    },
    {
      name: "Job Match",
      link: "/match",
      activeIndex: 2,
      icon: <BsTrophy className={classes.icons} />,
    },
    {
      name: "About Us",
      link: "/about",
      activeIndex: 3,
      icon: <FiBookOpen className={classes.icons} />,
    },
    {
      name: "Contact Us",
      link: "/contact",
      activeIndex: 4,
      icon: <RiMoneyPoundCircleLine className={classes.icons} />,
    },
  ];

  useEffect(() => {
    console.log("UseEffect");
    [...menuOptions, ...routes].forEach((route) => {
      console.log("UseEffect2");

      switch (window.location.pathname) {
        case `${route.link}`:
          console.log("UseEffect3");

          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/login":
          props.setValue(5);
          break;
        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selectedIndex, routes, props]);

  const drawer = (
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
        <div className={classes.toolbarMargin} />
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
              <ListItemIcon>
                <ListItemText className={classes.drawerItem} disableTypography>
                  {route.name}
                </ListItemText>
              </ListItemIcon>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
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
            <ListItemText className={classes.drawerItem} disableTypography>
              Login
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      {/* Since this is inside our toolbar we can push it to the end of the toolbar */}
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              onClick={() => props.setValue(0)}
              className={classes.logoContainer}
            >
              <img alt="company logo" className={classes.logo} src={zibby} />
            </Button>
            {isMatch ? (
              drawer
            ) : (
              <>
                <Tabs
                  value={props.value}
                  onChange={handleChange}
                  className={classes.tabContainer}
                  indicatorColor="primary"
                >
                  {routes.map((route, index) => (
                    <Tab
                      key={`${route}${index}`}
                      className={classes.tab}
                      component={Link}
                      to={route.link}
                      label={route.name}
                      icon={route.icon}
                      aria-owns={route.ariaOwns}
                      aria-haspopup={route.ariaPopup}
                      onMouseOver={route.mouseOver}
                      disableRipple
                    />
                  ))}
                </Tabs>
                <Button
                  component={Link}
                  to="/login"
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={() => props.setValue(5)}
                >
                  Login
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                  classes={{ paper: classes.menu }}
                  MenuListProps={{
                    onMouseLeave: handleClose,
                  }}
                  elevation={0}
                  style={{ zIndex: 1302 }}
                  keepMounted
                >
                  {menuOptions.map((option, i) => (
                    <MenuItem
                      key={`${option}${i}`}
                      component={Link}
                      to={option.link}
                      classes={{ root: classes.menuItem }}
                      onClick={(event) => {
                        handleMenuItemClick(event, i);
                        props.setValue(1);
                        handleClose();
                      }}
                      selected={i === props.selectedIndex && props.value === 1}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
