import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';

export default function TopHeader() {
  const topMenu = ['Cần giúp đỡ', 'Liên hệ'];
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="p">
            Chào mừng bạn đến với Ecom Website!
          </Typography>
          <Box>
            {topMenu.map((menu) => (
              <Button
                key={menu}
                sx={{ color: 'white', textTransform: 'capitalize' }}
              >
                {menu}
              </Button>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
