// A full page loading is importent since we are mostly fetching data on the server
// It helps prevent the UI blinking when the data is loading

import { CircularProgress } from "@mui/material";
import Image from "next/image";

export const FullPageLoading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        src="/mosa3ada.svg"
        alt="Mosa3ada Logo"
        width={220}
        height={120}
        priority
      />
      <CircularProgress
        style={{
          color: "black",
        }}
      />
    </div>
  );
};
