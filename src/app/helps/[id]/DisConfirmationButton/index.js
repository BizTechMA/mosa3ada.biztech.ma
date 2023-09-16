"use client";
import { useConfirmation } from "@/hooks/useConfimration";
import { ThumbUpAltSharp, ThumbUpOffAlt } from "@mui/icons-material";
import { Button, CircularProgress, Typography } from "@mui/material";

// Confirm button component used in the help details page to confirm the help
export const ConfirmButton = ({ id, dis_confirmation_count, buttonProps = {} }) => {
  const { handleDisConfirmHelp, isLoading, isDisConfirmed } = useConfirmation({
    id,
    dis_confirmation_count,
  });
  return (
    <Button
      onClick={handleDisConfirmHelp}
      color="error"
      variant="contained"
      style={{
        gap: 5,
        marginBottom: 20,
      }}
      sx={{
        width: {
          md: "auto",
          xs: "100%",
        },
      }}
      size="large"
      {...buttonProps}
    >
      {isLoading && (
        <CircularProgress
          style={{
            color: "white",
          }}
          size={15}
        />
      )}
      {!isLoading && (
        <>{!isDisConfirmed ? <ThumbUpOffAlt /> : <ThumbUpAltSharp />}</>
      )}
      <Typography color="white" variant="body3">
        {isDisConfirmed ? "تم التأكيد" : "تأكيد"}
      </Typography>
    </Button>
  );
};
