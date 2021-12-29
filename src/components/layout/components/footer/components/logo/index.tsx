import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import FooterLogo from "@assets/forbole-ventures.svg";

const Logo = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <FooterLogo />
      <Typography variant="subtitle1">
        LET&apos;S BUILD THE DECENTRALIZED FUTURE
      </Typography>
    </Box>
  );
};

export default Logo;
