import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";

import { NotificationImportant, Menu, Search } from "@material-ui/icons";
import { deepOrange } from "@material-ui/core/colors";
import { useIntl } from "react-intl";
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
  styledFormControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    padding: theme.spacing(0),
    "& :focus": {
      backgroundColor: "white",
    },
  },
}));

export default function TopBar({ handleDrawerOpen, open, locale, setLocale }) {
  const classes = useStyles();
  const intl = useIntl();
  const updateLocale = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };
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
                <Menu />
              </IconButton>
            </Grid>
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <FormControl
                    variant="outlined"
                    className={classes.styledFormControl}
                    size="small"
                  >
                    <InputLabel>
                      {intl.formatMessage({
                        id: "fields.language",
                        defaultMessage: "Language",
                      })}
                    </InputLabel>
                    <Select
                      value={locale}
                      onChange={(e) => updateLocale(e.target.value)}
                      label="Age"
                    >
                      <MenuItem value="en">
                        {intl.formatMessage({
                          id: "language.english",
                          defaultMessage: "English",
                        })}
                      </MenuItem>
                      <MenuItem value="ru">
                        {intl.formatMessage({
                          id: "language.russian",
                          defaultMessage: "Russian",
                        })}
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
