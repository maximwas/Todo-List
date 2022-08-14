import React, { useEffect, useState } from "react";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";

import { SuccessBottomNavigationAction as BottomNavigationAction, SuccessBottomNavigation as BottomNavigation } from "./styles.jsx";

const Header = () => {
  const [value, setValue] = useState(0);
  const { pathname } = useLocation();
  const [link, setLink] = useState([
    {
      route: "/",
      textRoute: "ToDo List",
    },
    {
      route: "/post",
      textRoute: "Posts",
    },
    {
      route: "/3dmodel",
      textRoute: "3D Model",
    },
  ]);

  useEffect(() => {
    const findIndexPath = link.findIndex((item) => item.route === pathname);
    setValue(findIndexPath);
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {link.map((item) => (
            <BottomNavigationAction component={RouterLink} to={item.route} label={item.textRoute} key={item.route}></BottomNavigationAction>
          ))}
        </BottomNavigation>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
