import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import Colors from "../utils/constants"
import { data } from "../data/profileData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    background: Colors.bkBlue,
    height: "100%",
  },
  cards: {
    maxWidth: 320,
    margin: "5rem auto",
  },
  cardContent: {
    height: 150,
  },
  heading: {
    padding: "3rem 0",
    color: "tan",
    textTransform: "uppercase",
  },
}));

export default function Profile() {
  const classes = useStyles();

  // Get the profile data
  const profileData = data;
  // const [profileData, setProfileData] = useState([]); // We will send this to the Profile page

  // // Retrieve data
  // const retrieveProfileData = async () => {

  //   let getProfileData = require("../data/profile.json");

  //   return getProfileData;
  // };

  // useEffect(() => {
  //   console.log("Use Effect Profile Page");
  //   (async () => {
  //     if (profileData.length === 0) {
  //       console.log("Name equals Profile");
  //       retrieveProfileData()
  //         .then((result) => {
  //           console.log("retrieveProfileData RESULT  - ", result);
  //           setProfileData(result);
  //         })
  //         .catch((error) => console.error(error));
  //     }
  //   })();
  // }, []);

  // useEffect(() => {
  //   console.log("Use Effect Profile Data Changed");
  // }, [profileData]);

  return (
    <Box component="div" className={classes.container}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Portfolio
      </Typography>
      <Grid container justify="center">
      {/* Map through the profile data to create grids */}
        {profileData &&
          profileData.length > 0 &&
          profileData.map(({ id, project, info, photo }, index) => (
            <>
              <Grid item xs={12} sm={8} md={6} key={id}>
                <Card className={classes.cards}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Project"
                      height="140"
                      src={photo.default}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5">
                        {project}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {info}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </>
          ))}
      </Grid>
    </Box>
  );
}
