import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];
const menuButton = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Products",
    link: "#products",
  },
  {
    name: "Contact us",
    link: "#contact",
  },
];

function Navbar(props) {
  const { window } = props;
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img
          src="/images/logos/OlwenMainReglogo.png"
          width={180}
          height={60}
          alt="olwen sciences"
        />
      </Typography>
      <Divider />
      <List>
        {menuButton.map((item, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }} href={item.link}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "white"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <div className={styles.mobileViewNavBox}>
              <MenuIcon sx={{ color: "black" }} />
              <img
                src="/images/logos/OlwenMainReglogo.png"
                width={180}
                height={60}
                alt="olwen sciences"
                className={styles.mobileViewLogo}
                onClick={()=>{router.replace('/')}}
              />
            </div>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", marginTop: "6px" },
            }}
            onClick={() => {
              router.replace("/");
            }}
          >
            <img
              src="/images/logos/OlwenMainReglogo.png"
              width={243}
              height={81}
              alt="olwen sciences"
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {menuButton.map((item) => {
              return (
                <Button
                  sx={{ color: "Black", textTransform: "none" }}
                  href={item.link}
                >
                  {item.name}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography></Typography>
      </Box> */}
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
