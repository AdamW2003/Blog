import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GradeIcon from "@mui/icons-material/Grade";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";
import ArticalMapping from "./ArticalMapping";
import styledScrollBar from "../modules/styling/styledScrollBar"

import * as React from "react";
import ReviewCard from "../components/ReviewCard";
import CollapsedCard from "../components/CollapsedCard";

const openedMixin = (theme) => ({
  backgroundColor: theme.colours.beige2,
  ...styledScrollBar(theme),
  width: theme.drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  backgroundColor: theme.colours.beige2,
  ...styledScrollBar(theme),
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(12)} + 1px)`,
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: theme.drawerWidth,
    width: `calc(100% - ${theme.drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: theme.drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideBar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [sortDate, setSortDate] = useState("newest"); // Default: newest
  const [sortRating, setSortRating] = useState("highest"); // Default: highest

  const toggleSortDate = () => {
    setSortDate(sortDate === "newest" ? "oldest" : "newest");
    setSortRating(null);
  };

  const toggleSortRating = () => {
    setSortRating(sortRating === "highest" ? "lowest" : "highest");
    setSortDate(null);
  };

  var Cards = open ? ReviewCard : CollapsedCard

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open} >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              marginLeft: "0",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Media Musings
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{}}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => toggleSortRating()}>
              <ListItemIcon sx={{paddingLeft: "0.75em"}}>
                <GradeIcon />
              </ListItemIcon>
              <ListItemIcon>
                {sortRating === "highest" || sortRating === null ? (
                  <KeyboardDoubleArrowUpIcon />
                ) : (
                  <KeyboardDoubleArrowDownIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={"Sort by rating"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => toggleSortDate()}>
              <ListItemIcon sx={{paddingLeft: "0.75em"}}>
                <AccessTimeIcon />
              </ListItemIcon>
              <ListItemIcon>
                {sortDate === "newest" || sortDate === null ? (
                  <KeyboardDoubleArrowUpIcon />
                ) : (
                  <KeyboardDoubleArrowDownIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={"Sort by date"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ArticalMapping sortDate={sortDate} sortRating={sortRating} Cards={Cards} />
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
