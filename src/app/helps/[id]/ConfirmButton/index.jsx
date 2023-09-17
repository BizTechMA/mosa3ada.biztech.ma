"use client";
import { useConfirmation } from "@/hooks/useConfimration";
import { useDisConfirmation } from "@/hooks/useDisConfirmation";
import { ThumbUpAltSharp, ThumbUpOffAlt } from "@mui/icons-material";
import { Button, CircularProgress, Typography } from "@mui/material";

// Confirm button component used in the help details page to confirm the help
export const ConfirmButton = ({ id, confirmation_count, buttonProps = {} }) => {
  const { handleConfirmHelp, isLoading, isConfirmed } = useConfirmation({
    id,
    confirmation_count,
  });

  const { isDisConfirmed } = useDisConfirmation({
    id
  });
  return (
    <Button
      onClick={handleConfirmHelp}
      color="success"
      variant="contained"
      disabled={isConfirmed || isLoading || isDisConfirmed}
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
        <>{!isConfirmed && <ThumbUpAltSharp />}</>
      )}
      <Typography color="white" variant="body3">
        {isConfirmed ? "تم التأكيد" : "تأكيد"}
      </Typography>
    </Button>
  );
};
