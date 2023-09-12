import Image from "next/image";
import { Grid } from "@mui/material";

import { promises as fs } from "fs";
import path from "path";

import HelpCard from "./helps/help";
import getDocument from "@/utils/firebase/firestore/getData";

async function getHelps() {
  // fetching a document usage example
  (await getDocument("helps", "OrAd9ygqcxL6ob8GjIeP")).result?.data?.();
  /**
   * Logs 
   * {
        location: '',
        'contact ': { fb_username: '', phone_number: '', ig_username: '' },
        date: Timestamp { seconds: 1694473200, nanoseconds: 877000000 },
        needs: [ 'إغاثة', 'طعام وماء' ],
        source: '',
        exact_position: GeoPoint { _lat: 0, _long: 0 },
        details: '',
        city: ''
      }
   */

  const jsonDirectory = path.join(process.cwd(), "helpsData");
  const fileContents = await fs.readFile(jsonDirectory + "/helps", "utf8");
  const parsedData = JSON.parse(fileContents.toLocaleString());
  return parsedData;
}

export default async function HelpsPage() {
  const helps = await getHelps();

  return (
    <Grid container>
      <Grid
        container
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <Image
          src="/mosa3ada.svg"
          alt="Mosa3ada Logo"
          width={180}
          height={37}
          priority
        />
      </Grid>
      <Grid container>
        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
          }}
        ></Grid>
      </Grid>
      <Grid
        container
        style={{
          justifyContent: "center",
        }}
      >
        {helps?.map((help, ind) => (
          <Grid xs={10} md={4} key={ind}>
            <HelpCard help={help} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
