import Btn from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const CustomizeBtn = styled(Btn)(() => ({
  color: "#2146AF",
  textTransform: "none",

  ":hover": {
    color: "#17327C",
    boxShadow: "none",
  },
}));
