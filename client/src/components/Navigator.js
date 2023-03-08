import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import { ImageList, ImageListItem } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import logo4 from "../assets/logo4.png";

const categories = [
  {
    id: "TaskBar",
    children: [
      {
        id: "Profile",
        icon: <PeopleIcon />,
        to: "/profile",
      },
      { id: "Signup", icon: <SensorOccupiedIcon />, to: "/signup" },
      { id: "Login", icon: <LoginIcon />, to: "/login" },
      { id: "Logout", icon: <LogoutIcon />, to: "/login" },
    ],
  },
];

const item = {
  py: "10px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "#7E1E93ff",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

const itemData = [
  {
    img: "https://image.freepik.com/free-icon/wellness-logo_318-52473.jpg",
    title: "Wellness",
  },
];
export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <Box>
          <ImageList sx={{ width: "25", heigh: "25" }} cols={1}>
            {itemData.map((image, index) => (
              <ImageListItem>
                <img
                  src={logo4}
                  alt="Logo"
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemButton component={Link} to={"/add"}>
            <ListItemIcon>
              <MedicationLiquidIcon />
            </ListItemIcon>
            <ListItemText>Add Medication</ListItemText>
          </ListItemButton>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: " #642073ff" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, to }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton
                  selected={active}
                  sx={item}
                  component={Link}
                  to={to}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ mt: 4 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
