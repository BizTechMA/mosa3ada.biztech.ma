"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
//MaterialUI
import { Button, Container, Typography } from "@mui/material";
//React-Google-Map
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
//Data
import { Data } from "../../../Data";

const Header = ({ navComponent }) => {
  //MapCenter
  const center = { lat: 31.054, lng: -8.394 };

  //MapOptions
  const mapOptions = {
    disableDefaultUI: true,
    restriction: {
      latLngBounds: {
        north: 36.0, // Maximum latitude
        south: 27.0, // Minimum latitude
        west: -14.0, // Minimum longitude
        east: 0, // Maximum longitude
      },
      strictBounds: false, // Set to true if you want to enforce strict bounds
    },
  };

  //LoadTheMap
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBXWOxwBiZNJf_cTQ3NwieZfZhJrH4lPJg",
  });

  return (
    <>
      <header className={styles.container}>
        {/* Most likely the logo will be rendered here */}
        {navComponent && (
          <div className={styles.LogoContainer}>{navComponent}</div>
        )}

        <Container maxWidth="xl">
          <div className={styles.headerBanner}>
            <div className={styles.MapContainer}>
              <div className={styles.Props}>
                <div className={styles.DamaggedVillages}>
                  <img src="/icons/Marker.png" style={{ height: "25px" }} />
                  <span>قرى متضررة</span>
                </div>
              </div>

              <div className={styles.LiveIcon}>
                <div className={styles.Pulse}></div>
                <span>مباشر</span>
              </div>

              {isLoaded && (
                <GoogleMap
                  center={center}
                  zoom={8}
                  mapContainerClassName={styles.Map}
                  options={mapOptions}
                >
                  {/* //Map The Markers Here */}

                  {Data.map((item, index) => {
                    const coordinates = item.Position.replace("POINT (", "")
                      .replace(")", "")
                      .split(" ");

                    const lat = parseFloat(coordinates[1]);
                    const lng = parseFloat(coordinates[0]);

                    if (isNaN(lat) || isNaN(lng)) {
                      console.error(
                        `Invalid coordinates for item at index ${index}`
                      );
                      return null; // Skip rendering invalid markers
                    }

                    return (
                      <Marker
                        key={index}
                        position={{ lat, lng }}
                        icon={"/icons/Marker.png"}
                      />
                    );
                  })}
                </GoogleMap>
              )}
            </div>

            <div className={styles.contentContainer}>
              <div style={{ padding: "15px" }}>
                <Typography
                  variant="h4"
                  fontSize={35}
                  fontWeight={600}
                  lineHeight={1.6}
                  color={"white"}
                >
                  Mosa3ada.ma موقع للتضامن والمساعدة المجتمعية
                </Typography>
                <Link
                  target="_blank"
                  href={"https://twitter.com/BiztechMorocco"}
                >
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
                  className={styles.MainPhoto}
                />
              </div>
            </div>
          </div>
        </Container>
      </header>
      <div className={styles.spaceAdjuster}></div>
    </>
  );
};

export default Header;

{
  /* <div className={styles.headerBanner}>
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
  <Link target="_blank" href={"https://twitter.com/BiztechMorocco"}>
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
</div> */
}
