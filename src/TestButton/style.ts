import Btn from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const CustomizeBtn = styled(Btn)(({ theme }) => ({
  background: theme.palette.primary.main,
}));
