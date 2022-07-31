import { Container } from '@mui/material';
import React from 'react';
import Categories from './module/Categories';
import SliderDefault from './module/SliderDefault';

export default function HomePageDefault() {
  return (
    <Container maxWidth="xl">
      <SliderDefault />
      <Categories />
    </Container>
  );
}
