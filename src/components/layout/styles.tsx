import { makeStyles, createStyles } from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    return createStyles({
      root: {
        backgroundImage: "url('/images/background-mobile.svg')",
        backgroundSize: 'cover',
        backgroundPosition: '0% -250px',
        backgroundRepeat: 'no-repeat',
        // backgroundSize: "100%",
        [theme.breakpoints.up('md')]: {
          backgroundPosition: '0% -900px',
          backgroundSize: 'cover',
        },
        [theme.breakpoints.up('lg')]: {
          backgroundImage: "url('/images/background-desktop.svg')",
          justifyContent: 'flex-start',
          backgroundPosition: '0% -400px',
          backgroundSize: 'cover',
        },
        '& .nav__container': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          width: '100%',
        },
        '& .nav__logo': {
          width: '180px',
        },
        '& .socials__container': {
          position: 'fixed',
          zIndex: 1,
          bottom: theme.spacing(1),
          right: theme.spacing(1),
          [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
            bottom: theme.spacing(3),
            right: theme.spacing(3),
          },
          '& .social-media': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            '& .media': {
              margin: '0!important' as string,
              padding: '0.3rem 0rem',
              '& path': {
                transition: 'all 0.3s ease',
                fill: 'rgba(204, 255, 0, 1)!important',
              },
            },
          },
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {},
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {},
    });
  });
  return {
    classes: useStyles(),
  };
};
