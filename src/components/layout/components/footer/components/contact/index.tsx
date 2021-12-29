import React from "react";
import { Box, Typography, useTheme } from "@material-ui/core";
import { useStyles } from "./styles";
import { SocialMedia } from "@src/components";
import { CustomTheme } from "@src/styles";
import { socialMediaLinks } from "./utils";

const Contact = () => {
  const classes = useStyles();
  const theme: CustomTheme = useTheme();
  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <Typography
        variant="body1"
        style={{ color: theme.palette.custom.general.main, fontWeight: 900 }}
      >
        Contact
      </Typography>
      <SocialMedia utils={socialMediaLinks} />
    </Box>
  );
};

export default Contact;
