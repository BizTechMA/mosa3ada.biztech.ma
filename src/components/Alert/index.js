"use client";

import * as React from 'react';
import { Box, Alert, IconButton, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import rtlPlugin from 'stylis-plugin-rtl';

export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: '100%' }} stylisPlugins={[rtlPlugin]}>
      <Collapse in={open}>
        <Alert
          severity="warning"
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
          موقع مساعدة عبارة عن عمل تطوعي غير ربحي لشباب مغاربة لا يمثل أي جهة او مجموعة، هدفنا هو إيصال الإغاثة الإنسانية لضحايا زلزال المغرب
        </Alert>
      </Collapse>
    </Box>
  );
}