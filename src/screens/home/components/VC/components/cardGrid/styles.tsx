import { makeStyles } from "@material-ui/core/styles";
// import { getMinMediaQuery } from "@styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      grid: {
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gridGap: theme.spacing(5),
        padding: theme.spacing(1.5, 1),
        [theme.breakpoints.up("lg")]: {
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "repeat(2, 1fr)",
          "& .box1": {
            gridRow: "1 / span 1",
            gridColumn: "1 / span 1",
          },
          "& .box2": {
            gridRow: "2 / span 1",
            gridColumn: "1 / span 1",
          },
          "& .box3": {
            gridRow: "1 / span 2",
            gridColumn: "2 / span 1",
          },
        },
      },
      root: {
        color: "#FFFFFF",
        fontWeight: 100,
        backgroundColor: "rgba(199, 190, 190, 0.1)",
        boxShadow:
          "inset 120px 120px 101px rgba(51, 51, 51, 0.19), inset -20px -20px 50px rgba(32, 32, 32, 0.7), inset -50px -50px 70px rgba(0, 0, 0, 0.06), inset -10px -5px 29px rgba(0, 0, 0, 0.04), inset 50px 50px 70px rgba(255, 255, 255, 0.25)",
        borderRadius: theme.spacing(2),
        padding: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        [theme.breakpoints.up("lg")]: {
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        "& a": {
          color: "#FFFFFF",
          [theme.breakpoints.up("lg")]: {
            color: "#CCFF00",
          },
        },
        " & svg": {
          [theme.breakpoints.up("lg")]: { width: "100%" },
        },
        " & .card__content": {
          [theme.breakpoints.up("lg")]: {
            width: "100%",
            paddingLeft: theme.spacing(2),
          },
        },
        " & p": {
          padding: theme.spacing(3, 0, 0),
          fontSize: theme.spacing(2),
          fontWeight: 300,
          letterSpacing: "0em",
          textAlign: "center",
          [theme.breakpoints.up("lg")]: {
            fontSize: theme.spacing(2.5),
            paddingBottom: theme.spacing(2),
          },
        },
        "& h3": {
          // color: theme.palette.custom.general.icon,
          fontWeight: "700",
          color: "rgba(59, 60, 36, 1)",
          padding: theme.spacing(3, 0, 0),
          fontSize: theme.spacing(3),
          [theme.breakpoints.up("lg")]: {
            fontSize: theme.spacing(3),
            paddingBottom: theme.spacing(2),
          },
        },
        "& .solutionGrid": {
          //   display: "block",
          //   height: "70vh",
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gridGap: theme.spacing(5),
          padding: theme.spacing(1.5, 1),
          [theme.breakpoints.up("lg")]: {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
        },
      },
    };
  })();
  return styles;
};
