import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {};

const NavBar = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="title" color="secondary">
        Users
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(NavBar);
