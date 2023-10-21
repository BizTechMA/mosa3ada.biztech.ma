'use client'
import React, { useState } from 'react';
import { Button, Typography, Menu, MenuItem } from '@mui/material';
import IosShareIcon from '@mui/icons-material/IosShare';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Import Material-UI icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const buttonStyles = {
    width: '88px',
    height: '33px',
    top: '12px',
    left: '12px',
    borderRadius: '4px',
    padding: '6px 8px',
    gap: '4px',
    backgroundColor: '#F1F1F1',
    color: '#777777',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
  };
  
  const iconStyles = {
    width: '21px',
    height: '21px',
    padding: '3.5px 3.5px 2.5px 3.5px',
  };

export const ButtonShare = ({ shareUrl }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleShareClick = (platform, shareUrl) => {
    switch (platform) {
        case 'Facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
            break;
        case 'Twitter':
            window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`, '_blank');
            break;
        case 'WhatsApp':
            window.open(`whatsapp://send?text=${encodeURIComponent(shareUrl)}`, '_blank');
            break;
        case 'LinkedIn':
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
            break;
    }
    
    handleMenuClose();
  };

  return (
<>
      <Button style={buttonStyles} onClick={handleMenuOpen}>
        <Typography style={{ color: '#777777' }}>مشاركة</Typography>
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => handleShareClick('Facebook', shareUrl)}>
          <FacebookIcon color="primary" fontSize="small" /> 
          <Typography>
            شارك على فايسبوك
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => handleShareClick('Twitter', shareUrl)}>
          <TwitterIcon color="primary" fontSize="small" /> 
          <Typography>
            شارك على تويتر
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => handleShareClick('WhatsApp', shareUrl)}>
          <WhatsAppIcon color="primary" fontSize="small" />   
          <Typography>
            شارك على واتساب
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => handleShareClick('LinkedIn', shareUrl)}>
          <LinkedInIcon color="primary" fontSize="small" />          
           <Typography>
            شارك على لينكدين
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
