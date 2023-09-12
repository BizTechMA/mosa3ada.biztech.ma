import Link from "next/link";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button, // Import Daisy UI Button
} from "@mui/material";
import momentArabic from "../../../utils/momentArabic";
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
      <Link href={"/helps"}>
        <Button className="bg-primary text-white m-4 mb-0 hover:bg-secondary hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-circle-arrow-left-filled"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 2a10 10 0 0 1 .324 19.995l-.324 .005l-.324 -.005a10 10 0 0 1 .324 -19.995zm.707 5.293a1 1 0 0 0 -1.414 0l-4 4a1.048 1.048 0 0 0 -.083 .094l-.064 .092l-.052 .098l-.044 .11l-.03 .112l-.017 .126l-.003 .075l.004 .09l.007 .058l.025 .118l.035 .105l.054 .113l.043 .07l.071 .095l.054 .058l4 4l.094 .083a1 1 0 0 0 1.32 -1.497l-2.292 -2.293h5.585l.117 -.007a1 1 0 0 0 -.117 -1.993h-5.586l2.293 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z"
              stroke-width="0"
              fill="currentColor"
            />
          </svg>
          <span className="mr-2">رجوع</span>
        </Button>
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
