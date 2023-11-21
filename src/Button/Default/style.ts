import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomizeBtn = styled(Button)(() => ({
  height: "40px",
  boxShadow: "none",
  textTransform: "none",
  color: "whitesmoke",
  fontFamily: "Anek Latin, sans-serif",

  ":hover": {
    boxShadow: "none",
  },
}));
