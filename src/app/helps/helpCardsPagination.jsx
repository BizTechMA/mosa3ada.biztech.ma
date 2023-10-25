"use client";

import { Grid, Pagination, PaginationItem } from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, ButtonGroup } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import HelpCard from "./help";
import LoadingHelps from "./helpLoading";
import FakeData from "../../../helpsData/fake-data";

export default function HelpCards({ filters, sort }) {
  const fistElem = useRef(null);
  const [helps, setHelps] = useState([]);
  const [next, setNext] = useState(false);
  const [loading, setLoading] = useState(true);
  const [previous, setPrevious] = useState(false);
  const [pageStack, setPageStack] = useState([]);
  const [lastCount, setLastCount] = useState([]);
  const [helpsCount, setHelpsCount] = useState(null);

  //!! I suggest opening a new issue to refactor this part, it does the job perfectly
  //!! but it's overly complicated, it takes so much time to make little changes.

  const fetchNextOrPreviousData = async (count, date) => {
    setLoading(true);
    const results = await fetch(
      `/api/nexthelps?${filters.city}&sortBy=${sort}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count, date }),
      },
    );
    const data = await results.json();

    if (data?.lastKey != "" && next) {
      setPageStack((pageStack) => [...pageStack, data?.lastKey]);
      setLastCount((lastCount) => [...lastCount, data?.lastCount]);
    }
    if (data?.lastKey != "" && previous) {
      setPageStack((prevStack) => prevStack.slice(0, -1));
      setLastCount((prevCount) => prevCount.slice(0, -1));
    }

    let getHelps = data.results.map((item) => ({
      docId: item.id,
      ...item.data,
    }));
    setHelps(getHelps);
    setLoading(false);
    return data;
  };

  const initialData = async () => {
    if (process.env.NEXT_PUBLIC_CURRENT_ENV === "LOCAL") {
      setLoading(true);
      const data = FakeData();
      if (data?.lastKey != "") {
        setPageStack([]);
        setLastCount([]);
        setPageStack((pageStack) => [...pageStack, data?.firstKey]);
        setPageStack((pageStack) => [...pageStack, data?.lastKey]);
        setLastCount((lastCount) => [...lastCount, data?.firstCount]);
        setLastCount((lastCount) => [...lastCount, data?.lastCount]);
      }
      let getHelps = data.results.map((item) => ({
        docId: item.id,
        ...item.data,
      }));
      setHelps(getHelps);
      setLoading(false);
      return data;
    } else {
      setLoading(true);
      const results = await fetch(
        `/api/helps?city=${filters.city}&sortBy=${sort}`,
      );
      const data = await results.json();
      if (data?.lastKey != "") {
        setPageStack([]);
        setLastCount([]);
        setPageStack((pageStack) => [...pageStack, data?.firstKey]);
        setPageStack((pageStack) => [...pageStack, data?.lastKey]);
        setLastCount((lastCount) => [...lastCount, data?.firstCount]);
        setLastCount((lastCount) => [...lastCount, data?.lastCount]);
      }
      let getHelps = data.results.map((item) => ({
        docId: item.id,
        ...item.data,
      }));
      setHelps(getHelps);
      setLoading(false);
      return data;
    }
  };

  const fetchCount = async () => {
    if (process.env.NEXT_PUBLIC_CURRENT_ENV === "LOCAL") {
      const countPromise = 1;
      return countPromise;
    } else {
      const fetchedCount = await fetch("/api/helpscount");
      const countPromise = await fetchedCount.json();
      return countPromise;
    }
  };

  useEffect(() => {
    initialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, sort]);

  useEffect(() => {
    const myHelpsCount = async () => {
      const count = await fetchCount();
      setHelpsCount(count);
      return count;
    };
    myHelpsCount();
  }, [helpsCount]);

  useEffect(() => {
    if (next) {
      fetchNextOrPreviousData(
        lastCount[lastCount.length - 1],
        pageStack[pageStack.length - 1],
      );
      setNext(false);
    }
    if (previous) {
      if (pageStack.length > 3) {
        fetchNextOrPreviousData(
          lastCount[lastCount.length - 3],
          pageStack[pageStack.length - 3],
        );
        setPrevious(false);
      }
      if (pageStack.length === 3) {
        initialData();
        setPrevious(false);
      }
    }
  }, [previous, next]);

  useEffect(() => {
    fistElem.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [helps]);
  return (
    <>
      <div ref={fistElem}></div>
      {loading ? (
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
                flexDirection: "row",
              }}
            >
              {pageStack.length > 2 ? (
                <Button onClick={() => setPrevious(true)}>رجوع</Button>
              ) : (
                <Button disabled>رجوع</Button>
              )}
              {helps.length === 9 &&
              process.env.NEXT_PUBLIC_CURRENT_ENV !== "LOCAL" ? (
                <Button onClick={() => setNext(true)}>التالي</Button>
              ) : (
                <Button disabled>التالي</Button>
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
            {helps.length === 9 ? (
              <Pagination
                disabled
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
                      previous: ArrowBackIosNewIcon,
                      next: ArrowForwardIosIcon,
                    }}
                    {...item}
                  />
                )}
              />
            ) : (
              <Pagination
                disabled
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
                      previous: ArrowBackIosNewIcon,
                      next: ArrowForwardIosIcon,
                    }}
                    {...item}
                  />
                )}
              />
            )}
          </Grid>
        </>
      )}
    </>
  );
}
