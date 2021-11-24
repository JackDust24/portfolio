import { createTheme } from "@material-ui/core/styles";

const zibbyPurple = "#14279B";
const zibbyRubyRed = "#9A031E";
const zibbyGrey = "#CED3DC";
const zibbySnow = "#FCF7F8";
const zibbyWildBlue = "#ABA9C3";
const zibbyPink = "#EA526F";

export default createTheme({

    palette: {
        common: {
          purple: zibbyPurple,
          pink: zibbyPink
        },
        primary: {
          main: zibbyPurple
        },
        secondary: {
          main: zibbyWildBlue
        }
      },
      typography: {
        tab: {
          fontFamily: "Raleway",
          textTransform: "none",
          fontWeight: 700,
          color: "white",
          fontSize: "1rem"
        },
        login: {
          fontFamily: "Pacifico",
          fontSize: "1rem",
          textTransform: "none",
          color: "white"
        },
        h2: {
          fontFamily: "Raleway",
          fontWeight: 700,
          fontSize: "2.5rem",
          color: zibbyPurple,
          lineHeight: 1.5
        },
        h3: {
          fontFamily: "Pacifico",
          fontSize: "2.5rem",
          color: zibbyPurple
        },
        h4: {
          fontFamily: "Raleway",
          fontSize: "1.75rem",
          color: zibbyPurple,
          fontWeight: 700
        },
        h6: {
          fontWeight: 500,
          fontFamily: "Raleway",
          color: zibbyPurple
        },
        subtitle1: {
          fontSize: "1.25rem",
          fontWeight: 300,
          color: zibbyGrey
        },
        subtitle2: {
          color: "white",
          fontWeight: 300,
          fontSize: "1.25rem"
        },
        body1: {
          fontSize: "1.25rem",
          color: zibbyGrey,
          fontWeight: 300
        },
        caption: {
          fontSize: "1rem",
          fontWeight: 300,
          color: zibbyGrey
        },
        learnButton: {
          borderColor: zibbyPurple,
          borderWidth: 2,
          textTransform: "none",
          color: zibbyPurple,
          borderRadius: 50,
          fontFamily: "Roboto",
          fontWeight: "bold"
        }
      },

})