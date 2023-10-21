'use client'
// // import { Button, Typography } from '@mui/material';
// // import  IosShareIcon from '@mui/icons-material/IosShare';
// // // Define the button styles
// // const buttonStyles = {
// //   width: '88px',
// //   height: '33px',
// //   top: '12px',
// //   left: '12px',
// //   borderRadius: '4px',
// //   padding: '6px 8px',
// //   gap: '4px',
// //   backgroundColor: '#F1F1F1', // Corrected color value
// //   color: '#777777',
// //   border: 'none',
// //   cursor: 'pointer',
// //   outline: 'none',
// // };

// // const iconStyles = {
// //     width: '21px',
// //     height: '21px',
// //     padding: '3.5px 3.5px 2.5px 3.5px',
// //   };

// // export const ButtonShare = () => {
// //   return (
// //     <Button style={buttonStyles}>
// //       <Typography style={{ color: '#777777' }}>مشاركة</Typography>
// //       <IosShareIcon style={iconStyles} />
// //     </Button>
// //   );
// // };


// // import { Button, Typography, Menu, MenuItem } from '@mui/material';
// // import IosShareIcon from '@mui/icons-material/IosShare';
// // import React, { useState } from 'react';

// // const buttonStyles = {
// //   width: '88px',
// //   height: '33px',
// //   top: '12px',
// //   left: '12px',
// //   borderRadius: '4px',
// //   padding: '6px 8px',
// //   gap: '4px',
// //   backgroundColor: '#F1F1F1',
// //   color: '#777777',
// //   border: 'none',
// //   cursor: 'pointer',
// //   outline: 'none',
// // };

// // const iconStyles = {
// //   width: '21px',
// //   height: '21px',
// //   padding: '3.5px 3.5px 2.5px 3.5px',
// // };

// // export const ButtonShare = ({ shareUrl }) => {
// //   const [anchorEl, setAnchorEl] = useState(null);

// //   const handleMenuOpen = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleMenuClose = () => {
// //     setAnchorEl(null);
// //   };

// //   const handleShareClick = (platform) => {
// //     // Implement the logic to share the URL on the selected platform
// //     // This is a placeholder, and you should replace it with your actual share functionality
// //     alert(`Sharing on ${platform}: ${shareUrl}`);
// //     handleMenuClose();
// //   };

// //   return (
// //     <div>
// //       <Button style={buttonStyles} onClick={handleMenuOpen}>
// //         <Typography style={{ color: '#777777' }}>مشاركة</Typography>
// //         <IosShareIcon style={iconStyles} />
// //       </Button>
// //       <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
// //         <MenuItem onClick={() => handleShareClick('Facebook')}>Share on Facebook</MenuItem>
// //         <MenuItem onClick={() => handleShareClick('Twitter')}>Share on Twitter</MenuItem>
// //         <MenuItem onClick={() => handleShareClick('WhatsApp')}>Share on WhatsApp</MenuItem>
// //         <MenuItem onClick={handleMenuClose}>Cancel</MenuItem>
// //       </Menu>
// //     </div>
// //   );
// // };
// import { Button, Typography, Menu, MenuItem } from '@mui/material';
// import IosShareIcon from '@mui/icons-material/IosShare';
// import React, { useState } from 'react';

// const buttonStyles = {
//   width: '88px',
//   height: '33px',
//   top: '12px',
//   left: '12px',
//   borderRadius: '4px',
//   padding: '6px 8px',
//   gap: '4px',
//   backgroundColor: '#F1F1F1',
//   color: '#777777',
//   border: 'none',
//   cursor: 'pointer',
//   outline: 'none',
// };

// const iconStyles = {
//   width: '21px',
//   height: '21px',
//   padding: '3.5px 3.5px 2.5px 3.5px',
// };

// export const ButtonShare = ({ shareUrl }) => {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleShareClick = (platform, platformShareUrl) => {
//     switch (platform) {
//       case 'Facebook':
//         platformShareUrl = 'https://www.example.com/share-on-facebook';
//         break;
//       case 'Twitter':
//         platformShareUrl = 'https://www.example.com/share-on-twitter';
//         break;
//       case 'WhatsApp':
//         platformShareUrl = 'https://www.example.com/share-on-whatsapp';
//         break;
//       default:
//         platformShareUrl = '';
//     }
    
//     // This is a placeholder, and you should replace it with your actual share functionality
//     alert(`Sharing on ${platform}: ${platformShareUrl}`);
//     handleMenuClose();
//   };

//   return (
//     <>
//       <Button style={buttonStyles} onClick={handleMenuOpen}>
//         <Typography style={{ color: '#777777' }}>مشاركة</Typography>
//         <IosShareIcon style={iconStyles} />
//       </Button>
//       <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//         <MenuItem onClick={() => handleShareClick('Facebook', shareUrl)}>Share on Facebook</MenuItem>
//         <MenuItem onClick={() => handleShareClick('Twitter', shareUrl)}>Share on Twitter</MenuItem>
//         <MenuItem onClick={() => handleShareClick('WhatsApp', shareUrl)}>Share on WhatsApp</MenuItem>
//         <MenuItem onClick={handleMenuClose}>Cancel</MenuItem>
//       </Menu>
//     </>
//   );
// };

import React, { useState } from 'react';
import { Button, Typography, Menu, MenuItem } from '@mui/material';
import IosShareIcon from '@mui/icons-material/IosShare';


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
        <IosShareIcon style={iconStyles} />
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => handleShareClick('Facebook', shareUrl)}>Share on Facebook</MenuItem>
        <MenuItem onClick={() => handleShareClick('Twitter', shareUrl)}>Share on Twitter</MenuItem>
        <MenuItem onClick={() => handleShareClick('WhatsApp', shareUrl)}>Share on WhatsApp</MenuItem>
        <MenuItem onClick={() => handleShareClick('LinkedIn', shareUrl)}>WhatsApp
        </MenuItem>
      </Menu>
    </>
  );
};
