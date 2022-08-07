import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SuccessBottomNavigationAction = styled(BottomNavigationAction)(() => ({
  maxWidth: "100px",
  color: "#000000",
  "& .Mui-selected": {
    color: "#ffffff",
  },
}));

export const SuccessBottomNavigation = styled(BottomNavigation)(() => ({
  width: "100%",
  justifyContent: "flex-start",
  backgroundColor: "inherit",
}));
