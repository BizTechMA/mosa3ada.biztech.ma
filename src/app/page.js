"use client";
import Image from "next/image";
import { Button, Container, Grid, Typography } from "@mui/material";
import Header from "@/components/header";

import { useEffect, useState } from "react";

import HelpCard from "./helps/help";

export default  function HelpsPage() {
  const [helps, setHelps] = useState([]);
  const [ip, setIp] = useState("");
  useEffect( () => {
    fetch('/api/help').then((res) => res.json()).then(data => {
        setHelps(data);
    });
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        setIp(data.ip);
    });
}, [])
  return (
    <>
      <Header
        navComponent={
          <Image
            src="/mosa3ada.svg"
            alt="Mosa3ada Logo"
            width={220}
            height={220}
            priority
          />
        }
      />
      <Container maxWidth="xl">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Typography variant="h3">قائمة الطلبات</Typography>
          {/* <Button color="error" variant="contained" size="large">
            <Typography variant="h6">إضافة طلب</Typography>
          </Button> */}
        </div>
        <Grid container>
          <Grid
            container
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              marginTop: 50,
            }}
          ></Grid>
          <Grid container>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 20,
                alignItems: "center",
              }}
            ></Grid>
          </Grid>
          <Grid
            container
            style={{
              justifyContent: "center",
            }}
          >
            {helps?.map((help, ind) => (
              <Grid xs={12} md={4} key={ind}>
                <HelpCard help={help} ip={ip} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
