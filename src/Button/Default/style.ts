import Btn from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const CustomizeBtn = styled(Btn)(() => ({
  height: "40px",
  background: "#2146AF",
  boxShadow: "none",
  textTransform: "none",

  ":hover": {
    background: "#17327C",
  },
}));
