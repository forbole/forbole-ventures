import React from "react";
import Link from "next/link";
import { Box, useTheme } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import { Logo, ItemGrid, Contact, Community } from "./components";
import { SocialMedia } from "@components";
import { companyItems, productItems } from "./utils";
import { useGetStyles } from "./styles";
import { useGetScreenSizeHook } from "@hooks";
import { CustomTheme } from "@src/styles";

const Footer: React.FC<{
  baseURL: string;
}> = ({ baseURL }) => {
  const { t } = useTranslation("common");
  const { isDesktop } = useGetScreenSizeHook();
  const { classes } = useGetStyles();
  const theme: CustomTheme = useTheme();

  // ============================
  // Footer
  // ============================
  const year = new Date().getFullYear();

  return (
    <Box
      className={`${classes.root} footer`}
      mt={isDesktop && theme.spacing(2)}
    >
      <Box className="footer__content">
        {/* ============================= */}
        {/* logo */}
        {/* ============================= */}
        <Box pb={isDesktop ? 0 : theme.spacing(0.5)}>
          <Logo />
        </Box>
        {/* ============================= */}
        {/* links */}
        {/* ============================= */}
        {/* <div className="footer__desktop">
          <div className="footer__links">
            {footerItems.map((link) => {
              return (
                <div key={link.key} className={`${link.key} links__group`}>
                  <Link key={link.url} href={baseURL + link.url}>
                    <a>{t(`${link.key}`)}</a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div> */}
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          pb={isDesktop ? 0 : theme.spacing(0.5)}
        >
          {/* {footerItems.map((item, i) => {
            return (
              <ItemGrid
                key={i}
                header={item.header}
                name={item.key}
                url={item.url}
              />
            );
          })} */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            pr={isDesktop ? theme.spacing(1) : 0}
          >
            {companyItems.map((item, i) => {
              return (
                <ItemGrid
                  key={i}
                  header={item.header}
                  name={item.key}
                  url={item.url}
                />
              );
            })}
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            {productItems.map((item, i) => {
              return (
                <ItemGrid
                  key={i}
                  header={item.header}
                  name={item.key}
                  url={item.url}
                />
              );
            })}
          </Box>
        </Box>
        {/* ============================= */}
        {/* social */}
        {/* ============================= */}
        <Box className="footer__social" pb={isDesktop ? 0 : theme.spacing(0.5)}>
          {/* <h3>{t("community")}</h3> */}
          {/* <SocialMedia /> */}
          <Contact />
          {/* ============================= */}
          {/* copyright */}
          {/* ============================= */}
        </Box>
        <Box pb={isDesktop ? 0 : theme.spacing(0.5)}>
          <Community />
        </Box>
      </Box>
      <Box
        className="footer__copyright"
        style={{ textAlign: isDesktop ? "left" : "center" }}
      >
        <p>
          {t("copyright")} {year}
        </p>
      </Box>
    </Box>
  );
};

export default Footer;
