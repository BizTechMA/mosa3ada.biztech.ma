"use client";
import React, { useState } from 'react';
import { Button } from '@mui/material';
import './SocialMediaButtons.css';
import { Typography } from "@mui/material";

export const ShareButton = ({ shareUrl }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };
  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };
  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };
  return (
    <div className="share-button">
      <Button       
      sx={{
        width: {
          md: "auto",
          xs: "100%",
        },
      }}
      size="large"
      onClick={toggleDropdown} variant="contained" color="primary">
      <Typography color="white" variant="body3">
        شارك      
      </Typography>

      </Button>
      {isDropdownOpen && (
        <div className="share-dropdown">
          <Button onClick={shareOnFacebook} variant="contained" color="primary">
            شارك على Facebook
          </Button>
          <Button onClick={shareOnTwitter} variant="contained" color="primary">
            شارك على Twitter
          </Button>
          <Button onClick={shareOnLinkedIn} variant="contained" color="primary">
            شارك على LinkedIn
          </Button>
        </div>
      )}
    </div>
    
  );
};
