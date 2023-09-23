"use client";
import { Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

const Header = ({ navComponent }) => {
  return (
    <>
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

        <Container>
          <div className={styles.headerBanner}>
            <div className={styles.contentContainer}>
              <Typography className={styles.typo}>
                Mosa3ada.ma موقع للتضامن والمساعدة المجتمعية
              </Typography>
              <Link target="_blank" href={"https://t.co/wZ1Xh0CJLV"}>
                <Button
                  style={{
                    fontSize: 18,
                    marginTop: 30,
                  }}
                  size="large"
                  variant="contained"
                  color="primary"
                >
                  تواصل معنا
                </Button>
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
