import React from "react";
import classnames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { useTranslation } from "@hooks";
import { useStyles } from "./styles";
import { getMenuItems } from "./utils";

const MenuItems = (props: { toggleNavMenus: () => void }) => {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation();
  const items = getMenuItems();
  const { toggleNavMenus } = props;

  return (
    <List>
      {items.map((x) => {
        let isActive = false;
        if (x.url === router?.asPath) {
          isActive = true;
        }
        if (router?.asPath?.includes(x.url) && x.url !== "/") {
          isActive = true;
        }

        return (
          <ListItemButton
            component={Link}
            href={x.url}
            key={x.key}
            className={classnames(classes.root, {
              active: isActive,
            })}
            onClick={toggleNavMenus}
          >
            <ListItemText primary={t(x.key)} />
          </ListItemButton>
        );
      })}
    </List>
  );
};

export default MenuItems;
