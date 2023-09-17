"use client";
import { Button, ButtonGroup, Grid } from "@mui/material";
import HelpCard from "./help";
import {
  sliceStartAtom,
  sliceEndAtom,
  currentPageAtom,
} from "../../storage/atom";
import { useAtom } from "jotai";
import { useRef } from "react";

export default function HelpCards({ data }) {
  const fistElem = useRef(null);
  // using the global state from Jotai for setting our slice values
  const [currentSliceStart, setCurrentSliceStart] = useAtom(sliceStartAtom);
  const [currentSliceEnd, setCurrentSliceEnd] = useAtom(sliceEndAtom);
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  // the number that is added to the states specifies how many posts are displayed per page
  const nextPage = () => {
    setCurrentSliceStart(currentSliceStart + 12);
    setCurrentSliceEnd(currentSliceEnd + 12);
    setCurrentPage(currentPage + 1);
    fistElem.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const previousPage = () => {
    setCurrentSliceStart(currentSliceStart - 12);
    setCurrentSliceEnd(currentSliceEnd - 12);
    setCurrentPage(currentPage - 1);
    fistElem.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <div ref={fistElem}></div>
      <Grid
        container
        style={{
          justifyContent: "center",
          paddingBottom: "5rem",
        }}
      >
        {data?.slice(currentSliceStart, currentSliceEnd).map((help, ind) => (
          <Grid xs={12} md={4} key={ind}>
            <HelpCard help={help} />
          </Grid>
        ))}
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Next and Previous buttons"
          style={{
            flexDirection: "row-reverse",
            paddingTop: "2rem",
          }}
        >
          {currentSliceStart >= 6 && (
            <Button onClick={previousPage}>رجوع</Button>
          )}
          {currentSliceEnd < data.length && (
            <Button onClick={nextPage}>التالي</Button>
          )}
        </ButtonGroup>
      </Grid>
    </>
  );
}
