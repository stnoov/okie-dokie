import React from "react";

import { Grid, AppBar, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Students from "../../components/admin/Students";
const useStyles = makeStyles((theme) => ({
  rootContainer: {
    padding: theme.spacing(5, 3),
  },
  styledTabs: {},
}));

export default function Admin() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container className={classes.rootContainer}>
      <Grid item xs={12}>
        <AppBar
          position="static"
          color="default"
          className={classes.styledTabs}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Ученики" />
            <Tab label="Добавить новость" />
            <Tab label="Добавить урок" />
          </Tabs>
        </AppBar>
      </Grid>
      <Grid item xs={12}>
        <Students />
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}
