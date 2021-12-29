import React from "react";
import Link from "next/link";
import { useStyles } from "./styles";
import DesmosLogo from "@assets/desmos.svg";
import VenturesLogo from "@assets/forbole-ventures.svg";

const Desktop: React.FC<{
  logoURL: string;
  className?: string;
}> = ({ className, logoURL }) => {
  const classes = useStyles();
  return (
    <div className={className}>
      <div className={classes.root}>
        <Link href={logoURL}>
          <a className={classes.a}>
            <VenturesLogo className={classes.logo} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Desktop;
