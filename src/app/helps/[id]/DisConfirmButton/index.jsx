"use client";
import { useDisConfirmation } from "@/hooks/useDisConfirmation";
import { useConfirmation } from "@/hooks/useConfimration";
import { Block } from "@mui/icons-material";
import { Button, CircularProgress, Typography } from "@mui/material";

// Confirm button component used in the help details page to confirm the help
export const DisConfirmButton = ({ id, dis_confirmation_count, buttonProps = {} }) => {
  const { handleDisConfirmHelp, isDisConfirmedLoading, isDisConfirmed } = useDisConfirmation({
    id,
    dis_confirmation_count,
  });

  const { isConfirmed } = useConfirmation({
    id
  });

  return (
    <Button
      onClick={handleDisConfirmHelp}
      color="error"
      variant="contained"
      disabled={isDisConfirmed || isDisConfirmedLoading || isConfirmed}
      style={{
        gap: 5,
        marginBottom: 20,
        marginLeft: 60
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
      {isDisConfirmedLoading && (
        <CircularProgress
          style={{
            color: "white",
          }}
          size={15}
        />
      )}
      {!isDisConfirmedLoading && (
        <>{!isDisConfirmed && <Block />}</>
      )}
      <Typography color="white" variant="body3">
        {isDisConfirmed ? "تم الإبلاغ" : "غير صحيح"}
      </Typography>
    </Button>
  );
};
