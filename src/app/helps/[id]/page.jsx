import Link from "next/link";

import { Grid, Card, CardContent, Typography } from "@mui/material";

import momentArabic from "../../../utils/momentArabic";
import { selectedIcon } from "../../../utils";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { promises as fs } from "fs";
import path from "path";

import getDocument from "@/utils/firebase/firestore/getDocument";

async function getHelp(helpId) {
  
  if(process.env.CURRENT_ENV === "PRODUCTION") {
    const { result, error } = await getDocument("helps", helpId);
    return result.data();
  }
  else {
    const jsonDirectory = path.join(process.cwd(), "helpsData");
    const fileContents = await fs.readFile(jsonDirectory + "/helpsV2", "utf8");
    const parsedData = JSON.parse(fileContents.toLocaleString());
    const help = parsedData.find((item) => item.id == helpId).data;
    return help
  }
}

export default async function HelpPage({ params }) {
  const help = await getHelp(params.id);
  const { date, needs, city, location, position, address = "", details } = help;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link
        href={"/"}
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
                  ? needs?.map((need, needInd) => (
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
