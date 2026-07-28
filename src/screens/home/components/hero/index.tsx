import { Box, Typography, useTheme } from "@mui/material";
import { useStyles } from "./styles";
import { CustomTheme } from "@styles";
import { useGetScreenSizeHook, useTranslation } from "@hooks";

const Hero = () => {
  const { t } = useTranslation();
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
