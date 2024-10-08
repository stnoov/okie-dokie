import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Grid } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { Menu } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { showSidebar } from "../../actions/sidebar";

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

  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
  hide: {
    display: "none",
  },
  styledFormControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    padding: theme.spacing(0),
    "& :focus": {
      backgroundColor: "white",
    },
  },
  styledToggleButton: {
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    "&.Mui-selected": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
}));

export default function TopBar({ open, locale, setLocale }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { sidebar } = useSelector((state) => state);
  const updateLocale = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };
  const handleDrawerOpen = () => {
    dispatch(showSidebar());
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <IconButton
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(
                  classes.menuButton,
                  sidebar.visible && classes.hide
                )}
              >
                <Menu />
              </IconButton>
            </Grid>
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <ToggleButtonGroup
                    value={locale}
                    exclusive
                    aria-label="text alignment"
                  >
                    <ToggleButton
                      onClick={() => updateLocale("ru")}
                      className={classes.styledToggleButton}
                      aria-label="left aligned"
                      value="ru"
                      selected={locale === "ru" && true}
                    >
                      Русский
                    </ToggleButton>
                    <ToggleButton
                      className={classes.styledToggleButton}
                      selected={locale === "en" && true}
                      onClick={() => updateLocale("en")}
                      value="en"
                      aria-label="left aligned"
                    >
                      English
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
