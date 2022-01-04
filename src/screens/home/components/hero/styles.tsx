import { makeStyles } from "@material-ui/core/styles";
import { getMinMediaQuery } from "@styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        color: "#FFFFFF",
        fontWeight: 100,
        "& h1": {
          fontWeight: 900,
          textShadow: "1px 0 #CCFF00",
          letterSpacing: "1px",
        },
        "& .hero__content": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          "& svg": {
            margin: "0 0.1rem",
            width: "14px",
            height: "14px",
            [theme.breakpoints.up("lg")]: {
              margin: "0 0.7rem",
              width: "20px",
              height: "20px",
            },
          },
        },
        " & p": {
          fontSize: theme.spacing(2),
          fontWeight: 300,
          letterSpacing: "0em",
          textAlign: "left",
          padding: theme.spacing(1.5, 0),
          "& h4": {
            color: theme.palette.custom.general.icon,
          },
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: "1200px",
          width: "100%",
          "& h2": {
            fontSize: theme.spacing(9),
          },
          "& h1": {
            fontSize: theme.spacing(9),
            textShadow: "2px 0 #CCFF00",
            letterSpacing: "2px",
            fontWeight: "bold",
          },
          "& p": {
            fontSize: theme.spacing(2.5),
            fontWeight: 300,
            letterSpacing: "0em",
            textAlign: "left",
            width: "100%",
            "& h4": {
              color: theme.palette.custom.general.icon,
              fontSize: theme.spacing(3),
            },
          },
        },
      },
    };
  })();
  return styles;
};
