"use client"
import * as React from 'react';
import MenuButton from '@mui/joy/MenuButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListDivider from '@mui/joy/ListDivider';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography'; // Add this import

export const ShareSocialMediaButtonsMenu = ({ shareUrl }) => {
  const SOCIAL_MEDIA_LINKS = [
    { name: 'Facebook', icon: 'facebook', url: `${shareUrl}?platform=facebook` },
    { name: 'Twitter', icon: 'twitter', url: `${shareUrl}?platform=twitter` },
    { name: 'LinkedIn', icon: 'linkedin', url: `${shareUrl}?platform=linkedin` },
    // Add more social media links as needed
  ];
  const [open, setOpen] = React.useState(false);

  return (
    <Menu>
      <Typography>
        <MenuButton startDecorator={<ArrowDropDown />} onClick={() => setOpen(!open)}>
          Share
        </MenuButton>
      </Typography>
      {open && (
        <List sx={{ minWidth: 160 }}>
          {SOCIAL_MEDIA_LINKS.map((item) => (
            <MenuItem
              key={item.name}
              onClick={() => {
                // Handle sharing logic here using the item.url
                console.log(`Sharing on ${item.name}: ${item.url}`);
                setOpen(false); // Close the menu after sharing
              }}
            >
              {item.name}
            </MenuItem>
          ))}
          <ListDivider />
          <ListItem nested>
            <List aria-label="Social Media Links">
              {SOCIAL_MEDIA_LINKS.map((item) => (
                <MenuItem
                  key={item.name}
                  role="menuitem"
                  onClick={() => {
                    // Handle clicking individual items here if needed
                  }}
                >
                  {item.name}
                </MenuItem>
              ))}
            </List>
          </ListItem>
        </List>
      )}
    </Menu>
  );
}
