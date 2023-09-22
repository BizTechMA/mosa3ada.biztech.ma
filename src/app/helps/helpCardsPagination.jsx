"use client";

import { Grid } from "@mui/material";

import { Button, ButtonGroup } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import HelpCard from "./help";

export default function HelpCards() {
  const [pageStack, setPageStack] = useState([]);
  const [next, setNext] = useState(false);
  const [previous, setPrevious] = useState(false);
  const [currentData, setCurrentData] = useState([]);

  const fetchHelps = async (key) => {
    const results = await fetch("http://localhost:3000/api/afterhelps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key }),
    });
    return results.json();
  };

  const fetchNextOrPreviousData = async (key) => {
    const data = await fetchHelps(key);
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

  useEffect(() => {
    if (previous) {
      fetchNextOrPreviousData(pageStack[pageStack.length - 2]);
      setPrevious(false);
    }
    if (next) {
      fetchNextOrPreviousData(pageStack[pageStack.length - 1]);
      setNext(false);
    }
  }, [previous, next]);

  const { data: queriedData, isFetching } = useQuery(
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
          setPageStack((pageStack) => [...pageStack, data?.lastKey]);
        }
      },
    },
  );

  let helps = currentData.map((item) => ({
    docId: item.id,
    ...item.data,
  }));

  console.log("pageStack :", pageStack);

  if (isLoading || isFetching) {
    return <div>loading ...</div>;
  } else
    return (
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
            {pageStack.length > 1 ? (
              <Button onClick={() => setPrevious(true)}>رجوع</Button>
            ) : (
              <Button disabled>رجوع</Button>
            )}
          </ButtonGroup>
        </Grid>
      </>
    );
}
