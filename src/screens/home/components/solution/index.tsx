import {
  Box,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import { useGetScreenSizeHook, useTranslation } from "@hooks";
import { CustomTheme } from "@styles";
import { InfoCard } from "./components";
import { useStyles } from "./styles";

const Solution = () => {
  const { t } = useTranslation();
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
      <Box display="flex" flexDirection="row">
        <Divider
          orientation="vertical"
          style={{
            backgroundColor: theme.palette.custom.general.main,
            height: theme.spacing(2),
          }}
        />
        <Typography
          variant="body2"
          style={{
            fontSize: theme.spacing(1.5),
            padding: 0,
            paddingLeft: theme.spacing(0.5),
          }}
        >
          These are all for reference only and decisions will be made on a
          case-by-case basis.
        </Typography>
      </Box>
    </div>
  );
};

export default Solution;
