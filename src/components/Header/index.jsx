"use client";
import React, { useState } from "react";
import { Button, Container, Typography, IconButton } from "@mui/material";
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Close as CloseIcon } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

const Header = ({ navComponent }) => {
  const [showBanner, setShowBanner] = useState(true);

  const handleDismissBanner = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className={styles.banner}>
          <Typography variant="body1" className={styles.bannerText} >
            <ReportProblemRoundedIcon className={styles.bannerIcon} />
            موقع مساعدة عبارة عن عمل تطوعي غير ربحي من طرف مجموعة  من الشباب المغاربة لا يمثل أي جهة أو مجموعة، هدفنا هو إيصال الإغاثة الإنسانية لضحايا زلزال المغرب.
          </Typography>
          <IconButton
            aria-label="Dismiss"
            color="#333"
            size="small"
            onClick={handleDismissBanner}
          >
            <CloseIcon />
          </IconButton>
        </div>
      )}

      <header className={styles.container}>
        {/* Most likely the logo will be rendered here */}
        {navComponent && (
          <div
            style={{
              position: "absolute",
              top: "25%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {navComponent}
          </div>
        )}

        <Container maxWidth="xl">
          <div className={styles.headerBanner}>
            <div className={styles.contentContainer}>
              <Typography className={styles.typo}>
                Mosa3ada.ma موقع للتضامن والمساعدة المجتمعية
              </Typography>
              <Link target="_blank" href={"https://t.co/wZ1Xh0CJLV"}>
                <div className={styles.buttonContainer}>
                  <Button
                    style={{
                      fontSize: 18,
                      marginTop: 30,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    size="large"
                    variant="contained"
                    color="primary"
                  >
                    <EmailOutlinedIcon style={{ marginLeft: '8px' }} /> تواصل معنا
                  </Button>
                </div>
              </Link>
            </div>
            <div className={styles.imgContainer}>
              <Image
                alt="morocco earthqauke workers"
                src="/images/header-img.jpeg"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </Container>
      </header>
      <div className={styles.spaceAdjuster}></div>
    </>
  );
};

export default Header;
