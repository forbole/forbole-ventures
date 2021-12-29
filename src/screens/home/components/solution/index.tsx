import React from "react";
// import { useTranslation } from "i18n";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import { useGetScreenSizeHook } from "@hooks";
import { CustomTheme } from "@styles";
import { InfoCard } from "./components";
import { useStyles } from "./styles";
import ArrowIcon from "@assets/icon-arrow.svg";

const Solution = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const theme: CustomTheme = useTheme();
  const { isDesktop } = useGetScreenSizeHook();
  return (
    <div className={classes.root}>
      <Typography
        variant="h1"
        style={{
          color: theme.palette.custom.general.main,
          fontWeight: 900,
          fontSize: isDesktop ? theme.spacing(10) : theme.spacing(5),
        }}
      >
        PREFERENCE
      </Typography>
      <p>{t("preferenceP")}</p>

      <div className="hero__content">
        <a
          href="/files/desmos-project-plan-v0.4.2.pdf"
          target="_blank"
          rel="noreferrer"
        >
          {/* <h4>{t("learnMore")}</h4>
          <ArrowIcon className="arrow__icon" />{" "} */}
        </a>
      </div>

      <div>
        <InfoCard />
      </div>
    </div>
  );
};

export default Solution;
