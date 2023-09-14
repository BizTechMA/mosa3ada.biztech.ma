import Image from "next/image";
import { Button, Container, Grid, Typography } from "@mui/material";

import { promises as fs } from "fs";
import path from "path";

import HelpCard from "./helps/help";
import getAllDocuments from "@/utils/firebase/firestore/getAllDocuments";
import { Header } from "@/components";
import { Timestamp } from "firebase/firestore";
import { excelDateToJSDate } from "@/utils";

async function getHelps() {
  // fetching a document usage example
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
  let data = [];
  if (process.env.CURRENT_ENV === "PRODUCTION") {
    data = (await getAllDocuments("helps")).map((item) => ({
      docId: item.id,
      ...item.data,
      ...{
        date:
          item.data.date instanceof Timestamp
            ? item.data.date.toDate()
            : excelDateToJSDate(item.data.date),
      },
    }));
  } else {
    const jsonDirectory = path.join(process.cwd(), "helpsData");
    const fileContents = await fs.readFile(jsonDirectory + "/helpsV2", "utf8");
    data = JSON.parse(fileContents.toLocaleString()).map(item => ({
      docId: item.id,
      ...item.data,
      ...{date: typeof item.data.date === 'number' ? excelDateToJSDate(item.data.date) : item.data.date} //to test date in real format
    }));
 }

 return data;
}

export default async function HelpsPage() {
  const helps = await getHelps();
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Typography variant="h3">قائمة الطلبات</Typography>
          {/* <Button color="error" variant="contained" size="large">
            <Typography variant="h6">إضافة طلب</Typography>
          </Button> */}
        </div>
        <Grid container>
          <Grid
            container
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              marginTop: 50,
            }}
          ></Grid>
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
              <Grid xs={12} md={4} key={ind}>
                <HelpCard help={help} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
