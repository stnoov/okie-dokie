import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  MenuList,
  MenuItem,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TopBar from "../topBar/TopBar";
import Routes from "../../config/routes";
import classNames from "classnames";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    border: "none",
  },
  drawerPaper: {
    width: drawerWidth,
    border: "none",
    backgroundColor: theme.palette.primary.dark,
    borderTop: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.common.white,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    height: 74,
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  sideMenuLink: {
    color: theme.palette.common.white,
    textDecoration: "none",
  },
  sideMenuItem: {
    padding: theme.spacing(2),
  },
  coloredLogo: {
    color: "orange",
  },
  selectedMenuItem: {
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "orange",
    },
  },
}));

function SideBar({ width }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? true : false;
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar handleDrawerOpen={handleDrawerOpen} open={open} />
      <Drawer
        className={classes.drawer}
        variant={isWidthDown("sm", width) ? "temporary" : "persistent"}
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid item>
              <Typography variant="h6">
                Okie<span className={classes.coloredLogo}>Dokie</span>
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={handleDrawerClose} color="inherit">
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </Grid>
          </Grid>
        </div>
        <MenuList>
          {Routes.map((prop, key) => {
            return (
              <Link to={prop.path} className={classes.sideMenuLink} key={key}>
                <MenuItem
                  selected={activeRoute(prop.path)}
                  className={classNames(classes.sideMenuItem, {
                    selected: classes.selectedMenuItem,
                  })}
                >
                  <ListItemIcon style={{ color: "inherit" }}>
                    <prop.icon />
                  </ListItemIcon>
                  <ListItemText primary={prop.sidebarName} />
                </MenuItem>
              </Link>
            );
          })}
        </MenuList>
      </Drawer>
    </div>
  );
}

export default withWidth()(SideBar);
