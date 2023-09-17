import { DangerousSharp, DangerousOutlined } from "@mui/icons-material";
import { Button, CircularProgress, Typography } from "@mui/material";

export const HelpCardDisConfirmButton = ({
  disConfirmationCount = 0,
  onDisConfirm = () => {},
  buttonProps = {},
  isLoading,
  isDisConfirmed,
}) => {
  return (
    <Button
      disabled={isLoading}
      style={{
        gap: 6,
      }}
      onClick={onDisConfirm}
      {...buttonProps}
    >
      {isLoading && <CircularProgress size={15} />}
      {!isLoading && (
        <>{!isDisConfirmed ? <DangerousOutlined style={{color: "red"}} /> :  <DangerousSharp style={{color: "red"}} /> }</>
      )}
      <Typography component={"span"}> {disConfirmationCount} غير صحيح</Typography>
    </Button>
  );
};
