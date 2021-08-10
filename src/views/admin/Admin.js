import React from "react";

import { Grid, AppBar, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Students from "../../components/admin/Students";
import AddNews from "../../components/admin/news/News";
const useStyles = makeStyles((theme) => ({
  rootContainer: {
    padding: theme.spacing(5, 3),
  },
  styledTabs: {},
}));

export default function Admin() {
  const classes = useStyles();
  const [tab, setTab] = React.useState("students");
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };
  const getTabContent = (tabValue) => {
    switch (tabValue) {
      case "studets":
        return <Students />;
      case "add_news":
        return <AddNews />;
      default:
        return <Students />;
    }
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
            value={tab}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Ученики" value="students" />
            <Tab label="Добавить новость" value="add_news" />
            <Tab label="Добавить урок" value="add_lesson" />
          </Tabs>
        </AppBar>
      </Grid>
      <Grid item xs={12}>
        {getTabContent(tab)}
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}
