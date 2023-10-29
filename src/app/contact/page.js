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
import axios from "axios";
import firebase from "firebase/app"; 
import "firebase/firestore";
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'; 
import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
const firebaseApp = initializeApp(firebaseConfig); 

export default function ContactPage() {
  const discordWebhookUrl = process.env.DISCORD_WEB_HOOK_URL;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendToDiscord = async (formData) => {
    try {
      const message = `New contact:
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}`;

      await axios.post(discordWebhookUrl, {
        content: message,
      });

      console.log('Message sent to Discord successfully');
    } catch (error) {
      console.error('Error sending message to Discord:', error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendToDiscord(formData);
      const db = getFirestore(firebaseApp);
      const collectionName = 'contacts';

      await addDoc(collection(db, collectionName), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        // timestamp: serverTimestamp(),
      });

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
