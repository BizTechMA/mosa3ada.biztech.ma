import { ThumbUpAltSharp, ThumbUpOffAlt } from "@mui/icons-material";
import { Button, CircularProgress, Typography } from "@mui/material";

export const HelpCardConfirmButton = ({
  helpCount = 0,
  onConfirm = () => {},
  buttonProps = {},
  isLoading,
  isConfirmed,
}) => {
  return (
    <Button
      disabled={isLoading}
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
      <Typography component={"span"}>{helpCount} تأكيد</Typography>
    </Button>
  );
};
