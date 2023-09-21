"use client";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Button,
  ButtonGroup,
  Grid,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { useRef } from "react";
import HelpCard from "./help";

export default function HelpCards({ data }) {
  const fistElem = useRef(null);

  return (
    <>
      <div ref={fistElem}></div>
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
          <Button>التالي</Button>
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
          )} // Show one page on either side of the current page
        />
      </Grid>
    </>
  );
}
