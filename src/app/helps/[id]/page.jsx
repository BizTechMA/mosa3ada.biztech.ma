import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { promises as fs } from "fs";
import Link from "next/link";
import path from "path";

import { formatDate, formatDates, selectedIcon } from "../../../utils";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

import getDocument from "@/utils/firebase/firestore/getDocument";
import { ConfirmButton } from "./ConfirmButton";
import { DisConfirmButton } from "./DisConfirmButton";
import styles from "./page.module.css";
import {ButtonShare} from "@/app/helps/[id]/ShareToSocialMediaButtons/ShareButton";



async function getHelp(helpId) {
  if (
    process.env.CURRENT_ENV === "PRODUCTION" ||
    process.env.NEXT_PUBLIC_USE_FIREBASE === "true"
  ) {
    const { result } = await getDocument("helps", helpId);
    return result.data();
  } else {
    const jsonDirectory = path.join(process.cwd(), "helpsData");
    const fileContents = await fs.readFile(jsonDirectory + "/helpsV3", "utf8");

    const parsedData = JSON.parse(fileContents.toLocaleString());
    const help = parsedData.find((item) => item.id == helpId).data;
    return help;
  }
}

export default async function HelpPage({ params }) {
  const help = await getHelp(params.id);
  const urlToShare = `https://www.mosa3ada.ma/helps/${params.id}`;
  const {
    date,
    needs,
    city,
    location,
    exact_position,
    details,
    person_name,
    contact,
    in_place,
    confirmation_count = 0,
    dis_confirmation_count = 0,
  } = help;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "15px 20px",
        }}
      >
        <Container maxWidth="xl">
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 10,
            }}
            href={"/"}
          >
            {" "}
            رجوع
            <ArrowBackIcon />
          </Link>
        </Container>
      </div>
      <Container
        maxWidth="xl"
        style={{
          paddingTop: 30,
        }}
      >
        <Typography
          variant="h5"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <InfoOutlinedIcon color="primary" />
          <span>معلومات كاملة</span>
          <span
            style={{
              fontSize: 19,
              opacity: 0.5,
            }}
          >
            {" "}
            ( {confirmation_count || 0} تأكيد)
          </span>
        </Typography>
        <Card
          sx={{
            minWidth: 300,
            minHeight: 230,
            margin: "30px 0",
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
            <div>
              <Box
                sx={{
                  display: {
                    md: "flex",
                    xs: "block",
                  },
                }}
              >
                <div
                  style={{
                    width: "100%",
                  }}
                >
<Typography
                    variant="h6"
                    fontWeight={400}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent:"space-between",
                      gap: 10,
                    }}
                  >
                    <span  style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}>
                      <StarOutlinedIcon color="primary" />
                      <span> عن طلب المساعدة</span>
                    </span>
                    {/* <Grid item xs={12} md={3} mt={3}> */}
                  <ButtonShare shareUrl={urlToShare} />
                  </Typography>

                  <Grid
                    columns={{
                      md: 6,
                      xs: 12,
                    }}
                    container
                  >        


                    <Grid item xs={12} md={3} mt={3}>
                      <Typography
                        className={styles.helpInfoLabel}
                        variant="body2"
                      >
                        المدينة أو الجهة
                      </Typography>
                      <Typography className={styles.helpInfoText}>
                        <span>{city}</span>
                        {exact_position && (
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${exact_position.latitude},${exact_position.longitude}`}
                            target="_blank"
                          >
                            <Button
                              variant="outlined"
                              style={{
                                fontSize: 13,
                                display: "flex",
                                alignItems: "center",
                                marginRight: 7,
                                fontWeight: "bold",
                                color: "#0E6146",
                                marginTop: 10,
                                gap: 5,
                              }}
                            >
                              <PlaceOutlinedIcon />
                              <span>افتح خريطة الموقع</span>
                            </Button>
                          </a>
                        )}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} mt={3}>
                      <Typography
                        className={styles.helpInfoLabel}
                        variant="body2"
                      >
                        إسم الدوار/الجماعة/القيادة
                      </Typography>
                      <Typography className={styles.helpInfoText}>
                        {location}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} mt={3}>
                      <Typography
                        className={styles.helpInfoLabel}
                        variant="body2"
                      >
                        نوع الطلب
                      </Typography>
                      <Typography
                        component={"div"}
                        style={{
                          display: "flex",
                          gap: 8,
                        }}
                        className={styles.helpInfoText}
                      >
                        {needs
                          ? needs?.map((need, needInd) => (
                              <div
                                key={needInd}
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  border: "solid 1px #ccc",
                                  padding: "5px 15px",
                                  borderRadius: 8,
                                  gap: 5,
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
                                <Typography variant="body1" key={needInd}>
                                  {need}
                                </Typography>
                              </div>
                            ))
                          : "--"}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} mt={3}>
                      <Typography
                        className={styles.helpInfoLabel}
                        variant="body2"
                      >
                        معلومات أخرى
                      </Typography>
                      <Typography className={styles.helpInfoText}>
                        {details || " لا يوجد"}
                      </Typography>
                      <br />
                      <Typography
                        className={styles.helpInfoLabel}
                        variant="body2"
                      >
                        عدد التأكيدات
                      </Typography>
                      <Typography className={styles.helpInfoText}>
                        {confirmation_count}
                      </Typography>
                      <Typography
                        className={styles.helpInfoLabel}
                        variant="body2"
                      >
                        عدد التبليغات بعدم صحيح
                      </Typography>
                      <Typography className={styles.helpInfoText}>
                        {dis_confirmation_count}
                      </Typography>
                    </Grid>
                    <Divider
                      sx={{
                        display: {
                          md: "none",
                          xs: "block",
                        },
                      }}
                      style={{
                        width: "100%",
                        margin: "20px 0",
                      }}
                    />
                  </Grid>
                </div>
                <Divider
                  vertical="true"
                  sx={{
                    display: {
                      md: "block",
                      xs: "none",
                    },
                    height: 300,
                    width: 2,
                    margin: "0 20px",
                    backgroundColor: "#000",
                    opacity: "5%",
                  }}
                />
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={400}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <StarOutlinedIcon color="primary" />
                    <span>عن واضع/واضعة الطلب</span>
                  </Typography>
                  <Grid
                    columns={{
                      md: 6,
                      xs: 12,
                    }}
                    container
                  >
                    <Grid item xs={12} md={3} mt={3}>
                      <Typography
                        className={styles.helpInfoLabel}
                        variant="body2"
                      >
                        الإسم الكامل
                      </Typography>
                      <Typography className={styles.helpInfoText}>
                        {person_name || "لا يوجد"}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} mt={3}>
                      <Typography
                        className={styles.helpInfoLabel}
                        variant="body2"
                      >
                        هل توجد بعين المكان؟{" "}
                      </Typography>
                      <Typography className={styles.helpInfoText}>
                        {in_place ? "نعم" : "لا"}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} mt={3}>
                      <Typography
                        className={styles.helpInfoLabel}
                        variant="body2"
                      >
                        رقم الهاتف{" "}
                      </Typography>
                      <Typography className={styles.helpInfoText}>
                        {contact?.phone_number || "لا يوجد"}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </Box>
            </div>
          </CardContent>
        </Card>
        <DisConfirmButton
          dis_confirmation_count={dis_confirmation_count}
          id={params.id}
        />
        <ConfirmButton confirmation_count={confirmation_count} id={params.id} /> 
        </Container>
    </div>
  );
}
