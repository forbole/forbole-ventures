import React from "react";
import classnames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { List, ListItem, ListItemText } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import { useStyles } from "./styles";
import { getMenuItems } from "./utils";

const MenuItems = (props: { toggleNavMenus: () => void }) => {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation("common");
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
          <Link href={x.url} key={x.key} passHref>
            <ListItem
              button
              className={classnames(classes.root, {
                active: isActive,
              })}
              component="a"
              onClick={toggleNavMenus}
            >
              <ListItemText primary={t(x.key)} />
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};

export default MenuItems;
