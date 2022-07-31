/* eslint-disable jsx-a11y/alt-text */
import { Box, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
export default function FooterDefault() {
  return (
    <Container maxWidth="xxl" sx={{ backgroundColor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography
              variant="h2"
              sx={{ color: 'primary.main', fontWeight: 700 }}
            >
              ECOM
            </Typography>
            <Typography variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              necessitatibus totam iste quos, id aliquid.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                color: 'primary.main',
                gap: 1,
                marginTop: 1,
              }}
            >
              <FacebookOutlinedIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <InstagramIcon />
              <PinterestIcon />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Liên hệ
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                justifyContent: 'flex-start',
                marginBottom: 1,
                marginTop: 2,
              }}
            >
              <AlternateEmailIcon sx={{ color: 'primary.main' }} />{' '}
              hotro@example.com
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                justifyContent: 'flex-start',
                marginBottom: 1,
              }}
            >
              <PhoneIphoneIcon sx={{ color: 'primary.main' }} /> +84 123 456 789
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                justifyContent: 'flex-start',
              }}
            >
              <LocationOnIcon sx={{ color: 'primary.main' }} /> Đường 123,
              Phường Tân Chánh Hiệp, Quận 12, TP.HCM
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Thông tin chi tiết
            </Typography>
            <Box sx={{ display: 'flex', gap: 5 }}>
              <Box>
                <p>
                  <Link href="#" passHref>
                    <a>Tài khoản của tôi</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" passHref>
                    <a>Lịch sử đơn hàng</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" passHref>
                    <a>Theo dõi đơn hàng</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" passHref>
                    <a>Lịch sử thanh toán</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" passHref>
                    <a>Danh sách yêu thích</a>
                  </Link>
                </p>
              </Box>
              <Box>
                <p>
                  <Link href="#" passHref>
                    <a>Địa chỉ liên hệ</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" passHref>
                    <a>Bán hàng</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" passHref>
                    <a>Liên hệ</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" passHref>
                    <a>Hỗ trợ</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" passHref>
                    <a>Câu hỏi thường gặp</a>
                  </Link>
                </p>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Tải ứng dụng
            </Typography>
            <Typography variant="p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              fugit, fuga molestiae rem mollitia eius, alias, ratione facilis
              quia ullam dolores consequatur neque officia saepe itaque vero
              commodi atque. Saepe.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
              <Image
                src="/img/footer/google-store.png"
                width={120}
                height={40}
              />
              <Image src="/img/footer/app-store.png" width={120} height={40} />
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            gap: 2,
            backgroundColor: 'primary.main',
            padding: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="p">© All Copyrights Reserved by AT</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Image src="/img/footer/paypal.jpg" width={50} height={25} />
            <Image src="/img/footer/maestro.jpg" width={50} height={25} />
            <Image src="/img/footer/discover.jpg" width={50} height={25} />
            <Image src="/img/footer/visa.jpg" width={50} height={25} />
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
