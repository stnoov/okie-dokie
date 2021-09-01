import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  MenuList,
  MenuItem,
  Grid,
  Typography,
  ListItemText,
  CssBaseline,
  IconButton,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import { useIntl } from "react-intl";
import getRoutes from "../../config/routes";
import { logout } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { hideSidebar } from "../../actions/sidebar";

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
  const intl = useIntl();
  const routes = getRoutes(intl);
  const location = useLocation();
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  const { sidebar } = useSelector((state) => state);
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? true : false;
  };
  const handleDrawerClose = () => {
    dispatch(hideSidebar());
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant={isWidthDown("sm", width) ? "temporary" : "persistent"}
        anchor="left"
        open={sidebar.visible}
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
          {routes.map((prop, key) => {
            return (
              <Link to={prop.path} className={classes.sideMenuLink} key={key}>
                <MenuItem
                  selected={activeRoute(prop.path)}
                  className={classes.sideMenuItem}
                >
                  <IconButton style={{ color: "inherit" }}>
                    <prop.icon />
                  </IconButton>
                  <ListItemText primary={prop.sidebarName} />
                </MenuItem>
              </Link>
            );
          })}
          {currentUser.isAdmin && (
            <Link to="/admin" className={classes.sideMenuLink}>
              <MenuItem
                selected={activeRoute("/admin")}
                className={classes.sideMenuItem}
              >
                <IconButton style={{ color: "inherit" }}>
                  <SupervisorAccountIcon />
                </IconButton>
                <ListItemText primary="Admin panel" />
              </MenuItem>
            </Link>
          )}
          <MenuItem
            onClick={() => handleLogout()}
            className={classes.sideMenuItem}
          >
            <IconButton style={{ color: "inherit" }}>
              <ExitToAppIcon />
            </IconButton>
            <Typography>
              {intl.formatMessage({
                id: "actions.logout",
                defaultMessage: "Logout",
              })}
            </Typography>
          </MenuItem>
        </MenuList>
      </Drawer>
    </div>
  );
}

export default withWidth()(SideBar);
