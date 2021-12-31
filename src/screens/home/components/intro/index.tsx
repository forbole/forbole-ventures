import React from "react";
import Image from "next/image";
import {
  Box,
  Divider,
  List,
  ListItem,
  Typography,
  useTheme,
} from "@material-ui/core";
import { useGetScreenSizeHook } from "@hooks";
import { CustomTheme } from "@styles";
import useTranslation from "next-translate/useTranslation";
import { useStyles } from "./styles";
import CountUp from "react-countup";
import LeftDotIcon from "@assets/intro-left-dot.svg";
import RightDotIcon from "@assets/intro-right-dot.svg";

const Intro = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const theme: CustomTheme = useTheme();
  const { isDesktop } = useGetScreenSizeHook();
  return (
    <div className={classes.root}>
      {/* <IntroSlogan className="intro__slogan" /> */}
      {/* <img src=/> */}
      {/* {isDesktop ? (
        // <IntroDesktop className="dp" />
        <div className="image-container">
          <Image
            src="/images/intro-slogan-desktop.png"
            alt="Feature Image"
            className="image"
            layout="fill"
          />
        </div>
      ) : (
        <div className="image-container">
          <Image
            src="/images/intro-slogan.png"
            alt="Feature Image"
            className="image"
            layout="fill"
          />
        </div>
      )} */}
      <Typography
        variant="h2"
        // style={{
        //   paddingBottom: isDesktop ? theme.spacing(1.5) : 0,
        // }}
      >
        Invest in people who build the
      </Typography>
      <Typography
        variant="h1"
        className="bigH1"
        style={{
          color: theme.palette.custom.general.main,
          fontSize: isDesktop ? theme.spacing(10) : theme.spacing(5),
        }}
      >
        NEW GENERATION INTERNET
      </Typography>
      <p className="intro">{t("intro")}</p>
      <List
        style={{
          backgroundColor: "rgba(199, 190, 190, 0.1)",
          boxShadow:
            "inset 120px 120px 101px rgba(51, 51, 51, 0.19), inset -20px -20px 50px rgba(32, 32, 32, 0.7), inset -50px -50px 70px rgba(0, 0, 0, 0.06), inset -10px -5px 29px rgba(0, 0, 0, 0.04), inset 50px 50px 70px rgba(255, 255, 255, 0.25)",
          borderRadius: theme.spacing(1),
        }}
      >
        <ListItem>
          {/* <ListItemText primary="11" secondary="Startups Funded" /> */}
          <Typography
            variant="h1"
            // style={{ color: theme.palette.custom.general.main }}
          >
            <CountUp duration={5} end={11} />
          </Typography>
          <Typography
            variant="body1"
            style={{ color: theme.palette.custom.basic.white }}
          >
            Startups Funded
          </Typography>
        </ListItem>
        <Divider
          variant="middle"
          orientation={isDesktop ? "vertical" : "horizontal"}
          flexItem={isDesktop ? true : undefined}
        />
        <ListItem>
          {/* <ListItemText primary="11" secondary="Startups Funded" /> */}
          <Typography
            variant="h1"
            // style={{ color: theme.palette.custom.general.main }}
          >
            $
            <CountUp duration={20} end={40} />
            M+
          </Typography>
          <Typography
            variant="body1"
            style={{ color: theme.palette.custom.basic.white }}
          >
            Net Asset
          </Typography>
        </ListItem>
        <Divider
          variant="middle"
          orientation={isDesktop ? "vertical" : "horizontal"}
          flexItem={isDesktop ? true : undefined}
        />
        <ListItem>
          {/* <ListItemText primary="11" secondary="Startups Funded" /> */}
          <Typography
            variant="h1"
            // style={{ color: theme.palette.custom.general.main }}
          >
            $
            <CountUp duration={20} end={939} />M +
          </Typography>
          <Typography
            variant="body1"
            style={{ color: theme.palette.custom.basic.white }}
          >
            Tokens staked with{" "}
            <Box component="span" fontWeight="fontWeightBold">
              Forbole
            </Box>
          </Typography>
        </ListItem>
      </List>

      {/* <div className="intro__content">
        <div className="intro__left__content">
          <LeftDotIcon className="dot__icon" />
          <h3>{t("privacyIssue")}</h3>
          <p>{t("leftIntro")}</p>
        </div>
        <div className="intro__right__content">
          <RightDotIcon className="dot__icon" />
          <h3>{t("censorship")}</h3>
          <p>{t("rightIntro")}</p>
          {/* <ArrowIcon className="arrow__icon" /> */}
      {/* </div> */}
      {/* </div>  */}
    </div>
  );
};

export default Intro;
