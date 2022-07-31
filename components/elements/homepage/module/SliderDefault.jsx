import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Slider from 'react-slick';
import NextArrow from '../../../shared/carouselArrow/NextArrow';
import PrevArrow from '../../../shared/carouselArrow/PrevArrow';
import Link from 'next/link';
export default function SliderDefault() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        <Box>
          <Link href="#" passHref>
            <a>
              <img src="/img/sliders/banner1.jpg" width="100%" height="auto" />
            </a>
          </Link>
        </Box>
        <Box>
          <Link href="#" passHref>
            <a>
              <img src="/img/sliders/banner2.jpg" width="100%" height="auto" />
            </a>
          </Link>
        </Box>
      </Slider>
    </>
  );
}
