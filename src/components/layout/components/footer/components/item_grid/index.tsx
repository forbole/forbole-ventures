import React from "react";
import { useTranslation } from "@hooks";
import { Box, Typography, useTheme } from "@mui/material";
import { useStyles } from "./styles";
import { CustomTheme } from "@src/styles";

export interface ItemsGridProps {
  header?: string;
  name?: string;
  url?: string;
}

const ItemGrid = (props: ItemsGridProps) => {
  const { t } = useTranslation();
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
