import { makeStyles } from "@material-ui/core/styles";
import { FullscreenExit } from "@material-ui/icons";
import { getMinMediaQuery } from "@styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        color: "#FFFFFF",
        fontWeight: 100,
        "& h1": {
          fontWeight: 900,
        },
        "& h2": {
          fontSize: theme.spacing(3),
        },
        "& ul": {
          display: "flex",
          flexDirection: "column",
          margin: theme.spacing(4, 0),
          [theme.breakpoints.up("lg")]: {
            flexDirection: "row",
          },
        },
        "& li": {
          display: "flex",
          flexDirection: "column",
          padding: theme.spacing(3),
        },
        "& hr": {
          backgroundColor: "rgba(234, 255, 148, 0.3)",
        },
        "& .intro__content": {
          // display: "flex",
          // flexDirection: "row",
          // alignItems: "center",
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gridGap: theme.spacing(5),
          padding: theme.spacing(8, 1),
          // "& svg": {
          //   margin: "0 0.1rem",
          //   width: "14px",
          //   height: "14px",
          //   [theme.breakpoints.up("lg")]: { width: "20px", height: "20px" },
          // },
          "& h3": {
            // color: theme.palette.custom.general.icon,
            fontWeight: "700",
            color: "rgba(59, 60, 36, 1)",
            fontSize: theme.spacing(3),
            [theme.breakpoints.up("lg")]: {
              fontSize: theme.spacing(4),
              paddingBottom: theme.spacing(2),
            },
          },
        },
        " & p": {
          fontSize: theme.spacing(2),
          fontWeight: 300,
          letterSpacing: "0em",
          textAlign: "left",
          // padding: theme.spacing(1.5, 1),
        },
        "& .image-container": {
          width: "280px",
          [theme.breakpoints.up("lg")]: {
            width: "650px",
          },
          "& div": {
            position: "unset !important",
          },
          "& .image": {
            objectFit: "contain",
            // borderadius: 0.1rem;
            width: "100% !important",
            position: "relative !important",
            height: "85px !important",
          },
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: "1200px",
          "& .bigH1": {
            fontSize: theme.spacing(9),
          },
          "& h2": {
            fontSize: theme.spacing(5),
          },
          "& .intro": {
            fontSize: theme.spacing(3),
          },
        },
      },
    };
  })();
  return styles;
};
