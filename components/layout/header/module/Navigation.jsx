import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, alpha } from '@mui/material/styles';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import categories from '../../../../utilis/categories.json';
import Link from 'next/link';
import {
  AppBar,
  Autocomplete,
  Avatar,
  Badge,
  Button,
  Chip,
  Divider,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import MenuCategory from './MenuCategory';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(Autocomplete)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));
export default function Navigation() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(event.target.value);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box>
        <AppBar
          position="static"
          sx={{
            backgroundColor: 'white',
            color: 'primary.main',
            padding: '16px 0',
          }}
        >
          {/* Logo - Search - Cart */}
          <Container
            maxWidth="xl"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Typography variant="h2" fontWeight={700}>
              ECOM
            </Typography>
            <Stack sx={{ flexGrow: 1 }}>
              <Search>
                <StyledInputBase
                  renderInput={(param) => (
                    <TextField
                      {...param}
                      label="Tìm kiếm"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </Search>
            </Stack>
            <Box>
              <IconButton
                size="large"
                aria-label="compare"
                sx={{ color: 'text.main' }}
              >
                <Badge badgeContent={2} color="primary">
                  <PublishedWithChangesOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="compare"
                sx={{ color: 'text.main' }}
              >
                <Badge badgeContent={2} color="primary">
                  <FavoriteOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="compare"
                sx={{ color: 'text.main' }}
              >
                <Badge badgeContent={2} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
            <Box>
              <Chip
                color="primary"
                variant="outlined"
                avatar={
                  <Avatar>
                    <PersonOutlineIcon />
                  </Avatar>
                }
                label="Tài khoản"
              />
            </Box>
          </Container>
          {/* Menu - Support */}
          <Container maxWidth="xl">
            <Divider sx={{ margin: '16px auto' }} />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {/* Nav left menu */}
              <Box sx={{ display: 'flex' }}>
                <MenuCategory
                  click={handleClick}
                  close={handleClose}
                  anchorEl={anchorEl}
                  openMenu={openMenu}
                />
              </Box>
              {/* Nav right contact */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                <SupportAgentIcon />
                <Link href="tel:123456789" passHref>
                  <a>(+84) 123 456 789</a>
                </Link>
              </Box>
            </Box>
          </Container>
        </AppBar>
      </Box>
    </>
  );
}
