import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import Image from "next/image";
import ArrowIcon from '@assets/icon-arrow.svg';
import { useGetScreenSizeHook } from '@hooks';

export interface INetworkProps {
  image: string | null;
  name: string;
  link?: string;
  why?: string;
}

const Network = (props: INetworkProps) => {
  const { isDesktop } = useGetScreenSizeHook();
  const { image, name, link, why } = props;
  const identity = (
    <>
      <Avatar
        style={{
          backgroundColor: 'rgba(199, 190, 190, 0.1)',
          width: '80px',
          height: '80px',
          boxShadow:
            'inset 92.6067px 92.6067px 77.944px rgba(51, 51, 51, 0.19), inset -15.4344px -15.4344px 38.5861px rgba(32, 32, 32, 0.7), inset -38.5861px -38.5861px 54.0206px rgba(0, 0, 0, 0.06), inset -7.71722px -3.85861px 22.38px rgba(0, 0, 0, 0.04), inset 38.5861px 38.5861px 54.0206px rgba(255, 255, 255, 0.25)',
        }}
      >
        {image ? (
          <Image
            src={image}
            alt=""
            width={64}
            height={64}
            unoptimized
          />
        ) : (
          <Typography component="span" aria-hidden="true">
            ?
          </Typography>
        )}
      </Avatar>
      <Typography
        variant="body1"
        style={{
          fontWeight: 700,
          paddingTop: '0.5rem',
          color: '#FFFFFF',
          fontSize: isDesktop ? '18px' : '14px',
          textAlign: 'center',
        }}
      >
        {name}
      </Typography>
    </>
  );

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          <Box display="flex" alignItems="center" flexDirection="column">
            {identity}
          </Box>
        </a>
      ) : (
        <Box display="flex" alignItems="center" flexDirection="column">
          {identity}
        </Box>
      )}
      {why ? (
        <a href={why} target="_blank" rel="noreferrer">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            pt="0.1rem"
          >
            <Typography
              variant="body2"
              style={{
                fontWeight: 200,
                paddingRight: '0.1rem',
                color: '#FFFFFF',
                fontSize: '16px',
              }}
            >
              See Why
            </Typography>
            <ArrowIcon fill="#FFFFFF" height="1rem" width="1rem" />
          </Box>
        </a>
      ) : null}
    </Box>
  );
};

export default Network;
