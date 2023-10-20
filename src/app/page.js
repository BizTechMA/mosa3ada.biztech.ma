"use client";
import Image from "next/image";

import { Container, Grid, Stack, Typography } from "@mui/material";

import Header from "@/components/Header";
import { Button } from "@mui/material";
import Link from "next/link";
import HelpCards from "./helps/helpCardsPagination";
import { HelpsFilter } from "./helpsFilter";
import { useState } from "react";
import { HelpsSortByDate } from "./helpsSortByDate";
import { FiltersContainer } from "./filtersContainer";
export const dynamic = "force-dynamic";

export default function HelpsPage() {
  const [helpsFilter, setHelpsFilter] = useState({
    city: null,
  });

  // desc, asc
  const [sortByDate, setSortByDate] = useState("asc");

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
        <Stack spacing={2}>
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
            <Link href={"/helps/create"}>
              <Button color="primary" variant="contained" size="large">
                <Typography variant="h6" color={"white"}>
                  إضافة طلب
                </Typography>
              </Button>
            </Link>
          </div>
          <FiltersContainer>
            <HelpsSortByDate value={sortByDate} setSorting={setSortByDate} />
            <HelpsFilter setFilters={setHelpsFilter} />
          </FiltersContainer>
        </Stack>
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
        <HelpCards sort={sortByDate} filters={helpsFilter} />
      </Container>
    </>
  );
}
