import React from "react";
// import { useTranslation } from "i18n";
import { useGetScreenSizeHook } from "@hooks";
import IBCIcon from "@assets/ibc.svg";
import EcoIcon from "@assets/eco.svg";
import useTranslation from "next-translate/useTranslation";
import { useStyles } from "./styles";
import {
  Box,
  Card,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@material-ui/core";
import { CustomTheme } from "@src/styles";

const InfoCard = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { isDesktop } = useGetScreenSizeHook();
  const theme: CustomTheme = useTheme();
  return (
    <Box className="solutionGrid">
      <Card className={classes.root}>
        {/* <HeroSlogan className="hero__slogan" /> */}
        <IBCIcon />
        <div className="card__content">
          {/* <h3>{title}</h3>
        <p>{details}</p> */}
          <Typography>
            IBC-enabled projects which use{" "}
            <Box component="span" fontWeight="fontWeightBold">
              <a
                href="https://www.desmos.network/"
                target="_blank"
                rel="noreferrer"
              >
                Desmos Profiles
              </a>
            </Box>
            as their user profiles
          </Typography>
        </div>
      </Card>
      <Card className={classes.root}>
        {/* <HeroSlogan className="hero__slogan" /> */}
        <EcoIcon />
        <div className="card__content">
          {/* <h3>{title}</h3>
        <p>{details}</p> */}
          <Typography
            style={{
              padding: isDesktop ? theme.spacing(1, 0) : theme.spacing(3, 0),
              fontWeight: 700,
              color: isDesktop ? "#CCFF00" : "#FFFFFF",
            }}
            variant="h2"
          >
            Cosmos / Flow / Oasis / Polkadot / Solana
          </Typography>
          <Typography variant="h4">ecosystem projects</Typography>
        </div>
      </Card>
    </Box>
  );
};

export default InfoCard;
