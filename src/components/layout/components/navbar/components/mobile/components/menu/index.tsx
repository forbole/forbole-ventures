import React from "react";
import classnames from "classnames";
import Link from "next/link";
import { Drawer, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "@hooks";
// import { useSettingsContext } from "@contexts";
// import Language from "@assets/icon-language.svg";
import { useStyles } from "./styles";
import { MenuItems } from "../../..";
import { useLanguageDrawer } from "./hooks";
import { MenuProps } from "./types";

const Menu = (props: MenuProps) => {
  const router = useRouter();
  const { t, lang } = useTranslation();
  // const { theme, themeList, changeTheme } = useSettingsContext();

  const { toggleNavMenus, className } = props;
  const classes = useStyles();
  const languageOptions = useLanguageDrawer();
  // const themeOptions = useThemeDrawer(theme, toggleNavMenus);
  return (
    <>
      {/* ================================== */}
      {/* Lang Drawer */}
      {/* ================================== */}
      <Drawer
        anchor="bottom"
        open={languageOptions.drawerOpen}
        onClose={languageOptions.toggleDrawer}
        className={classnames(classes.drawer, "lang-drawer")}
      >
        <div className={classnames("content")}>
          {router.locales
            ?.filter(Boolean)
            .filter((l) => l !== lang)
            .map((l) => (
              <div key={l}>
                <Link
                  href={{
                    pathname: router.pathname,
                    query: router.query,
                  }}
                  locale={l}
                  passHref
                >
                  <MenuItem
                    component="a"
                    onClick={languageOptions.closeDrawer}
                  >
                    {t(l)}
                  </MenuItem>
                </Link>
              </div>
            ))}
          {/* </Select> */}
        </div>
      </Drawer>
      {/* ================================== */}
      {/* Theme Drawer */}
      {/* ================================== */}
      {/* <Drawer
        anchor="bottom"
        open={themeOptions.drawerOpen}
        onClose={themeOptions.toggleDrawer}
        className={classes.drawer}
      >
        <div className={classnames("content")}>
          {themeList
            .filter((l) => l !== theme)
            .map((l) => (
              <div key={l}>
                <MenuItem button component="a" onClick={() => changeTheme(l)}>
                  {t(l)}
                </MenuItem>
              </div>
            ))}
        </div>
      </Drawer> */}
      {/* ================================== */}
      {/* Main Content */}
      {/* ================================== */}
      <div className={classnames(className, classes.root)}>
        <div className={classes.menu}>
          <MenuItems toggleNavMenus={toggleNavMenus} />
        </div>
        {/* ========================= */}
        {/* Footer Actions */}
        {/* ========================= */}
        {/* <div className={classes.footerActions}>
          <div
            className={classes.language}
            role="button"
            onClick={languageOptions.toggleDrawer}
          >
            {/* <Language /> */}
        {/* <Typography variant="caption">{t(router.locale)}</Typography>
            <ExpandMoreOutlined fontSize="small" />
          </div>
          {/* <div
            className={classes.theme}
            role="button"
            onClick={themeOptions.toggleDrawer}
          >
            <span role="button">
              <ThemeIcon />
            </span>
            <Typography variant="caption">{t(theme)}</Typography>
          </div> */}
      </div>
    </>
  );
};

export default Menu;
