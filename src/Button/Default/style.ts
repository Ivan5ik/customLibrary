import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// interface ElseColor {
//   variantColor: boolean;
// }

export const CustomizeBtn = styled(Button)(
  /*<ElseColor>*/ (/*{ variantColor }*/) => ({
    //   height: "40px",
    //   background: variantColor ? "#2146AF" : "white",
    //   boxShadow: "none",
    //   textTransform: "none",
    //   fontFamily: "Anek Latin, sans-serif",
    //   color: variantColor ? "white" : "#2146AF",
    //
    //   ":hover": {
    //     background: variantColor ? "#17327C" : "white",
    //     color: variantColor ? "white" : "#17327C",
    //     boxShadow: "none",
    //   },
  })
);
