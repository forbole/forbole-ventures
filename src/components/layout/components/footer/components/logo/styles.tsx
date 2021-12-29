import { makeStyles } from "@material-ui/core/styles";
import { FullscreenExit } from "@material-ui/icons";
import { getMinMediaQuery } from "@styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        color: "#FFFFFF",
        fontWeight: 100,
        "& h6": {
          fontSize: theme.spacing(1),
          paddingTop: theme.spacing(2),
          [theme.breakpoints.up("lg")]: { fontSize: theme.spacing(1.5) },
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: "1200px",
        },
      },
    };
  })();
  return styles;
};
