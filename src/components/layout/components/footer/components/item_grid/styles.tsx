import { makeStyles } from "@material-ui/core/styles";
// import { getMinMediaQuery } from "@styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        color: "#FFFFFF",
        fontWeight: 100,
        fontSize: theme.spacing(1),
        [theme.breakpoints.up("lg")]: {
          flexDirection: "row",
          alignItems: "center",
        },
        "& a": {
          color: "#FFFFFF",
          textDecoration: "none",
          [theme.breakpoints.up("lg")]: {
            color: "#FFFFFF",
          },
        },
      },
    };
  })();
  return styles;
};
