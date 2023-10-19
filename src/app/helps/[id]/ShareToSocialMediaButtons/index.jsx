"use client"
import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import './SocialMediaButtons.css';

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
        onClick={toggleDropdown}
        variant="contained"
        color="primary"
      >
        <Typography color="white" variant="body2">شارك</Typography>
        <ArrowDropDown /> {/* Render the ArrowDropDown here */}
      </Button>
      {isDropdownOpen && (
        <div className="share-dropdown">
          <a onClick={shareOnFacebook} className="share-link"> {/* Add className for styling */}
            شارك على Facebook
          </a>
          <a onClick={shareOnTwitter} className="share-link">
            شارك على Twitter
          </a>
          <a onClick={shareOnLinkedIn} className="share-link">
            شارك على LinkedIn
          </a>
        </div>
      )}
    </div>
  );
};