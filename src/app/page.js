"use client";
import Image from "next/image";

import {
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
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
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

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
          <Grid
            container
            direction={isXsScreen ? "column-reverse" : "row"}
            justifyContent="space-between"
            alignItems="flex-start"
            style={{ marginTop: 50 }}
          >
            <Typography variant="h3">قائمة الطلبات</Typography>
            <Grid item style={{ width: isXsScreen ? "100%" : "auto" }}>
              <Link href={"/helps/create"}>
                <div style={{ width: isXsScreen ? "100%" : "auto" }}>
                  <Button
                    color="error"
                    variant="contained"
                    size="large"
                    startIcon={<AddIcon />}
                    style={{
                      width: "100%",
                      marginBottom: isXsScreen ? "20px" : "0px",
                    }}
                  >
                    <Typography variant="h6" color={"white"}>
                      إضافة طلب
                    </Typography>
                  </Button>
                </div>
              </Link>
            </Grid>
          </Grid>
          <FiltersContainer>
            <HelpsSortByDate value={sortByDate} setSorting={setSortByDate} />
            <HelpsFilter setFilters={setHelpsFilter} />
          </FiltersContainer>
        </Stack>
        <HelpCards sort={sortByDate} filters={helpsFilter} />
      </Container>
    </>
  );
}
