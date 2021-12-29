import { makeStyles } from "@material-ui/core/styles";
// import { getMinMediaQuery } from "@styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        color: "#FFFFFF",
        fontWeight: 100,
        fontSize: theme.spacing(1),
        [theme.breakpoints.up("lg")]: {},
        "& a": {
          color: "#FFFFFF",
          textDecoration: "none",
          "& svg": {
            fill: "rgb(204, 255, 0)!important",
          },
          [theme.breakpoints.up("lg")]: {
            color: "#FFFFFF",
          },
        },
      },
    };
  })();
  return styles;
};
