"use client"
// import React, { useState } from 'react';
// import { Button, Typography } from '@mui/material';
// import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
// import './SocialMediaButtons.css';

// export const ShareButton = ({ shareUrl }) => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   const shareOnFacebook = () => {
//     window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
//   };

//   const shareOnTwitter = () => {
//     window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`, '_blank');
//   };

//   const shareOnLinkedIn = () => {
//     window.open(`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}`, '_blank');
//   };

//   return (
//     <>
//       <Button
//       style={{
//         gap: 5,
//         marginBottom: 20,
//       }}
//       sx={{
//         width: {
//           md: "auto",
//           xs: "100%",
//         },
//       }}
//       size="large"
//         onClick={toggleDropdown}
//         variant="contained"
//         color="primary"
//       >
//         <Typography color="white" variant="body2">شارك</Typography>
//         <ArrowDropDown />
//       </Button>
//       {isDropdownOpen && (
//         <div className="share-dropdown">
//           <a onClick={shareOnFacebook} className="share-link">
//             شارك على Facebook
//           </a>
//           <a onClick={shareOnTwitter} className="share-link">
//             شارك على Twitter
//           </a>
//           <a onClick={shareOnLinkedIn} className="share-link">
//             شارك على LinkedIn
//           </a>
//         </div>
//       )}
//     </>
//   );
// };


import React, { useState } from 'react';

import { Button, Typography } from '@mui/material'; // Import Button and Typography once

import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
    <div className="rtl-container">
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
        <ArrowDropDown />
      </Button>
      {isDropdownOpen && (
        <div className="share-dropdown parent ">
          <a onClick={shareOnFacebook} className="share-link">
            <FacebookIcon style={{ color: "#1877f2" }} /> {/* Facebook Icon with blue color */}
          </a>
          <a onClick={shareOnTwitter} className="share-link">
            <TwitterIcon style={{ color: "#1da1f2" }} /> {/* Twitter Icon with blue color */}
          </a>
          <a onClick={shareOnLinkedIn} className="share-link">
            <LinkedInIcon style={{ color: "#0077b5" }} /> {/* LinkedIn Icon with blue color */}
          </a>
        </div>
      )}
    </div>
  );
};


