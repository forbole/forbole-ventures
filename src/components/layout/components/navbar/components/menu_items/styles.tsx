import { makeStyles } from '@mui/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .MuiListItemIcon-root': {
            minWidth: '48px',
          },
          '&.MuiListItem-gutters': {
            padding: theme.spacing(2, 2.5),
          },
          '& .MuiListItemText-root': {
            color: theme.palette.custom.general.icon,
          },
          '&.active': {
            background: theme.palette.action.selected,
            '& .MuiListItemIcon-root': {
              '& svg': {
                fill: theme?.palette?.primary?.main,
              },
            },
            '& .MuiListItemText-root': {
              color: theme.palette.primary.main,
            },
          },
        },
      });
    }, { index: 1 },
  )();

  return styles;
};
