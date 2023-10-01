"use client";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import { useConfirmation } from "../../hooks/useConfimration";
import { useDisConfirmation } from "../../hooks/useDisConfirmation";

import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { formatDate, formatDates, selectedIcon } from "../../utils";
import { HelpCardConfirmButton } from "./CardConfirmButton";
import { HelpCardDisConfirmButton } from "./CardDisConfirmButton";

export default function HelpCard({ help }) {
  const {
    date,
    needs,
    city,
    location,
    docId,
    confirmation_count = 0,
    dis_confirmation_count = 0,
  } = help;

  const { palette } = useTheme();

  const { confirmationCount, handleConfirmHelp, isLoading, isConfirmed } =
    useConfirmation({
      id: docId,
      confirmation_count,
    });

  const {
    disConfirmationCount,
    handleDisConfirmHelp,
    isDisConfirmedLoading,
    isDisConfirmed,
  } = useDisConfirmation({
    id: docId,
    dis_confirmation_count,
  });

  return (
    <Card
      sx={{
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
            {formatDate(date, formatDates.Date)}
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
            style={{
              marginRight: "auto",
            }}
          >
            الساعة {formatDate(date, formatDates.Hours)}
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
            <Typography
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
              }}
              variant="h6"
            >
              {city}
            </Typography>
            <Typography
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
              }}
              variant="body1"
            >
              {location}
            </Typography>
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
            {needs?.slice(0, 3).map((need, needInd) => (
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
                <Typography
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 1,
                  }}
                  variant="h5"
                  key={needInd}
                >
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
          padding: "15px 25px",
        }}
      >
        <Grid item xs={12} style={{ flex: 1 }}>
          <HelpCardConfirmButton
            isConfirmed={isConfirmed}
            isDisConfirmed={isDisConfirmed}
            isLoading={isLoading}
            confirmationCount={confirmationCount}
            onConfirm={handleConfirmHelp}
          />
          <HelpCardDisConfirmButton
            isDisConfirmed={isDisConfirmed}
            isConfirmed={isConfirmed}
            isLoading={isDisConfirmedLoading}
            disConfirmationCount={disConfirmationCount}
            onDisConfirm={handleDisConfirmHelp}
          />
        </Grid>
        <Link
          href={`/helps/${docId}`}
          style={{
            marginRight: "auto",
            color: palette.primary.red,
            display: "flex",
            alignItems: "center",
            gap: 6,
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
