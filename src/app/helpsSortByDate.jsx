"use client";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

export const HelpsSortByDate = ({ value, setSorting }) => {
  const handleChange = (e) => {
    const val = e.target.value;
    setSorting(val);
  };
  return (
    <Stack direction={"column"} spacing={2}>
      <Box>
        <FormControl
          style={{
            background: "white",
          }}
          sx={{
            width: {
              xs: 150,
            },
          }}
        >
          <InputLabel id="demo-simple-select-autowidth-label">
            تاريخ الطلب
          </InputLabel>

          <Select
            onChange={handleChange}
            labelId="date-sort-select-label"
            id="date-sort-select-label"
            label="تاريخ الطلب"
            value={value}
          >
            <MenuItem value={"asc"}>الأقدم</MenuItem>
            <MenuItem value={"desc"}>الأحدث</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Stack>
  );
};
