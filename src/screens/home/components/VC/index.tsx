import React from 'react';
// import { useTranslation } from "i18n";
import { Box, Typography, useTheme } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { useGetScreenSizeHook } from '@hooks';
import { CustomTheme } from '@styles';
import { CardGrid } from './components';
import { useStyles } from './styles';
import ArrowIcon from '@assets/icon-arrow.svg';

const VC = () => {
  const { t, lang } = useTranslation('common');
  const classes = useStyles();
  const theme: CustomTheme = useTheme();
  const { isDesktop } = useGetScreenSizeHook();
  return (
    <div className={classes.root}>
      <Typography
        variant="h1"
        style={{
          color: theme.palette.custom.basic.white,
          fontWeight: 600,
          fontSize: isDesktop ? theme.spacing(10) : theme.spacing(5),
        }}
      >
        We are not only a{' '}
        <Box
          component="span"
          fontWeight="fontWeightBold"
          style={{ color: theme.palette.custom.general.main }}
        >
          VC
        </Box>
      </Typography>
      <Typography variant="body1">
        We may not be able to bring you to Sand Hill Road. We may not be able to
        improve your elevator pitch. We may not be able to teach you how to
        draft your termsheet. But we can do what an ordinary VC cannot do. We
        are special in these ways:
      </Typography>

      <Box className="cardGrid">
        <CardGrid />
      </Box>
    </div>
  );
};

export default VC;
