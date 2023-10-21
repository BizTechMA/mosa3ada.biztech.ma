"use client";
import { ThumbUpAltSharp, ThumbUpOffAlt } from "@mui/icons-material";
import { Button, CircularProgress, Typography } from "@mui/material";
import { Context } from "@/app/helps/help";
import {useContext} from "react";

export const HelpCardConfirmButton = ({
  confirmationCount = 0,
  onConfirm = () => {},
  buttonProps = {},
  isLoading,
  isConfirmed,
  isDisConfirmed,
}) => {
  const [avoid,setAvoid]=useContext(Context);
  return (
    <Button
    disabled={isLoading || isDisConfirmed || avoid}
      style={{
        gap: 9,
      }}
      onClick={onConfirm}
      {...buttonProps}
    >
      {isLoading && <CircularProgress size={15} />}
      {!isLoading && (
        <>{!isConfirmed ? <ThumbUpOffAlt /> : <ThumbUpAltSharp />}</>
      )}
      <Typography component={"span"}>{confirmationCount} تأكيد</Typography>
    </Button>
  );
};
