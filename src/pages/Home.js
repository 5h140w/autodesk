import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Viewer from "./Viewer/Viewer";
const Home = () => {
  return (
    <div className="viewer-home">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AUTODESK
          </Typography>
          <Button color="inherit">Update</Button>
        </Toolbar>
      </AppBar>
      <Viewer />
    </div>
  );
};

export default Home;
