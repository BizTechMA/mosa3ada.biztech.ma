import Link from "next/link";
import Image from "next/image";

import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import momentArabic from "../../utils/momentArabic";

import { selectedIcon } from "../../utils";

export default function HelpCard({ help }) {
  const { date, needs, city, location } = help;

  return (
    <div className="card px-2 py-3 m-2 bg-base-100 shadow-xl">
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
            <div className="flex flex-col justify-center items-start">
              <div className="flex flex-row justify-center items-center">
              <Image
                src="/position.svg"
                alt="position"
                width={22}
                height={22}
                priority
              />
              <Typography variant="h6">{city}</Typography>
              </div>
              <Typography variant="body2">{location}</Typography>
            </div>
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
            {needs.split(",").map((need, needInd) => (
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
                    marginLeft: 6,
                  }}
                >
                  {selectedIcon(need)}
                </span>
                <Typography variant="h6" key={needInd}>
                  {need}
                </Typography>
              </div>
            ))}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        style={{
          marginTop: "auto",
        }}
      >
        <Typography variant="body2">{/* تأكيد 29 */}</Typography>
        <Link
          href={`/helps/${help.id}`}
          className="bg-accent px-4 py-1.5 rounded-md text-white mr-auto"
        >
          {" "}
          إقرأ المزيد{" "}
        </Link>
      </CardActions>
    </div>
  );
}
