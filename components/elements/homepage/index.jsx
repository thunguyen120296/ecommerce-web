import { Container } from '@mui/material';
import React from 'react';
import BestSelling from './module/BestSelling';
import Categories from './module/Categories';
import PromotionOfDate from './module/PromotionOfDate';
import SliderDefault from './module/SliderDefault';

export default function HomePageDefault() {
  return (
    <Container maxWidth="xl">
      <SliderDefault />
      <Categories />
      <BestSelling />
      <PromotionOfDate />
    </Container>
  );
}
