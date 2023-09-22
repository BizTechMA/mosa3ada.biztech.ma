import { Typography } from "@mui/material";

export const RequestHeader = ({ step }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,
        gap: 10,
      }}
    >
      <step.titleIcon fontSize={"large"} color="primary" />
      <Typography fontWeight={400} variant="h5">
        {step.title}
      </Typography>
    </div>
  );
};
