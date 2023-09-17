"use client";

import * as React from 'react';
import { Box, Alert, IconButton, Collapse, Divider, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import rtlPlugin from 'stylis-plugin-rtl';

export default function DoneInfo() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: '100%', position : 'fixed', bottom : 2, left: 2, width: 450 , background: 'white' }} stylisPlugins={[rtlPlugin]}>
      <Collapse in={open}>
        <Alert
          severity="success"
          // variant="outlined"
          icon={false}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
        <Box sx={{ my: 3, ml: 2 }}>
          <Typography gutterBottom variant="h6" component="h6">
          الحساب البنكي الرسمي المخصص لمواجهة عواقب الزلزال 
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
          رقم الحساب : 126
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
          RIB: 001-810-0078000201106203-18          
          </Typography>
          <Divider variant="middle" sx={{ my: 2 }}/>
          <Typography gutterBottom variant="subtitle1" component="div">
          للتحويلات القادمة من خارج المغرب :
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
          IBAN: MA64001810007800020110620318        
          </Typography>
        </Box>
        </Alert>
      </Collapse>
    </Box>
  );
}