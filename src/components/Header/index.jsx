"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import { Button, Container, Typography } from "@mui/material";

export const Header = ({ navComponent }) => {
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

        <Container maxWidth="xl">
          <div className={styles.headerBanner}>
            <div className={styles.contentContainer}>
              <Typography
                variant="h4"
                fontSize={35}
                fontWeight={600}
                lineHeight={1.6}
                color={"white"}
              >
                Mosa3ada.ma موقع للتضامن والمساعدة المجتمعية
              </Typography>
              <Link target="_blank" href={'https://twitter.com/BiztechMorocco'}>
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
                src={"/images/header-img.jpeg"}
                sizes="100vw"
                layout="fill"
              />
            </div>
          </div>
        </Container>
      </header>
      <div className={styles.spaceAdjuster}></div>
    </>
  );
};
