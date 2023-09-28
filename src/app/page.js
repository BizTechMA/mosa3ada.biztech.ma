import Image from "next/image";

import { Container, Grid, Typography } from "@mui/material";

import Header from "@/components/Header";
import { Button } from "@mui/material";
import Link from "next/link";
import HelpCards from "./helps/helpCardsPagination";
import AddIcon from "@mui/icons-material/Add";
export const dynamic = "force-dynamic";

export default async function HelpsPage() {
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
            flexDirection: "column-reverse",
            marginTop: 50,
            gap: "1rem",
          }}
        >
          <Typography variant="h3">قائمة الطلبات</Typography>
          <Link href={"/helps/create"}>
            <Button color="error" variant="contained" size="large">
              <Typography
                variant="subtitle1"
                color={"white"}
                style={{ display: "flex", alignItems: "center", gap: "2px" }}
              >
                <AddIcon />
                إضافة طلب
              </Typography>
            </Button>
          </Link>
        </div>
        <Grid container>
          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 70,
              alignItems: "center",
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
          ></Grid>
        </Grid>
        <HelpCards />
      </Container>
    </>
  );
}
