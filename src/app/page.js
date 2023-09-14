import Image from "next/image";
import { Container, Grid, Typography } from "@mui/material";

import HelpCard from "./helps/help";
import Header from "@/components/Header";
import getAllDocuments from "@/utils/firebase/firestore/getAllDocuments";

async function getHelps() {
  let data = [];
  if (
    process.env.CURRENT_ENV === "PRODUCTION" ||
    process.env.NEXT_PUBLIC_USE_FIREBASE === "true"
  ) {
    data = (await getAllDocuments("helps")).map((item) => ({
      docId: item.id,
      ...item.data,
    }));
  } else {
    const jsonDirectory = path.join(process.cwd(), "helpsData");
    const fileContents = await fs.readFile(jsonDirectory + "/helpsV2", "utf8");
    data = JSON.parse(fileContents.toLocaleString()).map((item) => ({
      docId: item.id,
      ...item.data,
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
