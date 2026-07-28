import { alpha } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          background: theme?.palette?.background.paper,
          // background: "transparent",
          display: 'flex',
          flexDirection: 'column',
        },
        menu: {
          flex: '1',
          '& ul': {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }
        },
        footerActions: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '1rem',
        },
        language: {
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          '& .MuiTypography-caption': {
            margin: '0 0.3rem',
          },
        },
        theme: {
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          '& svg': {
            width: theme.spacing(3),
            height: theme.spacing(3),
          },
          '& .MuiTypography-caption': {
            margin: '0 0.3rem',
          },
        },
        drawer: {
          background: alpha(theme.palette.background.paper, 0.5),
        },
      });
    },
  )();

  return styles;
};
