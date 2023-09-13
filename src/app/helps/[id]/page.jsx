"use client"; // This is a client component 👈🏽
import Link from "next/link";
import { useState, useEffect, use} from "react";

import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

import momentArabic from "../../../utils/momentArabic";
import { selectedIcon } from "../../../utils";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";


export default function HelpPage({ params }) {
  const [help, setHelp] = useState({});
  const { date, needs, city, location, position, address = "", details, confirmation_count = 0 } = help;
  const [helpCount, setHelpCount] = useState(confirmation_count);
  const [ip, setIp] = useState("");

  useEffect( () => {
    fetch(`/api/help/${params.id}`).then(res => res.json()).then(data => {
      setHelp(data);})
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        setIp(data.ip);
      });
    setHelpCount(confirmation_count);
  }, [])

  
  useEffect(() => {
    // make a post request to update the h

    if(helpCount > confirmation_count)
      fetch(`/api/help/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ confirmation_count: helpCount , ip: ip}),
      }).then((res) => res.json()).then(data => {
        if (data.success) {
          alert("تم تأكيد الطلب بنجاح");
        }
        else {
          alert("حدث خطأ ما");
        }
      });

  }, [helpCount]);


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
        <Button
          style={{
            backgroundColor: "#05853f",
            color: "#fff",
          }}
          onClick={() => setHelpCount(helpCount + 1)}
        >
          <Typography
           variant="h6"
           >تأكيد الطلب</Typography>
        </Button>
      </Card>
    </div>
  );
}
