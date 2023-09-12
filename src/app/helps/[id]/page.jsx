import Link from "next/link";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

import { Grid, Card, CardContent, Typography } from "@mui/material";

import { selectedIcon } from "../../../utils";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { promises as fs } from "fs";
import path from "path";

async function getHelp(helpId) {
  const jsonDirectory = path.join(process.cwd(), "helpsData");
  const fileContents = await fs.readFile(jsonDirectory + "/helps", "utf8");
  const parsedData = JSON.parse(fileContents.toLocaleString());
  const help = parsedData.find((item) => item.id == helpId);

  return help;
}

export default async function HelpPage({ params }) {
  const help = await getHelp(params.id);

  const { date, needs, city, location, position, address, details } = help;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link
        href={"/helps"}
        style={{
          marginRight: "auto",
          marginLeft: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {" "}
        رجوع
        <ArrowBackIcon />
      </Link>
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
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {format(new Date(date), "PP", { locale: ar })}
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              color="text.secondary"
              style={{
                marginRight: "auto",
              }}
            >
              الساعة {format(new Date(date), "p b", { locale: ar })}
            </Typography>
          </Grid>
          <Grid container>
            <Grid item xs={12} mt={3}>
              <Typography variant="body2">المدينة أو الجهة</Typography>
              <Typography variant="h6">{city}</Typography>
            </Grid>
            <Grid item xs={12} mt={3}>
              <Typography variant="body2">
                إسم الدوار/الجماعة/القيادة
              </Typography>
              <Typography variant="h6">{location}</Typography>
            </Grid>
            <Grid item xs={12} mt={3}>
              <Typography variant="body2">نوع الطلب</Typography>
              <Typography variant="h6">
                {needs
                  ? needs?.split(",").map((need, needInd) => (
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
                    ))
                  : "--"}
              </Typography>
            </Grid>
            <Grid item xs={12} mt={3}>
              <Typography variant="body2">العنوان</Typography>
              <Typography variant="h6">{address}</Typography>
            </Grid>
            <Grid item xs={12} mt={3}>
              <Typography variant="body2">معلومات أخرى</Typography>
              <Typography variant="h6">{details ? details : "--"}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
