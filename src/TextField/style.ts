import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomizeTextField = styled(TextField)(() => ({
  height: "56px",
  borderRadius: "4px",
  borderColor: "#B8B9BE",
  color: "#191D2E",

  "& label.Mui-focused": {
    color: "#2146AF",
  },

  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#2146AF",
    },

    "&.Mui-focused fieldset": {
      border: `1px solid #2146AF`,
    },
  },
}));
