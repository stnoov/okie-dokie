import React from "react";
import { makeStyles, Grid, Typography, withWidth } from "@material-ui/core";
import { useIntl } from "react-intl";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  styledMainGrid: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    borderRadius: 4,
    [theme.breakpoints.down("sm")]: {},
  },
  styledTitle: {},
  styledSubTitle: {
    color: "#0387B7",
  },
  styledInnerContainer: {
    backgroundColor: theme.palette.common.white,
    borderRadius: 4,
  },
  styledNewsBlock: {
    borderRadius: 4,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
  },
  newsContent: {
    padding: theme.spacing(2),
  },
  newsTitle: {
    padding: theme.spacing(2, 2, 0, 2),
  },
}));

function ProfileInfo({ width }) {
  const classes = useStyles();
  const intl = useIntl();
  const [news, setNews] = React.useState();
  const fetchNews = () => {
    axios
      .get("http://localhost:8080/api/news/get_news")
      .then((data) => {
        console.log(data);
        setNews(data.data.news);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(fetchNews, []);
  return (
    <Grid container className={classes.styledMainGrid} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">
          {intl.formatMessage({
            id: "fields.latest_news",
            defaultMessage: "Latest news",
          })}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {news?.map((el) => (
            <Grid item xs={4}>
              <Grid container className={classes.styledNewsBlock}>
                <Grid item xs={12} className={classes.newsTitle}>
                  {el.title}
                </Grid>
                <Grid item xs={12} className={classes.newsContent}>
                  {el.content}
                </Grid>
                <Grid item className={classes.newsContent}>
                  {new Date(el.createdAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default withWidth()(ProfileInfo);
