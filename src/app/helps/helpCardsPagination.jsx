"use client";

import { Grid } from "@mui/material";

import { Button, ButtonGroup } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import HelpCard from "./help";

export default function HelpCards() {
  const [next, setNext] = useState(false);
  const [previous, setPrevious] = useState(false);
  const [firstData, setData] = useState([]);
  const [nextKey, setNextKey] = useState("");
  const [previousKey, setPreviousKey] = useState("");

  const { data, isLoading } = useQuery(
    ["helps"],
    async () => {
      const results = await fetch("http://localhost:3000/api/helps");
      return results.json();
    },
    {
      onSuccess: (data) => {
        setData(data?.results);
        setNextKey(data?.lastKey);
        setPreviousKey(nextKey);
      },
    },
  );

  const { newData, isFetching } = useQuery(
    ["helps", nextKey],
    async ({ queryKey }) => {
      const [_, setNextKey] = queryKey;
      const results = await fetch("http://localhost:3000/api/afterhelps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: nextKey }),
      });
      return results.json();
    },
    {
      enabled: next,
      onSuccess: (newData) => {
        setData(newData?.results);
        setNextKey(newData?.lastKey);
        setPreviousKey(nextKey);
        setNext(false);
      },
    },
  );

  const { previousData } = useQuery(
    ["helps", previousKey],
    async ({ queryKey }) => {
      const [_, setPreviousKey] = queryKey;
      const results = await fetch("http://localhost:3000/api/afterhelps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: previousKey }),
      });
      return results.json();
    },
    {
      enabled: previous,
      onSuccess: (previousData) => {
        setData(previousData?.results);
        setNextKey(previousData?.lastKey);
        setPreviousKey(nextKey);
        setPrevious(false);
      },
    },
  );

  let helps = firstData.map((item) => ({
    docId: item.id,
    ...item.data,
  }));

  console.log("NextKey :", nextKey);
  console.log("previousKey :", previousKey);
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
            {nextKey != "" ? (
              <Button onClick={() => setNext(true)}>التالي</Button>
            ) : (
              <Button disabled>التالي</Button>
            )}
            {previousKey != "" ? (
              <Button onClick={() => setPrevious(true)}>رجوع</Button>
            ) : (
              <Button disabled>رجوع</Button>
            )}
          </ButtonGroup>
        </Grid>
      </>
    );
}
