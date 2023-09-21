"use client";

import { Grid } from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, ButtonGroup, Pagination, PaginationItem } from "@mui/material";
import { use } from "react";
import HelpCard from "./help";

export async function getHelps() {
  const results = await fetch("http://localhost:3000/api/helps");
  return results.json();
}
let dataPromise = getHelps();

export default function HelpCards() {
  let data = [];
  const myData = use(dataPromise);
  let lastKey = myData.lastKey;
  data = myData.results.map((item) => ({
    docId: item.id,
    ...item.data,
  }));

  return (
    <>
      <Grid
        container
        style={{
          justifyContent: "center",
        }}
      >
        {data?.map((help, ind) => (
          <Grid xs={12} md={6} lg={4} item key={ind}>
            <HelpCard help={help} />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        style={{
          justifyContent: "center",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Next and Previous buttons"
          style={{
            flexDirection: "row-reverse",
          }}
        >
          <Button onClick={() => getMoreHelps(lastKey)}>التالي</Button>
          <Button>رجوع</Button>
        </ButtonGroup>
      </Grid>
      <Grid
        container
        style={{
          justifyContent: "center",
          paddingBottom: "2rem",
        }}
      >
        <Pagination
          count={9}
          page={1}
          color="primary"
          siblingCount={1}
          renderItem={(item) => (
            <PaginationItem
              components={{
                previous: ArrowForwardIosIcon,
                next: ArrowBackIosNewIcon,
              }}
              {...item}
            />
          )}
        />
      </Grid>
    </>
  );
}
