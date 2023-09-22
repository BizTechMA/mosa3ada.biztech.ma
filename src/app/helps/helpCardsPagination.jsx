"use client";

import { Grid, Pagination, PaginationItem } from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, ButtonGroup } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import HelpCard from "./help";
import LoadingHelps from "./helpLoading";

export default function HelpCards() {
  const fistElem = useRef(null);
  const [next, setNext] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previous, setPrevious] = useState(false);
  const [helps, setHelps] = useState([]);
  const [pageStack, setPageStack] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [helpsCount, setHelpsCount] = useState(null);

  const fetchNextOrPreviousData = async (key) => {
    const results = await fetch("http://localhost:3000/api/nexthelps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key }),
    });
    const data = await results.json();
    setCurrentData(data?.results);
    if (data?.lastKey != "" && next) {
      setPageStack((pageStack) => [...pageStack, data?.lastKey]);
    }
    if (data?.lastKey != "" && previous) {
      setPageStack((prevStack) =>
        prevStack.filter((item) => item !== pageStack[pageStack.length - 1]),
      );
    }
    return data;
  };

  const fetchCount = async () => {
    const fetchedCount = await fetch("http://localhost:3000/api/helpscount");
    const countPromise = await fetchedCount.json();
    return countPromise;
  };

  const { data: queriedData } = useQuery(
    ["helps"],
    async ({ queryKey }) => {
      const [_, key] = queryKey;
      return fetchNextOrPreviousData(key);
    },
    {
      enabled: next || previous,
    },
  );

  const { data, isLoading } = useQuery(
    ["helps"],
    async () => {
      const results = await fetch("http://localhost:3000/api/helps");
      return results.json();
    },
    {
      onSuccess: (data) => {
        setCurrentData(data?.results);
        if (data?.lastKey != "") {
          setPageStack([]);
          setPageStack((pageStack) => [...pageStack, data?.firstKey]);
          setPageStack((pageStack) => [...pageStack, data?.lastKey]);
        }
      },
    },
  );

  useEffect(() => {
    const myHelpsCount = async () => {
      const count = await fetchCount();
      setHelpsCount(count);
      return count;
    };
    myHelpsCount();
  }, [helpsCount]);

  useEffect(() => {
    if (previous && pageStack.length > 2) {
      fetchNextOrPreviousData(pageStack[pageStack.length - 3]);
      setPrevious(false);
    }
    if (next) {
      fetchNextOrPreviousData(pageStack[pageStack.length - 1]);
      setNext(false);
    }
  }, [previous, next]);

  useEffect(() => {
    setLoading(true);
    if (currentData.length != 0) {
      let getHelps = currentData.map((item) => ({
        docId: item.id,
        ...item.data,
      }));
      setHelps(getHelps);
      setLoading(false);
    }
  }, [currentData]);

  useEffect(() => {
    fistElem.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [helps]);

  return (
    <>
      <div ref={fistElem}></div>
      {loading || isLoading ? (
        <LoadingHelps />
      ) : (
        <>
          <Grid
            container
            style={{
              justifyContent: "center",
            }}
          >
            {helps?.map((help, ind) => (
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
              {helps.length === 9 ? (
                <Button onClick={() => setNext(true)}>التالي</Button>
              ) : (
                <Button disabled>التالي</Button>
              )}
              {pageStack.length > 2 ? (
                <Button onClick={() => setPrevious(true)}>رجوع</Button>
              ) : (
                <Button disabled>رجوع</Button>
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
              count={helpsCount ? helpsCount : 50}
              page={pageStack.length - 1}
              size="small"
              color="primary"
              onChange={(event, page) => {
                if (page > pageStack.length - 1) {
                  setNext(true);
                } else if (page < pageStack.length - 1) {
                  setPrevious(true);
                }
              }}
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
      )}
    </>
  );
}
