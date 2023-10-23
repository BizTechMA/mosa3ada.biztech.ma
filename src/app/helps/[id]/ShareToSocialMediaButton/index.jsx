"use client";
import React from 'react';
import { Button } from '@mui/material';
export const ShareButton = ({ shareUrl }) => {
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
      <div>
        <Button onClick={shareOnFacebook} variant="contained" color="primary">شارك  Facebook</Button>
        <Button onClick={shareOnTwitter} variant="contained" color="primary">شارك  Twitter</Button>
        <Button onClick={shareOnLinkedIn} variant="contained" color="primary">شارك  LinkedIn</Button>
      </div>
  );
};
