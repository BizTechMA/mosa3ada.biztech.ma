"use client";
import Link from "next/link";
import Image from "next/image";

import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import momentArabic from "../../utils/momentArabic";

import { selectedIcon } from "../../utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { HelpCardConfirmButton } from "./ConfirmButton";

export default function HelpCard({ help }) {

  const { date, needs, city, location, docId } = help;
  const { palette } = useTheme();


  return (
    <Card
      sx={{
        minWidth: 350,
        minHeight: 230,
        margin: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {momentArabic(date).format("LL")}
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
            style={{
              marginRight: "auto",
            }}
          >
            الساعة {momentArabic(date).format("HH:MM")}
          </Typography>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={5}
            style={{
              padding: 5,
              flex: 1,
              textAlign: "center",
              alignContent: "center",
            }}
          >
            <Image
              src="/position.svg"
              alt="position"
              width={20}
              height={20}
              priority
            />
            <Typography variant="h6">{city}</Typography>
            <Typography variant="body1">{location}</Typography>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              padding: 5,
              borderRight: "0.5px solid #ACACAC",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {needs?.map((need, needInd) => (
              <div
                key={needInd}
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <span
                  style={{
                    marginRight: 3,
                    marginLeft: 3,
                  }}
                >
                  {selectedIcon(need)}
                </span>
                <Typography variant="h5" key={needInd}>
                  {need}
                </Typography>
              </div>
            ))}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        style={{
          backgroundColor: "#5B5B5B0D",
          marginTop: "auto",
          padding: "15px 29px",
        }}
      >
        <HelpCardConfirmButton />
        <Link
          href={`/helps/${docId}`}
          style={{
            marginRight: "auto",
            color: palette.primary.red,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span>إقرأ المزيد</span>
          <ArrowBackIcon
            style={{
              position: "relative",
              top: 3,
            }}
          />
        </Link>
      </CardActions>
    </Card>
  );
}
