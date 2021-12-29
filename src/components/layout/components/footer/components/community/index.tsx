import React from "react";
import { Box, Button, Typography, useTheme } from "@material-ui/core";
import ArrowIcon from "@assets/icon-arrow.svg";
import { useStyles } from "./styles";
import { SocialMedia } from "@src/components";
import { CustomTheme } from "@src/styles";

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
        Community
      </Typography>
      <Typography
        variant="body1"
        style={{ color: theme.palette.custom.basic.white }}
      >
        Want to get updates on Forbole?
      </Typography>
      <Button
        variant="contained"
        style={{
          backgroundColor: theme.palette.custom.general.main,
          color: theme.palette.custom.basic.black,
        }}
        endIcon={
          <ArrowIcon
            height={theme.spacing(2)}
            width={theme.spacing(2)}
            fill={theme.palette.custom.basic.black}
          />
        }
      >
        <a
          href={"subscribelink"}
          target="_blank"
          rel="noreferrer"
          style={{ color: theme.palette.custom.basic.black }}
        >
          Subscribe
        </a>
      </Button>
    </Box>
  );
};

export default Contact;
