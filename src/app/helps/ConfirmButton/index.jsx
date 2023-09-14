import { ThumbUpAltSharp, ThumbUpOffAlt } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { useConfirmation } from "../../../hooks/useConfimration";

export const HelpCardConfirmButton = ({
  helpCount = 0,
  onConfirm = () => {},
  buttonProps = {},
}) => {
  const isConfirmed = helpCount > 0 
  return (
    <Button
      style={{
        gap: 9,
      }}
      onClick={() => {onConfirm(helpCount + 1)}}
      {...buttonProps}
    >
      {!isConfirmed ? <ThumbUpOffAlt /> : <ThumbUpAltSharp />}

      <Typography component={"span"}>{helpCount} تأكيد</Typography>
    </Button>
  );
};
