import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, Grid, Typography } from "@material-ui/core";
import { NotificationImportant, People, Search } from "@material-ui/icons";
import { deepOrange } from "@material-ui/core/colors";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 84,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    justifyContent: "center",
    borderTop: `2px solid ${theme.palette.secondary.main}`,
    borderBottom: "1px solid #E5E5E5",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  styledAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    fontSize: "0.75rem",
  },
}));

export default function TopBar({ handleDrawerOpen, open }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <IconButton color="inherit">
                    <People />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton color="inherit">
                    <Search />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton color="inherit">
                    <NotificationImportant />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton color="inherit">
                    <Avatar className={classes.styledAvatar}>A</Avatar>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
