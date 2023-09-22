import { ArrowBack, CheckCircleRounded } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export const RequestSuccess = () => {
  return (
    <Container
      sx={{
        padding: {
          md: "0 30px",
          xs: 0,
        },
      }}
      maxWidth={"xl"}
    >
      <div
        style={{
          background: "white",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 7,
        }}
      >
        <CheckCircleRounded
          style={{
            fontSize: 190,
          }}
          color="primary"
        />
        <Typography variant="h3">لقد تم إرسال طلبكم</Typography>
        <Link href={"/"}>
          <Button
            style={{
              marginTop: 50,
            }}
            sx={{
              width: {
                xs: "100%",
                md: "auto",
              },
            }}
            variant="outlined"
            size="large"
          >
            الرجوع الى قائمة الطلبات
            <ArrowBack
              style={{
                marginRight: 5,
              }}
            />
          </Button>
        </Link>
      </div>
    </Container>
  );
};
