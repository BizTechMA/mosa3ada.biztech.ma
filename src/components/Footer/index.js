"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              من نحن
            </Typography>
            <Typography variant="body2" color="text.secondary">
            موقع مساعدة عبارة عن عمل تطوعي غير ربحي لشباب مغاربة لا يمثل أي جهة او مجموعة، هدفنا هو إيصال الإغاثة الإنسانية لضحايا زلزال المغرب
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              تواصل معنا
            </Typography>
            <Typography variant="body2" color="text.secondary">
                المغرب
            </Typography>
            <Typography variant="body2" color="text.secondary">
                البريد الالكتروني :  info@mosa3ada.ma 
            </Typography>
            <Typography variant="body2" color="text.secondary">
                الهاتف  : <span>0600000000</span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              تابعنا على
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"جميع الحقوق محفوضة © "}
            <Link color="inherit" href="https://www.mosa3ada.ma/">
            موقع مساعدة
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}