import { makeStyles } from "@material-ui/core/styles";
import { FullscreenExit } from "@material-ui/icons";
import { getMinMediaQuery } from "@styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        color: "#FFFFFF",
        fontWeight: 100,
        "& p": {
          fontSize: theme.spacing(2),
          [theme.breakpoints.up("lg")]: { fontSize: theme.spacing(3) },
        },
        "& .networkGrid": {
          display: "grid",
          padding: theme.spacing(3, 0),
          gridGap: theme.spacing(3),
          gridTemplateColumns: "repeat(3, 1fr)",
          [theme.breakpoints.up("lg")]: {
            padding: theme.spacing(5, 0),
            gridTemplateColumns: "repeat(5, 1fr)",
          },
        },
        "& .link": {
          "& a": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          },
        },
        "& a": {
          color: "#CCFF00",
          textDecoration: "none",
          [theme.breakpoints.up("lg")]: {
            color: "#CCFF00",
          },
        },
        "& h1": {
          fontWeight: 900,
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: "1200px",
        },
      },
    };
  })();
  return styles;
};
