import React from "react";
// import { useTranslation } from "i18n";
import { Box, Typography, useTheme } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import { Layout, SocialMedia } from "@components";
import { useStyles } from "./styles";
import { CustomTheme } from "@styles";
import { useGetScreenSizeHook } from "@hooks";
import HeroSlogan from "@assets/hero-slogan.svg";
import ArrowIcon from "@assets/icon-arrow.svg";

const Hero = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const theme: CustomTheme = useTheme();
  const { isDesktop } = useGetScreenSizeHook();
  return (
    <div className={classes.root}>
      {/* <HeroSlogan className="hero__slogan" /> */}
      <Typography
        variant="h2"
        style={{
          paddingBottom: isDesktop ? theme.spacing(1.5) : 0,
        }}
      >
        Let&apos;s Build The{" "}
      </Typography>
      <Box
        display="flex"
        flexDirection={isDesktop ? "row" : "column"}
        alignItems={isDesktop ? "center" : "flex-start"}
        pb={isDesktop ? theme.spacing(0.5) : 0}
      >
        <Typography
          variant="h1"
          style={{
            color: theme.palette.custom.general.main,
            fontWeight: 900,
          }}
        >
          DECENTRALIZED
        </Typography>
        <Typography
          variant="h2"
          style={{
            paddingLeft: isDesktop ? theme.spacing(1) : 0,
          }}
        >
          Future
        </Typography>
      </Box>
      <p>{t("hero")}</p>
    </div>
  );
};

export default Hero;
