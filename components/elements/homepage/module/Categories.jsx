import { Box } from '@mui/system';
import React from 'react';
import Slider from 'react-slick';
import categoriesData from '../../../../utilis/categories.json';
import Link from 'next/link';
export default function Categories() {
  const categories = categoriesData.categories;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {categories.map((category) => (
          <Box key={category.id} sx={{ paddingRight: 1 }}>
            <Link href={category.slug} passHref>
              <a>
                <img src={category.image} width="100%" height="auto" />
              </a>
            </Link>
          </Box>
        ))}
      </Slider>
    </div>
  );
}
