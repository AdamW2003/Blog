import * as React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material/styles";
import styled from "styled-components";
import styledScrollBar from "../modules/styling/styledScrollBar";
import ReviewCard from "../components/ReviewCard";
import { ArticleContext } from "../data/ArticleContext";
import { useContext } from "react";
import GradeIcon from "@mui/icons-material/Grade";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ArticalMapping from "./ArticalMapping";
import { useState } from "react";
import ShuffleIcon from '@mui/icons-material/Shuffle';

const SideBar = ({ drawerWidth }) => {
  var theme = useTheme();

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

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: theme.colours.beige2,
          ...styledScrollBar(theme),
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography variant="h6" component="div">
          Media Musings
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => toggleSortRating()}>
            <ListItemIcon>
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
            <ListItemIcon>
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
        <ArticalMapping sortDate={sortDate} sortRating={sortRating} />
      </List>
    </Drawer>
  );
};

export default SideBar;
