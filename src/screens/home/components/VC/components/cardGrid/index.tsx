import React from "react";
// import { useTranslation } from "i18n";
import { useGetScreenSizeHook } from "@hooks";
import IBCIcon from "@assets/ibc.svg";
import EcoIcon from "@assets/eco.svg";
import ValidatorIcon from "@assets/validator.svg";
import ExplorerIcon from "@assets/explorer.svg";
import DiamondIcon from "@assets/diamond.svg";
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

const CardGrid = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { isDesktop } = useGetScreenSizeHook();
  const theme: CustomTheme = useTheme();
  return (
    <Box className={classes.grid}>
      <Card className={`${classes.root} box1`}>
        <ValidatorIcon
          width={isDesktop ? theme.spacing(20) : theme.spacing(11)}
          height={isDesktop ? theme.spacing(20) : theme.spacing(11)}
        />
        <Typography variant="body1" style={{ fontWeight: 900 }}>
          Build{" "}
          <Box
            component="span"
            fontWeight="fontWeightBold"
            style={{ color: theme.palette.custom.general.main }}
          >
            Early Validator Community
          </Box>
        </Typography>
        <Typography variant="body1">
          We are able to do so due to our track record as a validator and
          staking service provider.
        </Typography>
      </Card>
      <Card className={`${classes.root} box2`}>
        <ExplorerIcon
          width={isDesktop ? theme.spacing(20) : theme.spacing(11)}
          height={isDesktop ? theme.spacing(20) : theme.spacing(11)}
        />
        <Typography variant="body1" style={{ fontWeight: 900 }}>
          Develop{" "}
          <Box
            component="span"
            fontWeight="fontWeightBold"
            style={{ color: theme.palette.custom.general.main }}
          >
            Explorer{" "}
          </Box>
          <Box
            component="span"
            style={{ color: theme.palette.custom.basic.white }}
          >
            &amp;
          </Box>
          <Box
            component="span"
            fontWeight="fontWeightBold"
            style={{ color: theme.palette.custom.general.main }}
          >
            {" "}
            Wallets
          </Box>
        </Typography>
        <Typography variant="body1">
          We are the core team behind Big Dipper, which is an open-source block
          explorer forked for over 150 times.
        </Typography>
      </Card>
      <Card className={`${classes.root} box3`}>
        <DiamondIcon
          width={isDesktop ? theme.spacing(20) : theme.spacing(11)}
          height={isDesktop ? theme.spacing(20) : theme.spacing(11)}
        />
        <Typography variant="body1" style={{ fontWeight: 900 }}>
          Provide{" "}
          <Box
            component="span"
            fontWeight="fontWeightBold"
            style={{ color: theme.palette.custom.general.main }}
          >
            Useful Insights
          </Box>
          <Box
            component="span"
            style={{ color: theme.palette.custom.basic.white }}
          >
            {" "}
            Into Launching Your Projects
          </Box>
        </Typography>
        <Typography variant="body1">
          We are experienced as a genesis validator in various projects which
          include{" "}
          <Box
            component="span"
            fontWeight="fontWeightBold"
            style={{ color: theme.palette.custom.basic.white }}
          >
            Akash, Cosmos Hub, Band Protocol, e-Money, Flow, Kava, Oasis, Regen
            Network, Solana, Starname, Terra
          </Box>{" "}
          and more.
        </Typography>
      </Card>
    </Box>
  );
};

export default CardGrid;
