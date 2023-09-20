"use client";
import {
  Button,
  ButtonGroup,
  Grid,
  Pagination,
  PaginationItem,
  Typography,
} from "@mui/material";
import HelpCard from "./help";
import {
  sliceStartAtom,
  sliceEndAtom,
  currentPageAtom,
} from "../../storage/atom";
import { useAtom } from "jotai";
import { useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function HelpCards({ data }) {
  const fistElem = useRef(null);
  // using the global state from Jotai for setting our slice values
  const [currentSliceStart, setCurrentSliceStart] = useAtom(sliceStartAtom);
  const [currentSliceEnd, setCurrentSliceEnd] = useAtom(sliceEndAtom);
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // the number that is added to the states specifies how many posts are displayed per page
  const nextPage = () => {
    setCurrentSliceStart(currentSliceStart + 9);
    setCurrentSliceEnd(currentSliceEnd + 9);
    setCurrentPage(currentPage + 1);
    fistElem.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const previousPage = () => {
    setCurrentSliceStart(currentSliceStart - 9);
    setCurrentSliceEnd(currentSliceEnd - 9);
    setCurrentPage(currentPage - 1);
    fistElem.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      const newSliceStart = (pageNumber - 1) * itemsPerPage;
      const newSliceEnd = pageNumber * itemsPerPage;
      setCurrentSliceStart(newSliceStart);
      setCurrentSliceEnd(newSliceEnd);
      setCurrentPage(pageNumber);
      fistElem.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <div ref={fistElem}></div>
      <Grid
        container
        style={{
          justifyContent: "center",
        }}
      >
        {data?.slice(currentSliceStart, currentSliceEnd).map((help, ind) => (
          <Grid xs={12} md={6} lg={4} key={ind}>
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
          {currentSliceEnd < data.length && (
            <Button onClick={nextPage}>التالي</Button>
          )}
          {currentSliceStart >= 6 && (
            <Button onClick={previousPage}>رجوع</Button>
          )}
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
          count={totalPages}
          page={currentPage}
          onChange={(event, page) => goToPage(page)}
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
