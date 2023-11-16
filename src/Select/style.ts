import { InputLabel, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomizeSelect = styled(Select)(() => ({
  borderRadius: "4px",
  borderColor: "#B8B9BE",
  color: "#191D2E",
  paddingRight: "16px",

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #2146AF",
  },

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#2146AF",
  },

  "& .MuiSvgIcon-root": {
    color: "#B8B9BE",
  },

  "&.Mui-focused .MuiSvgIcon-root": {
    color: "#2146AF",
  },
}));

export const CustomizeInputLabel = styled(InputLabel)(() => ({
  "&.Mui-focused": {
    color: "#2146AF",
  },
}));

export const CustomizeMenuItem = styled(MenuItem)(() => ({ color: "#474A58" }));
