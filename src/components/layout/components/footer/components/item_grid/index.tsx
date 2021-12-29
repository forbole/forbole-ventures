import React from "react";
import useTranslation from "next-translate/useTranslation";
import { Box, Typography, useTheme } from "@material-ui/core";
import { useStyles } from "./styles";
import { CustomTheme } from "@src/styles";
import FooterLogo from "@assets/forbole-ventures.svg";

export interface ItemsGridProps {
  header?: string;
  name?: string;
  url?: string;
}

const ItemGrid = (props: ItemsGridProps) => {
  const { t, lang } = useTranslation("common");
  const { header, name, url } = props;
  const theme: CustomTheme = useTheme();
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {header && (
        <Typography
          variant="body1"
          style={{ color: theme.palette.custom.general.main, fontWeight: 900 }}
        >
          {t(header)}
        </Typography>
      )}
      {name && (
        <Typography
          variant="body1"
          style={{ color: theme.palette.custom.basic.white }}
        >
          <a href={url} target="_blank" rel="noreferrer">
            {t(name)}
          </a>
        </Typography>
      )}
    </Box>
  );
};

export default ItemGrid;
