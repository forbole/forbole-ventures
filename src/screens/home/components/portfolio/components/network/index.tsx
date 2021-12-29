import React from "react";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  Typography,
  useTheme,
} from "@material-ui/core";
import ArrowIcon from "@assets/icon-arrow.svg";
import { useGetScreenSizeHook } from "@hooks";

export interface INetworkProps {
  image: any;
  name: string;
  why?: string;
}

const Network = (props: INetworkProps) => {
  const { isDesktop } = useGetScreenSizeHook();
  const { image, name, why } = props;
  const Svg = image;
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Avatar
        // height={isDesktop ? "120px" : "40px"}
        style={{
          backgroundColor: "rgba(199, 190, 190, 0.1)",
          width: "80px",
          height: "80px",
          boxShadow:
            "inset 92.6067px 92.6067px 77.944px rgba(51, 51, 51, 0.19), inset -15.4344px -15.4344px 38.5861px rgba(32, 32, 32, 0.7), inset -38.5861px -38.5861px 54.0206px rgba(0, 0, 0, 0.06), inset -7.71722px -3.85861px 22.38px rgba(0, 0, 0, 0.04), inset 38.5861px 38.5861px 54.0206px rgba(255, 255, 255, 0.25)",
        }}
      >
        {image !== null && <Svg />}
      </Avatar>
      <Typography
        variant="body1"
        style={{ fontWeight: 800, paddingTop: "0.5rem" }}
      >
        {name}
      </Typography>
      {why && (
        <Box display="flex" flexDirection="row" alignItems="center" pt="0.1rem">
          <Typography
            variant="body2"
            style={{ fontWeight: 200, paddingRight: "0.1rem" }}
          >
            See Why
          </Typography>
          <ArrowIcon fill="#FFFFFF" height="1rem" width="1rem" />
        </Box>
      )}
    </Box>
  );
};

export default Network;
