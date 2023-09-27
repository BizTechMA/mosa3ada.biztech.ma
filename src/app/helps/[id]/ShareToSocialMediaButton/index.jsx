"use client";
import React from 'react';

import { useConfirmation } from "@/hooks/useConfimration";
import { useDisConfirmation } from "@/hooks/useDisConfirmation";
import { ThumbUpAltSharp, ThumbUpOffAlt } from "@mui/icons-material";
import { Button, CircularProgress, Typography } from "@mui/material";

export const ShareButton = () => {




  // Define the URL to share (replace with your URL)
  const shareUrl = "https://example.com"; // Replace with your URL

  // Functions to open social media share dialogs
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
      <Button
        onClick={shareOnFacebook }
        color="success"
        variant="contained"
        style={{
          gap: 5,
          marginBottom: 20,
        }}
        sx={{
          width: {
            md: "auto",
            xs: "100%",
          },
        }}
        size="large"
        
      >
        
        <Typography color="white" variant="body3">
           " شارك"
        </Typography>
      </Button>

      {/* Social Media Share Buttons */}
      <div>
        <Button onClick={shareOnFacebook} variant="outlined" color="primary">Share on Facebook</Button>
        <Button onClick={shareOnTwitter} variant="outlined" color="primary">Share on Twitter</Button>
        <Button onClick={shareOnLinkedIn} variant="outlined" color="primary">Share on LinkedIn</Button>
      </div>
    </div>
  );
};
