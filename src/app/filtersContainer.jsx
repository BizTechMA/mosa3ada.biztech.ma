import { Stack, Typography } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";

export const FiltersContainer = ({ children }) => {
  return (
    <Stack direction={"column"} spacing={2}>
      <Typography
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          color: "#737373",
        }}
        fontSize={19}
      >
        <TuneIcon />
        <span> تصفية البحث عن الطلب</span>
      </Typography>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 15,
        }}
      >
        {children}
      </div>
    </Stack>
  );
};
