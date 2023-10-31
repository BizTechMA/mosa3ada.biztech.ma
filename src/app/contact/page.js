// import { Button, FormControl, TextareaAutosize } from "@mui/material";
"use client"
import { ArrowBack } from "@mui/icons-material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ReplyIcon from "@mui/icons-material/Reply";
import {
  Divider,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import "./contactStyle.css";
import React, { useState } from "react";
import { sendToDiscord } from './discordUtils';
// import { sendToFirestore } from './firestoreUtils';
export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendToDiscord(formData);
      // await sendToFirestore(formData)
      alert('تم إرسال الرسالة بنجاح');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.log('Form submission failed:', error);
      alert('خطأ في إرسال الرسالة');
    }
  };

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
            <ArrowBack />
          </Link>
        </Container>
      </div>
      <Image
        src="/mosa3ada.svg"
        alt="Mosa3ada Logo"
        width={200}
        height={120}
        priority
        style={{ margin: "auto" }}
      />
      <div
        style={{
          backgroundColor: "white",
          padding: "25px 20px",
          boxShadow: "0px 8px 30px 0px rgba(0, 0, 0, 0.06)",
          marginBottom: "25px",
        }}
      >
        <Container maxWidth="xl">
          <div className="contact_des" style={{ marginBottom: "1.5rem" }}>
            <Typography variant="h5" className="textArIcone">
              <HelpOutlineIcon style={{ color: "#0E6146" }} />
              من نحن ؟
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ marginTop: "0.5rem", maxWidth: "850px" }}
            >
              مجموعة من الشباب المتخصصين فالمجال التقني إجتمعوا لإنشاء مبادرة
              تطوعية هدفها تسهيل الولوج للمناطق المحتاجة للمساعدة بعد فاجعة
              الزلزال الأخير هي مبادرة مفتوحة المصدر والجميع بإمكانه المشاركة كل
              بتخصصه.
            </Typography>
          </div>

          <Divider variant="middle" />

          <div className="contact_forme" style={{ marginTop: "1.5rem" }}>
            <Typography variant="h5" className="textArIcone">
              <EmailOutlinedIcon style={{ color: "#0E6146" }} />
              راسلنا
            </Typography>

            <form onSubmit={handleFormSubmit}>
              <Stack
                spacing={2}
                style={{ maxWidth: "850px", marginTop: "1rem" }}
              >
                <TextField
                  variant="outlined"
                  type="text"
                  placeholder="الاسم الكامل"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  type="email"
                  placeholder="البريد الاكتروني"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  placeholder="اكتب رسالتك"
                  type="text"
                  variant="outlined"
                  multiline
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
                <Button
                  type="submit"
                  variant="outlined"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                    padding: "10px",
                  }}
                >
                  ارسل
                  <ReplyIcon />
                </Button>
              </Stack>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}
