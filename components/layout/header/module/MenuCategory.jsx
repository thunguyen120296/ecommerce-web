import { Button, Menu, MenuItem } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import categories from '../../../../utilis/categories.json';
export default function MenuCategory(props) {
  console.log(categories.categories);
  const categoriesMenu = categories.categories;
  return (
    <>
      {categoriesMenu.map((category) => (
        <>
          <Box>
            <Button
              aria-owns={props.anchorEl ? 'simple-menu' : undefined}
              aria-haspopup="true"
              onClick={props.click}
              value={category.title}
              onMouseOver={props.click}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ textTransform: 'capitalize' }}
            >
              {category.title}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={props.anchorEl}
              open={
                props.openMenu == category.title
                  ? Boolean(props.anchorEl)
                  : false
              }
              onClose={props.close}
              MenuListProps={{ onMouseLeave: props.close }}
            >
              <Box>
                {category?.subCategory.map((subcategory) => (
                  <>
                    <MenuItem onClick={props.close}>
                      {subcategory.title}
                    </MenuItem>
                  </>
                ))}
              </Box>
            </Menu>
          </Box>
        </>
      ))}
    </>
  );
}
