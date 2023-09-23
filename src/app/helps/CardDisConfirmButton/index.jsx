"use client";
import { DangerousOutlined, DangerousSharp } from "@mui/icons-material";
import { Button, CircularProgress, Typography } from "@mui/material";

export const HelpCardDisConfirmButton = ({
  disConfirmationCount = 0,
  onDisConfirm = () => {},
  buttonProps = {},
  isLoading,
  isDisConfirmed,
  isConfirmed,
}) => {
  return (
    <Button
      disabled={isLoading || isConfirmed}
      style={{
        gap: 6,
      }}
      onClick={onDisConfirm}
      {...buttonProps}
    >
      {isLoading && <CircularProgress size={15} />}
      {!isLoading && (
        <>
          {!isDisConfirmed ? (
            <DangerousOutlined
              style={{ color: isConfirmed ? "gray" : "red" }}
            />
          ) : (
            <DangerousSharp style={{ color: "red" }} />
          )}
        </>
      )}
      <Typography component={"span"}>
        {" "}
        {disConfirmationCount} غير صحيح
      </Typography>
    </Button>
  );
};
