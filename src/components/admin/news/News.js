import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { theme } from "../../../utils/themeConfig";
import PastNews from "./PastNews";
import AddNewsForm from "./AddNewsForm";

const useStyles = makeStyles({
  styledContainer: {
    marginTop: theme.spacing(2),
  },
});

export default function News() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.styledContainer} spacing={1}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h3">Добавить новость</Typography>
                </Grid>
                <Grid item xs={12}>
                  <AddNewsForm />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="h3">Прошлые новости</Typography>
                </Grid>
                <Grid item xs={12}>
                  <PastNews />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
