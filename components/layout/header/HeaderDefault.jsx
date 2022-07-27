import { AppBar, Button, Menu, MenuItem, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import Navigation from './module/Navigation';
import TopHeader from './module/TopHeader';

export default function HeaderDefault() {
  return (
    <>
      <TopHeader />
      <Navigation />
    </>
  );
}
