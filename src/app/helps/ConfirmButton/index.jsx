import { ThumbUpAltSharp, ThumbUpOffAlt } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { useState } from "react";

export const HelpCardConfirmButton = ({
  help,
  onConfirm = () => {},
  buttonProps = {},
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  return (
    <Button
      style={{
        gap: 9,
      }}
      onClick={() => {
        // ?This is just an example
        setIsConfirmed(!isConfirmed);
      }}
      {...buttonProps}
    >
      {!isConfirmed ? <ThumbUpOffAlt /> : <ThumbUpAltSharp />}

      <Typography component={"span"}>تأكيد 29</Typography>
    </Button>
  );
};
