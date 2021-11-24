import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

import Header from "./ui/Header";
// import Header from "./ui/Header_old";
import Index from "./index"
import NavBar from "./ui/NavBar";
import Particles from "react-tsparticles";
import Test from "./Test";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/styles";
import theme from "./ui/Theme";

const useStyles = makeStyles((theme) => ({
  particlesCanva: {
    position: "absolute",
    opacity: 0.3,
  },
}));

function App() {
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        
        <Particles
      id="tsparticles"
      canvasClassName={classes.particlesCanva}
      // init={particlesInit}
      // loaded={particlesLoaded}
      options={{
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Index
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
                name={"Index"}

              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={(props) => (
              <Test
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
                name={"Profile"}

              />
            )}
          />
          <Route
            exact
            path="/history"
            render={(props) => (
              <Test
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
                name={"History"}

              />
            )}
          />
          <Route
            exact
            path="/yourprofile"
            render={(props) => (
              <Test
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
                name={"YourProfile"}

              />
            )}
          />
          <Route
            exact
            path="/skills"
            render={(props) => (
              <Test
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
                name={"Skills"}

              />
            )}
          />
          <Route
            exact
            path="/lookingfor"
            render={(props) => (
              <Test
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
                name={"LookingFor"}

              />
            )}
          />
          <Route
            exact
            path="/match"
            render={(props) => (
              <Test
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
                name={"Match"}
              />
            )}
          />
          <Route
            exact
            path="/about"
            render={(props) => (
              <Test
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
                name={"About"}
              />
            )}
          />
          <Route
            exact
            path="/contact"
            render={(props) => (
              <Test
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
                name={"Contact"}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <Test
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
                name={"Login"}

              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
