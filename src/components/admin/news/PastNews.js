import React from "react";
import {
  makeStyles,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { Edit, Delete } from "@material-ui/icons";
import { theme } from "../../../utils/themeConfig";

const useStyles = makeStyles({
  table: {
    marginTop: theme.spacing(0.5),
  },
  styledContainer: {
    marginTop: theme.spacing(2),
  },
});

export default function PastNews() {
  const classes = useStyles();
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
    <TableContainer component={Paper} className={classes.table}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
          {news?.map((el, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {el.title}
              </TableCell>
              <TableCell align="right">
                {new Date(el.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell align="right">
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <IconButton>
                      <Edit />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
}
