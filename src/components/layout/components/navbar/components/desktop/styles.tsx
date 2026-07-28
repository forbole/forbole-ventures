import { makeStyles } from "@mui/styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: { width: "1200px" },
      logo: {
        width: theme.spacing(17),
        "&:hover": {
          cursor: "pointer",
        },
      },
      a: {
        lineHeight: 0,
        zIndex: 200,
      },
    };
  })();

  return styles;
};
