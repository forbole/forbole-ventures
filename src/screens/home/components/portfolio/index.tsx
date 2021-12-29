import React from "react";
// import { useTranslation } from "i18n";
import { Box, Typography, useTheme } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import { useGetScreenSizeHook } from "@hooks";
import { CustomTheme } from "@styles";
import { Network } from "./components";
import { useStyles } from "./styles";
import { networkItems } from "./utils";
import ArrowIcon from "@assets/icon-arrow.svg";

const Portfolio = () => {
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
        PORTFOLIO
      </Typography>
      <p>{t("portfolioP")}</p>

      <Box className="link">
        <a
          href="/files/desmos-project-plan-v0.4.2.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <Typography style={{ fontWeight: 800 }} variant="h4">
            See Staking Portfolio
          </Typography>
          <ArrowIcon
            fill="#CCFF00"
            height="1rem"
            width="1rem"
            style={{ paddingLeft: "0.2rem" }}
          />
        </a>
      </Box>

      <Box className="networkGrid">
        {networkItems.map((item, i) => (
          <Network key={i} image={item.image} name={item.name} why={item.why} />
        ))}
      </Box>
    </div>
  );
};

export default Portfolio;
